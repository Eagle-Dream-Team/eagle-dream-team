import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MeetingModel = runtime.Types.Result.DefaultSelection<Prisma.$MeetingPayload>;
export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null;
    _avg: MeetingAvgAggregateOutputType | null;
    _sum: MeetingSumAggregateOutputType | null;
    _min: MeetingMinAggregateOutputType | null;
    _max: MeetingMaxAggregateOutputType | null;
};
export type MeetingAvgAggregateOutputType = {
    meeting_id: number | null;
    allocation_id: number | null;
};
export type MeetingSumAggregateOutputType = {
    meeting_id: number | null;
    allocation_id: number | null;
};
export type MeetingMinAggregateOutputType = {
    meeting_id: number | null;
    allocation_id: number | null;
    created_by: string | null;
    meeting_type: $Enums.MeetingType | null;
    scheduled_at: Date | null;
    location: string | null;
    link: string | null;
    notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type MeetingMaxAggregateOutputType = {
    meeting_id: number | null;
    allocation_id: number | null;
    created_by: string | null;
    meeting_type: $Enums.MeetingType | null;
    scheduled_at: Date | null;
    location: string | null;
    link: string | null;
    notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type MeetingCountAggregateOutputType = {
    meeting_id: number;
    allocation_id: number;
    created_by: number;
    meeting_type: number;
    scheduled_at: number;
    location: number;
    link: number;
    notes: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type MeetingAvgAggregateInputType = {
    meeting_id?: true;
    allocation_id?: true;
};
export type MeetingSumAggregateInputType = {
    meeting_id?: true;
    allocation_id?: true;
};
export type MeetingMinAggregateInputType = {
    meeting_id?: true;
    allocation_id?: true;
    created_by?: true;
    meeting_type?: true;
    scheduled_at?: true;
    location?: true;
    link?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
};
export type MeetingMaxAggregateInputType = {
    meeting_id?: true;
    allocation_id?: true;
    created_by?: true;
    meeting_type?: true;
    scheduled_at?: true;
    location?: true;
    link?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
};
export type MeetingCountAggregateInputType = {
    meeting_id?: true;
    allocation_id?: true;
    created_by?: true;
    meeting_type?: true;
    scheduled_at?: true;
    location?: true;
    link?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type MeetingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MeetingWhereInput;
    orderBy?: Prisma.MeetingOrderByWithRelationInput | Prisma.MeetingOrderByWithRelationInput[];
    cursor?: Prisma.MeetingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MeetingCountAggregateInputType;
    _avg?: MeetingAvgAggregateInputType;
    _sum?: MeetingSumAggregateInputType;
    _min?: MeetingMinAggregateInputType;
    _max?: MeetingMaxAggregateInputType;
};
export type GetMeetingAggregateType<T extends MeetingAggregateArgs> = {
    [P in keyof T & keyof AggregateMeeting]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMeeting[P]> : Prisma.GetScalarType<T[P], AggregateMeeting[P]>;
};
export type MeetingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MeetingWhereInput;
    orderBy?: Prisma.MeetingOrderByWithAggregationInput | Prisma.MeetingOrderByWithAggregationInput[];
    by: Prisma.MeetingScalarFieldEnum[] | Prisma.MeetingScalarFieldEnum;
    having?: Prisma.MeetingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MeetingCountAggregateInputType | true;
    _avg?: MeetingAvgAggregateInputType;
    _sum?: MeetingSumAggregateInputType;
    _min?: MeetingMinAggregateInputType;
    _max?: MeetingMaxAggregateInputType;
};
export type MeetingGroupByOutputType = {
    meeting_id: number;
    allocation_id: number;
    created_by: string;
    meeting_type: $Enums.MeetingType;
    scheduled_at: Date;
    location: string | null;
    link: string | null;
    notes: string | null;
    created_at: Date;
    updated_at: Date;
    _count: MeetingCountAggregateOutputType | null;
    _avg: MeetingAvgAggregateOutputType | null;
    _sum: MeetingSumAggregateOutputType | null;
    _min: MeetingMinAggregateOutputType | null;
    _max: MeetingMaxAggregateOutputType | null;
};
type GetMeetingGroupByPayload<T extends MeetingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MeetingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MeetingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MeetingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MeetingGroupByOutputType[P]>;
}>>;
export type MeetingWhereInput = {
    AND?: Prisma.MeetingWhereInput | Prisma.MeetingWhereInput[];
    OR?: Prisma.MeetingWhereInput[];
    NOT?: Prisma.MeetingWhereInput | Prisma.MeetingWhereInput[];
    meeting_id?: Prisma.IntFilter<"Meeting"> | number;
    allocation_id?: Prisma.IntFilter<"Meeting"> | number;
    created_by?: Prisma.StringFilter<"Meeting"> | string;
    meeting_type?: Prisma.EnumMeetingTypeFilter<"Meeting"> | $Enums.MeetingType;
    scheduled_at?: Prisma.DateTimeFilter<"Meeting"> | Date | string;
    location?: Prisma.StringNullableFilter<"Meeting"> | string | null;
    link?: Prisma.StringNullableFilter<"Meeting"> | string | null;
    notes?: Prisma.StringNullableFilter<"Meeting"> | string | null;
    created_at?: Prisma.DateTimeFilter<"Meeting"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Meeting"> | Date | string;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    allocation?: Prisma.XOR<Prisma.UserAllocationScalarRelationFilter, Prisma.UserAllocationWhereInput>;
};
export type MeetingOrderByWithRelationInput = {
    meeting_id?: Prisma.SortOrder;
    allocation_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    meeting_type?: Prisma.SortOrder;
    scheduled_at?: Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    link?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    creator?: Prisma.UserOrderByWithRelationInput;
    allocation?: Prisma.UserAllocationOrderByWithRelationInput;
};
export type MeetingWhereUniqueInput = Prisma.AtLeast<{
    meeting_id?: number;
    AND?: Prisma.MeetingWhereInput | Prisma.MeetingWhereInput[];
    OR?: Prisma.MeetingWhereInput[];
    NOT?: Prisma.MeetingWhereInput | Prisma.MeetingWhereInput[];
    allocation_id?: Prisma.IntFilter<"Meeting"> | number;
    created_by?: Prisma.StringFilter<"Meeting"> | string;
    meeting_type?: Prisma.EnumMeetingTypeFilter<"Meeting"> | $Enums.MeetingType;
    scheduled_at?: Prisma.DateTimeFilter<"Meeting"> | Date | string;
    location?: Prisma.StringNullableFilter<"Meeting"> | string | null;
    link?: Prisma.StringNullableFilter<"Meeting"> | string | null;
    notes?: Prisma.StringNullableFilter<"Meeting"> | string | null;
    created_at?: Prisma.DateTimeFilter<"Meeting"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Meeting"> | Date | string;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    allocation?: Prisma.XOR<Prisma.UserAllocationScalarRelationFilter, Prisma.UserAllocationWhereInput>;
}, "meeting_id">;
export type MeetingOrderByWithAggregationInput = {
    meeting_id?: Prisma.SortOrder;
    allocation_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    meeting_type?: Prisma.SortOrder;
    scheduled_at?: Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    link?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.MeetingCountOrderByAggregateInput;
    _avg?: Prisma.MeetingAvgOrderByAggregateInput;
    _max?: Prisma.MeetingMaxOrderByAggregateInput;
    _min?: Prisma.MeetingMinOrderByAggregateInput;
    _sum?: Prisma.MeetingSumOrderByAggregateInput;
};
export type MeetingScalarWhereWithAggregatesInput = {
    AND?: Prisma.MeetingScalarWhereWithAggregatesInput | Prisma.MeetingScalarWhereWithAggregatesInput[];
    OR?: Prisma.MeetingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MeetingScalarWhereWithAggregatesInput | Prisma.MeetingScalarWhereWithAggregatesInput[];
    meeting_id?: Prisma.IntWithAggregatesFilter<"Meeting"> | number;
    allocation_id?: Prisma.IntWithAggregatesFilter<"Meeting"> | number;
    created_by?: Prisma.StringWithAggregatesFilter<"Meeting"> | string;
    meeting_type?: Prisma.EnumMeetingTypeWithAggregatesFilter<"Meeting"> | $Enums.MeetingType;
    scheduled_at?: Prisma.DateTimeWithAggregatesFilter<"Meeting"> | Date | string;
    location?: Prisma.StringNullableWithAggregatesFilter<"Meeting"> | string | null;
    link?: Prisma.StringNullableWithAggregatesFilter<"Meeting"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Meeting"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Meeting"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Meeting"> | Date | string;
};
export type MeetingCreateInput = {
    meeting_type: $Enums.MeetingType;
    scheduled_at: Date | string;
    location?: string | null;
    link?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    creator: Prisma.UserCreateNestedOneWithoutMeetings_createdInput;
    allocation: Prisma.UserAllocationCreateNestedOneWithoutMeetingsInput;
};
export type MeetingUncheckedCreateInput = {
    meeting_id?: number;
    allocation_id: number;
    created_by: string;
    meeting_type: $Enums.MeetingType;
    scheduled_at: Date | string;
    location?: string | null;
    link?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MeetingUpdateInput = {
    meeting_type?: Prisma.EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutMeetings_createdNestedInput;
    allocation?: Prisma.UserAllocationUpdateOneRequiredWithoutMeetingsNestedInput;
};
export type MeetingUncheckedUpdateInput = {
    meeting_id?: Prisma.IntFieldUpdateOperationsInput | number;
    allocation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    meeting_type?: Prisma.EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingCreateManyInput = {
    meeting_id?: number;
    allocation_id: number;
    created_by: string;
    meeting_type: $Enums.MeetingType;
    scheduled_at: Date | string;
    location?: string | null;
    link?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MeetingUpdateManyMutationInput = {
    meeting_type?: Prisma.EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingUncheckedUpdateManyInput = {
    meeting_id?: Prisma.IntFieldUpdateOperationsInput | number;
    allocation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    meeting_type?: Prisma.EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingListRelationFilter = {
    every?: Prisma.MeetingWhereInput;
    some?: Prisma.MeetingWhereInput;
    none?: Prisma.MeetingWhereInput;
};
export type MeetingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MeetingCountOrderByAggregateInput = {
    meeting_id?: Prisma.SortOrder;
    allocation_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    meeting_type?: Prisma.SortOrder;
    scheduled_at?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type MeetingAvgOrderByAggregateInput = {
    meeting_id?: Prisma.SortOrder;
    allocation_id?: Prisma.SortOrder;
};
export type MeetingMaxOrderByAggregateInput = {
    meeting_id?: Prisma.SortOrder;
    allocation_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    meeting_type?: Prisma.SortOrder;
    scheduled_at?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type MeetingMinOrderByAggregateInput = {
    meeting_id?: Prisma.SortOrder;
    allocation_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    meeting_type?: Prisma.SortOrder;
    scheduled_at?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type MeetingSumOrderByAggregateInput = {
    meeting_id?: Prisma.SortOrder;
    allocation_id?: Prisma.SortOrder;
};
export type MeetingCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.MeetingCreateWithoutCreatorInput, Prisma.MeetingUncheckedCreateWithoutCreatorInput> | Prisma.MeetingCreateWithoutCreatorInput[] | Prisma.MeetingUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.MeetingCreateOrConnectWithoutCreatorInput | Prisma.MeetingCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.MeetingCreateManyCreatorInputEnvelope;
    connect?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
};
export type MeetingUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.MeetingCreateWithoutCreatorInput, Prisma.MeetingUncheckedCreateWithoutCreatorInput> | Prisma.MeetingCreateWithoutCreatorInput[] | Prisma.MeetingUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.MeetingCreateOrConnectWithoutCreatorInput | Prisma.MeetingCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.MeetingCreateManyCreatorInputEnvelope;
    connect?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
};
export type MeetingUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.MeetingCreateWithoutCreatorInput, Prisma.MeetingUncheckedCreateWithoutCreatorInput> | Prisma.MeetingCreateWithoutCreatorInput[] | Prisma.MeetingUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.MeetingCreateOrConnectWithoutCreatorInput | Prisma.MeetingCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.MeetingUpsertWithWhereUniqueWithoutCreatorInput | Prisma.MeetingUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.MeetingCreateManyCreatorInputEnvelope;
    set?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
    disconnect?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
    delete?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
    connect?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
    update?: Prisma.MeetingUpdateWithWhereUniqueWithoutCreatorInput | Prisma.MeetingUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.MeetingUpdateManyWithWhereWithoutCreatorInput | Prisma.MeetingUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.MeetingScalarWhereInput | Prisma.MeetingScalarWhereInput[];
};
export type MeetingUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.MeetingCreateWithoutCreatorInput, Prisma.MeetingUncheckedCreateWithoutCreatorInput> | Prisma.MeetingCreateWithoutCreatorInput[] | Prisma.MeetingUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.MeetingCreateOrConnectWithoutCreatorInput | Prisma.MeetingCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.MeetingUpsertWithWhereUniqueWithoutCreatorInput | Prisma.MeetingUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.MeetingCreateManyCreatorInputEnvelope;
    set?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
    disconnect?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
    delete?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
    connect?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
    update?: Prisma.MeetingUpdateWithWhereUniqueWithoutCreatorInput | Prisma.MeetingUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.MeetingUpdateManyWithWhereWithoutCreatorInput | Prisma.MeetingUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.MeetingScalarWhereInput | Prisma.MeetingScalarWhereInput[];
};
export type MeetingCreateNestedManyWithoutAllocationInput = {
    create?: Prisma.XOR<Prisma.MeetingCreateWithoutAllocationInput, Prisma.MeetingUncheckedCreateWithoutAllocationInput> | Prisma.MeetingCreateWithoutAllocationInput[] | Prisma.MeetingUncheckedCreateWithoutAllocationInput[];
    connectOrCreate?: Prisma.MeetingCreateOrConnectWithoutAllocationInput | Prisma.MeetingCreateOrConnectWithoutAllocationInput[];
    createMany?: Prisma.MeetingCreateManyAllocationInputEnvelope;
    connect?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
};
export type MeetingUncheckedCreateNestedManyWithoutAllocationInput = {
    create?: Prisma.XOR<Prisma.MeetingCreateWithoutAllocationInput, Prisma.MeetingUncheckedCreateWithoutAllocationInput> | Prisma.MeetingCreateWithoutAllocationInput[] | Prisma.MeetingUncheckedCreateWithoutAllocationInput[];
    connectOrCreate?: Prisma.MeetingCreateOrConnectWithoutAllocationInput | Prisma.MeetingCreateOrConnectWithoutAllocationInput[];
    createMany?: Prisma.MeetingCreateManyAllocationInputEnvelope;
    connect?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
};
export type MeetingUpdateManyWithoutAllocationNestedInput = {
    create?: Prisma.XOR<Prisma.MeetingCreateWithoutAllocationInput, Prisma.MeetingUncheckedCreateWithoutAllocationInput> | Prisma.MeetingCreateWithoutAllocationInput[] | Prisma.MeetingUncheckedCreateWithoutAllocationInput[];
    connectOrCreate?: Prisma.MeetingCreateOrConnectWithoutAllocationInput | Prisma.MeetingCreateOrConnectWithoutAllocationInput[];
    upsert?: Prisma.MeetingUpsertWithWhereUniqueWithoutAllocationInput | Prisma.MeetingUpsertWithWhereUniqueWithoutAllocationInput[];
    createMany?: Prisma.MeetingCreateManyAllocationInputEnvelope;
    set?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
    disconnect?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
    delete?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
    connect?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
    update?: Prisma.MeetingUpdateWithWhereUniqueWithoutAllocationInput | Prisma.MeetingUpdateWithWhereUniqueWithoutAllocationInput[];
    updateMany?: Prisma.MeetingUpdateManyWithWhereWithoutAllocationInput | Prisma.MeetingUpdateManyWithWhereWithoutAllocationInput[];
    deleteMany?: Prisma.MeetingScalarWhereInput | Prisma.MeetingScalarWhereInput[];
};
export type MeetingUncheckedUpdateManyWithoutAllocationNestedInput = {
    create?: Prisma.XOR<Prisma.MeetingCreateWithoutAllocationInput, Prisma.MeetingUncheckedCreateWithoutAllocationInput> | Prisma.MeetingCreateWithoutAllocationInput[] | Prisma.MeetingUncheckedCreateWithoutAllocationInput[];
    connectOrCreate?: Prisma.MeetingCreateOrConnectWithoutAllocationInput | Prisma.MeetingCreateOrConnectWithoutAllocationInput[];
    upsert?: Prisma.MeetingUpsertWithWhereUniqueWithoutAllocationInput | Prisma.MeetingUpsertWithWhereUniqueWithoutAllocationInput[];
    createMany?: Prisma.MeetingCreateManyAllocationInputEnvelope;
    set?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
    disconnect?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
    delete?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
    connect?: Prisma.MeetingWhereUniqueInput | Prisma.MeetingWhereUniqueInput[];
    update?: Prisma.MeetingUpdateWithWhereUniqueWithoutAllocationInput | Prisma.MeetingUpdateWithWhereUniqueWithoutAllocationInput[];
    updateMany?: Prisma.MeetingUpdateManyWithWhereWithoutAllocationInput | Prisma.MeetingUpdateManyWithWhereWithoutAllocationInput[];
    deleteMany?: Prisma.MeetingScalarWhereInput | Prisma.MeetingScalarWhereInput[];
};
export type EnumMeetingTypeFieldUpdateOperationsInput = {
    set?: $Enums.MeetingType;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type MeetingCreateWithoutCreatorInput = {
    meeting_type: $Enums.MeetingType;
    scheduled_at: Date | string;
    location?: string | null;
    link?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    allocation: Prisma.UserAllocationCreateNestedOneWithoutMeetingsInput;
};
export type MeetingUncheckedCreateWithoutCreatorInput = {
    meeting_id?: number;
    allocation_id: number;
    meeting_type: $Enums.MeetingType;
    scheduled_at: Date | string;
    location?: string | null;
    link?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MeetingCreateOrConnectWithoutCreatorInput = {
    where: Prisma.MeetingWhereUniqueInput;
    create: Prisma.XOR<Prisma.MeetingCreateWithoutCreatorInput, Prisma.MeetingUncheckedCreateWithoutCreatorInput>;
};
export type MeetingCreateManyCreatorInputEnvelope = {
    data: Prisma.MeetingCreateManyCreatorInput | Prisma.MeetingCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type MeetingUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.MeetingWhereUniqueInput;
    update: Prisma.XOR<Prisma.MeetingUpdateWithoutCreatorInput, Prisma.MeetingUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.MeetingCreateWithoutCreatorInput, Prisma.MeetingUncheckedCreateWithoutCreatorInput>;
};
export type MeetingUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.MeetingWhereUniqueInput;
    data: Prisma.XOR<Prisma.MeetingUpdateWithoutCreatorInput, Prisma.MeetingUncheckedUpdateWithoutCreatorInput>;
};
export type MeetingUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.MeetingScalarWhereInput;
    data: Prisma.XOR<Prisma.MeetingUpdateManyMutationInput, Prisma.MeetingUncheckedUpdateManyWithoutCreatorInput>;
};
export type MeetingScalarWhereInput = {
    AND?: Prisma.MeetingScalarWhereInput | Prisma.MeetingScalarWhereInput[];
    OR?: Prisma.MeetingScalarWhereInput[];
    NOT?: Prisma.MeetingScalarWhereInput | Prisma.MeetingScalarWhereInput[];
    meeting_id?: Prisma.IntFilter<"Meeting"> | number;
    allocation_id?: Prisma.IntFilter<"Meeting"> | number;
    created_by?: Prisma.StringFilter<"Meeting"> | string;
    meeting_type?: Prisma.EnumMeetingTypeFilter<"Meeting"> | $Enums.MeetingType;
    scheduled_at?: Prisma.DateTimeFilter<"Meeting"> | Date | string;
    location?: Prisma.StringNullableFilter<"Meeting"> | string | null;
    link?: Prisma.StringNullableFilter<"Meeting"> | string | null;
    notes?: Prisma.StringNullableFilter<"Meeting"> | string | null;
    created_at?: Prisma.DateTimeFilter<"Meeting"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Meeting"> | Date | string;
};
export type MeetingCreateWithoutAllocationInput = {
    meeting_type: $Enums.MeetingType;
    scheduled_at: Date | string;
    location?: string | null;
    link?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    creator: Prisma.UserCreateNestedOneWithoutMeetings_createdInput;
};
export type MeetingUncheckedCreateWithoutAllocationInput = {
    meeting_id?: number;
    created_by: string;
    meeting_type: $Enums.MeetingType;
    scheduled_at: Date | string;
    location?: string | null;
    link?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MeetingCreateOrConnectWithoutAllocationInput = {
    where: Prisma.MeetingWhereUniqueInput;
    create: Prisma.XOR<Prisma.MeetingCreateWithoutAllocationInput, Prisma.MeetingUncheckedCreateWithoutAllocationInput>;
};
export type MeetingCreateManyAllocationInputEnvelope = {
    data: Prisma.MeetingCreateManyAllocationInput | Prisma.MeetingCreateManyAllocationInput[];
    skipDuplicates?: boolean;
};
export type MeetingUpsertWithWhereUniqueWithoutAllocationInput = {
    where: Prisma.MeetingWhereUniqueInput;
    update: Prisma.XOR<Prisma.MeetingUpdateWithoutAllocationInput, Prisma.MeetingUncheckedUpdateWithoutAllocationInput>;
    create: Prisma.XOR<Prisma.MeetingCreateWithoutAllocationInput, Prisma.MeetingUncheckedCreateWithoutAllocationInput>;
};
export type MeetingUpdateWithWhereUniqueWithoutAllocationInput = {
    where: Prisma.MeetingWhereUniqueInput;
    data: Prisma.XOR<Prisma.MeetingUpdateWithoutAllocationInput, Prisma.MeetingUncheckedUpdateWithoutAllocationInput>;
};
export type MeetingUpdateManyWithWhereWithoutAllocationInput = {
    where: Prisma.MeetingScalarWhereInput;
    data: Prisma.XOR<Prisma.MeetingUpdateManyMutationInput, Prisma.MeetingUncheckedUpdateManyWithoutAllocationInput>;
};
export type MeetingCreateManyCreatorInput = {
    meeting_id?: number;
    allocation_id: number;
    meeting_type: $Enums.MeetingType;
    scheduled_at: Date | string;
    location?: string | null;
    link?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MeetingUpdateWithoutCreatorInput = {
    meeting_type?: Prisma.EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocation?: Prisma.UserAllocationUpdateOneRequiredWithoutMeetingsNestedInput;
};
export type MeetingUncheckedUpdateWithoutCreatorInput = {
    meeting_id?: Prisma.IntFieldUpdateOperationsInput | number;
    allocation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    meeting_type?: Prisma.EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingUncheckedUpdateManyWithoutCreatorInput = {
    meeting_id?: Prisma.IntFieldUpdateOperationsInput | number;
    allocation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    meeting_type?: Prisma.EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingCreateManyAllocationInput = {
    meeting_id?: number;
    created_by: string;
    meeting_type: $Enums.MeetingType;
    scheduled_at: Date | string;
    location?: string | null;
    link?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MeetingUpdateWithoutAllocationInput = {
    meeting_type?: Prisma.EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutMeetings_createdNestedInput;
};
export type MeetingUncheckedUpdateWithoutAllocationInput = {
    meeting_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    meeting_type?: Prisma.EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingUncheckedUpdateManyWithoutAllocationInput = {
    meeting_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    meeting_type?: Prisma.EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    meeting_id?: boolean;
    allocation_id?: boolean;
    created_by?: boolean;
    meeting_type?: boolean;
    scheduled_at?: boolean;
    location?: boolean;
    link?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    allocation?: boolean | Prisma.UserAllocationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["meeting"]>;
export type MeetingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    meeting_id?: boolean;
    allocation_id?: boolean;
    created_by?: boolean;
    meeting_type?: boolean;
    scheduled_at?: boolean;
    location?: boolean;
    link?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    allocation?: boolean | Prisma.UserAllocationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["meeting"]>;
export type MeetingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    meeting_id?: boolean;
    allocation_id?: boolean;
    created_by?: boolean;
    meeting_type?: boolean;
    scheduled_at?: boolean;
    location?: boolean;
    link?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    allocation?: boolean | Prisma.UserAllocationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["meeting"]>;
export type MeetingSelectScalar = {
    meeting_id?: boolean;
    allocation_id?: boolean;
    created_by?: boolean;
    meeting_type?: boolean;
    scheduled_at?: boolean;
    location?: boolean;
    link?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type MeetingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"meeting_id" | "allocation_id" | "created_by" | "meeting_type" | "scheduled_at" | "location" | "link" | "notes" | "created_at" | "updated_at", ExtArgs["result"]["meeting"]>;
export type MeetingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    allocation?: boolean | Prisma.UserAllocationDefaultArgs<ExtArgs>;
};
export type MeetingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    allocation?: boolean | Prisma.UserAllocationDefaultArgs<ExtArgs>;
};
export type MeetingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    allocation?: boolean | Prisma.UserAllocationDefaultArgs<ExtArgs>;
};
export type $MeetingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Meeting";
    objects: {
        creator: Prisma.$UserPayload<ExtArgs>;
        allocation: Prisma.$UserAllocationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        meeting_id: number;
        allocation_id: number;
        created_by: string;
        meeting_type: $Enums.MeetingType;
        scheduled_at: Date;
        location: string | null;
        link: string | null;
        notes: string | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["meeting"]>;
    composites: {};
};
export type MeetingGetPayload<S extends boolean | null | undefined | MeetingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MeetingPayload, S>;
export type MeetingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MeetingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MeetingCountAggregateInputType | true;
};
export interface MeetingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Meeting'];
        meta: {
            name: 'Meeting';
        };
    };
    findUnique<T extends MeetingFindUniqueArgs>(args: Prisma.SelectSubset<T, MeetingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MeetingClient<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MeetingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MeetingClient<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MeetingFindFirstArgs>(args?: Prisma.SelectSubset<T, MeetingFindFirstArgs<ExtArgs>>): Prisma.Prisma__MeetingClient<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MeetingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MeetingClient<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MeetingFindManyArgs>(args?: Prisma.SelectSubset<T, MeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MeetingCreateArgs>(args: Prisma.SelectSubset<T, MeetingCreateArgs<ExtArgs>>): Prisma.Prisma__MeetingClient<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MeetingCreateManyArgs>(args?: Prisma.SelectSubset<T, MeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MeetingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MeetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MeetingDeleteArgs>(args: Prisma.SelectSubset<T, MeetingDeleteArgs<ExtArgs>>): Prisma.Prisma__MeetingClient<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MeetingUpdateArgs>(args: Prisma.SelectSubset<T, MeetingUpdateArgs<ExtArgs>>): Prisma.Prisma__MeetingClient<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MeetingDeleteManyArgs>(args?: Prisma.SelectSubset<T, MeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MeetingUpdateManyArgs>(args: Prisma.SelectSubset<T, MeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MeetingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MeetingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MeetingUpsertArgs>(args: Prisma.SelectSubset<T, MeetingUpsertArgs<ExtArgs>>): Prisma.Prisma__MeetingClient<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MeetingCountArgs>(args?: Prisma.Subset<T, MeetingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MeetingCountAggregateOutputType> : number>;
    aggregate<T extends MeetingAggregateArgs>(args: Prisma.Subset<T, MeetingAggregateArgs>): Prisma.PrismaPromise<GetMeetingAggregateType<T>>;
    groupBy<T extends MeetingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MeetingGroupByArgs['orderBy'];
    } : {
        orderBy?: MeetingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MeetingFieldRefs;
}
export interface Prisma__MeetingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    creator<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    allocation<T extends Prisma.UserAllocationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserAllocationDefaultArgs<ExtArgs>>): Prisma.Prisma__UserAllocationClient<runtime.Types.Result.GetResult<Prisma.$UserAllocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MeetingFieldRefs {
    readonly meeting_id: Prisma.FieldRef<"Meeting", 'Int'>;
    readonly allocation_id: Prisma.FieldRef<"Meeting", 'Int'>;
    readonly created_by: Prisma.FieldRef<"Meeting", 'String'>;
    readonly meeting_type: Prisma.FieldRef<"Meeting", 'MeetingType'>;
    readonly scheduled_at: Prisma.FieldRef<"Meeting", 'DateTime'>;
    readonly location: Prisma.FieldRef<"Meeting", 'String'>;
    readonly link: Prisma.FieldRef<"Meeting", 'String'>;
    readonly notes: Prisma.FieldRef<"Meeting", 'String'>;
    readonly created_at: Prisma.FieldRef<"Meeting", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Meeting", 'DateTime'>;
}
export type MeetingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelect<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    include?: Prisma.MeetingInclude<ExtArgs> | null;
    where: Prisma.MeetingWhereUniqueInput;
};
export type MeetingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelect<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    include?: Prisma.MeetingInclude<ExtArgs> | null;
    where: Prisma.MeetingWhereUniqueInput;
};
export type MeetingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MeetingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MeetingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MeetingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelect<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    include?: Prisma.MeetingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MeetingCreateInput, Prisma.MeetingUncheckedCreateInput>;
};
export type MeetingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MeetingCreateManyInput | Prisma.MeetingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MeetingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    data: Prisma.MeetingCreateManyInput | Prisma.MeetingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MeetingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MeetingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelect<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    include?: Prisma.MeetingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MeetingUpdateInput, Prisma.MeetingUncheckedUpdateInput>;
    where: Prisma.MeetingWhereUniqueInput;
};
export type MeetingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MeetingUpdateManyMutationInput, Prisma.MeetingUncheckedUpdateManyInput>;
    where?: Prisma.MeetingWhereInput;
    limit?: number;
};
export type MeetingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MeetingUpdateManyMutationInput, Prisma.MeetingUncheckedUpdateManyInput>;
    where?: Prisma.MeetingWhereInput;
    limit?: number;
    include?: Prisma.MeetingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MeetingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelect<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    include?: Prisma.MeetingInclude<ExtArgs> | null;
    where: Prisma.MeetingWhereUniqueInput;
    create: Prisma.XOR<Prisma.MeetingCreateInput, Prisma.MeetingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MeetingUpdateInput, Prisma.MeetingUncheckedUpdateInput>;
};
export type MeetingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelect<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    include?: Prisma.MeetingInclude<ExtArgs> | null;
    where: Prisma.MeetingWhereUniqueInput;
};
export type MeetingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MeetingWhereInput;
    limit?: number;
};
export type MeetingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelect<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    include?: Prisma.MeetingInclude<ExtArgs> | null;
};
export {};
