import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BlogPostModel = runtime.Types.Result.DefaultSelection<Prisma.$BlogPostPayload>;
export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null;
    _avg: BlogPostAvgAggregateOutputType | null;
    _sum: BlogPostSumAggregateOutputType | null;
    _min: BlogPostMinAggregateOutputType | null;
    _max: BlogPostMaxAggregateOutputType | null;
};
export type BlogPostAvgAggregateOutputType = {
    post_id: number | null;
};
export type BlogPostSumAggregateOutputType = {
    post_id: number | null;
};
export type BlogPostMinAggregateOutputType = {
    post_id: number | null;
    author_id: string | null;
    title: string | null;
    content: string | null;
    is_published: boolean | null;
    published_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type BlogPostMaxAggregateOutputType = {
    post_id: number | null;
    author_id: string | null;
    title: string | null;
    content: string | null;
    is_published: boolean | null;
    published_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type BlogPostCountAggregateOutputType = {
    post_id: number;
    author_id: number;
    title: number;
    content: number;
    is_published: number;
    published_at: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type BlogPostAvgAggregateInputType = {
    post_id?: true;
};
export type BlogPostSumAggregateInputType = {
    post_id?: true;
};
export type BlogPostMinAggregateInputType = {
    post_id?: true;
    author_id?: true;
    title?: true;
    content?: true;
    is_published?: true;
    published_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type BlogPostMaxAggregateInputType = {
    post_id?: true;
    author_id?: true;
    title?: true;
    content?: true;
    is_published?: true;
    published_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type BlogPostCountAggregateInputType = {
    post_id?: true;
    author_id?: true;
    title?: true;
    content?: true;
    is_published?: true;
    published_at?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type BlogPostAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogPostWhereInput;
    orderBy?: Prisma.BlogPostOrderByWithRelationInput | Prisma.BlogPostOrderByWithRelationInput[];
    cursor?: Prisma.BlogPostWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BlogPostCountAggregateInputType;
    _avg?: BlogPostAvgAggregateInputType;
    _sum?: BlogPostSumAggregateInputType;
    _min?: BlogPostMinAggregateInputType;
    _max?: BlogPostMaxAggregateInputType;
};
export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
    [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBlogPost[P]> : Prisma.GetScalarType<T[P], AggregateBlogPost[P]>;
};
export type BlogPostGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogPostWhereInput;
    orderBy?: Prisma.BlogPostOrderByWithAggregationInput | Prisma.BlogPostOrderByWithAggregationInput[];
    by: Prisma.BlogPostScalarFieldEnum[] | Prisma.BlogPostScalarFieldEnum;
    having?: Prisma.BlogPostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BlogPostCountAggregateInputType | true;
    _avg?: BlogPostAvgAggregateInputType;
    _sum?: BlogPostSumAggregateInputType;
    _min?: BlogPostMinAggregateInputType;
    _max?: BlogPostMaxAggregateInputType;
};
export type BlogPostGroupByOutputType = {
    post_id: number;
    author_id: string;
    title: string;
    content: string;
    is_published: boolean;
    published_at: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: BlogPostCountAggregateOutputType | null;
    _avg: BlogPostAvgAggregateOutputType | null;
    _sum: BlogPostSumAggregateOutputType | null;
    _min: BlogPostMinAggregateOutputType | null;
    _max: BlogPostMaxAggregateOutputType | null;
};
type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BlogPostGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BlogPostGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BlogPostGroupByOutputType[P]>;
}>>;
export type BlogPostWhereInput = {
    AND?: Prisma.BlogPostWhereInput | Prisma.BlogPostWhereInput[];
    OR?: Prisma.BlogPostWhereInput[];
    NOT?: Prisma.BlogPostWhereInput | Prisma.BlogPostWhereInput[];
    post_id?: Prisma.IntFilter<"BlogPost"> | number;
    author_id?: Prisma.StringFilter<"BlogPost"> | string;
    title?: Prisma.StringFilter<"BlogPost"> | string;
    content?: Prisma.StringFilter<"BlogPost"> | string;
    is_published?: Prisma.BoolFilter<"BlogPost"> | boolean;
    published_at?: Prisma.DateTimeNullableFilter<"BlogPost"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"BlogPost"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"BlogPost"> | Date | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type BlogPostOrderByWithRelationInput = {
    post_id?: Prisma.SortOrder;
    author_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    is_published?: Prisma.SortOrder;
    published_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    author?: Prisma.UserOrderByWithRelationInput;
};
export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    post_id?: number;
    AND?: Prisma.BlogPostWhereInput | Prisma.BlogPostWhereInput[];
    OR?: Prisma.BlogPostWhereInput[];
    NOT?: Prisma.BlogPostWhereInput | Prisma.BlogPostWhereInput[];
    author_id?: Prisma.StringFilter<"BlogPost"> | string;
    title?: Prisma.StringFilter<"BlogPost"> | string;
    content?: Prisma.StringFilter<"BlogPost"> | string;
    is_published?: Prisma.BoolFilter<"BlogPost"> | boolean;
    published_at?: Prisma.DateTimeNullableFilter<"BlogPost"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"BlogPost"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"BlogPost"> | Date | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "post_id">;
export type BlogPostOrderByWithAggregationInput = {
    post_id?: Prisma.SortOrder;
    author_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    is_published?: Prisma.SortOrder;
    published_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.BlogPostCountOrderByAggregateInput;
    _avg?: Prisma.BlogPostAvgOrderByAggregateInput;
    _max?: Prisma.BlogPostMaxOrderByAggregateInput;
    _min?: Prisma.BlogPostMinOrderByAggregateInput;
    _sum?: Prisma.BlogPostSumOrderByAggregateInput;
};
export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: Prisma.BlogPostScalarWhereWithAggregatesInput | Prisma.BlogPostScalarWhereWithAggregatesInput[];
    OR?: Prisma.BlogPostScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BlogPostScalarWhereWithAggregatesInput | Prisma.BlogPostScalarWhereWithAggregatesInput[];
    post_id?: Prisma.IntWithAggregatesFilter<"BlogPost"> | number;
    author_id?: Prisma.StringWithAggregatesFilter<"BlogPost"> | string;
    title?: Prisma.StringWithAggregatesFilter<"BlogPost"> | string;
    content?: Prisma.StringWithAggregatesFilter<"BlogPost"> | string;
    is_published?: Prisma.BoolWithAggregatesFilter<"BlogPost"> | boolean;
    published_at?: Prisma.DateTimeNullableWithAggregatesFilter<"BlogPost"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"BlogPost"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"BlogPost"> | Date | string;
};
export type BlogPostCreateInput = {
    title: string;
    content: string;
    is_published?: boolean;
    published_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutBlog_postsInput;
};
export type BlogPostUncheckedCreateInput = {
    post_id?: number;
    author_id: string;
    title: string;
    content: string;
    is_published?: boolean;
    published_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type BlogPostUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    published_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutBlog_postsNestedInput;
};
export type BlogPostUncheckedUpdateInput = {
    post_id?: Prisma.IntFieldUpdateOperationsInput | number;
    author_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    published_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlogPostCreateManyInput = {
    post_id?: number;
    author_id: string;
    title: string;
    content: string;
    is_published?: boolean;
    published_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type BlogPostUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    published_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlogPostUncheckedUpdateManyInput = {
    post_id?: Prisma.IntFieldUpdateOperationsInput | number;
    author_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    published_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlogPostListRelationFilter = {
    every?: Prisma.BlogPostWhereInput;
    some?: Prisma.BlogPostWhereInput;
    none?: Prisma.BlogPostWhereInput;
};
export type BlogPostOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BlogPostCountOrderByAggregateInput = {
    post_id?: Prisma.SortOrder;
    author_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    is_published?: Prisma.SortOrder;
    published_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type BlogPostAvgOrderByAggregateInput = {
    post_id?: Prisma.SortOrder;
};
export type BlogPostMaxOrderByAggregateInput = {
    post_id?: Prisma.SortOrder;
    author_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    is_published?: Prisma.SortOrder;
    published_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type BlogPostMinOrderByAggregateInput = {
    post_id?: Prisma.SortOrder;
    author_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    is_published?: Prisma.SortOrder;
    published_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type BlogPostSumOrderByAggregateInput = {
    post_id?: Prisma.SortOrder;
};
export type BlogPostCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.BlogPostCreateWithoutAuthorInput, Prisma.BlogPostUncheckedCreateWithoutAuthorInput> | Prisma.BlogPostCreateWithoutAuthorInput[] | Prisma.BlogPostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.BlogPostCreateOrConnectWithoutAuthorInput | Prisma.BlogPostCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.BlogPostCreateManyAuthorInputEnvelope;
    connect?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
};
export type BlogPostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.BlogPostCreateWithoutAuthorInput, Prisma.BlogPostUncheckedCreateWithoutAuthorInput> | Prisma.BlogPostCreateWithoutAuthorInput[] | Prisma.BlogPostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.BlogPostCreateOrConnectWithoutAuthorInput | Prisma.BlogPostCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.BlogPostCreateManyAuthorInputEnvelope;
    connect?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
};
export type BlogPostUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.BlogPostCreateWithoutAuthorInput, Prisma.BlogPostUncheckedCreateWithoutAuthorInput> | Prisma.BlogPostCreateWithoutAuthorInput[] | Prisma.BlogPostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.BlogPostCreateOrConnectWithoutAuthorInput | Prisma.BlogPostCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.BlogPostUpsertWithWhereUniqueWithoutAuthorInput | Prisma.BlogPostUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.BlogPostCreateManyAuthorInputEnvelope;
    set?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    disconnect?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    delete?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    connect?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    update?: Prisma.BlogPostUpdateWithWhereUniqueWithoutAuthorInput | Prisma.BlogPostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.BlogPostUpdateManyWithWhereWithoutAuthorInput | Prisma.BlogPostUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.BlogPostScalarWhereInput | Prisma.BlogPostScalarWhereInput[];
};
export type BlogPostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.BlogPostCreateWithoutAuthorInput, Prisma.BlogPostUncheckedCreateWithoutAuthorInput> | Prisma.BlogPostCreateWithoutAuthorInput[] | Prisma.BlogPostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.BlogPostCreateOrConnectWithoutAuthorInput | Prisma.BlogPostCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.BlogPostUpsertWithWhereUniqueWithoutAuthorInput | Prisma.BlogPostUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.BlogPostCreateManyAuthorInputEnvelope;
    set?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    disconnect?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    delete?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    connect?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    update?: Prisma.BlogPostUpdateWithWhereUniqueWithoutAuthorInput | Prisma.BlogPostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.BlogPostUpdateManyWithWhereWithoutAuthorInput | Prisma.BlogPostUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.BlogPostScalarWhereInput | Prisma.BlogPostScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type BlogPostCreateWithoutAuthorInput = {
    title: string;
    content: string;
    is_published?: boolean;
    published_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type BlogPostUncheckedCreateWithoutAuthorInput = {
    post_id?: number;
    title: string;
    content: string;
    is_published?: boolean;
    published_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type BlogPostCreateOrConnectWithoutAuthorInput = {
    where: Prisma.BlogPostWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlogPostCreateWithoutAuthorInput, Prisma.BlogPostUncheckedCreateWithoutAuthorInput>;
};
export type BlogPostCreateManyAuthorInputEnvelope = {
    data: Prisma.BlogPostCreateManyAuthorInput | Prisma.BlogPostCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type BlogPostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.BlogPostWhereUniqueInput;
    update: Prisma.XOR<Prisma.BlogPostUpdateWithoutAuthorInput, Prisma.BlogPostUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.BlogPostCreateWithoutAuthorInput, Prisma.BlogPostUncheckedCreateWithoutAuthorInput>;
};
export type BlogPostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.BlogPostWhereUniqueInput;
    data: Prisma.XOR<Prisma.BlogPostUpdateWithoutAuthorInput, Prisma.BlogPostUncheckedUpdateWithoutAuthorInput>;
};
export type BlogPostUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.BlogPostScalarWhereInput;
    data: Prisma.XOR<Prisma.BlogPostUpdateManyMutationInput, Prisma.BlogPostUncheckedUpdateManyWithoutAuthorInput>;
};
export type BlogPostScalarWhereInput = {
    AND?: Prisma.BlogPostScalarWhereInput | Prisma.BlogPostScalarWhereInput[];
    OR?: Prisma.BlogPostScalarWhereInput[];
    NOT?: Prisma.BlogPostScalarWhereInput | Prisma.BlogPostScalarWhereInput[];
    post_id?: Prisma.IntFilter<"BlogPost"> | number;
    author_id?: Prisma.StringFilter<"BlogPost"> | string;
    title?: Prisma.StringFilter<"BlogPost"> | string;
    content?: Prisma.StringFilter<"BlogPost"> | string;
    is_published?: Prisma.BoolFilter<"BlogPost"> | boolean;
    published_at?: Prisma.DateTimeNullableFilter<"BlogPost"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"BlogPost"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"BlogPost"> | Date | string;
};
export type BlogPostCreateManyAuthorInput = {
    post_id?: number;
    title: string;
    content: string;
    is_published?: boolean;
    published_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type BlogPostUpdateWithoutAuthorInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    published_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlogPostUncheckedUpdateWithoutAuthorInput = {
    post_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    published_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlogPostUncheckedUpdateManyWithoutAuthorInput = {
    post_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    published_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlogPostSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    post_id?: boolean;
    author_id?: boolean;
    title?: boolean;
    content?: boolean;
    is_published?: boolean;
    published_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["blogPost"]>;
export type BlogPostSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    post_id?: boolean;
    author_id?: boolean;
    title?: boolean;
    content?: boolean;
    is_published?: boolean;
    published_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["blogPost"]>;
export type BlogPostSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    post_id?: boolean;
    author_id?: boolean;
    title?: boolean;
    content?: boolean;
    is_published?: boolean;
    published_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["blogPost"]>;
export type BlogPostSelectScalar = {
    post_id?: boolean;
    author_id?: boolean;
    title?: boolean;
    content?: boolean;
    is_published?: boolean;
    published_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type BlogPostOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"post_id" | "author_id" | "title" | "content" | "is_published" | "published_at" | "created_at" | "updated_at", ExtArgs["result"]["blogPost"]>;
export type BlogPostInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BlogPostIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BlogPostIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $BlogPostPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BlogPost";
    objects: {
        author: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        post_id: number;
        author_id: string;
        title: string;
        content: string;
        is_published: boolean;
        published_at: Date | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["blogPost"]>;
    composites: {};
};
export type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BlogPostPayload, S>;
export type BlogPostCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BlogPostCountAggregateInputType | true;
};
export interface BlogPostDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'];
        meta: {
            name: 'BlogPost';
        };
    };
    findUnique<T extends BlogPostFindUniqueArgs>(args: Prisma.SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BlogPostClient<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlogPostClient<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BlogPostFindFirstArgs>(args?: Prisma.SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma.Prisma__BlogPostClient<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlogPostClient<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BlogPostFindManyArgs>(args?: Prisma.SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BlogPostCreateArgs>(args: Prisma.SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma.Prisma__BlogPostClient<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BlogPostCreateManyArgs>(args?: Prisma.SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BlogPostCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BlogPostDeleteArgs>(args: Prisma.SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma.Prisma__BlogPostClient<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BlogPostUpdateArgs>(args: Prisma.SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma.Prisma__BlogPostClient<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: Prisma.SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BlogPostUpdateManyArgs>(args: Prisma.SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BlogPostUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BlogPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BlogPostUpsertArgs>(args: Prisma.SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma.Prisma__BlogPostClient<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BlogPostCountArgs>(args?: Prisma.Subset<T, BlogPostCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BlogPostCountAggregateOutputType> : number>;
    aggregate<T extends BlogPostAggregateArgs>(args: Prisma.Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>;
    groupBy<T extends BlogPostGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BlogPostGroupByArgs['orderBy'];
    } : {
        orderBy?: BlogPostGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BlogPostFieldRefs;
}
export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BlogPostFieldRefs {
    readonly post_id: Prisma.FieldRef<"BlogPost", 'Int'>;
    readonly author_id: Prisma.FieldRef<"BlogPost", 'String'>;
    readonly title: Prisma.FieldRef<"BlogPost", 'String'>;
    readonly content: Prisma.FieldRef<"BlogPost", 'String'>;
    readonly is_published: Prisma.FieldRef<"BlogPost", 'Boolean'>;
    readonly published_at: Prisma.FieldRef<"BlogPost", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"BlogPost", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"BlogPost", 'DateTime'>;
}
export type BlogPostFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
    where: Prisma.BlogPostWhereUniqueInput;
};
export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
    where: Prisma.BlogPostWhereUniqueInput;
};
export type BlogPostFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BlogPostFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BlogPostFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BlogPostCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlogPostCreateInput, Prisma.BlogPostUncheckedCreateInput>;
};
export type BlogPostCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BlogPostCreateManyInput | Prisma.BlogPostCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BlogPostCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    data: Prisma.BlogPostCreateManyInput | Prisma.BlogPostCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BlogPostIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BlogPostUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlogPostUpdateInput, Prisma.BlogPostUncheckedUpdateInput>;
    where: Prisma.BlogPostWhereUniqueInput;
};
export type BlogPostUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BlogPostUpdateManyMutationInput, Prisma.BlogPostUncheckedUpdateManyInput>;
    where?: Prisma.BlogPostWhereInput;
    limit?: number;
};
export type BlogPostUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlogPostUpdateManyMutationInput, Prisma.BlogPostUncheckedUpdateManyInput>;
    where?: Prisma.BlogPostWhereInput;
    limit?: number;
    include?: Prisma.BlogPostIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BlogPostUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
    where: Prisma.BlogPostWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlogPostCreateInput, Prisma.BlogPostUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BlogPostUpdateInput, Prisma.BlogPostUncheckedUpdateInput>;
};
export type BlogPostDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
    where: Prisma.BlogPostWhereUniqueInput;
};
export type BlogPostDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogPostWhereInput;
    limit?: number;
};
export type BlogPostDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
};
export {};
