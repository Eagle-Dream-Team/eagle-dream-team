export declare const Role: {
    readonly student: "student";
    readonly tutor: "tutor";
    readonly staff: "staff";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const MeetingType: {
    readonly in_person: "in_person";
    readonly virtual: "virtual";
};
export type MeetingType = (typeof MeetingType)[keyof typeof MeetingType];
export declare const FileType: {
    readonly mp4: "mp4";
    readonly mp3: "mp3";
    readonly pdf: "pdf";
    readonly pptx: "pptx";
    readonly recording: "recording";
};
export type FileType = (typeof FileType)[keyof typeof FileType];
export declare const NotificationStatus: {
    readonly sent: "sent";
    readonly failed: "failed";
};
export type NotificationStatus = (typeof NotificationStatus)[keyof typeof NotificationStatus];
