import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    user_id: string | null;
    email: string | null;
    password_hash: string | null;
    first_name: string | null;
    last_name: string | null;
    role: $Enums.Role | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UserMaxAggregateOutputType = {
    user_id: string | null;
    email: string | null;
    password_hash: string | null;
    first_name: string | null;
    last_name: string | null;
    role: $Enums.Role | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UserCountAggregateOutputType = {
    user_id: number;
    email: number;
    password_hash: number;
    first_name: number;
    last_name: number;
    role: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    user_id?: true;
    email?: true;
    password_hash?: true;
    first_name?: true;
    last_name?: true;
    role?: true;
    created_at?: true;
    updated_at?: true;
};
export type UserMaxAggregateInputType = {
    user_id?: true;
    email?: true;
    password_hash?: true;
    first_name?: true;
    last_name?: true;
    role?: true;
    created_at?: true;
    updated_at?: true;
};
export type UserCountAggregateInputType = {
    user_id?: true;
    email?: true;
    password_hash?: true;
    first_name?: true;
    last_name?: true;
    role?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    user_id: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    user_id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password_hash?: Prisma.StringFilter<"User"> | string;
    first_name?: Prisma.StringFilter<"User"> | string;
    last_name?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    created_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    student_allocations?: Prisma.UserAllocationListRelationFilter;
    tutor_allocations?: Prisma.UserAllocationListRelationFilter;
    staff_allocations?: Prisma.UserAllocationListRelationFilter;
    sent_messages?: Prisma.MessageListRelationFilter;
    received_messages?: Prisma.MessageListRelationFilter;
    meetings_created?: Prisma.MeetingListRelationFilter;
    files_uploaded?: Prisma.FileListRelationFilter;
    blog_posts?: Prisma.BlogPostListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    user_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    student_allocations?: Prisma.UserAllocationOrderByRelationAggregateInput;
    tutor_allocations?: Prisma.UserAllocationOrderByRelationAggregateInput;
    staff_allocations?: Prisma.UserAllocationOrderByRelationAggregateInput;
    sent_messages?: Prisma.MessageOrderByRelationAggregateInput;
    received_messages?: Prisma.MessageOrderByRelationAggregateInput;
    meetings_created?: Prisma.MeetingOrderByRelationAggregateInput;
    files_uploaded?: Prisma.FileOrderByRelationAggregateInput;
    blog_posts?: Prisma.BlogPostOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    password_hash?: Prisma.StringFilter<"User"> | string;
    first_name?: Prisma.StringFilter<"User"> | string;
    last_name?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    created_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    student_allocations?: Prisma.UserAllocationListRelationFilter;
    tutor_allocations?: Prisma.UserAllocationListRelationFilter;
    staff_allocations?: Prisma.UserAllocationListRelationFilter;
    sent_messages?: Prisma.MessageListRelationFilter;
    received_messages?: Prisma.MessageListRelationFilter;
    meetings_created?: Prisma.MeetingListRelationFilter;
    files_uploaded?: Prisma.FileListRelationFilter;
    blog_posts?: Prisma.BlogPostListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
}, "user_id" | "email">;
export type UserOrderByWithAggregationInput = {
    user_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    user_id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password_hash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    first_name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    last_name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_allocations?: Prisma.UserAllocationCreateNestedManyWithoutStudentInput;
    tutor_allocations?: Prisma.UserAllocationCreateNestedManyWithoutTutorInput;
    staff_allocations?: Prisma.UserAllocationCreateNestedManyWithoutStaffInput;
    sent_messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    received_messages?: Prisma.MessageCreateNestedManyWithoutReceiverInput;
    meetings_created?: Prisma.MeetingCreateNestedManyWithoutCreatorInput;
    files_uploaded?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    blog_posts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutStudentInput;
    tutor_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutTutorInput;
    staff_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutStaffInput;
    sent_messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    received_messages?: Prisma.MessageUncheckedCreateNestedManyWithoutReceiverInput;
    meetings_created?: Prisma.MeetingUncheckedCreateNestedManyWithoutCreatorInput;
    files_uploaded?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    blog_posts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserUpdateInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_allocations?: Prisma.UserAllocationUpdateManyWithoutStudentNestedInput;
    tutor_allocations?: Prisma.UserAllocationUpdateManyWithoutTutorNestedInput;
    staff_allocations?: Prisma.UserAllocationUpdateManyWithoutStaffNestedInput;
    sent_messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    received_messages?: Prisma.MessageUpdateManyWithoutReceiverNestedInput;
    meetings_created?: Prisma.MeetingUpdateManyWithoutCreatorNestedInput;
    files_uploaded?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    blog_posts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutStudentNestedInput;
    tutor_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutTutorNestedInput;
    staff_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutStaffNestedInput;
    sent_messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    received_messages?: Prisma.MessageUncheckedUpdateManyWithoutReceiverNestedInput;
    meetings_created?: Prisma.MeetingUncheckedUpdateManyWithoutCreatorNestedInput;
    files_uploaded?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    blog_posts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserCreateManyInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type UserUpdateManyMutationInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutStudent_allocationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStudent_allocationsInput, Prisma.UserUncheckedCreateWithoutStudent_allocationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStudent_allocationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutTutor_allocationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTutor_allocationsInput, Prisma.UserUncheckedCreateWithoutTutor_allocationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTutor_allocationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutStaff_allocationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStaff_allocationsInput, Prisma.UserUncheckedCreateWithoutStaff_allocationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStaff_allocationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutStudent_allocationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStudent_allocationsInput, Prisma.UserUncheckedCreateWithoutStudent_allocationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStudent_allocationsInput;
    upsert?: Prisma.UserUpsertWithoutStudent_allocationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutStudent_allocationsInput, Prisma.UserUpdateWithoutStudent_allocationsInput>, Prisma.UserUncheckedUpdateWithoutStudent_allocationsInput>;
};
export type UserUpdateOneRequiredWithoutTutor_allocationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTutor_allocationsInput, Prisma.UserUncheckedCreateWithoutTutor_allocationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTutor_allocationsInput;
    upsert?: Prisma.UserUpsertWithoutTutor_allocationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutTutor_allocationsInput, Prisma.UserUpdateWithoutTutor_allocationsInput>, Prisma.UserUncheckedUpdateWithoutTutor_allocationsInput>;
};
export type UserUpdateOneRequiredWithoutStaff_allocationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStaff_allocationsInput, Prisma.UserUncheckedCreateWithoutStaff_allocationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStaff_allocationsInput;
    upsert?: Prisma.UserUpsertWithoutStaff_allocationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutStaff_allocationsInput, Prisma.UserUpdateWithoutStaff_allocationsInput>, Prisma.UserUncheckedUpdateWithoutStaff_allocationsInput>;
};
export type UserCreateNestedOneWithoutSent_messagesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSent_messagesInput, Prisma.UserUncheckedCreateWithoutSent_messagesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSent_messagesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutReceived_messagesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReceived_messagesInput, Prisma.UserUncheckedCreateWithoutReceived_messagesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReceived_messagesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSent_messagesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSent_messagesInput, Prisma.UserUncheckedCreateWithoutSent_messagesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSent_messagesInput;
    upsert?: Prisma.UserUpsertWithoutSent_messagesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSent_messagesInput, Prisma.UserUpdateWithoutSent_messagesInput>, Prisma.UserUncheckedUpdateWithoutSent_messagesInput>;
};
export type UserUpdateOneRequiredWithoutReceived_messagesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReceived_messagesInput, Prisma.UserUncheckedCreateWithoutReceived_messagesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReceived_messagesInput;
    upsert?: Prisma.UserUpsertWithoutReceived_messagesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReceived_messagesInput, Prisma.UserUpdateWithoutReceived_messagesInput>, Prisma.UserUncheckedUpdateWithoutReceived_messagesInput>;
};
export type UserCreateNestedOneWithoutMeetings_createdInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMeetings_createdInput, Prisma.UserUncheckedCreateWithoutMeetings_createdInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMeetings_createdInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMeetings_createdNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMeetings_createdInput, Prisma.UserUncheckedCreateWithoutMeetings_createdInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMeetings_createdInput;
    upsert?: Prisma.UserUpsertWithoutMeetings_createdInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMeetings_createdInput, Prisma.UserUpdateWithoutMeetings_createdInput>, Prisma.UserUncheckedUpdateWithoutMeetings_createdInput>;
};
export type UserCreateNestedOneWithoutFiles_uploadedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFiles_uploadedInput, Prisma.UserUncheckedCreateWithoutFiles_uploadedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFiles_uploadedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutFiles_uploadedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFiles_uploadedInput, Prisma.UserUncheckedCreateWithoutFiles_uploadedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFiles_uploadedInput;
    upsert?: Prisma.UserUpsertWithoutFiles_uploadedInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutFiles_uploadedInput, Prisma.UserUpdateWithoutFiles_uploadedInput>, Prisma.UserUncheckedUpdateWithoutFiles_uploadedInput>;
};
export type UserCreateNestedOneWithoutBlog_postsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBlog_postsInput, Prisma.UserUncheckedCreateWithoutBlog_postsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBlog_postsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutBlog_postsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBlog_postsInput, Prisma.UserUncheckedCreateWithoutBlog_postsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBlog_postsInput;
    upsert?: Prisma.UserUpsertWithoutBlog_postsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutBlog_postsInput, Prisma.UserUpdateWithoutBlog_postsInput>, Prisma.UserUncheckedUpdateWithoutBlog_postsInput>;
};
export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, Prisma.UserUpdateWithoutNotificationsInput>, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserCreateWithoutStudent_allocationsInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    tutor_allocations?: Prisma.UserAllocationCreateNestedManyWithoutTutorInput;
    staff_allocations?: Prisma.UserAllocationCreateNestedManyWithoutStaffInput;
    sent_messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    received_messages?: Prisma.MessageCreateNestedManyWithoutReceiverInput;
    meetings_created?: Prisma.MeetingCreateNestedManyWithoutCreatorInput;
    files_uploaded?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    blog_posts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutStudent_allocationsInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    tutor_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutTutorInput;
    staff_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutStaffInput;
    sent_messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    received_messages?: Prisma.MessageUncheckedCreateNestedManyWithoutReceiverInput;
    meetings_created?: Prisma.MeetingUncheckedCreateNestedManyWithoutCreatorInput;
    files_uploaded?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    blog_posts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutStudent_allocationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutStudent_allocationsInput, Prisma.UserUncheckedCreateWithoutStudent_allocationsInput>;
};
export type UserCreateWithoutTutor_allocationsInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_allocations?: Prisma.UserAllocationCreateNestedManyWithoutStudentInput;
    staff_allocations?: Prisma.UserAllocationCreateNestedManyWithoutStaffInput;
    sent_messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    received_messages?: Prisma.MessageCreateNestedManyWithoutReceiverInput;
    meetings_created?: Prisma.MeetingCreateNestedManyWithoutCreatorInput;
    files_uploaded?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    blog_posts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutTutor_allocationsInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutStudentInput;
    staff_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutStaffInput;
    sent_messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    received_messages?: Prisma.MessageUncheckedCreateNestedManyWithoutReceiverInput;
    meetings_created?: Prisma.MeetingUncheckedCreateNestedManyWithoutCreatorInput;
    files_uploaded?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    blog_posts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutTutor_allocationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTutor_allocationsInput, Prisma.UserUncheckedCreateWithoutTutor_allocationsInput>;
};
export type UserCreateWithoutStaff_allocationsInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_allocations?: Prisma.UserAllocationCreateNestedManyWithoutStudentInput;
    tutor_allocations?: Prisma.UserAllocationCreateNestedManyWithoutTutorInput;
    sent_messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    received_messages?: Prisma.MessageCreateNestedManyWithoutReceiverInput;
    meetings_created?: Prisma.MeetingCreateNestedManyWithoutCreatorInput;
    files_uploaded?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    blog_posts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutStaff_allocationsInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutStudentInput;
    tutor_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutTutorInput;
    sent_messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    received_messages?: Prisma.MessageUncheckedCreateNestedManyWithoutReceiverInput;
    meetings_created?: Prisma.MeetingUncheckedCreateNestedManyWithoutCreatorInput;
    files_uploaded?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    blog_posts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutStaff_allocationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutStaff_allocationsInput, Prisma.UserUncheckedCreateWithoutStaff_allocationsInput>;
};
export type UserUpsertWithoutStudent_allocationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutStudent_allocationsInput, Prisma.UserUncheckedUpdateWithoutStudent_allocationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutStudent_allocationsInput, Prisma.UserUncheckedCreateWithoutStudent_allocationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutStudent_allocationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutStudent_allocationsInput, Prisma.UserUncheckedUpdateWithoutStudent_allocationsInput>;
};
export type UserUpdateWithoutStudent_allocationsInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tutor_allocations?: Prisma.UserAllocationUpdateManyWithoutTutorNestedInput;
    staff_allocations?: Prisma.UserAllocationUpdateManyWithoutStaffNestedInput;
    sent_messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    received_messages?: Prisma.MessageUpdateManyWithoutReceiverNestedInput;
    meetings_created?: Prisma.MeetingUpdateManyWithoutCreatorNestedInput;
    files_uploaded?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    blog_posts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutStudent_allocationsInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tutor_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutTutorNestedInput;
    staff_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutStaffNestedInput;
    sent_messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    received_messages?: Prisma.MessageUncheckedUpdateManyWithoutReceiverNestedInput;
    meetings_created?: Prisma.MeetingUncheckedUpdateManyWithoutCreatorNestedInput;
    files_uploaded?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    blog_posts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserUpsertWithoutTutor_allocationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutTutor_allocationsInput, Prisma.UserUncheckedUpdateWithoutTutor_allocationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTutor_allocationsInput, Prisma.UserUncheckedCreateWithoutTutor_allocationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutTutor_allocationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTutor_allocationsInput, Prisma.UserUncheckedUpdateWithoutTutor_allocationsInput>;
};
export type UserUpdateWithoutTutor_allocationsInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_allocations?: Prisma.UserAllocationUpdateManyWithoutStudentNestedInput;
    staff_allocations?: Prisma.UserAllocationUpdateManyWithoutStaffNestedInput;
    sent_messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    received_messages?: Prisma.MessageUpdateManyWithoutReceiverNestedInput;
    meetings_created?: Prisma.MeetingUpdateManyWithoutCreatorNestedInput;
    files_uploaded?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    blog_posts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutTutor_allocationsInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutStudentNestedInput;
    staff_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutStaffNestedInput;
    sent_messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    received_messages?: Prisma.MessageUncheckedUpdateManyWithoutReceiverNestedInput;
    meetings_created?: Prisma.MeetingUncheckedUpdateManyWithoutCreatorNestedInput;
    files_uploaded?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    blog_posts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserUpsertWithoutStaff_allocationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutStaff_allocationsInput, Prisma.UserUncheckedUpdateWithoutStaff_allocationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutStaff_allocationsInput, Prisma.UserUncheckedCreateWithoutStaff_allocationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutStaff_allocationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutStaff_allocationsInput, Prisma.UserUncheckedUpdateWithoutStaff_allocationsInput>;
};
export type UserUpdateWithoutStaff_allocationsInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_allocations?: Prisma.UserAllocationUpdateManyWithoutStudentNestedInput;
    tutor_allocations?: Prisma.UserAllocationUpdateManyWithoutTutorNestedInput;
    sent_messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    received_messages?: Prisma.MessageUpdateManyWithoutReceiverNestedInput;
    meetings_created?: Prisma.MeetingUpdateManyWithoutCreatorNestedInput;
    files_uploaded?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    blog_posts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutStaff_allocationsInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutStudentNestedInput;
    tutor_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutTutorNestedInput;
    sent_messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    received_messages?: Prisma.MessageUncheckedUpdateManyWithoutReceiverNestedInput;
    meetings_created?: Prisma.MeetingUncheckedUpdateManyWithoutCreatorNestedInput;
    files_uploaded?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    blog_posts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserCreateWithoutSent_messagesInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_allocations?: Prisma.UserAllocationCreateNestedManyWithoutStudentInput;
    tutor_allocations?: Prisma.UserAllocationCreateNestedManyWithoutTutorInput;
    staff_allocations?: Prisma.UserAllocationCreateNestedManyWithoutStaffInput;
    received_messages?: Prisma.MessageCreateNestedManyWithoutReceiverInput;
    meetings_created?: Prisma.MeetingCreateNestedManyWithoutCreatorInput;
    files_uploaded?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    blog_posts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutSent_messagesInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutStudentInput;
    tutor_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutTutorInput;
    staff_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutStaffInput;
    received_messages?: Prisma.MessageUncheckedCreateNestedManyWithoutReceiverInput;
    meetings_created?: Prisma.MeetingUncheckedCreateNestedManyWithoutCreatorInput;
    files_uploaded?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    blog_posts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutSent_messagesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSent_messagesInput, Prisma.UserUncheckedCreateWithoutSent_messagesInput>;
};
export type UserCreateWithoutReceived_messagesInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_allocations?: Prisma.UserAllocationCreateNestedManyWithoutStudentInput;
    tutor_allocations?: Prisma.UserAllocationCreateNestedManyWithoutTutorInput;
    staff_allocations?: Prisma.UserAllocationCreateNestedManyWithoutStaffInput;
    sent_messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    meetings_created?: Prisma.MeetingCreateNestedManyWithoutCreatorInput;
    files_uploaded?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    blog_posts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutReceived_messagesInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutStudentInput;
    tutor_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutTutorInput;
    staff_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutStaffInput;
    sent_messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    meetings_created?: Prisma.MeetingUncheckedCreateNestedManyWithoutCreatorInput;
    files_uploaded?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    blog_posts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutReceived_messagesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReceived_messagesInput, Prisma.UserUncheckedCreateWithoutReceived_messagesInput>;
};
export type UserUpsertWithoutSent_messagesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSent_messagesInput, Prisma.UserUncheckedUpdateWithoutSent_messagesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSent_messagesInput, Prisma.UserUncheckedCreateWithoutSent_messagesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSent_messagesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSent_messagesInput, Prisma.UserUncheckedUpdateWithoutSent_messagesInput>;
};
export type UserUpdateWithoutSent_messagesInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_allocations?: Prisma.UserAllocationUpdateManyWithoutStudentNestedInput;
    tutor_allocations?: Prisma.UserAllocationUpdateManyWithoutTutorNestedInput;
    staff_allocations?: Prisma.UserAllocationUpdateManyWithoutStaffNestedInput;
    received_messages?: Prisma.MessageUpdateManyWithoutReceiverNestedInput;
    meetings_created?: Prisma.MeetingUpdateManyWithoutCreatorNestedInput;
    files_uploaded?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    blog_posts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutSent_messagesInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutStudentNestedInput;
    tutor_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutTutorNestedInput;
    staff_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutStaffNestedInput;
    received_messages?: Prisma.MessageUncheckedUpdateManyWithoutReceiverNestedInput;
    meetings_created?: Prisma.MeetingUncheckedUpdateManyWithoutCreatorNestedInput;
    files_uploaded?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    blog_posts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserUpsertWithoutReceived_messagesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReceived_messagesInput, Prisma.UserUncheckedUpdateWithoutReceived_messagesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReceived_messagesInput, Prisma.UserUncheckedCreateWithoutReceived_messagesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReceived_messagesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReceived_messagesInput, Prisma.UserUncheckedUpdateWithoutReceived_messagesInput>;
};
export type UserUpdateWithoutReceived_messagesInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_allocations?: Prisma.UserAllocationUpdateManyWithoutStudentNestedInput;
    tutor_allocations?: Prisma.UserAllocationUpdateManyWithoutTutorNestedInput;
    staff_allocations?: Prisma.UserAllocationUpdateManyWithoutStaffNestedInput;
    sent_messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    meetings_created?: Prisma.MeetingUpdateManyWithoutCreatorNestedInput;
    files_uploaded?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    blog_posts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutReceived_messagesInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutStudentNestedInput;
    tutor_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutTutorNestedInput;
    staff_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutStaffNestedInput;
    sent_messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    meetings_created?: Prisma.MeetingUncheckedUpdateManyWithoutCreatorNestedInput;
    files_uploaded?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    blog_posts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserCreateWithoutMeetings_createdInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_allocations?: Prisma.UserAllocationCreateNestedManyWithoutStudentInput;
    tutor_allocations?: Prisma.UserAllocationCreateNestedManyWithoutTutorInput;
    staff_allocations?: Prisma.UserAllocationCreateNestedManyWithoutStaffInput;
    sent_messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    received_messages?: Prisma.MessageCreateNestedManyWithoutReceiverInput;
    files_uploaded?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    blog_posts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutMeetings_createdInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutStudentInput;
    tutor_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutTutorInput;
    staff_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutStaffInput;
    sent_messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    received_messages?: Prisma.MessageUncheckedCreateNestedManyWithoutReceiverInput;
    files_uploaded?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    blog_posts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutMeetings_createdInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMeetings_createdInput, Prisma.UserUncheckedCreateWithoutMeetings_createdInput>;
};
export type UserUpsertWithoutMeetings_createdInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMeetings_createdInput, Prisma.UserUncheckedUpdateWithoutMeetings_createdInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMeetings_createdInput, Prisma.UserUncheckedCreateWithoutMeetings_createdInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMeetings_createdInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMeetings_createdInput, Prisma.UserUncheckedUpdateWithoutMeetings_createdInput>;
};
export type UserUpdateWithoutMeetings_createdInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_allocations?: Prisma.UserAllocationUpdateManyWithoutStudentNestedInput;
    tutor_allocations?: Prisma.UserAllocationUpdateManyWithoutTutorNestedInput;
    staff_allocations?: Prisma.UserAllocationUpdateManyWithoutStaffNestedInput;
    sent_messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    received_messages?: Prisma.MessageUpdateManyWithoutReceiverNestedInput;
    files_uploaded?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    blog_posts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutMeetings_createdInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutStudentNestedInput;
    tutor_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutTutorNestedInput;
    staff_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutStaffNestedInput;
    sent_messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    received_messages?: Prisma.MessageUncheckedUpdateManyWithoutReceiverNestedInput;
    files_uploaded?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    blog_posts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserCreateWithoutFiles_uploadedInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_allocations?: Prisma.UserAllocationCreateNestedManyWithoutStudentInput;
    tutor_allocations?: Prisma.UserAllocationCreateNestedManyWithoutTutorInput;
    staff_allocations?: Prisma.UserAllocationCreateNestedManyWithoutStaffInput;
    sent_messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    received_messages?: Prisma.MessageCreateNestedManyWithoutReceiverInput;
    meetings_created?: Prisma.MeetingCreateNestedManyWithoutCreatorInput;
    blog_posts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutFiles_uploadedInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutStudentInput;
    tutor_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutTutorInput;
    staff_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutStaffInput;
    sent_messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    received_messages?: Prisma.MessageUncheckedCreateNestedManyWithoutReceiverInput;
    meetings_created?: Prisma.MeetingUncheckedCreateNestedManyWithoutCreatorInput;
    blog_posts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutFiles_uploadedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFiles_uploadedInput, Prisma.UserUncheckedCreateWithoutFiles_uploadedInput>;
};
export type UserUpsertWithoutFiles_uploadedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutFiles_uploadedInput, Prisma.UserUncheckedUpdateWithoutFiles_uploadedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFiles_uploadedInput, Prisma.UserUncheckedCreateWithoutFiles_uploadedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutFiles_uploadedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFiles_uploadedInput, Prisma.UserUncheckedUpdateWithoutFiles_uploadedInput>;
};
export type UserUpdateWithoutFiles_uploadedInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_allocations?: Prisma.UserAllocationUpdateManyWithoutStudentNestedInput;
    tutor_allocations?: Prisma.UserAllocationUpdateManyWithoutTutorNestedInput;
    staff_allocations?: Prisma.UserAllocationUpdateManyWithoutStaffNestedInput;
    sent_messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    received_messages?: Prisma.MessageUpdateManyWithoutReceiverNestedInput;
    meetings_created?: Prisma.MeetingUpdateManyWithoutCreatorNestedInput;
    blog_posts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutFiles_uploadedInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutStudentNestedInput;
    tutor_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutTutorNestedInput;
    staff_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutStaffNestedInput;
    sent_messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    received_messages?: Prisma.MessageUncheckedUpdateManyWithoutReceiverNestedInput;
    meetings_created?: Prisma.MeetingUncheckedUpdateManyWithoutCreatorNestedInput;
    blog_posts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserCreateWithoutBlog_postsInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_allocations?: Prisma.UserAllocationCreateNestedManyWithoutStudentInput;
    tutor_allocations?: Prisma.UserAllocationCreateNestedManyWithoutTutorInput;
    staff_allocations?: Prisma.UserAllocationCreateNestedManyWithoutStaffInput;
    sent_messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    received_messages?: Prisma.MessageCreateNestedManyWithoutReceiverInput;
    meetings_created?: Prisma.MeetingCreateNestedManyWithoutCreatorInput;
    files_uploaded?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutBlog_postsInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutStudentInput;
    tutor_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutTutorInput;
    staff_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutStaffInput;
    sent_messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    received_messages?: Prisma.MessageUncheckedCreateNestedManyWithoutReceiverInput;
    meetings_created?: Prisma.MeetingUncheckedCreateNestedManyWithoutCreatorInput;
    files_uploaded?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutBlog_postsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutBlog_postsInput, Prisma.UserUncheckedCreateWithoutBlog_postsInput>;
};
export type UserUpsertWithoutBlog_postsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutBlog_postsInput, Prisma.UserUncheckedUpdateWithoutBlog_postsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutBlog_postsInput, Prisma.UserUncheckedCreateWithoutBlog_postsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutBlog_postsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutBlog_postsInput, Prisma.UserUncheckedUpdateWithoutBlog_postsInput>;
};
export type UserUpdateWithoutBlog_postsInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_allocations?: Prisma.UserAllocationUpdateManyWithoutStudentNestedInput;
    tutor_allocations?: Prisma.UserAllocationUpdateManyWithoutTutorNestedInput;
    staff_allocations?: Prisma.UserAllocationUpdateManyWithoutStaffNestedInput;
    sent_messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    received_messages?: Prisma.MessageUpdateManyWithoutReceiverNestedInput;
    meetings_created?: Prisma.MeetingUpdateManyWithoutCreatorNestedInput;
    files_uploaded?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutBlog_postsInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutStudentNestedInput;
    tutor_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutTutorNestedInput;
    staff_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutStaffNestedInput;
    sent_messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    received_messages?: Prisma.MessageUncheckedUpdateManyWithoutReceiverNestedInput;
    meetings_created?: Prisma.MeetingUncheckedUpdateManyWithoutCreatorNestedInput;
    files_uploaded?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserCreateWithoutNotificationsInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_allocations?: Prisma.UserAllocationCreateNestedManyWithoutStudentInput;
    tutor_allocations?: Prisma.UserAllocationCreateNestedManyWithoutTutorInput;
    staff_allocations?: Prisma.UserAllocationCreateNestedManyWithoutStaffInput;
    sent_messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    received_messages?: Prisma.MessageCreateNestedManyWithoutReceiverInput;
    meetings_created?: Prisma.MeetingCreateNestedManyWithoutCreatorInput;
    files_uploaded?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    blog_posts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
};
export type UserUncheckedCreateWithoutNotificationsInput = {
    user_id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutStudentInput;
    tutor_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutTutorInput;
    staff_allocations?: Prisma.UserAllocationUncheckedCreateNestedManyWithoutStaffInput;
    sent_messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    received_messages?: Prisma.MessageUncheckedCreateNestedManyWithoutReceiverInput;
    meetings_created?: Prisma.MeetingUncheckedCreateNestedManyWithoutCreatorInput;
    files_uploaded?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    blog_posts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
};
export type UserCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
};
export type UserUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserUpdateWithoutNotificationsInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_allocations?: Prisma.UserAllocationUpdateManyWithoutStudentNestedInput;
    tutor_allocations?: Prisma.UserAllocationUpdateManyWithoutTutorNestedInput;
    staff_allocations?: Prisma.UserAllocationUpdateManyWithoutStaffNestedInput;
    sent_messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    received_messages?: Prisma.MessageUpdateManyWithoutReceiverNestedInput;
    meetings_created?: Prisma.MeetingUpdateManyWithoutCreatorNestedInput;
    files_uploaded?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    blog_posts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutStudentNestedInput;
    tutor_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutTutorNestedInput;
    staff_allocations?: Prisma.UserAllocationUncheckedUpdateManyWithoutStaffNestedInput;
    sent_messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    received_messages?: Prisma.MessageUncheckedUpdateManyWithoutReceiverNestedInput;
    meetings_created?: Prisma.MeetingUncheckedUpdateManyWithoutCreatorNestedInput;
    files_uploaded?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    blog_posts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
};
export type UserCountOutputType = {
    student_allocations: number;
    tutor_allocations: number;
    staff_allocations: number;
    sent_messages: number;
    received_messages: number;
    meetings_created: number;
    files_uploaded: number;
    blog_posts: number;
    notifications: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student_allocations?: boolean | UserCountOutputTypeCountStudent_allocationsArgs;
    tutor_allocations?: boolean | UserCountOutputTypeCountTutor_allocationsArgs;
    staff_allocations?: boolean | UserCountOutputTypeCountStaff_allocationsArgs;
    sent_messages?: boolean | UserCountOutputTypeCountSent_messagesArgs;
    received_messages?: boolean | UserCountOutputTypeCountReceived_messagesArgs;
    meetings_created?: boolean | UserCountOutputTypeCountMeetings_createdArgs;
    files_uploaded?: boolean | UserCountOutputTypeCountFiles_uploadedArgs;
    blog_posts?: boolean | UserCountOutputTypeCountBlog_postsArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountStudent_allocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserAllocationWhereInput;
};
export type UserCountOutputTypeCountTutor_allocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserAllocationWhereInput;
};
export type UserCountOutputTypeCountStaff_allocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserAllocationWhereInput;
};
export type UserCountOutputTypeCountSent_messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
};
export type UserCountOutputTypeCountReceived_messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
};
export type UserCountOutputTypeCountMeetings_createdArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MeetingWhereInput;
};
export type UserCountOutputTypeCountFiles_uploadedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileWhereInput;
};
export type UserCountOutputTypeCountBlog_postsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogPostWhereInput;
};
export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    role?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    student_allocations?: boolean | Prisma.User$student_allocationsArgs<ExtArgs>;
    tutor_allocations?: boolean | Prisma.User$tutor_allocationsArgs<ExtArgs>;
    staff_allocations?: boolean | Prisma.User$staff_allocationsArgs<ExtArgs>;
    sent_messages?: boolean | Prisma.User$sent_messagesArgs<ExtArgs>;
    received_messages?: boolean | Prisma.User$received_messagesArgs<ExtArgs>;
    meetings_created?: boolean | Prisma.User$meetings_createdArgs<ExtArgs>;
    files_uploaded?: boolean | Prisma.User$files_uploadedArgs<ExtArgs>;
    blog_posts?: boolean | Prisma.User$blog_postsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    role?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    role?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    user_id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    role?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"user_id" | "email" | "password_hash" | "first_name" | "last_name" | "role" | "created_at" | "updated_at", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student_allocations?: boolean | Prisma.User$student_allocationsArgs<ExtArgs>;
    tutor_allocations?: boolean | Prisma.User$tutor_allocationsArgs<ExtArgs>;
    staff_allocations?: boolean | Prisma.User$staff_allocationsArgs<ExtArgs>;
    sent_messages?: boolean | Prisma.User$sent_messagesArgs<ExtArgs>;
    received_messages?: boolean | Prisma.User$received_messagesArgs<ExtArgs>;
    meetings_created?: boolean | Prisma.User$meetings_createdArgs<ExtArgs>;
    files_uploaded?: boolean | Prisma.User$files_uploadedArgs<ExtArgs>;
    blog_posts?: boolean | Prisma.User$blog_postsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        student_allocations: Prisma.$UserAllocationPayload<ExtArgs>[];
        tutor_allocations: Prisma.$UserAllocationPayload<ExtArgs>[];
        staff_allocations: Prisma.$UserAllocationPayload<ExtArgs>[];
        sent_messages: Prisma.$MessagePayload<ExtArgs>[];
        received_messages: Prisma.$MessagePayload<ExtArgs>[];
        meetings_created: Prisma.$MeetingPayload<ExtArgs>[];
        files_uploaded: Prisma.$FilePayload<ExtArgs>[];
        blog_posts: Prisma.$BlogPostPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        user_id: string;
        email: string;
        password_hash: string;
        first_name: string;
        last_name: string;
        role: $Enums.Role;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student_allocations<T extends Prisma.User$student_allocationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$student_allocationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tutor_allocations<T extends Prisma.User$tutor_allocationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$tutor_allocationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    staff_allocations<T extends Prisma.User$staff_allocationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$staff_allocationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sent_messages<T extends Prisma.User$sent_messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sent_messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    received_messages<T extends Prisma.User$received_messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$received_messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    meetings_created<T extends Prisma.User$meetings_createdArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$meetings_createdArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    files_uploaded<T extends Prisma.User$files_uploadedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$files_uploadedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    blog_posts<T extends Prisma.User$blog_postsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$blog_postsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.User$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly user_id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password_hash: Prisma.FieldRef<"User", 'String'>;
    readonly first_name: Prisma.FieldRef<"User", 'String'>;
    readonly last_name: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly created_at: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$student_allocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserAllocationSelect<ExtArgs> | null;
    omit?: Prisma.UserAllocationOmit<ExtArgs> | null;
    include?: Prisma.UserAllocationInclude<ExtArgs> | null;
    where?: Prisma.UserAllocationWhereInput;
    orderBy?: Prisma.UserAllocationOrderByWithRelationInput | Prisma.UserAllocationOrderByWithRelationInput[];
    cursor?: Prisma.UserAllocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserAllocationScalarFieldEnum | Prisma.UserAllocationScalarFieldEnum[];
};
export type User$tutor_allocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserAllocationSelect<ExtArgs> | null;
    omit?: Prisma.UserAllocationOmit<ExtArgs> | null;
    include?: Prisma.UserAllocationInclude<ExtArgs> | null;
    where?: Prisma.UserAllocationWhereInput;
    orderBy?: Prisma.UserAllocationOrderByWithRelationInput | Prisma.UserAllocationOrderByWithRelationInput[];
    cursor?: Prisma.UserAllocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserAllocationScalarFieldEnum | Prisma.UserAllocationScalarFieldEnum[];
};
export type User$staff_allocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserAllocationSelect<ExtArgs> | null;
    omit?: Prisma.UserAllocationOmit<ExtArgs> | null;
    include?: Prisma.UserAllocationInclude<ExtArgs> | null;
    where?: Prisma.UserAllocationWhereInput;
    orderBy?: Prisma.UserAllocationOrderByWithRelationInput | Prisma.UserAllocationOrderByWithRelationInput[];
    cursor?: Prisma.UserAllocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserAllocationScalarFieldEnum | Prisma.UserAllocationScalarFieldEnum[];
};
export type User$sent_messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
export type User$received_messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
export type User$meetings_createdArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelect<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    include?: Prisma.MeetingInclude<ExtArgs> | null;
    where?: Prisma.MeetingWhereInput;
    orderBy?: Prisma.MeetingOrderByWithRelationInput | Prisma.MeetingOrderByWithRelationInput[];
    cursor?: Prisma.MeetingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MeetingScalarFieldEnum | Prisma.MeetingScalarFieldEnum[];
};
export type User$files_uploadedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    where?: Prisma.FileWhereInput;
    orderBy?: Prisma.FileOrderByWithRelationInput | Prisma.FileOrderByWithRelationInput[];
    cursor?: Prisma.FileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FileScalarFieldEnum | Prisma.FileScalarFieldEnum[];
};
export type User$blog_postsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
    where?: Prisma.BlogPostWhereInput;
    orderBy?: Prisma.BlogPostOrderByWithRelationInput | Prisma.BlogPostOrderByWithRelationInput[];
    cursor?: Prisma.BlogPostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlogPostScalarFieldEnum | Prisma.BlogPostScalarFieldEnum[];
};
export type User$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
