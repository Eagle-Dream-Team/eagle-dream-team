import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button, Input, Select } from "antd";
import { Plus } from "lucide-react";
import {
  getBlogs,
  getBlogAuthors,
  type BlogPost,
} from "@/services/common/blog";
import { getUser } from "@/services/auth";
import { BlogFormModal } from "@/components/common/blog/blog-form";
import { BlogCard } from "@/components/common/blog/blog-card";

export const Route = createFileRoute("/_protected/student/blogs/")({
  component: RouteComponent,
});

type BlogFilter = "all" | "mine";

function RouteComponent() {
  const user = getUser();
  const [filter, setFilter] = useState<BlogFilter>("all");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [authorId, setAuthorId] = useState<string | undefined>();
  const [authorSearch, setAuthorSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | undefined>();
  const navigate = useNavigate();
  const limit = 10;

  const { data, isLoading } = useQuery({
    queryKey: [
      "blogs",
      {
        page,
        limit,
        search,
        authorId: filter === "mine" ? user?.sub : authorId,
      },
    ],
    queryFn: () =>
      getBlogs({
        page,
        limit,
        search: search || undefined,
        author_id: filter === "mine" ? user?.sub : authorId,
      }),
  });

  const { data: authorsData } = useQuery({
    queryKey: ["blog-authors", authorSearch],
    queryFn: () => getBlogAuthors({ search: authorSearch, limit: 20 }),
    enabled: filter === "all",
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-base font-semibold text-neutral-800">Blog Posts</h1>
        <Button
          type="primary"
          icon={<Plus size={14} />}
          onClick={() => {
            setEditingPost(undefined);
            setModalOpen(true);
          }}
        >
          New Post
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        <Select
          value={filter}
          onChange={(val) => {
            setFilter(val);
            setAuthorId(undefined);
            setPage(1);
          }}
          options={[
            { label: "All Posts", value: "all" },
            { label: "My Posts", value: "mine" },
          ]}
          className="w-32"
        />
        {filter === "all" && (
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
        )}
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
              currentUserId={user?.sub}
              onClick={(post) => {
                setEditingPost(post);
                setModalOpen(true);
              }}
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

      <BlogFormModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditingPost(undefined);
        }}
        post={editingPost}
      />
    </div>
  );
}
