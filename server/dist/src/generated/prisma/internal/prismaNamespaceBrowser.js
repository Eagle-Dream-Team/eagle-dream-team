"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.NotificationScalarFieldEnum = exports.BlogPostScalarFieldEnum = exports.FileScalarFieldEnum = exports.MeetingScalarFieldEnum = exports.MessageScalarFieldEnum = exports.UserAllocationScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    UserAllocation: 'UserAllocation',
    Message: 'Message',
    Meeting: 'Meeting',
    File: 'File',
    BlogPost: 'BlogPost',
    Notification: 'Notification'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    user_id: 'user_id',
    email: 'email',
    password_hash: 'password_hash',
    first_name: 'first_name',
    last_name: 'last_name',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.UserAllocationScalarFieldEnum = {
    allocation_id: 'allocation_id',
    student_id: 'student_id',
    tutor_id: 'tutor_id',
    allocated_by: 'allocated_by',
    allocated_at: 'allocated_at',
    is_current: 'is_current',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.MessageScalarFieldEnum = {
    message_id: 'message_id',
    sender_id: 'sender_id',
    receiver_id: 'receiver_id',
    content: 'content',
    file_id: 'file_id',
    sent_at: 'sent_at',
    is_read: 'is_read',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.MeetingScalarFieldEnum = {
    meeting_id: 'meeting_id',
    allocation_id: 'allocation_id',
    created_by: 'created_by',
    meeting_type: 'meeting_type',
    scheduled_at: 'scheduled_at',
    location: 'location',
    link: 'link',
    notes: 'notes',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.FileScalarFieldEnum = {
    file_id: 'file_id',
    uploaded_by: 'uploaded_by',
    title: 'title',
    file_type: 'file_type',
    file_url: 'file_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.BlogPostScalarFieldEnum = {
    post_id: 'post_id',
    author_id: 'author_id',
    title: 'title',
    content: 'content',
    is_published: 'is_published',
    published_at: 'published_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.NotificationScalarFieldEnum = {
    notification_id: 'notification_id',
    recipient_id: 'recipient_id',
    trigger_event: 'trigger_event',
    status: 'status',
    sent_at: 'sent_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map