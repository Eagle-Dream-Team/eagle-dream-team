import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FileModel = runtime.Types.Result.DefaultSelection<Prisma.$FilePayload>;
export type AggregateFile = {
    _count: FileCountAggregateOutputType | null;
    _avg: FileAvgAggregateOutputType | null;
    _sum: FileSumAggregateOutputType | null;
    _min: FileMinAggregateOutputType | null;
    _max: FileMaxAggregateOutputType | null;
};
export type FileAvgAggregateOutputType = {
    file_id: number | null;
};
export type FileSumAggregateOutputType = {
    file_id: number | null;
};
export type FileMinAggregateOutputType = {
    file_id: number | null;
    uploaded_by: string | null;
    title: string | null;
    file_type: $Enums.FileType | null;
    file_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type FileMaxAggregateOutputType = {
    file_id: number | null;
    uploaded_by: string | null;
    title: string | null;
    file_type: $Enums.FileType | null;
    file_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type FileCountAggregateOutputType = {
    file_id: number;
    uploaded_by: number;
    title: number;
    file_type: number;
    file_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type FileAvgAggregateInputType = {
    file_id?: true;
};
export type FileSumAggregateInputType = {
    file_id?: true;
};
export type FileMinAggregateInputType = {
    file_id?: true;
    uploaded_by?: true;
    title?: true;
    file_type?: true;
    file_url?: true;
    created_at?: true;
    updated_at?: true;
};
export type FileMaxAggregateInputType = {
    file_id?: true;
    uploaded_by?: true;
    title?: true;
    file_type?: true;
    file_url?: true;
    created_at?: true;
    updated_at?: true;
};
export type FileCountAggregateInputType = {
    file_id?: true;
    uploaded_by?: true;
    title?: true;
    file_type?: true;
    file_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type FileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileWhereInput;
    orderBy?: Prisma.FileOrderByWithRelationInput | Prisma.FileOrderByWithRelationInput[];
    cursor?: Prisma.FileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FileCountAggregateInputType;
    _avg?: FileAvgAggregateInputType;
    _sum?: FileSumAggregateInputType;
    _min?: FileMinAggregateInputType;
    _max?: FileMaxAggregateInputType;
};
export type GetFileAggregateType<T extends FileAggregateArgs> = {
    [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFile[P]> : Prisma.GetScalarType<T[P], AggregateFile[P]>;
};
export type FileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileWhereInput;
    orderBy?: Prisma.FileOrderByWithAggregationInput | Prisma.FileOrderByWithAggregationInput[];
    by: Prisma.FileScalarFieldEnum[] | Prisma.FileScalarFieldEnum;
    having?: Prisma.FileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FileCountAggregateInputType | true;
    _avg?: FileAvgAggregateInputType;
    _sum?: FileSumAggregateInputType;
    _min?: FileMinAggregateInputType;
    _max?: FileMaxAggregateInputType;
};
export type FileGroupByOutputType = {
    file_id: number;
    uploaded_by: string;
    title: string;
    file_type: $Enums.FileType;
    file_url: string;
    created_at: Date;
    updated_at: Date;
    _count: FileCountAggregateOutputType | null;
    _avg: FileAvgAggregateOutputType | null;
    _sum: FileSumAggregateOutputType | null;
    _min: FileMinAggregateOutputType | null;
    _max: FileMaxAggregateOutputType | null;
};
type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FileGroupByOutputType[P]>;
}>>;
export type FileWhereInput = {
    AND?: Prisma.FileWhereInput | Prisma.FileWhereInput[];
    OR?: Prisma.FileWhereInput[];
    NOT?: Prisma.FileWhereInput | Prisma.FileWhereInput[];
    file_id?: Prisma.IntFilter<"File"> | number;
    uploaded_by?: Prisma.StringFilter<"File"> | string;
    title?: Prisma.StringFilter<"File"> | string;
    file_type?: Prisma.EnumFileTypeFilter<"File"> | $Enums.FileType;
    file_url?: Prisma.StringFilter<"File"> | string;
    created_at?: Prisma.DateTimeFilter<"File"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"File"> | Date | string;
    uploader?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    messages?: Prisma.MessageListRelationFilter;
};
export type FileOrderByWithRelationInput = {
    file_id?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file_type?: Prisma.SortOrder;
    file_url?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    uploader?: Prisma.UserOrderByWithRelationInput;
    messages?: Prisma.MessageOrderByRelationAggregateInput;
};
export type FileWhereUniqueInput = Prisma.AtLeast<{
    file_id?: number;
    AND?: Prisma.FileWhereInput | Prisma.FileWhereInput[];
    OR?: Prisma.FileWhereInput[];
    NOT?: Prisma.FileWhereInput | Prisma.FileWhereInput[];
    uploaded_by?: Prisma.StringFilter<"File"> | string;
    title?: Prisma.StringFilter<"File"> | string;
    file_type?: Prisma.EnumFileTypeFilter<"File"> | $Enums.FileType;
    file_url?: Prisma.StringFilter<"File"> | string;
    created_at?: Prisma.DateTimeFilter<"File"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"File"> | Date | string;
    uploader?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    messages?: Prisma.MessageListRelationFilter;
}, "file_id">;
export type FileOrderByWithAggregationInput = {
    file_id?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file_type?: Prisma.SortOrder;
    file_url?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.FileCountOrderByAggregateInput;
    _avg?: Prisma.FileAvgOrderByAggregateInput;
    _max?: Prisma.FileMaxOrderByAggregateInput;
    _min?: Prisma.FileMinOrderByAggregateInput;
    _sum?: Prisma.FileSumOrderByAggregateInput;
};
export type FileScalarWhereWithAggregatesInput = {
    AND?: Prisma.FileScalarWhereWithAggregatesInput | Prisma.FileScalarWhereWithAggregatesInput[];
    OR?: Prisma.FileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FileScalarWhereWithAggregatesInput | Prisma.FileScalarWhereWithAggregatesInput[];
    file_id?: Prisma.IntWithAggregatesFilter<"File"> | number;
    uploaded_by?: Prisma.StringWithAggregatesFilter<"File"> | string;
    title?: Prisma.StringWithAggregatesFilter<"File"> | string;
    file_type?: Prisma.EnumFileTypeWithAggregatesFilter<"File"> | $Enums.FileType;
    file_url?: Prisma.StringWithAggregatesFilter<"File"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"File"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"File"> | Date | string;
};
export type FileCreateInput = {
    title: string;
    file_type: $Enums.FileType;
    file_url: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    uploader: Prisma.UserCreateNestedOneWithoutFiles_uploadedInput;
    messages?: Prisma.MessageCreateNestedManyWithoutFileInput;
};
export type FileUncheckedCreateInput = {
    file_id?: number;
    uploaded_by: string;
    title: string;
    file_type: $Enums.FileType;
    file_url: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutFileInput;
};
export type FileUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file_type?: Prisma.EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uploader?: Prisma.UserUpdateOneRequiredWithoutFiles_uploadedNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutFileNestedInput;
};
export type FileUncheckedUpdateInput = {
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    uploaded_by?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file_type?: Prisma.EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutFileNestedInput;
};
export type FileCreateManyInput = {
    file_id?: number;
    uploaded_by: string;
    title: string;
    file_type: $Enums.FileType;
    file_url: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type FileUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file_type?: Prisma.EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileUncheckedUpdateManyInput = {
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    uploaded_by?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file_type?: Prisma.EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileListRelationFilter = {
    every?: Prisma.FileWhereInput;
    some?: Prisma.FileWhereInput;
    none?: Prisma.FileWhereInput;
};
export type FileOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FileNullableScalarRelationFilter = {
    is?: Prisma.FileWhereInput | null;
    isNot?: Prisma.FileWhereInput | null;
};
export type FileCountOrderByAggregateInput = {
    file_id?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file_type?: Prisma.SortOrder;
    file_url?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type FileAvgOrderByAggregateInput = {
    file_id?: Prisma.SortOrder;
};
export type FileMaxOrderByAggregateInput = {
    file_id?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file_type?: Prisma.SortOrder;
    file_url?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type FileMinOrderByAggregateInput = {
    file_id?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file_type?: Prisma.SortOrder;
    file_url?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type FileSumOrderByAggregateInput = {
    file_id?: Prisma.SortOrder;
};
export type FileCreateNestedManyWithoutUploaderInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutUploaderInput, Prisma.FileUncheckedCreateWithoutUploaderInput> | Prisma.FileCreateWithoutUploaderInput[] | Prisma.FileUncheckedCreateWithoutUploaderInput[];
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutUploaderInput | Prisma.FileCreateOrConnectWithoutUploaderInput[];
    createMany?: Prisma.FileCreateManyUploaderInputEnvelope;
    connect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
};
export type FileUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutUploaderInput, Prisma.FileUncheckedCreateWithoutUploaderInput> | Prisma.FileCreateWithoutUploaderInput[] | Prisma.FileUncheckedCreateWithoutUploaderInput[];
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutUploaderInput | Prisma.FileCreateOrConnectWithoutUploaderInput[];
    createMany?: Prisma.FileCreateManyUploaderInputEnvelope;
    connect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
};
export type FileUpdateManyWithoutUploaderNestedInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutUploaderInput, Prisma.FileUncheckedCreateWithoutUploaderInput> | Prisma.FileCreateWithoutUploaderInput[] | Prisma.FileUncheckedCreateWithoutUploaderInput[];
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutUploaderInput | Prisma.FileCreateOrConnectWithoutUploaderInput[];
    upsert?: Prisma.FileUpsertWithWhereUniqueWithoutUploaderInput | Prisma.FileUpsertWithWhereUniqueWithoutUploaderInput[];
    createMany?: Prisma.FileCreateManyUploaderInputEnvelope;
    set?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    disconnect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    delete?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    connect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    update?: Prisma.FileUpdateWithWhereUniqueWithoutUploaderInput | Prisma.FileUpdateWithWhereUniqueWithoutUploaderInput[];
    updateMany?: Prisma.FileUpdateManyWithWhereWithoutUploaderInput | Prisma.FileUpdateManyWithWhereWithoutUploaderInput[];
    deleteMany?: Prisma.FileScalarWhereInput | Prisma.FileScalarWhereInput[];
};
export type FileUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutUploaderInput, Prisma.FileUncheckedCreateWithoutUploaderInput> | Prisma.FileCreateWithoutUploaderInput[] | Prisma.FileUncheckedCreateWithoutUploaderInput[];
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutUploaderInput | Prisma.FileCreateOrConnectWithoutUploaderInput[];
    upsert?: Prisma.FileUpsertWithWhereUniqueWithoutUploaderInput | Prisma.FileUpsertWithWhereUniqueWithoutUploaderInput[];
    createMany?: Prisma.FileCreateManyUploaderInputEnvelope;
    set?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    disconnect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    delete?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    connect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    update?: Prisma.FileUpdateWithWhereUniqueWithoutUploaderInput | Prisma.FileUpdateWithWhereUniqueWithoutUploaderInput[];
    updateMany?: Prisma.FileUpdateManyWithWhereWithoutUploaderInput | Prisma.FileUpdateManyWithWhereWithoutUploaderInput[];
    deleteMany?: Prisma.FileScalarWhereInput | Prisma.FileScalarWhereInput[];
};
export type FileCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutMessagesInput, Prisma.FileUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.FileWhereUniqueInput;
};
export type FileUpdateOneWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutMessagesInput, Prisma.FileUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.FileUpsertWithoutMessagesInput;
    disconnect?: Prisma.FileWhereInput | boolean;
    delete?: Prisma.FileWhereInput | boolean;
    connect?: Prisma.FileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FileUpdateToOneWithWhereWithoutMessagesInput, Prisma.FileUpdateWithoutMessagesInput>, Prisma.FileUncheckedUpdateWithoutMessagesInput>;
};
export type EnumFileTypeFieldUpdateOperationsInput = {
    set?: $Enums.FileType;
};
export type FileCreateWithoutUploaderInput = {
    title: string;
    file_type: $Enums.FileType;
    file_url: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    messages?: Prisma.MessageCreateNestedManyWithoutFileInput;
};
export type FileUncheckedCreateWithoutUploaderInput = {
    file_id?: number;
    title: string;
    file_type: $Enums.FileType;
    file_url: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutFileInput;
};
export type FileCreateOrConnectWithoutUploaderInput = {
    where: Prisma.FileWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileCreateWithoutUploaderInput, Prisma.FileUncheckedCreateWithoutUploaderInput>;
};
export type FileCreateManyUploaderInputEnvelope = {
    data: Prisma.FileCreateManyUploaderInput | Prisma.FileCreateManyUploaderInput[];
    skipDuplicates?: boolean;
};
export type FileUpsertWithWhereUniqueWithoutUploaderInput = {
    where: Prisma.FileWhereUniqueInput;
    update: Prisma.XOR<Prisma.FileUpdateWithoutUploaderInput, Prisma.FileUncheckedUpdateWithoutUploaderInput>;
    create: Prisma.XOR<Prisma.FileCreateWithoutUploaderInput, Prisma.FileUncheckedCreateWithoutUploaderInput>;
};
export type FileUpdateWithWhereUniqueWithoutUploaderInput = {
    where: Prisma.FileWhereUniqueInput;
    data: Prisma.XOR<Prisma.FileUpdateWithoutUploaderInput, Prisma.FileUncheckedUpdateWithoutUploaderInput>;
};
export type FileUpdateManyWithWhereWithoutUploaderInput = {
    where: Prisma.FileScalarWhereInput;
    data: Prisma.XOR<Prisma.FileUpdateManyMutationInput, Prisma.FileUncheckedUpdateManyWithoutUploaderInput>;
};
export type FileScalarWhereInput = {
    AND?: Prisma.FileScalarWhereInput | Prisma.FileScalarWhereInput[];
    OR?: Prisma.FileScalarWhereInput[];
    NOT?: Prisma.FileScalarWhereInput | Prisma.FileScalarWhereInput[];
    file_id?: Prisma.IntFilter<"File"> | number;
    uploaded_by?: Prisma.StringFilter<"File"> | string;
    title?: Prisma.StringFilter<"File"> | string;
    file_type?: Prisma.EnumFileTypeFilter<"File"> | $Enums.FileType;
    file_url?: Prisma.StringFilter<"File"> | string;
    created_at?: Prisma.DateTimeFilter<"File"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"File"> | Date | string;
};
export type FileCreateWithoutMessagesInput = {
    title: string;
    file_type: $Enums.FileType;
    file_url: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    uploader: Prisma.UserCreateNestedOneWithoutFiles_uploadedInput;
};
export type FileUncheckedCreateWithoutMessagesInput = {
    file_id?: number;
    uploaded_by: string;
    title: string;
    file_type: $Enums.FileType;
    file_url: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type FileCreateOrConnectWithoutMessagesInput = {
    where: Prisma.FileWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileCreateWithoutMessagesInput, Prisma.FileUncheckedCreateWithoutMessagesInput>;
};
export type FileUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.FileUpdateWithoutMessagesInput, Prisma.FileUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.FileCreateWithoutMessagesInput, Prisma.FileUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.FileWhereInput;
};
export type FileUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.FileWhereInput;
    data: Prisma.XOR<Prisma.FileUpdateWithoutMessagesInput, Prisma.FileUncheckedUpdateWithoutMessagesInput>;
};
export type FileUpdateWithoutMessagesInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file_type?: Prisma.EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uploader?: Prisma.UserUpdateOneRequiredWithoutFiles_uploadedNestedInput;
};
export type FileUncheckedUpdateWithoutMessagesInput = {
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    uploaded_by?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file_type?: Prisma.EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileCreateManyUploaderInput = {
    file_id?: number;
    title: string;
    file_type: $Enums.FileType;
    file_url: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type FileUpdateWithoutUploaderInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file_type?: Prisma.EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessageUpdateManyWithoutFileNestedInput;
};
export type FileUncheckedUpdateWithoutUploaderInput = {
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file_type?: Prisma.EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutFileNestedInput;
};
export type FileUncheckedUpdateManyWithoutUploaderInput = {
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file_type?: Prisma.EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileCountOutputType = {
    messages: number;
};
export type FileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | FileCountOutputTypeCountMessagesArgs;
};
export type FileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileCountOutputTypeSelect<ExtArgs> | null;
};
export type FileCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
};
export type FileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    file_id?: boolean;
    uploaded_by?: boolean;
    title?: boolean;
    file_type?: boolean;
    file_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    uploader?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    messages?: boolean | Prisma.File$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.FileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["file"]>;
