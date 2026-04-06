import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Input, Select } from "antd";
import { getBlogs, getBlogAuthors } from "@/services/common/blog";
import { BlogCard } from "@/components/common/blog/blog-card";
import { Button } from "antd";

export const Route = createFileRoute("/_protected/staff/blogs/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [authorId, setAuthorId] = useState<string | undefined>();
  const [authorSearch, setAuthorSearch] = useState("");
  const navigate = useNavigate();
  const limit = 10;

  const { data, isLoading } = useQuery({
    queryKey: ["blogs", { page, limit, search, authorId }],
    queryFn: () =>
      getBlogs({
        page,
        limit,
        search: search || undefined,
        author_id: authorId,
      }),
  });

  const { data: authorsData } = useQuery({
    queryKey: ["blog-authors", authorSearch],
    queryFn: () => getBlogAuthors({ search: authorSearch, limit: 20 }),
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-base font-semibold text-neutral-800">Blog Posts</h1>
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        <Select
          allowClear
          showSearch
          placeholder="Filter by author"
          filterOption={false}
          onSearch={setAuthorSearch}
          onChange={(val) => {
            setAuthorId(val);
            setPage(1);
          }}
          options={authorsData?.data.map((a) => ({
            label: `${a.first_name} ${a.last_name}`,
            value: a.user_id,
          }))}
          className="w-48"
        />
        <Input.Search
          placeholder="Search by title..."
          allowClear
          onSearch={(val) => {
            setSearch(val);
            setPage(1);
          }}
          className="w-56"
        />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="border rounded-xl p-4 bg-white animate-pulse h-32"
            />
          ))}
        </div>
      ) : data?.data.length === 0 ? (
        <p className="text-sm text-muted-foreground">No blog posts found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data?.data.map((post) => (
            <BlogCard
              key={post.post_id}
              post={post}
              onNavigate={(post) =>
                navigate({
                  to: "/blog/$postId",
                  params: { postId: String(post.post_id) },
                })
              }
            />
          ))}
        </div>
      )}

      {(data?.meta.totalPages ?? 0) > 1 && (
        <div className="flex justify-center gap-2">
          <Button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
            Prev
          </Button>
          <span className="text-sm text-muted-foreground self-center">
            Page {page} of {data?.meta.totalPages}
          </span>
          <Button
            disabled={page === data?.meta.totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
