import type { AppFile } from "@/models/file";
import { Button, Tag } from "antd";
import { Download, FileIcon } from "lucide-react";
import type { ColumnType } from "antd/es/table";

export const getFileColumns = (
  currentUserId: string,
): ColumnType<AppFile>[] => [
  {
    title: "File Name",
    dataIndex: "title",
    key: "title",
    render: (title: string) => (
      <div className="flex items-center gap-2">
        <FileIcon size={14} className="text-neutral-400 shrink-0" />
        <span className="text-sm font-medium text-neutral-800 truncate max-w-48">
          {title}
        </span>
      </div>
    ),
  },
  {
    title: "Type",
    dataIndex: "file_type",
    key: "file_type",
    width: 100,
    ellipsis: true,
    render: (type: string) =>
      type ? (
        <Tag className="text-xs truncate max-w-20">
          {type.split("/")[1]?.toUpperCase() ?? type}
        </Tag>
      ) : (
        <span className="text-neutral-400 text-xs">—</span>
      ),
  },
  {
    title: "Owner",
    key: "owner",
    render: (_: any, record: AppFile) => {
      if (!record.uploader)
        return <span className="text-neutral-400 text-xs">—</span>;
      const isMe = record.uploader.user_id === currentUserId;
      return (
        <span className="text-sm text-neutral-700">
          {isMe
            ? "Me"
            : `${record.uploader.first_name} ${record.uploader.last_name}`}
        </span>
      );
    },
  },
  {
    title: "Shared By",
    key: "shared_by",
    render: (_: any, record: AppFile) => {
      const sender = record.messages?.[0]?.sender;
      if (!sender) return <span className="text-neutral-400 text-xs">—</span>;
      const isMe = sender.user_id === currentUserId;
      return (
        <span className="text-sm text-neutral-700">
          {isMe ? "Me" : `${sender.first_name} ${sender.last_name}`}
        </span>
      );
    },
  },
  {
    title: "Date",
    dataIndex: "created_at",
    key: "created_at",
    render: (date: string) => (
      <span className="text-sm text-neutral-500">
        {new Date(date).toLocaleDateString([], {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </span>
    ),
  },
  {
    title: "",
    key: "actions",
    render: (_: any, record: AppFile) => (
      <Button
        size="small"
        icon={<Download size={13} />}
        href={record.download_url}
        target="_blank"
      >
        Download
      </Button>
    ),
  },
];

export const getFileMobileColumns = (
  currentUserId: string,
): ColumnType<AppFile>[] => [
  {
    title: "File",
    key: "title",
    render: (_: any, record: AppFile) => (
      <div className="flex items-center gap-2">
        <FileIcon size={13} className="text-neutral-400" />
        <span className="text-sm font-medium truncate max-w-32">
          {record.title}
        </span>
      </div>
    ),
  },
  {
    title: "Owner",
    key: "owner",
    render: (_: any, record: AppFile) => {
      if (!record.uploader) return "—";
      const isMe = record.uploader.user_id === currentUserId;
      return isMe
        ? "Me"
        : `${record.uploader.first_name} ${record.uploader.last_name}`;
    },
  },
  {
    title: "Date",
    dataIndex: "created_at",
    key: "created_at",
    render: (date: string) =>
      new Date(date).toLocaleDateString([], { day: "numeric", month: "short" }),
  },
];