export type FileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    file_id?: boolean;
    uploaded_by?: boolean;
    title?: boolean;
    file_type?: boolean;
    file_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    uploader?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["file"]>;
export type FileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    file_id?: boolean;
    uploaded_by?: boolean;
    title?: boolean;
    file_type?: boolean;
    file_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    uploader?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["file"]>;
export type FileSelectScalar = {
    file_id?: boolean;
    uploaded_by?: boolean;
    title?: boolean;
    file_type?: boolean;
    file_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type FileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"file_id" | "uploaded_by" | "title" | "file_type" | "file_url" | "created_at" | "updated_at", ExtArgs["result"]["file"]>;
export type FileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    uploader?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    messages?: boolean | Prisma.File$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.FileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    uploader?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    uploader?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $FilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "File";
    objects: {
        uploader: Prisma.$UserPayload<ExtArgs>;
        messages: Prisma.$MessagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        file_id: number;
        uploaded_by: string;
        title: string;
        file_type: $Enums.FileType;
        file_url: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["file"]>;
    composites: {};
};
export type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FilePayload, S>;
export type FileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FileCountAggregateInputType | true;
};
export interface FileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['File'];
        meta: {
            name: 'File';
        };
    };
    findUnique<T extends FileFindUniqueArgs>(args: Prisma.SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FileFindFirstArgs>(args?: Prisma.SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FileFindManyArgs>(args?: Prisma.SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FileCreateArgs>(args: Prisma.SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FileCreateManyArgs>(args?: Prisma.SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FileDeleteArgs>(args: Prisma.SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FileUpdateArgs>(args: Prisma.SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FileDeleteManyArgs>(args?: Prisma.SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FileUpdateManyArgs>(args: Prisma.SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FileUpsertArgs>(args: Prisma.SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FileCountArgs>(args?: Prisma.Subset<T, FileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FileCountAggregateOutputType> : number>;
    aggregate<T extends FileAggregateArgs>(args: Prisma.Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>;
    groupBy<T extends FileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FileGroupByArgs['orderBy'];
    } : {
        orderBy?: FileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FileFieldRefs;
}
export interface Prisma__FileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    uploader<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    messages<T extends Prisma.File$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.File$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FileFieldRefs {
    readonly file_id: Prisma.FieldRef<"File", 'Int'>;
    readonly uploaded_by: Prisma.FieldRef<"File", 'String'>;
    readonly title: Prisma.FieldRef<"File", 'String'>;
    readonly file_type: Prisma.FieldRef<"File", 'FileType'>;
    readonly file_url: Prisma.FieldRef<"File", 'String'>;
    readonly created_at: Prisma.FieldRef<"File", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"File", 'DateTime'>;
}
export type FileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    where: Prisma.FileWhereUniqueInput;
};
export type FileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    where: Prisma.FileWhereUniqueInput;
};
export type FileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FileCreateInput, Prisma.FileUncheckedCreateInput>;
};
export type FileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FileCreateManyInput | Prisma.FileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    data: Prisma.FileCreateManyInput | Prisma.FileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FileUpdateInput, Prisma.FileUncheckedUpdateInput>;
    where: Prisma.FileWhereUniqueInput;
};
export type FileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FileUpdateManyMutationInput, Prisma.FileUncheckedUpdateManyInput>;
    where?: Prisma.FileWhereInput;
    limit?: number;
};
export type FileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FileUpdateManyMutationInput, Prisma.FileUncheckedUpdateManyInput>;
    where?: Prisma.FileWhereInput;
    limit?: number;
    include?: Prisma.FileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    where: Prisma.FileWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileCreateInput, Prisma.FileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FileUpdateInput, Prisma.FileUncheckedUpdateInput>;
};
export type FileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    where: Prisma.FileWhereUniqueInput;
};
export type FileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileWhereInput;
    limit?: number;
};
export type File$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
};
export {};
