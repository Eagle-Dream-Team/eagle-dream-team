import { getBlog } from "@/services/common/blog";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, useParams } from "@tanstack/react-router";
import { Spin } from "antd";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/blog/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = useParams({ from: "/_protected/blog/$postId" });
  const navigate = useNavigate();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog", postId],
    queryFn: () => getBlog(Number(postId)),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Spin size="large" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center py-12">
        <p className="text-muted-foreground">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-6">
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-neutral-800 w-fit"
      >
        <ArrowLeft size={14} /> Back
      </button>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-neutral-900">{post.title}</h1>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>
            By {post.author?.first_name} {post.author?.last_name}
          </span>
          <span>·</span>
          <span>
            Published{" "}
            {post.published_at
              ? new Date(post.published_at).toLocaleDateString()
              : "—"}
          </span>
          {post.updated_at !== post.created_at && (
            <>
              <span>·</span>
              <span>
                Updated {new Date(post.updated_at).toLocaleDateString()}
              </span>
            </>
          )}
        </div>
      </div>

      <div
        className="prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
