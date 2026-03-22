import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly UserAllocation: "UserAllocation";
    readonly Message: "Message";
    readonly Meeting: "Meeting";
    readonly File: "File";
    readonly BlogPost: "BlogPost";
    readonly Notification: "Notification";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly user_id: "user_id";
    readonly email: "email";
    readonly password_hash: "password_hash";
    readonly first_name: "first_name";
    readonly last_name: "last_name";
    readonly role: "role";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const UserAllocationScalarFieldEnum: {
    readonly allocation_id: "allocation_id";
    readonly student_id: "student_id";
    readonly tutor_id: "tutor_id";
    readonly allocated_by: "allocated_by";
    readonly allocated_at: "allocated_at";
    readonly is_current: "is_current";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UserAllocationScalarFieldEnum = (typeof UserAllocationScalarFieldEnum)[keyof typeof UserAllocationScalarFieldEnum];
export declare const MessageScalarFieldEnum: {
    readonly message_id: "message_id";
    readonly sender_id: "sender_id";
    readonly receiver_id: "receiver_id";
    readonly content: "content";
    readonly file_id: "file_id";
    readonly sent_at: "sent_at";
    readonly is_read: "is_read";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];
export declare const MeetingScalarFieldEnum: {
    readonly meeting_id: "meeting_id";
    readonly allocation_id: "allocation_id";
    readonly created_by: "created_by";
    readonly meeting_type: "meeting_type";
    readonly scheduled_at: "scheduled_at";
    readonly location: "location";
    readonly link: "link";
    readonly notes: "notes";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type MeetingScalarFieldEnum = (typeof MeetingScalarFieldEnum)[keyof typeof MeetingScalarFieldEnum];
export declare const FileScalarFieldEnum: {
    readonly file_id: "file_id";
    readonly uploaded_by: "uploaded_by";
    readonly title: "title";
    readonly file_type: "file_type";
    readonly file_url: "file_url";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum];
export declare const BlogPostScalarFieldEnum: {
    readonly post_id: "post_id";
    readonly author_id: "author_id";
    readonly title: "title";
    readonly content: "content";
    readonly is_published: "is_published";
    readonly published_at: "published_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly notification_id: "notification_id";
    readonly recipient_id: "recipient_id";
    readonly trigger_event: "trigger_event";
    readonly status: "status";
    readonly sent_at: "sent_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
