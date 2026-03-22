import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MessageModel = runtime.Types.Result.DefaultSelection<Prisma.$MessagePayload>;
export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null;
    _avg: MessageAvgAggregateOutputType | null;
    _sum: MessageSumAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
};
export type MessageAvgAggregateOutputType = {
    message_id: number | null;
    file_id: number | null;
};
export type MessageSumAggregateOutputType = {
    message_id: number | null;
    file_id: number | null;
};
export type MessageMinAggregateOutputType = {
    message_id: number | null;
    sender_id: string | null;
    receiver_id: string | null;
    content: string | null;
    file_id: number | null;
    sent_at: Date | null;
    is_read: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type MessageMaxAggregateOutputType = {
    message_id: number | null;
    sender_id: string | null;
    receiver_id: string | null;
    content: string | null;
    file_id: number | null;
    sent_at: Date | null;
    is_read: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type MessageCountAggregateOutputType = {
    message_id: number;
    sender_id: number;
    receiver_id: number;
    content: number;
    file_id: number;
    sent_at: number;
    is_read: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type MessageAvgAggregateInputType = {
    message_id?: true;
    file_id?: true;
};
export type MessageSumAggregateInputType = {
    message_id?: true;
    file_id?: true;
};
export type MessageMinAggregateInputType = {
    message_id?: true;
    sender_id?: true;
    receiver_id?: true;
    content?: true;
    file_id?: true;
    sent_at?: true;
    is_read?: true;
    created_at?: true;
    updated_at?: true;
};
export type MessageMaxAggregateInputType = {
    message_id?: true;
    sender_id?: true;
    receiver_id?: true;
    content?: true;
    file_id?: true;
    sent_at?: true;
    is_read?: true;
    created_at?: true;
    updated_at?: true;
};
export type MessageCountAggregateInputType = {
    message_id?: true;
    sender_id?: true;
    receiver_id?: true;
    content?: true;
    file_id?: true;
    sent_at?: true;
    is_read?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type MessageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MessageCountAggregateInputType;
    _avg?: MessageAvgAggregateInputType;
    _sum?: MessageSumAggregateInputType;
    _min?: MessageMinAggregateInputType;
    _max?: MessageMaxAggregateInputType;
};
export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
    [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMessage[P]> : Prisma.GetScalarType<T[P], AggregateMessage[P]>;
};
export type MessageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithAggregationInput | Prisma.MessageOrderByWithAggregationInput[];
    by: Prisma.MessageScalarFieldEnum[] | Prisma.MessageScalarFieldEnum;
    having?: Prisma.MessageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessageCountAggregateInputType | true;
    _avg?: MessageAvgAggregateInputType;
    _sum?: MessageSumAggregateInputType;
    _min?: MessageMinAggregateInputType;
    _max?: MessageMaxAggregateInputType;
};
export type MessageGroupByOutputType = {
    message_id: number;
    sender_id: string;
    receiver_id: string;
    content: string;
    file_id: number | null;
    sent_at: Date;
    is_read: boolean;
    created_at: Date;
    updated_at: Date;
    _count: MessageCountAggregateOutputType | null;
    _avg: MessageAvgAggregateOutputType | null;
    _sum: MessageSumAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
};
type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MessageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MessageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MessageGroupByOutputType[P]>;
}>>;
export type MessageWhereInput = {
    AND?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[];
    OR?: Prisma.MessageWhereInput[];
    NOT?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[];
    message_id?: Prisma.IntFilter<"Message"> | number;
    sender_id?: Prisma.StringFilter<"Message"> | string;
    receiver_id?: Prisma.StringFilter<"Message"> | string;
    content?: Prisma.StringFilter<"Message"> | string;
    file_id?: Prisma.IntNullableFilter<"Message"> | number | null;
    sent_at?: Prisma.DateTimeFilter<"Message"> | Date | string;
    is_read?: Prisma.BoolFilter<"Message"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Message"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Message"> | Date | string;
    sender?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    receiver?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    file?: Prisma.XOR<Prisma.FileNullableScalarRelationFilter, Prisma.FileWhereInput> | null;
};
export type MessageOrderByWithRelationInput = {
    message_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    receiver_id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    file_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    sent_at?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    sender?: Prisma.UserOrderByWithRelationInput;
    receiver?: Prisma.UserOrderByWithRelationInput;
    file?: Prisma.FileOrderByWithRelationInput;
};
export type MessageWhereUniqueInput = Prisma.AtLeast<{
    message_id?: number;
    AND?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[];
    OR?: Prisma.MessageWhereInput[];
    NOT?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[];
    sender_id?: Prisma.StringFilter<"Message"> | string;
    receiver_id?: Prisma.StringFilter<"Message"> | string;
    content?: Prisma.StringFilter<"Message"> | string;
    file_id?: Prisma.IntNullableFilter<"Message"> | number | null;
    sent_at?: Prisma.DateTimeFilter<"Message"> | Date | string;
    is_read?: Prisma.BoolFilter<"Message"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Message"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Message"> | Date | string;
    sender?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    receiver?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    file?: Prisma.XOR<Prisma.FileNullableScalarRelationFilter, Prisma.FileWhereInput> | null;
}, "message_id">;
export type MessageOrderByWithAggregationInput = {
    message_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    receiver_id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    file_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    sent_at?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.MessageCountOrderByAggregateInput;
    _avg?: Prisma.MessageAvgOrderByAggregateInput;
    _max?: Prisma.MessageMaxOrderByAggregateInput;
    _min?: Prisma.MessageMinOrderByAggregateInput;
    _sum?: Prisma.MessageSumOrderByAggregateInput;
};
export type MessageScalarWhereWithAggregatesInput = {
    AND?: Prisma.MessageScalarWhereWithAggregatesInput | Prisma.MessageScalarWhereWithAggregatesInput[];
    OR?: Prisma.MessageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MessageScalarWhereWithAggregatesInput | Prisma.MessageScalarWhereWithAggregatesInput[];
    message_id?: Prisma.IntWithAggregatesFilter<"Message"> | number;
    sender_id?: Prisma.StringWithAggregatesFilter<"Message"> | string;
    receiver_id?: Prisma.StringWithAggregatesFilter<"Message"> | string;
    content?: Prisma.StringWithAggregatesFilter<"Message"> | string;
    file_id?: Prisma.IntNullableWithAggregatesFilter<"Message"> | number | null;
    sent_at?: Prisma.DateTimeWithAggregatesFilter<"Message"> | Date | string;
    is_read?: Prisma.BoolWithAggregatesFilter<"Message"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Message"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Message"> | Date | string;
};
export type MessageCreateInput = {
    content: string;
    sent_at?: Date | string;
    is_read?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sender: Prisma.UserCreateNestedOneWithoutSent_messagesInput;
    receiver: Prisma.UserCreateNestedOneWithoutReceived_messagesInput;
    file?: Prisma.FileCreateNestedOneWithoutMessagesInput;
};
export type MessageUncheckedCreateInput = {
    message_id?: number;
    sender_id: string;
    receiver_id: string;
    content: string;
    file_id?: number | null;
    sent_at?: Date | string;
    is_read?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MessageUpdateInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    sent_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sender?: Prisma.UserUpdateOneRequiredWithoutSent_messagesNestedInput;
    receiver?: Prisma.UserUpdateOneRequiredWithoutReceived_messagesNestedInput;
    file?: Prisma.FileUpdateOneWithoutMessagesNestedInput;
};
export type MessageUncheckedUpdateInput = {
    message_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.StringFieldUpdateOperationsInput | string;
    receiver_id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sent_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageCreateManyInput = {
    message_id?: number;
    sender_id: string;
    receiver_id: string;
    content: string;
    file_id?: number | null;
    sent_at?: Date | string;
    is_read?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MessageUpdateManyMutationInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    sent_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageUncheckedUpdateManyInput = {
    message_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.StringFieldUpdateOperationsInput | string;
    receiver_id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sent_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageListRelationFilter = {
    every?: Prisma.MessageWhereInput;
    some?: Prisma.MessageWhereInput;
    none?: Prisma.MessageWhereInput;
};
export type MessageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MessageCountOrderByAggregateInput = {
    message_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    receiver_id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    file_id?: Prisma.SortOrder;
    sent_at?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type MessageAvgOrderByAggregateInput = {
    message_id?: Prisma.SortOrder;
    file_id?: Prisma.SortOrder;
};
export type MessageMaxOrderByAggregateInput = {
    message_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    receiver_id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    file_id?: Prisma.SortOrder;
    sent_at?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type MessageMinOrderByAggregateInput = {
    message_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    receiver_id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    file_id?: Prisma.SortOrder;
    sent_at?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type MessageSumOrderByAggregateInput = {
    message_id?: Prisma.SortOrder;
    file_id?: Prisma.SortOrder;
};
export type MessageCreateNestedManyWithoutSenderInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutSenderInput, Prisma.MessageUncheckedCreateWithoutSenderInput> | Prisma.MessageCreateWithoutSenderInput[] | Prisma.MessageUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutSenderInput | Prisma.MessageCreateOrConnectWithoutSenderInput[];
    createMany?: Prisma.MessageCreateManySenderInputEnvelope;
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
};
export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutReceiverInput, Prisma.MessageUncheckedCreateWithoutReceiverInput> | Prisma.MessageCreateWithoutReceiverInput[] | Prisma.MessageUncheckedCreateWithoutReceiverInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutReceiverInput | Prisma.MessageCreateOrConnectWithoutReceiverInput[];
    createMany?: Prisma.MessageCreateManyReceiverInputEnvelope;
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
};
export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutSenderInput, Prisma.MessageUncheckedCreateWithoutSenderInput> | Prisma.MessageCreateWithoutSenderInput[] | Prisma.MessageUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutSenderInput | Prisma.MessageCreateOrConnectWithoutSenderInput[];
    createMany?: Prisma.MessageCreateManySenderInputEnvelope;
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
};
export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutReceiverInput, Prisma.MessageUncheckedCreateWithoutReceiverInput> | Prisma.MessageCreateWithoutReceiverInput[] | Prisma.MessageUncheckedCreateWithoutReceiverInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutReceiverInput | Prisma.MessageCreateOrConnectWithoutReceiverInput[];
    createMany?: Prisma.MessageCreateManyReceiverInputEnvelope;
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
};
export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutSenderInput, Prisma.MessageUncheckedCreateWithoutSenderInput> | Prisma.MessageCreateWithoutSenderInput[] | Prisma.MessageUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutSenderInput | Prisma.MessageCreateOrConnectWithoutSenderInput[];
    upsert?: Prisma.MessageUpsertWithWhereUniqueWithoutSenderInput | Prisma.MessageUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: Prisma.MessageCreateManySenderInputEnvelope;
    set?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    disconnect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    delete?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    update?: Prisma.MessageUpdateWithWhereUniqueWithoutSenderInput | Prisma.MessageUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?: Prisma.MessageUpdateManyWithWhereWithoutSenderInput | Prisma.MessageUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
};
export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutReceiverInput, Prisma.MessageUncheckedCreateWithoutReceiverInput> | Prisma.MessageCreateWithoutReceiverInput[] | Prisma.MessageUncheckedCreateWithoutReceiverInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutReceiverInput | Prisma.MessageCreateOrConnectWithoutReceiverInput[];
    upsert?: Prisma.MessageUpsertWithWhereUniqueWithoutReceiverInput | Prisma.MessageUpsertWithWhereUniqueWithoutReceiverInput[];
    createMany?: Prisma.MessageCreateManyReceiverInputEnvelope;
    set?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    disconnect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    delete?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    update?: Prisma.MessageUpdateWithWhereUniqueWithoutReceiverInput | Prisma.MessageUpdateWithWhereUniqueWithoutReceiverInput[];
    updateMany?: Prisma.MessageUpdateManyWithWhereWithoutReceiverInput | Prisma.MessageUpdateManyWithWhereWithoutReceiverInput[];
    deleteMany?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
};
export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutSenderInput, Prisma.MessageUncheckedCreateWithoutSenderInput> | Prisma.MessageCreateWithoutSenderInput[] | Prisma.MessageUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutSenderInput | Prisma.MessageCreateOrConnectWithoutSenderInput[];
    upsert?: Prisma.MessageUpsertWithWhereUniqueWithoutSenderInput | Prisma.MessageUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: Prisma.MessageCreateManySenderInputEnvelope;
    set?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    disconnect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    delete?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    update?: Prisma.MessageUpdateWithWhereUniqueWithoutSenderInput | Prisma.MessageUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?: Prisma.MessageUpdateManyWithWhereWithoutSenderInput | Prisma.MessageUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
};
export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutReceiverInput, Prisma.MessageUncheckedCreateWithoutReceiverInput> | Prisma.MessageCreateWithoutReceiverInput[] | Prisma.MessageUncheckedCreateWithoutReceiverInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutReceiverInput | Prisma.MessageCreateOrConnectWithoutReceiverInput[];
    upsert?: Prisma.MessageUpsertWithWhereUniqueWithoutReceiverInput | Prisma.MessageUpsertWithWhereUniqueWithoutReceiverInput[];
    createMany?: Prisma.MessageCreateManyReceiverInputEnvelope;
    set?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    disconnect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    delete?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    update?: Prisma.MessageUpdateWithWhereUniqueWithoutReceiverInput | Prisma.MessageUpdateWithWhereUniqueWithoutReceiverInput[];
    updateMany?: Prisma.MessageUpdateManyWithWhereWithoutReceiverInput | Prisma.MessageUpdateManyWithWhereWithoutReceiverInput[];
    deleteMany?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type MessageCreateNestedManyWithoutFileInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutFileInput, Prisma.MessageUncheckedCreateWithoutFileInput> | Prisma.MessageCreateWithoutFileInput[] | Prisma.MessageUncheckedCreateWithoutFileInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutFileInput | Prisma.MessageCreateOrConnectWithoutFileInput[];
    createMany?: Prisma.MessageCreateManyFileInputEnvelope;
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
};
export type MessageUncheckedCreateNestedManyWithoutFileInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutFileInput, Prisma.MessageUncheckedCreateWithoutFileInput> | Prisma.MessageCreateWithoutFileInput[] | Prisma.MessageUncheckedCreateWithoutFileInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutFileInput | Prisma.MessageCreateOrConnectWithoutFileInput[];
    createMany?: Prisma.MessageCreateManyFileInputEnvelope;
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
};
export type MessageUpdateManyWithoutFileNestedInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutFileInput, Prisma.MessageUncheckedCreateWithoutFileInput> | Prisma.MessageCreateWithoutFileInput[] | Prisma.MessageUncheckedCreateWithoutFileInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutFileInput | Prisma.MessageCreateOrConnectWithoutFileInput[];
    upsert?: Prisma.MessageUpsertWithWhereUniqueWithoutFileInput | Prisma.MessageUpsertWithWhereUniqueWithoutFileInput[];
    createMany?: Prisma.MessageCreateManyFileInputEnvelope;
    set?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    disconnect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    delete?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    update?: Prisma.MessageUpdateWithWhereUniqueWithoutFileInput | Prisma.MessageUpdateWithWhereUniqueWithoutFileInput[];
    updateMany?: Prisma.MessageUpdateManyWithWhereWithoutFileInput | Prisma.MessageUpdateManyWithWhereWithoutFileInput[];
    deleteMany?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
};
export type MessageUncheckedUpdateManyWithoutFileNestedInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutFileInput, Prisma.MessageUncheckedCreateWithoutFileInput> | Prisma.MessageCreateWithoutFileInput[] | Prisma.MessageUncheckedCreateWithoutFileInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutFileInput | Prisma.MessageCreateOrConnectWithoutFileInput[];
    upsert?: Prisma.MessageUpsertWithWhereUniqueWithoutFileInput | Prisma.MessageUpsertWithWhereUniqueWithoutFileInput[];
    createMany?: Prisma.MessageCreateManyFileInputEnvelope;
    set?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    disconnect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    delete?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    update?: Prisma.MessageUpdateWithWhereUniqueWithoutFileInput | Prisma.MessageUpdateWithWhereUniqueWithoutFileInput[];
    updateMany?: Prisma.MessageUpdateManyWithWhereWithoutFileInput | Prisma.MessageUpdateManyWithWhereWithoutFileInput[];
    deleteMany?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
};
export type MessageCreateWithoutSenderInput = {
    content: string;
    sent_at?: Date | string;
    is_read?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    receiver: Prisma.UserCreateNestedOneWithoutReceived_messagesInput;
    file?: Prisma.FileCreateNestedOneWithoutMessagesInput;
};
export type MessageUncheckedCreateWithoutSenderInput = {
    message_id?: number;
    receiver_id: string;
    content: string;
    file_id?: number | null;
    sent_at?: Date | string;
    is_read?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MessageCreateOrConnectWithoutSenderInput = {
    where: Prisma.MessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageCreateWithoutSenderInput, Prisma.MessageUncheckedCreateWithoutSenderInput>;
};
export type MessageCreateManySenderInputEnvelope = {
    data: Prisma.MessageCreateManySenderInput | Prisma.MessageCreateManySenderInput[];
    skipDuplicates?: boolean;
};
export type MessageCreateWithoutReceiverInput = {
    content: string;
    sent_at?: Date | string;
    is_read?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sender: Prisma.UserCreateNestedOneWithoutSent_messagesInput;
    file?: Prisma.FileCreateNestedOneWithoutMessagesInput;
};
export type MessageUncheckedCreateWithoutReceiverInput = {
    message_id?: number;
    sender_id: string;
    content: string;
    file_id?: number | null;
    sent_at?: Date | string;
    is_read?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MessageCreateOrConnectWithoutReceiverInput = {
    where: Prisma.MessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageCreateWithoutReceiverInput, Prisma.MessageUncheckedCreateWithoutReceiverInput>;
};
export type MessageCreateManyReceiverInputEnvelope = {
    data: Prisma.MessageCreateManyReceiverInput | Prisma.MessageCreateManyReceiverInput[];
    skipDuplicates?: boolean;
};
export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: Prisma.MessageWhereUniqueInput;
    update: Prisma.XOR<Prisma.MessageUpdateWithoutSenderInput, Prisma.MessageUncheckedUpdateWithoutSenderInput>;
    create: Prisma.XOR<Prisma.MessageCreateWithoutSenderInput, Prisma.MessageUncheckedCreateWithoutSenderInput>;
};
export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: Prisma.MessageWhereUniqueInput;
    data: Prisma.XOR<Prisma.MessageUpdateWithoutSenderInput, Prisma.MessageUncheckedUpdateWithoutSenderInput>;
};
export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: Prisma.MessageScalarWhereInput;
    data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyWithoutSenderInput>;
};
export type MessageScalarWhereInput = {
    AND?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
    OR?: Prisma.MessageScalarWhereInput[];
    NOT?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
    message_id?: Prisma.IntFilter<"Message"> | number;
    sender_id?: Prisma.StringFilter<"Message"> | string;
    receiver_id?: Prisma.StringFilter<"Message"> | string;
    content?: Prisma.StringFilter<"Message"> | string;
    file_id?: Prisma.IntNullableFilter<"Message"> | number | null;
    sent_at?: Prisma.DateTimeFilter<"Message"> | Date | string;
    is_read?: Prisma.BoolFilter<"Message"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Message"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Message"> | Date | string;
};
export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: Prisma.MessageWhereUniqueInput;
    update: Prisma.XOR<Prisma.MessageUpdateWithoutReceiverInput, Prisma.MessageUncheckedUpdateWithoutReceiverInput>;
    create: Prisma.XOR<Prisma.MessageCreateWithoutReceiverInput, Prisma.MessageUncheckedCreateWithoutReceiverInput>;
};
export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: Prisma.MessageWhereUniqueInput;
    data: Prisma.XOR<Prisma.MessageUpdateWithoutReceiverInput, Prisma.MessageUncheckedUpdateWithoutReceiverInput>;
};
export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: Prisma.MessageScalarWhereInput;
    data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyWithoutReceiverInput>;
};
export type MessageCreateWithoutFileInput = {
    content: string;
    sent_at?: Date | string;
    is_read?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sender: Prisma.UserCreateNestedOneWithoutSent_messagesInput;
    receiver: Prisma.UserCreateNestedOneWithoutReceived_messagesInput;
};
export type MessageUncheckedCreateWithoutFileInput = {
    message_id?: number;
    sender_id: string;
    receiver_id: string;
    content: string;
    sent_at?: Date | string;
    is_read?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MessageCreateOrConnectWithoutFileInput = {
    where: Prisma.MessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageCreateWithoutFileInput, Prisma.MessageUncheckedCreateWithoutFileInput>;
};
export type MessageCreateManyFileInputEnvelope = {
    data: Prisma.MessageCreateManyFileInput | Prisma.MessageCreateManyFileInput[];
    skipDuplicates?: boolean;
};
export type MessageUpsertWithWhereUniqueWithoutFileInput = {
    where: Prisma.MessageWhereUniqueInput;
    update: Prisma.XOR<Prisma.MessageUpdateWithoutFileInput, Prisma.MessageUncheckedUpdateWithoutFileInput>;
    create: Prisma.XOR<Prisma.MessageCreateWithoutFileInput, Prisma.MessageUncheckedCreateWithoutFileInput>;
};
export type MessageUpdateWithWhereUniqueWithoutFileInput = {
    where: Prisma.MessageWhereUniqueInput;
    data: Prisma.XOR<Prisma.MessageUpdateWithoutFileInput, Prisma.MessageUncheckedUpdateWithoutFileInput>;
};
export type MessageUpdateManyWithWhereWithoutFileInput = {
    where: Prisma.MessageScalarWhereInput;
    data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyWithoutFileInput>;
};
export type MessageCreateManySenderInput = {
    message_id?: number;
    receiver_id: string;
    content: string;
    file_id?: number | null;
    sent_at?: Date | string;
    is_read?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MessageCreateManyReceiverInput = {
    message_id?: number;
    sender_id: string;
    content: string;
    file_id?: number | null;
    sent_at?: Date | string;
    is_read?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MessageUpdateWithoutSenderInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    sent_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receiver?: Prisma.UserUpdateOneRequiredWithoutReceived_messagesNestedInput;
    file?: Prisma.FileUpdateOneWithoutMessagesNestedInput;
};
export type MessageUncheckedUpdateWithoutSenderInput = {
    message_id?: Prisma.IntFieldUpdateOperationsInput | number;
    receiver_id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sent_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageUncheckedUpdateManyWithoutSenderInput = {
    message_id?: Prisma.IntFieldUpdateOperationsInput | number;
    receiver_id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sent_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageUpdateWithoutReceiverInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    sent_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sender?: Prisma.UserUpdateOneRequiredWithoutSent_messagesNestedInput;
    file?: Prisma.FileUpdateOneWithoutMessagesNestedInput;
};
export type MessageUncheckedUpdateWithoutReceiverInput = {
    message_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sent_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    message_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sent_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageCreateManyFileInput = {
    message_id?: number;
    sender_id: string;
    receiver_id: string;
    content: string;
    sent_at?: Date | string;
    is_read?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MessageUpdateWithoutFileInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    sent_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sender?: Prisma.UserUpdateOneRequiredWithoutSent_messagesNestedInput;
    receiver?: Prisma.UserUpdateOneRequiredWithoutReceived_messagesNestedInput;
};
export type MessageUncheckedUpdateWithoutFileInput = {
    message_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.StringFieldUpdateOperationsInput | string;
    receiver_id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    sent_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageUncheckedUpdateManyWithoutFileInput = {
    message_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.StringFieldUpdateOperationsInput | string;
    receiver_id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    sent_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    message_id?: boolean;
    sender_id?: boolean;
    receiver_id?: boolean;
    content?: boolean;
    file_id?: boolean;
    sent_at?: boolean;
    is_read?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receiver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    file?: boolean | Prisma.Message$fileArgs<ExtArgs>;
}, ExtArgs["result"]["message"]>;
export type MessageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    message_id?: boolean;
    sender_id?: boolean;
    receiver_id?: boolean;
    content?: boolean;
    file_id?: boolean;
    sent_at?: boolean;
    is_read?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receiver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    file?: boolean | Prisma.Message$fileArgs<ExtArgs>;
}, ExtArgs["result"]["message"]>;
export type MessageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    message_id?: boolean;
    sender_id?: boolean;
    receiver_id?: boolean;
    content?: boolean;
    file_id?: boolean;
    sent_at?: boolean;
    is_read?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receiver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    file?: boolean | Prisma.Message$fileArgs<ExtArgs>;
}, ExtArgs["result"]["message"]>;
export type MessageSelectScalar = {
    message_id?: boolean;
    sender_id?: boolean;
    receiver_id?: boolean;
    content?: boolean;
    file_id?: boolean;
    sent_at?: boolean;
    is_read?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type MessageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"message_id" | "sender_id" | "receiver_id" | "content" | "file_id" | "sent_at" | "is_read" | "created_at" | "updated_at", ExtArgs["result"]["message"]>;
export type MessageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receiver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    file?: boolean | Prisma.Message$fileArgs<ExtArgs>;
};
export type MessageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receiver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    file?: boolean | Prisma.Message$fileArgs<ExtArgs>;
};
export type MessageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receiver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    file?: boolean | Prisma.Message$fileArgs<ExtArgs>;
};
export type $MessagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Message";
    objects: {
        sender: Prisma.$UserPayload<ExtArgs>;
        receiver: Prisma.$UserPayload<ExtArgs>;
        file: Prisma.$FilePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        message_id: number;
        sender_id: string;
        receiver_id: string;
        content: string;
        file_id: number | null;
        sent_at: Date;
        is_read: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["message"]>;
    composites: {};
};
export type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MessagePayload, S>;
export type MessageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MessageCountAggregateInputType | true;
};
export interface MessageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Message'];
        meta: {
            name: 'Message';
        };
    };
    findUnique<T extends MessageFindUniqueArgs>(args: Prisma.SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MessageFindFirstArgs>(args?: Prisma.SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MessageFindManyArgs>(args?: Prisma.SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MessageCreateArgs>(args: Prisma.SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MessageCreateManyArgs>(args?: Prisma.SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MessageDeleteArgs>(args: Prisma.SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MessageUpdateArgs>(args: Prisma.SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MessageDeleteManyArgs>(args?: Prisma.SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MessageUpdateManyArgs>(args: Prisma.SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MessageUpsertArgs>(args: Prisma.SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MessageCountArgs>(args?: Prisma.Subset<T, MessageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MessageCountAggregateOutputType> : number>;
    aggregate<T extends MessageAggregateArgs>(args: Prisma.Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>;
    groupBy<T extends MessageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MessageGroupByArgs['orderBy'];
    } : {
        orderBy?: MessageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MessageFieldRefs;
}
export interface Prisma__MessageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sender<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    receiver<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    file<T extends Prisma.Message$fileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Message$fileArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MessageFieldRefs {
    readonly message_id: Prisma.FieldRef<"Message", 'Int'>;
    readonly sender_id: Prisma.FieldRef<"Message", 'String'>;
    readonly receiver_id: Prisma.FieldRef<"Message", 'String'>;
    readonly content: Prisma.FieldRef<"Message", 'String'>;
    readonly file_id: Prisma.FieldRef<"Message", 'Int'>;
    readonly sent_at: Prisma.FieldRef<"Message", 'DateTime'>;
    readonly is_read: Prisma.FieldRef<"Message", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"Message", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Message", 'DateTime'>;
}
export type MessageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where: Prisma.MessageWhereUniqueInput;
};
export type MessageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where: Prisma.MessageWhereUniqueInput;
};
export type MessageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MessageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MessageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MessageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageCreateInput, Prisma.MessageUncheckedCreateInput>;
};
export type MessageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MessageCreateManyInput | Prisma.MessageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MessageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    data: Prisma.MessageCreateManyInput | Prisma.MessageCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MessageIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MessageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageUpdateInput, Prisma.MessageUncheckedUpdateInput>;
    where: Prisma.MessageWhereUniqueInput;
};
export type MessageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyInput>;
    where?: Prisma.MessageWhereInput;
    limit?: number;
};
export type MessageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyInput>;
    where?: Prisma.MessageWhereInput;
    limit?: number;
    include?: Prisma.MessageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MessageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where: Prisma.MessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageCreateInput, Prisma.MessageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MessageUpdateInput, Prisma.MessageUncheckedUpdateInput>;
};
export type MessageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where: Prisma.MessageWhereUniqueInput;
};
export type MessageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
    limit?: number;
};
export type Message$fileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    where?: Prisma.FileWhereInput;
};
export type MessageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
};
export {};
