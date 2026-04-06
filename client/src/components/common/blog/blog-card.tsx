import type { BlogPost } from "@/services/common/blog";

interface BlogCardProps {
  post: BlogPost;
  currentUserId?: string;
  onClick?: (post: BlogPost) => void;
  onNavigate?: (post: BlogPost) => void;
}

export function BlogCard({
  post,
  currentUserId,
  onClick,
  onNavigate,
}: BlogCardProps) {
  const isOwner = post.author_id === currentUserId;

  return (
    <div
      className="border rounded-xl p-4 bg-white shadow-sm flex flex-col gap-2 cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => (isOwner ? onClick?.(post) : onNavigate?.(post))}
    >
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-sm font-semibold text-neutral-800 line-clamp-2">
          {post.title}
        </h2>
        {post.author_id === currentUserId && (
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full shrink-0">
            Mine
          </span>
        )}
      </div>
      <p className="text-xs text-muted-foreground line-clamp-2">
        {post.summary}
      </p>
      <div className="flex items-center justify-between mt-auto pt-2 border-t text-xs text-muted-foreground">
        <span>
          {post.author?.first_name} {post.author?.last_name}
        </span>
        <span>
          {post.published_at
            ? new Date(post.published_at).toLocaleDateString()
            : "Draft"}
        </span>
      </div>
    </div>
  );
}
