import { createBlog, editBlog, type BlogPost } from "@/services/common/blog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Modal } from "antd";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { toast } from "sonner";
import type { AxiosError } from "axios";

interface BlogFormModalProps {
  open: boolean;
  onClose: () => void;
  post?: BlogPost;
}

function MenuBar({ editor }: { editor: any }) {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap gap-1 mb-2 border-b pb-2">
      {[
        {
          label: "B",
          action: () => editor.chain().focus().toggleBold().run(),
          active: editor.isActive("bold"),
        },
        {
          label: "I",
          action: () => editor.chain().focus().toggleItalic().run(),
          active: editor.isActive("italic"),
        },
        {
          label: "S",
          action: () => editor.chain().focus().toggleStrike().run(),
          active: editor.isActive("strike"),
        },
        {
          label: "H1",
          action: () =>
            editor.chain().focus().toggleHeading({ level: 1 }).run(),
          active: editor.isActive("heading", { level: 1 }),
        },
        {
          label: "H2",
          action: () =>
            editor.chain().focus().toggleHeading({ level: 2 }).run(),
          active: editor.isActive("heading", { level: 2 }),
        },
        {
          label: "• List",
          action: () => editor.chain().focus().toggleBulletList().run(),
          active: editor.isActive("bulletList"),
        },
        {
          label: "1. List",
          action: () => editor.chain().focus().toggleOrderedList().run(),
          active: editor.isActive("orderedList"),
        },
      ].map(({ label, action, active }) => (
        <button
          key={label}
          type="button"
          onClick={action}
          className={`px-2 py-1 text-xs rounded border ${active ? "bg-neutral-800 text-white" : "bg-white text-neutral-700"}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function BlogFormModal({ open, onClose, post }: BlogFormModalProps) {
  const [form] = Form.useForm<{ title: string }>();
  const queryClient = useQueryClient();
  const isEditing = !!post;

  const editor = useEditor({
    extensions: [StarterKit],
    content: post?.content ?? "",
  });

  useEffect(() => {
    if (open) {
      form.setFieldsValue({ title: post?.title ?? "" });
      editor?.commands.setContent(post?.content ?? "");
    } else {
      form.resetFields();
      editor?.commands.clearContent();
    }
  }, [open, post]);

  const { mutate, isPending } = useMutation({
    mutationFn: (values: { title: string }) => {
      const content = editor?.getHTML() ?? "";
      if (isEditing)
        return editBlog(post.post_id, { title: values.title, content });
      return createBlog({ title: values.title, content });
    },
    onSuccess: () => {
      toast.success(isEditing ? "Post updated" : "Post published");
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      onClose();
    },
    onError: (error: AxiosError) => {
      toast.error(error.message || "Failed to save post");
    },
  });

  return (
    <Modal
      open={open}
      onCancel={onClose}
      title={isEditing ? "Edit Post" : "New Post"}
      footer={null}
      width={700}
      destroyOnClose
    >
      <Form form={form} layout="vertical" onFinish={mutate}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please enter a title" }]}
        >
          <Input placeholder="Post title" disabled={isPending} />
        </Form.Item>

        <Form.Item label="Content" required>
          <div className="border rounded-lg p-3 min-h-[200px]">
            <MenuBar editor={editor} />
            <EditorContent
              editor={editor}
              className="prose prose-sm max-w-none min-h-[150px] focus:outline-none"
            />
          </div>
        </Form.Item>

        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={onClose} disabled={isPending}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" loading={isPending}>
            {isEditing ? "Save Changes" : "Publish"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
