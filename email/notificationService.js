const { sendNotificationEmail } = require("./emailService");

// 1. Notify student + tutor when allocation happens
async function notifyTutorAllocated(studentEmail, tutorEmail, tutorName) {
  const subject = "eTutoring Notification: Tutor Allocation";

  const studentMessage =
    `Hello,\n\n` +
    `You have been assigned a personal tutor: ${tutorName}.\n\n` +
    `Please log in to the eTutoring system to view details.\n\n` +
    `Regards,\nUniversity eTutoring System`;

  const tutorMessage =
    `Hello,\n\n` +
    `You have been assigned a new personal tutee.\n\n` +
    `Please log in to the eTutoring system to view details.\n\n` +
    `Regards,\nUniversity eTutoring System`;

  await sendNotificationEmail(studentEmail, subject, studentMessage);
  await sendNotificationEmail(tutorEmail, subject, tutorMessage);
}

// 2. Notify tutor about new meeting scheduled
async function notifyMeetingScheduled(tutorEmail, studentName, meetingDate) {
  const subject = "eTutoring Notification: Meeting Scheduled";

  const message =
    `Hello,\n\n` +
    `${studentName} has scheduled a meeting.\n\n` +
    `Meeting Date: ${meetingDate}\n\n` +
    `Please log in to the eTutoring system to view full details.\n\n` +
    `Regards,\nUniversity eTutoring System`;

  await sendNotificationEmail(tutorEmail, subject, message);
}

// 3. Notify student about new uploaded document
async function notifyDocumentUploaded(studentEmail) {
  const subject = "eTutoring Notification: New Document Uploaded";

  const message =
    `Hello,\n\n` +
    `A new document has been uploaded in your eTutoring account.\n\n` +
    `Please log in to view it.\n\n` +
    `Regards,\nUniversity eTutoring System`;

  await sendNotificationEmail(studentEmail, subject, message);
}

module.exports = {
  notifyTutorAllocated,
  notifyMeetingScheduled,
  notifyDocumentUploaded,
};