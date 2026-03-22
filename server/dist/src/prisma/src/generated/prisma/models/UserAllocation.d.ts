import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserAllocationModel = runtime.Types.Result.DefaultSelection<Prisma.$UserAllocationPayload>;
export type AggregateUserAllocation = {
    _count: UserAllocationCountAggregateOutputType | null;
    _avg: UserAllocationAvgAggregateOutputType | null;
    _sum: UserAllocationSumAggregateOutputType | null;
    _min: UserAllocationMinAggregateOutputType | null;
    _max: UserAllocationMaxAggregateOutputType | null;
};
export type UserAllocationAvgAggregateOutputType = {
    allocation_id: number | null;
};
export type UserAllocationSumAggregateOutputType = {
    allocation_id: number | null;
};
export type UserAllocationMinAggregateOutputType = {
    allocation_id: number | null;
    student_id: string | null;
    tutor_id: string | null;
    allocated_by: string | null;
    allocated_at: Date | null;
    is_current: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UserAllocationMaxAggregateOutputType = {
    allocation_id: number | null;
    student_id: string | null;
    tutor_id: string | null;
    allocated_by: string | null;
    allocated_at: Date | null;
    is_current: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UserAllocationCountAggregateOutputType = {
    allocation_id: number;
    student_id: number;
    tutor_id: number;
    allocated_by: number;
    allocated_at: number;
    is_current: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type UserAllocationAvgAggregateInputType = {
    allocation_id?: true;
};
export type UserAllocationSumAggregateInputType = {
    allocation_id?: true;
};
export type UserAllocationMinAggregateInputType = {
    allocation_id?: true;
    student_id?: true;
    tutor_id?: true;
    allocated_by?: true;
    allocated_at?: true;
    is_current?: true;
    created_at?: true;
    updated_at?: true;
};
export type UserAllocationMaxAggregateInputType = {
    allocation_id?: true;
    student_id?: true;
    tutor_id?: true;
    allocated_by?: true;
    allocated_at?: true;
    is_current?: true;
    created_at?: true;
    updated_at?: true;
};
export type UserAllocationCountAggregateInputType = {
    allocation_id?: true;
    student_id?: true;
    tutor_id?: true;
    allocated_by?: true;
    allocated_at?: true;
    is_current?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type UserAllocationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserAllocationWhereInput;
    orderBy?: Prisma.UserAllocationOrderByWithRelationInput | Prisma.UserAllocationOrderByWithRelationInput[];
    cursor?: Prisma.UserAllocationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserAllocationCountAggregateInputType;
    _avg?: UserAllocationAvgAggregateInputType;
    _sum?: UserAllocationSumAggregateInputType;
    _min?: UserAllocationMinAggregateInputType;
    _max?: UserAllocationMaxAggregateInputType;
};
export type GetUserAllocationAggregateType<T extends UserAllocationAggregateArgs> = {
    [P in keyof T & keyof AggregateUserAllocation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserAllocation[P]> : Prisma.GetScalarType<T[P], AggregateUserAllocation[P]>;
};
export type UserAllocationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserAllocationWhereInput;
    orderBy?: Prisma.UserAllocationOrderByWithAggregationInput | Prisma.UserAllocationOrderByWithAggregationInput[];
    by: Prisma.UserAllocationScalarFieldEnum[] | Prisma.UserAllocationScalarFieldEnum;
    having?: Prisma.UserAllocationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserAllocationCountAggregateInputType | true;
    _avg?: UserAllocationAvgAggregateInputType;
    _sum?: UserAllocationSumAggregateInputType;
    _min?: UserAllocationMinAggregateInputType;
    _max?: UserAllocationMaxAggregateInputType;
};
export type UserAllocationGroupByOutputType = {
    allocation_id: number;
    student_id: string;
    tutor_id: string;
    allocated_by: string;
    allocated_at: Date;
    is_current: boolean;
    created_at: Date;
    updated_at: Date;
    _count: UserAllocationCountAggregateOutputType | null;
    _avg: UserAllocationAvgAggregateOutputType | null;
    _sum: UserAllocationSumAggregateOutputType | null;
    _min: UserAllocationMinAggregateOutputType | null;
    _max: UserAllocationMaxAggregateOutputType | null;
};
type GetUserAllocationGroupByPayload<T extends UserAllocationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserAllocationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserAllocationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserAllocationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserAllocationGroupByOutputType[P]>;
}>>;
export type UserAllocationWhereInput = {
    AND?: Prisma.UserAllocationWhereInput | Prisma.UserAllocationWhereInput[];
    OR?: Prisma.UserAllocationWhereInput[];
    NOT?: Prisma.UserAllocationWhereInput | Prisma.UserAllocationWhereInput[];
    allocation_id?: Prisma.IntFilter<"UserAllocation"> | number;
    student_id?: Prisma.StringFilter<"UserAllocation"> | string;
    tutor_id?: Prisma.StringFilter<"UserAllocation"> | string;
    allocated_by?: Prisma.StringFilter<"UserAllocation"> | string;
    allocated_at?: Prisma.DateTimeFilter<"UserAllocation"> | Date | string;
    is_current?: Prisma.BoolFilter<"UserAllocation"> | boolean;
    created_at?: Prisma.DateTimeFilter<"UserAllocation"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"UserAllocation"> | Date | string;
    student?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    tutor?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    staff?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    meetings?: Prisma.MeetingListRelationFilter;
};
export type UserAllocationOrderByWithRelationInput = {
    allocation_id?: Prisma.SortOrder;
    student_id?: Prisma.SortOrder;
    tutor_id?: Prisma.SortOrder;
    allocated_by?: Prisma.SortOrder;
    allocated_at?: Prisma.SortOrder;
    is_current?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    student?: Prisma.UserOrderByWithRelationInput;
    tutor?: Prisma.UserOrderByWithRelationInput;
    staff?: Prisma.UserOrderByWithRelationInput;
    meetings?: Prisma.MeetingOrderByRelationAggregateInput;
};
export type UserAllocationWhereUniqueInput = Prisma.AtLeast<{
    allocation_id?: number;
    AND?: Prisma.UserAllocationWhereInput | Prisma.UserAllocationWhereInput[];
    OR?: Prisma.UserAllocationWhereInput[];
    NOT?: Prisma.UserAllocationWhereInput | Prisma.UserAllocationWhereInput[];
    student_id?: Prisma.StringFilter<"UserAllocation"> | string;
    tutor_id?: Prisma.StringFilter<"UserAllocation"> | string;
    allocated_by?: Prisma.StringFilter<"UserAllocation"> | string;
    allocated_at?: Prisma.DateTimeFilter<"UserAllocation"> | Date | string;
    is_current?: Prisma.BoolFilter<"UserAllocation"> | boolean;
    created_at?: Prisma.DateTimeFilter<"UserAllocation"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"UserAllocation"> | Date | string;
    student?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    tutor?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    staff?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    meetings?: Prisma.MeetingListRelationFilter;
}, "allocation_id">;
export type UserAllocationOrderByWithAggregationInput = {
    allocation_id?: Prisma.SortOrder;
    student_id?: Prisma.SortOrder;
    tutor_id?: Prisma.SortOrder;
    allocated_by?: Prisma.SortOrder;
    allocated_at?: Prisma.SortOrder;
    is_current?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.UserAllocationCountOrderByAggregateInput;
    _avg?: Prisma.UserAllocationAvgOrderByAggregateInput;
    _max?: Prisma.UserAllocationMaxOrderByAggregateInput;
    _min?: Prisma.UserAllocationMinOrderByAggregateInput;
    _sum?: Prisma.UserAllocationSumOrderByAggregateInput;
};
export type UserAllocationScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserAllocationScalarWhereWithAggregatesInput | Prisma.UserAllocationScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserAllocationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserAllocationScalarWhereWithAggregatesInput | Prisma.UserAllocationScalarWhereWithAggregatesInput[];
    allocation_id?: Prisma.IntWithAggregatesFilter<"UserAllocation"> | number;
    student_id?: Prisma.StringWithAggregatesFilter<"UserAllocation"> | string;
    tutor_id?: Prisma.StringWithAggregatesFilter<"UserAllocation"> | string;
    allocated_by?: Prisma.StringWithAggregatesFilter<"UserAllocation"> | string;
    allocated_at?: Prisma.DateTimeWithAggregatesFilter<"UserAllocation"> | Date | string;
    is_current?: Prisma.BoolWithAggregatesFilter<"UserAllocation"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"UserAllocation"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"UserAllocation"> | Date | string;
};
export type UserAllocationCreateInput = {
    allocated_at?: Date | string;
    is_current?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    student: Prisma.UserCreateNestedOneWithoutStudent_allocationsInput;
    tutor: Prisma.UserCreateNestedOneWithoutTutor_allocationsInput;
    staff: Prisma.UserCreateNestedOneWithoutStaff_allocationsInput;
    meetings?: Prisma.MeetingCreateNestedManyWithoutAllocationInput;
};
export type UserAllocationUncheckedCreateInput = {
    allocation_id?: number;
    student_id: string;
    tutor_id: string;
    allocated_by: string;
    allocated_at?: Date | string;
    is_current?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    meetings?: Prisma.MeetingUncheckedCreateNestedManyWithoutAllocationInput;
};
export type UserAllocationUpdateInput = {
    allocated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_current?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.UserUpdateOneRequiredWithoutStudent_allocationsNestedInput;
    tutor?: Prisma.UserUpdateOneRequiredWithoutTutor_allocationsNestedInput;
    staff?: Prisma.UserUpdateOneRequiredWithoutStaff_allocationsNestedInput;
    meetings?: Prisma.MeetingUpdateManyWithoutAllocationNestedInput;
};
export type UserAllocationUncheckedUpdateInput = {
    allocation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tutor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    allocated_by?: Prisma.StringFieldUpdateOperationsInput | string;
    allocated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_current?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meetings?: Prisma.MeetingUncheckedUpdateManyWithoutAllocationNestedInput;
};
export type UserAllocationCreateManyInput = {
    allocation_id?: number;
    student_id: string;
    tutor_id: string;
    allocated_by: string;
    allocated_at?: Date | string;
    is_current?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type UserAllocationUpdateManyMutationInput = {
    allocated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_current?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserAllocationUncheckedUpdateManyInput = {
    allocation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tutor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    allocated_by?: Prisma.StringFieldUpdateOperationsInput | string;
    allocated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_current?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserAllocationListRelationFilter = {
    every?: Prisma.UserAllocationWhereInput;
    some?: Prisma.UserAllocationWhereInput;
    none?: Prisma.UserAllocationWhereInput;
};
export type UserAllocationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserAllocationCountOrderByAggregateInput = {
    allocation_id?: Prisma.SortOrder;
    student_id?: Prisma.SortOrder;
    tutor_id?: Prisma.SortOrder;
    allocated_by?: Prisma.SortOrder;
    allocated_at?: Prisma.SortOrder;
    is_current?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserAllocationAvgOrderByAggregateInput = {
    allocation_id?: Prisma.SortOrder;
};
export type UserAllocationMaxOrderByAggregateInput = {
    allocation_id?: Prisma.SortOrder;
    student_id?: Prisma.SortOrder;
    tutor_id?: Prisma.SortOrder;
    allocated_by?: Prisma.SortOrder;
    allocated_at?: Prisma.SortOrder;
    is_current?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserAllocationMinOrderByAggregateInput = {
    allocation_id?: Prisma.SortOrder;
    student_id?: Prisma.SortOrder;
    tutor_id?: Prisma.SortOrder;
    allocated_by?: Prisma.SortOrder;
    allocated_at?: Prisma.SortOrder;
    is_current?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserAllocationSumOrderByAggregateInput = {
    allocation_id?: Prisma.SortOrder;
};
export type UserAllocationScalarRelationFilter = {
    is?: Prisma.UserAllocationWhereInput;
    isNot?: Prisma.UserAllocationWhereInput;
};
export type UserAllocationCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.UserAllocationCreateWithoutStudentInput, Prisma.UserAllocationUncheckedCreateWithoutStudentInput> | Prisma.UserAllocationCreateWithoutStudentInput[] | Prisma.UserAllocationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.UserAllocationCreateOrConnectWithoutStudentInput | Prisma.UserAllocationCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.UserAllocationCreateManyStudentInputEnvelope;
    connect?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
};
export type UserAllocationCreateNestedManyWithoutTutorInput = {
    create?: Prisma.XOR<Prisma.UserAllocationCreateWithoutTutorInput, Prisma.UserAllocationUncheckedCreateWithoutTutorInput> | Prisma.UserAllocationCreateWithoutTutorInput[] | Prisma.UserAllocationUncheckedCreateWithoutTutorInput[];
    connectOrCreate?: Prisma.UserAllocationCreateOrConnectWithoutTutorInput | Prisma.UserAllocationCreateOrConnectWithoutTutorInput[];
    createMany?: Prisma.UserAllocationCreateManyTutorInputEnvelope;
    connect?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
};
export type UserAllocationCreateNestedManyWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.UserAllocationCreateWithoutStaffInput, Prisma.UserAllocationUncheckedCreateWithoutStaffInput> | Prisma.UserAllocationCreateWithoutStaffInput[] | Prisma.UserAllocationUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.UserAllocationCreateOrConnectWithoutStaffInput | Prisma.UserAllocationCreateOrConnectWithoutStaffInput[];
    createMany?: Prisma.UserAllocationCreateManyStaffInputEnvelope;
    connect?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
};
export type UserAllocationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.UserAllocationCreateWithoutStudentInput, Prisma.UserAllocationUncheckedCreateWithoutStudentInput> | Prisma.UserAllocationCreateWithoutStudentInput[] | Prisma.UserAllocationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.UserAllocationCreateOrConnectWithoutStudentInput | Prisma.UserAllocationCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.UserAllocationCreateManyStudentInputEnvelope;
    connect?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
};
export type UserAllocationUncheckedCreateNestedManyWithoutTutorInput = {
    create?: Prisma.XOR<Prisma.UserAllocationCreateWithoutTutorInput, Prisma.UserAllocationUncheckedCreateWithoutTutorInput> | Prisma.UserAllocationCreateWithoutTutorInput[] | Prisma.UserAllocationUncheckedCreateWithoutTutorInput[];
    connectOrCreate?: Prisma.UserAllocationCreateOrConnectWithoutTutorInput | Prisma.UserAllocationCreateOrConnectWithoutTutorInput[];
    createMany?: Prisma.UserAllocationCreateManyTutorInputEnvelope;
    connect?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
};
export type UserAllocationUncheckedCreateNestedManyWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.UserAllocationCreateWithoutStaffInput, Prisma.UserAllocationUncheckedCreateWithoutStaffInput> | Prisma.UserAllocationCreateWithoutStaffInput[] | Prisma.UserAllocationUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.UserAllocationCreateOrConnectWithoutStaffInput | Prisma.UserAllocationCreateOrConnectWithoutStaffInput[];
    createMany?: Prisma.UserAllocationCreateManyStaffInputEnvelope;
    connect?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
};
export type UserAllocationUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.UserAllocationCreateWithoutStudentInput, Prisma.UserAllocationUncheckedCreateWithoutStudentInput> | Prisma.UserAllocationCreateWithoutStudentInput[] | Prisma.UserAllocationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.UserAllocationCreateOrConnectWithoutStudentInput | Prisma.UserAllocationCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.UserAllocationUpsertWithWhereUniqueWithoutStudentInput | Prisma.UserAllocationUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.UserAllocationCreateManyStudentInputEnvelope;
    set?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    disconnect?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    delete?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    connect?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    update?: Prisma.UserAllocationUpdateWithWhereUniqueWithoutStudentInput | Prisma.UserAllocationUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.UserAllocationUpdateManyWithWhereWithoutStudentInput | Prisma.UserAllocationUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.UserAllocationScalarWhereInput | Prisma.UserAllocationScalarWhereInput[];
};
export type UserAllocationUpdateManyWithoutTutorNestedInput = {
    create?: Prisma.XOR<Prisma.UserAllocationCreateWithoutTutorInput, Prisma.UserAllocationUncheckedCreateWithoutTutorInput> | Prisma.UserAllocationCreateWithoutTutorInput[] | Prisma.UserAllocationUncheckedCreateWithoutTutorInput[];
    connectOrCreate?: Prisma.UserAllocationCreateOrConnectWithoutTutorInput | Prisma.UserAllocationCreateOrConnectWithoutTutorInput[];
    upsert?: Prisma.UserAllocationUpsertWithWhereUniqueWithoutTutorInput | Prisma.UserAllocationUpsertWithWhereUniqueWithoutTutorInput[];
    createMany?: Prisma.UserAllocationCreateManyTutorInputEnvelope;
    set?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    disconnect?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    delete?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    connect?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    update?: Prisma.UserAllocationUpdateWithWhereUniqueWithoutTutorInput | Prisma.UserAllocationUpdateWithWhereUniqueWithoutTutorInput[];
    updateMany?: Prisma.UserAllocationUpdateManyWithWhereWithoutTutorInput | Prisma.UserAllocationUpdateManyWithWhereWithoutTutorInput[];
    deleteMany?: Prisma.UserAllocationScalarWhereInput | Prisma.UserAllocationScalarWhereInput[];
};
export type UserAllocationUpdateManyWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.UserAllocationCreateWithoutStaffInput, Prisma.UserAllocationUncheckedCreateWithoutStaffInput> | Prisma.UserAllocationCreateWithoutStaffInput[] | Prisma.UserAllocationUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.UserAllocationCreateOrConnectWithoutStaffInput | Prisma.UserAllocationCreateOrConnectWithoutStaffInput[];
    upsert?: Prisma.UserAllocationUpsertWithWhereUniqueWithoutStaffInput | Prisma.UserAllocationUpsertWithWhereUniqueWithoutStaffInput[];
    createMany?: Prisma.UserAllocationCreateManyStaffInputEnvelope;
    set?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    disconnect?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    delete?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    connect?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    update?: Prisma.UserAllocationUpdateWithWhereUniqueWithoutStaffInput | Prisma.UserAllocationUpdateWithWhereUniqueWithoutStaffInput[];
    updateMany?: Prisma.UserAllocationUpdateManyWithWhereWithoutStaffInput | Prisma.UserAllocationUpdateManyWithWhereWithoutStaffInput[];
    deleteMany?: Prisma.UserAllocationScalarWhereInput | Prisma.UserAllocationScalarWhereInput[];
};
export type UserAllocationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.UserAllocationCreateWithoutStudentInput, Prisma.UserAllocationUncheckedCreateWithoutStudentInput> | Prisma.UserAllocationCreateWithoutStudentInput[] | Prisma.UserAllocationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.UserAllocationCreateOrConnectWithoutStudentInput | Prisma.UserAllocationCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.UserAllocationUpsertWithWhereUniqueWithoutStudentInput | Prisma.UserAllocationUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.UserAllocationCreateManyStudentInputEnvelope;
    set?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    disconnect?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    delete?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    connect?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    update?: Prisma.UserAllocationUpdateWithWhereUniqueWithoutStudentInput | Prisma.UserAllocationUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.UserAllocationUpdateManyWithWhereWithoutStudentInput | Prisma.UserAllocationUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.UserAllocationScalarWhereInput | Prisma.UserAllocationScalarWhereInput[];
};
export type UserAllocationUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: Prisma.XOR<Prisma.UserAllocationCreateWithoutTutorInput, Prisma.UserAllocationUncheckedCreateWithoutTutorInput> | Prisma.UserAllocationCreateWithoutTutorInput[] | Prisma.UserAllocationUncheckedCreateWithoutTutorInput[];
    connectOrCreate?: Prisma.UserAllocationCreateOrConnectWithoutTutorInput | Prisma.UserAllocationCreateOrConnectWithoutTutorInput[];
    upsert?: Prisma.UserAllocationUpsertWithWhereUniqueWithoutTutorInput | Prisma.UserAllocationUpsertWithWhereUniqueWithoutTutorInput[];
    createMany?: Prisma.UserAllocationCreateManyTutorInputEnvelope;
    set?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    disconnect?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    delete?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    connect?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    update?: Prisma.UserAllocationUpdateWithWhereUniqueWithoutTutorInput | Prisma.UserAllocationUpdateWithWhereUniqueWithoutTutorInput[];
    updateMany?: Prisma.UserAllocationUpdateManyWithWhereWithoutTutorInput | Prisma.UserAllocationUpdateManyWithWhereWithoutTutorInput[];
    deleteMany?: Prisma.UserAllocationScalarWhereInput | Prisma.UserAllocationScalarWhereInput[];
};
export type UserAllocationUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.UserAllocationCreateWithoutStaffInput, Prisma.UserAllocationUncheckedCreateWithoutStaffInput> | Prisma.UserAllocationCreateWithoutStaffInput[] | Prisma.UserAllocationUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.UserAllocationCreateOrConnectWithoutStaffInput | Prisma.UserAllocationCreateOrConnectWithoutStaffInput[];
    upsert?: Prisma.UserAllocationUpsertWithWhereUniqueWithoutStaffInput | Prisma.UserAllocationUpsertWithWhereUniqueWithoutStaffInput[];
    createMany?: Prisma.UserAllocationCreateManyStaffInputEnvelope;
    set?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    disconnect?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    delete?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    connect?: Prisma.UserAllocationWhereUniqueInput | Prisma.UserAllocationWhereUniqueInput[];
    update?: Prisma.UserAllocationUpdateWithWhereUniqueWithoutStaffInput | Prisma.UserAllocationUpdateWithWhereUniqueWithoutStaffInput[];
    updateMany?: Prisma.UserAllocationUpdateManyWithWhereWithoutStaffInput | Prisma.UserAllocationUpdateManyWithWhereWithoutStaffInput[];
    deleteMany?: Prisma.UserAllocationScalarWhereInput | Prisma.UserAllocationScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserAllocationCreateNestedOneWithoutMeetingsInput = {
    create?: Prisma.XOR<Prisma.UserAllocationCreateWithoutMeetingsInput, Prisma.UserAllocationUncheckedCreateWithoutMeetingsInput>;
    connectOrCreate?: Prisma.UserAllocationCreateOrConnectWithoutMeetingsInput;
    connect?: Prisma.UserAllocationWhereUniqueInput;
};
export type UserAllocationUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: Prisma.XOR<Prisma.UserAllocationCreateWithoutMeetingsInput, Prisma.UserAllocationUncheckedCreateWithoutMeetingsInput>;
    connectOrCreate?: Prisma.UserAllocationCreateOrConnectWithoutMeetingsInput;
    upsert?: Prisma.UserAllocationUpsertWithoutMeetingsInput;
    connect?: Prisma.UserAllocationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserAllocationUpdateToOneWithWhereWithoutMeetingsInput, Prisma.UserAllocationUpdateWithoutMeetingsInput>, Prisma.UserAllocationUncheckedUpdateWithoutMeetingsInput>;
};
export type UserAllocationCreateWithoutStudentInput = {
    allocated_at?: Date | string;
    is_current?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    tutor: Prisma.UserCreateNestedOneWithoutTutor_allocationsInput;
    staff: Prisma.UserCreateNestedOneWithoutStaff_allocationsInput;
    meetings?: Prisma.MeetingCreateNestedManyWithoutAllocationInput;
};
export type UserAllocationUncheckedCreateWithoutStudentInput = {
    allocation_id?: number;
    tutor_id: string;
    allocated_by: string;
    allocated_at?: Date | string;
    is_current?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    meetings?: Prisma.MeetingUncheckedCreateNestedManyWithoutAllocationInput;
};
export type UserAllocationCreateOrConnectWithoutStudentInput = {
    where: Prisma.UserAllocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserAllocationCreateWithoutStudentInput, Prisma.UserAllocationUncheckedCreateWithoutStudentInput>;
};
export type UserAllocationCreateManyStudentInputEnvelope = {
    data: Prisma.UserAllocationCreateManyStudentInput | Prisma.UserAllocationCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type UserAllocationCreateWithoutTutorInput = {
    allocated_at?: Date | string;
    is_current?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    student: Prisma.UserCreateNestedOneWithoutStudent_allocationsInput;
    staff: Prisma.UserCreateNestedOneWithoutStaff_allocationsInput;
    meetings?: Prisma.MeetingCreateNestedManyWithoutAllocationInput;
};
export type UserAllocationUncheckedCreateWithoutTutorInput = {
    allocation_id?: number;
    student_id: string;
    allocated_by: string;
    allocated_at?: Date | string;
    is_current?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    meetings?: Prisma.MeetingUncheckedCreateNestedManyWithoutAllocationInput;
};
export type UserAllocationCreateOrConnectWithoutTutorInput = {
    where: Prisma.UserAllocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserAllocationCreateWithoutTutorInput, Prisma.UserAllocationUncheckedCreateWithoutTutorInput>;
};
export type UserAllocationCreateManyTutorInputEnvelope = {
    data: Prisma.UserAllocationCreateManyTutorInput | Prisma.UserAllocationCreateManyTutorInput[];
    skipDuplicates?: boolean;
};
export type UserAllocationCreateWithoutStaffInput = {
    allocated_at?: Date | string;
    is_current?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    student: Prisma.UserCreateNestedOneWithoutStudent_allocationsInput;
    tutor: Prisma.UserCreateNestedOneWithoutTutor_allocationsInput;
    meetings?: Prisma.MeetingCreateNestedManyWithoutAllocationInput;
};
export type UserAllocationUncheckedCreateWithoutStaffInput = {
    allocation_id?: number;
    student_id: string;
    tutor_id: string;
    allocated_at?: Date | string;
    is_current?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    meetings?: Prisma.MeetingUncheckedCreateNestedManyWithoutAllocationInput;
};
export type UserAllocationCreateOrConnectWithoutStaffInput = {
    where: Prisma.UserAllocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserAllocationCreateWithoutStaffInput, Prisma.UserAllocationUncheckedCreateWithoutStaffInput>;
};
export type UserAllocationCreateManyStaffInputEnvelope = {
    data: Prisma.UserAllocationCreateManyStaffInput | Prisma.UserAllocationCreateManyStaffInput[];
    skipDuplicates?: boolean;
};
export type UserAllocationUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.UserAllocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserAllocationUpdateWithoutStudentInput, Prisma.UserAllocationUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.UserAllocationCreateWithoutStudentInput, Prisma.UserAllocationUncheckedCreateWithoutStudentInput>;
};
export type UserAllocationUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.UserAllocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserAllocationUpdateWithoutStudentInput, Prisma.UserAllocationUncheckedUpdateWithoutStudentInput>;
};
export type UserAllocationUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.UserAllocationScalarWhereInput;
    data: Prisma.XOR<Prisma.UserAllocationUpdateManyMutationInput, Prisma.UserAllocationUncheckedUpdateManyWithoutStudentInput>;
};
export type UserAllocationScalarWhereInput = {
    AND?: Prisma.UserAllocationScalarWhereInput | Prisma.UserAllocationScalarWhereInput[];
    OR?: Prisma.UserAllocationScalarWhereInput[];
    NOT?: Prisma.UserAllocationScalarWhereInput | Prisma.UserAllocationScalarWhereInput[];
    allocation_id?: Prisma.IntFilter<"UserAllocation"> | number;
    student_id?: Prisma.StringFilter<"UserAllocation"> | string;
    tutor_id?: Prisma.StringFilter<"UserAllocation"> | string;
    allocated_by?: Prisma.StringFilter<"UserAllocation"> | string;
    allocated_at?: Prisma.DateTimeFilter<"UserAllocation"> | Date | string;
    is_current?: Prisma.BoolFilter<"UserAllocation"> | boolean;
    created_at?: Prisma.DateTimeFilter<"UserAllocation"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"UserAllocation"> | Date | string;
};
export type UserAllocationUpsertWithWhereUniqueWithoutTutorInput = {
    where: Prisma.UserAllocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserAllocationUpdateWithoutTutorInput, Prisma.UserAllocationUncheckedUpdateWithoutTutorInput>;
    create: Prisma.XOR<Prisma.UserAllocationCreateWithoutTutorInput, Prisma.UserAllocationUncheckedCreateWithoutTutorInput>;
};
export type UserAllocationUpdateWithWhereUniqueWithoutTutorInput = {
    where: Prisma.UserAllocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserAllocationUpdateWithoutTutorInput, Prisma.UserAllocationUncheckedUpdateWithoutTutorInput>;
};
export type UserAllocationUpdateManyWithWhereWithoutTutorInput = {
    where: Prisma.UserAllocationScalarWhereInput;
    data: Prisma.XOR<Prisma.UserAllocationUpdateManyMutationInput, Prisma.UserAllocationUncheckedUpdateManyWithoutTutorInput>;
};
export type UserAllocationUpsertWithWhereUniqueWithoutStaffInput = {
    where: Prisma.UserAllocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserAllocationUpdateWithoutStaffInput, Prisma.UserAllocationUncheckedUpdateWithoutStaffInput>;
    create: Prisma.XOR<Prisma.UserAllocationCreateWithoutStaffInput, Prisma.UserAllocationUncheckedCreateWithoutStaffInput>;
};
export type UserAllocationUpdateWithWhereUniqueWithoutStaffInput = {
    where: Prisma.UserAllocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserAllocationUpdateWithoutStaffInput, Prisma.UserAllocationUncheckedUpdateWithoutStaffInput>;
};
export type UserAllocationUpdateManyWithWhereWithoutStaffInput = {
    where: Prisma.UserAllocationScalarWhereInput;
    data: Prisma.XOR<Prisma.UserAllocationUpdateManyMutationInput, Prisma.UserAllocationUncheckedUpdateManyWithoutStaffInput>;
};
export type UserAllocationCreateWithoutMeetingsInput = {
    allocated_at?: Date | string;
    is_current?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    student: Prisma.UserCreateNestedOneWithoutStudent_allocationsInput;
    tutor: Prisma.UserCreateNestedOneWithoutTutor_allocationsInput;
    staff: Prisma.UserCreateNestedOneWithoutStaff_allocationsInput;
};
export type UserAllocationUncheckedCreateWithoutMeetingsInput = {
    allocation_id?: number;
    student_id: string;
    tutor_id: string;
    allocated_by: string;
    allocated_at?: Date | string;
    is_current?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type UserAllocationCreateOrConnectWithoutMeetingsInput = {
    where: Prisma.UserAllocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserAllocationCreateWithoutMeetingsInput, Prisma.UserAllocationUncheckedCreateWithoutMeetingsInput>;
};
export type UserAllocationUpsertWithoutMeetingsInput = {
    update: Prisma.XOR<Prisma.UserAllocationUpdateWithoutMeetingsInput, Prisma.UserAllocationUncheckedUpdateWithoutMeetingsInput>;
    create: Prisma.XOR<Prisma.UserAllocationCreateWithoutMeetingsInput, Prisma.UserAllocationUncheckedCreateWithoutMeetingsInput>;
    where?: Prisma.UserAllocationWhereInput;
};
export type UserAllocationUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: Prisma.UserAllocationWhereInput;
    data: Prisma.XOR<Prisma.UserAllocationUpdateWithoutMeetingsInput, Prisma.UserAllocationUncheckedUpdateWithoutMeetingsInput>;
};
export type UserAllocationUpdateWithoutMeetingsInput = {
    allocated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_current?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.UserUpdateOneRequiredWithoutStudent_allocationsNestedInput;
    tutor?: Prisma.UserUpdateOneRequiredWithoutTutor_allocationsNestedInput;
    staff?: Prisma.UserUpdateOneRequiredWithoutStaff_allocationsNestedInput;
};
export type UserAllocationUncheckedUpdateWithoutMeetingsInput = {
    allocation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tutor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    allocated_by?: Prisma.StringFieldUpdateOperationsInput | string;
    allocated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_current?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserAllocationCreateManyStudentInput = {
    allocation_id?: number;
    tutor_id: string;
    allocated_by: string;
    allocated_at?: Date | string;
    is_current?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type UserAllocationCreateManyTutorInput = {
    allocation_id?: number;
    student_id: string;
    allocated_by: string;
    allocated_at?: Date | string;
    is_current?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type UserAllocationCreateManyStaffInput = {
    allocation_id?: number;
    student_id: string;
    tutor_id: string;
    allocated_at?: Date | string;
    is_current?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type UserAllocationUpdateWithoutStudentInput = {
    allocated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_current?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tutor?: Prisma.UserUpdateOneRequiredWithoutTutor_allocationsNestedInput;
    staff?: Prisma.UserUpdateOneRequiredWithoutStaff_allocationsNestedInput;
    meetings?: Prisma.MeetingUpdateManyWithoutAllocationNestedInput;
};
export type UserAllocationUncheckedUpdateWithoutStudentInput = {
    allocation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tutor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    allocated_by?: Prisma.StringFieldUpdateOperationsInput | string;
    allocated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_current?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meetings?: Prisma.MeetingUncheckedUpdateManyWithoutAllocationNestedInput;
};
export type UserAllocationUncheckedUpdateManyWithoutStudentInput = {
    allocation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tutor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    allocated_by?: Prisma.StringFieldUpdateOperationsInput | string;
    allocated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_current?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserAllocationUpdateWithoutTutorInput = {
    allocated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_current?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.UserUpdateOneRequiredWithoutStudent_allocationsNestedInput;
    staff?: Prisma.UserUpdateOneRequiredWithoutStaff_allocationsNestedInput;
    meetings?: Prisma.MeetingUpdateManyWithoutAllocationNestedInput;
};
export type UserAllocationUncheckedUpdateWithoutTutorInput = {
    allocation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_id?: Prisma.StringFieldUpdateOperationsInput | string;
    allocated_by?: Prisma.StringFieldUpdateOperationsInput | string;
    allocated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_current?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meetings?: Prisma.MeetingUncheckedUpdateManyWithoutAllocationNestedInput;
};
export type UserAllocationUncheckedUpdateManyWithoutTutorInput = {
    allocation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_id?: Prisma.StringFieldUpdateOperationsInput | string;
    allocated_by?: Prisma.StringFieldUpdateOperationsInput | string;
    allocated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_current?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserAllocationUpdateWithoutStaffInput = {
    allocated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_current?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.UserUpdateOneRequiredWithoutStudent_allocationsNestedInput;
    tutor?: Prisma.UserUpdateOneRequiredWithoutTutor_allocationsNestedInput;
    meetings?: Prisma.MeetingUpdateManyWithoutAllocationNestedInput;
};
export type UserAllocationUncheckedUpdateWithoutStaffInput = {
    allocation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tutor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    allocated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_current?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meetings?: Prisma.MeetingUncheckedUpdateManyWithoutAllocationNestedInput;
};
export type UserAllocationUncheckedUpdateManyWithoutStaffInput = {
    allocation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tutor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    allocated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_current?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserAllocationCountOutputType = {
    meetings: number;
};
export type UserAllocationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    meetings?: boolean | UserAllocationCountOutputTypeCountMeetingsArgs;
};
export type UserAllocationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserAllocationCountOutputTypeSelect<ExtArgs> | null;
};
export type UserAllocationCountOutputTypeCountMeetingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MeetingWhereInput;
};
export type UserAllocationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    allocation_id?: boolean;
    student_id?: boolean;
    tutor_id?: boolean;
    allocated_by?: boolean;
    allocated_at?: boolean;
    is_current?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    student?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    tutor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    meetings?: boolean | Prisma.UserAllocation$meetingsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserAllocationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userAllocation"]>;
export type UserAllocationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    allocation_id?: boolean;
    student_id?: boolean;
    tutor_id?: boolean;
    allocated_by?: boolean;
    allocated_at?: boolean;
    is_current?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    student?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    tutor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userAllocation"]>;
export type UserAllocationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    allocation_id?: boolean;
    student_id?: boolean;
    tutor_id?: boolean;
    allocated_by?: boolean;
    allocated_at?: boolean;
    is_current?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    student?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    tutor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userAllocation"]>;
export type UserAllocationSelectScalar = {
    allocation_id?: boolean;
    student_id?: boolean;
    tutor_id?: boolean;
    allocated_by?: boolean;
    allocated_at?: boolean;
    is_current?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type UserAllocationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"allocation_id" | "student_id" | "tutor_id" | "allocated_by" | "allocated_at" | "is_current" | "created_at" | "updated_at", ExtArgs["result"]["userAllocation"]>;
export type UserAllocationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    tutor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    meetings?: boolean | Prisma.UserAllocation$meetingsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserAllocationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserAllocationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    tutor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UserAllocationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    tutor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $UserAllocationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserAllocation";
    objects: {
        student: Prisma.$UserPayload<ExtArgs>;
        tutor: Prisma.$UserPayload<ExtArgs>;
        staff: Prisma.$UserPayload<ExtArgs>;
        meetings: Prisma.$MeetingPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        allocation_id: number;
        student_id: string;
        tutor_id: string;
        allocated_by: string;
        allocated_at: Date;
        is_current: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["userAllocation"]>;
    composites: {};
};
export type UserAllocationGetPayload<S extends boolean | null | undefined | UserAllocationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserAllocationPayload, S>;
export type UserAllocationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserAllocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserAllocationCountAggregateInputType | true;
};
export interface UserAllocationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserAllocation'];
        meta: {
            name: 'UserAllocation';
        };
    };
    findUnique<T extends UserAllocationFindUniqueArgs>(args: Prisma.SelectSubset<T, UserAllocationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserAllocationClient<runtime.Types.Result.GetResult<Prisma.$UserAllocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserAllocationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserAllocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserAllocationClient<runtime.Types.Result.GetResult<Prisma.$UserAllocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserAllocationFindFirstArgs>(args?: Prisma.SelectSubset<T, UserAllocationFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserAllocationClient<runtime.Types.Result.GetResult<Prisma.$UserAllocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserAllocationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserAllocationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserAllocationClient<runtime.Types.Result.GetResult<Prisma.$UserAllocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserAllocationFindManyArgs>(args?: Prisma.SelectSubset<T, UserAllocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserAllocationCreateArgs>(args: Prisma.SelectSubset<T, UserAllocationCreateArgs<ExtArgs>>): Prisma.Prisma__UserAllocationClient<runtime.Types.Result.GetResult<Prisma.$UserAllocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserAllocationCreateManyArgs>(args?: Prisma.SelectSubset<T, UserAllocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserAllocationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserAllocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserAllocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserAllocationDeleteArgs>(args: Prisma.SelectSubset<T, UserAllocationDeleteArgs<ExtArgs>>): Prisma.Prisma__UserAllocationClient<runtime.Types.Result.GetResult<Prisma.$UserAllocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserAllocationUpdateArgs>(args: Prisma.SelectSubset<T, UserAllocationUpdateArgs<ExtArgs>>): Prisma.Prisma__UserAllocationClient<runtime.Types.Result.GetResult<Prisma.$UserAllocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserAllocationDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserAllocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserAllocationUpdateManyArgs>(args: Prisma.SelectSubset<T, UserAllocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserAllocationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserAllocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserAllocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserAllocationUpsertArgs>(args: Prisma.SelectSubset<T, UserAllocationUpsertArgs<ExtArgs>>): Prisma.Prisma__UserAllocationClient<runtime.Types.Result.GetResult<Prisma.$UserAllocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserAllocationCountArgs>(args?: Prisma.Subset<T, UserAllocationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserAllocationCountAggregateOutputType> : number>;
    aggregate<T extends UserAllocationAggregateArgs>(args: Prisma.Subset<T, UserAllocationAggregateArgs>): Prisma.PrismaPromise<GetUserAllocationAggregateType<T>>;
    groupBy<T extends UserAllocationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserAllocationGroupByArgs['orderBy'];
    } : {
        orderBy?: UserAllocationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserAllocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAllocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserAllocationFieldRefs;
}
export interface Prisma__UserAllocationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tutor<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    staff<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    meetings<T extends Prisma.UserAllocation$meetingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserAllocation$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserAllocationFieldRefs {
    readonly allocation_id: Prisma.FieldRef<"UserAllocation", 'Int'>;
    readonly student_id: Prisma.FieldRef<"UserAllocation", 'String'>;
    readonly tutor_id: Prisma.FieldRef<"UserAllocation", 'String'>;
    readonly allocated_by: Prisma.FieldRef<"UserAllocation", 'String'>;
    readonly allocated_at: Prisma.FieldRef<"UserAllocation", 'DateTime'>;
    readonly is_current: Prisma.FieldRef<"UserAllocation", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"UserAllocation", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"UserAllocation", 'DateTime'>;
}
export type UserAllocationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserAllocationSelect<ExtArgs> | null;
    omit?: Prisma.UserAllocationOmit<ExtArgs> | null;
    include?: Prisma.UserAllocationInclude<ExtArgs> | null;
    where: Prisma.UserAllocationWhereUniqueInput;
};
export type UserAllocationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserAllocationSelect<ExtArgs> | null;
    omit?: Prisma.UserAllocationOmit<ExtArgs> | null;
    include?: Prisma.UserAllocationInclude<ExtArgs> | null;
    where: Prisma.UserAllocationWhereUniqueInput;
};
export type UserAllocationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserAllocationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserAllocationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserAllocationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserAllocationSelect<ExtArgs> | null;
    omit?: Prisma.UserAllocationOmit<ExtArgs> | null;
    include?: Prisma.UserAllocationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserAllocationCreateInput, Prisma.UserAllocationUncheckedCreateInput>;
};
export type UserAllocationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserAllocationCreateManyInput | Prisma.UserAllocationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserAllocationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserAllocationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserAllocationOmit<ExtArgs> | null;
    data: Prisma.UserAllocationCreateManyInput | Prisma.UserAllocationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserAllocationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserAllocationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserAllocationSelect<ExtArgs> | null;
    omit?: Prisma.UserAllocationOmit<ExtArgs> | null;
    include?: Prisma.UserAllocationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserAllocationUpdateInput, Prisma.UserAllocationUncheckedUpdateInput>;
    where: Prisma.UserAllocationWhereUniqueInput;
};
export type UserAllocationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserAllocationUpdateManyMutationInput, Prisma.UserAllocationUncheckedUpdateManyInput>;
    where?: Prisma.UserAllocationWhereInput;
    limit?: number;
};
export type UserAllocationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserAllocationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserAllocationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserAllocationUpdateManyMutationInput, Prisma.UserAllocationUncheckedUpdateManyInput>;
    where?: Prisma.UserAllocationWhereInput;
    limit?: number;
    include?: Prisma.UserAllocationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserAllocationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserAllocationSelect<ExtArgs> | null;
    omit?: Prisma.UserAllocationOmit<ExtArgs> | null;
    include?: Prisma.UserAllocationInclude<ExtArgs> | null;
    where: Prisma.UserAllocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserAllocationCreateInput, Prisma.UserAllocationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserAllocationUpdateInput, Prisma.UserAllocationUncheckedUpdateInput>;
};
export type UserAllocationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserAllocationSelect<ExtArgs> | null;
    omit?: Prisma.UserAllocationOmit<ExtArgs> | null;
    include?: Prisma.UserAllocationInclude<ExtArgs> | null;
    where: Prisma.UserAllocationWhereUniqueInput;
};
export type UserAllocationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserAllocationWhereInput;
    limit?: number;
};
export type UserAllocation$meetingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserAllocationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserAllocationSelect<ExtArgs> | null;
    omit?: Prisma.UserAllocationOmit<ExtArgs> | null;
    include?: Prisma.UserAllocationInclude<ExtArgs> | null;
};
export {};
