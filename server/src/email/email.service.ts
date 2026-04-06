// src/email/email.service.ts
import { Injectable, Logger } from '@nestjs/common';

import sgMail from '@sendgrid/mail';

// Declare process.env so TypeScript stops complaining
declare const process: {
  env: {
    SENDGRID_API_KEY: string;
    SENDGRID_FROM_EMAIL: string;
    [key: string]: string | undefined;
  };
};

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  constructor() {
    if (!process.env.SENDGRID_API_KEY) {
      throw new Error('SENDGRID_API_KEY not set in environment');
    }
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  // Generic email sender
  public async sendEmail(
    to: string,
    subject: string,
    text: string,
  ): Promise<boolean> {
    const msg = {
      to,
      from: process.env.SENDGRID_FROM_EMAIL as string,
      subject,
      text,
      trackingSettings: {
        clickTracking: {
          enable: false,
          enableText: false,
        },
      },
    };

    try {
      await sgMail.send(msg);
      this.logger.log(`Email sent to: ${to}`);
      return true;
    } catch (error: any) {
      const errMsg = error.response?.body || error.message || 'Unknown error';
      this.logger.error(`SendGrid email failed: ${errMsg}`);
      return false;
    }
  }

  // 1️⃣ Notify student + tutor when allocation happens
  async notifyTutorAllocated(
    studentEmail: string,
    tutorEmail: string,
    tutorName: string,
  ) {
    const subject = 'eTutoring Notification: Tutor Allocation';

    const studentMessage = `Hello,

You have been assigned a personal tutor: ${tutorName}.

Please log in to the eTutoring system to view details.

Regards,
University eTutoring System`;

    const tutorMessage = `Hello,

You have been assigned a new personal tutee.

Please log in to the eTutoring system to view details.

Regards,
University eTutoring System`;

    await this.sendEmail(studentEmail, subject, studentMessage);
    await this.sendEmail(tutorEmail, subject, tutorMessage);
  }

  // 2️⃣ Notify tutor about new meeting scheduled
  async notifyMeetingScheduled(
    tutorEmail: string,
    studentName: string,
    meetingDate: string,
  ) {
    const subject = 'eTutoring Notification: Meeting Scheduled';
    const message = `Hello,

${studentName} has scheduled a meeting.

Meeting Date: ${meetingDate}

Please log in to the eTutoring system to view full details.

Regards,
University eTutoring System`;

    await this.sendEmail(tutorEmail, subject, message);
  }

  // 3️⃣ Notify student about new uploaded document
  async notifyDocumentUploaded(studentEmail: string) {
    const subject = 'eTutoring Notification: New Document Uploaded';
    const message = `Hello,

A new document has been uploaded in your eTutoring account.

Please log in to view it.

Regards,
University eTutoring System`;

    await this.sendEmail(studentEmail, subject, message);
  }

  // 🔹 Test method
  async test(message: string): Promise<string> {
    return `Test message: ${message}`;
  }
}
