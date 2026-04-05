import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { AppFile, FileFilter } from "@/models/file";
import { AppTable } from "@/components/common/app-table";
import { getFiles } from "@/services/common/file";
import { FileFilterSegment } from "@/components/common/file/file-filter";

import { Button, Upload } from "antd";
import { FileUploadModal } from "@/components/common/file/file-upload-modal";
import { getUser } from "@/services/auth";
import {
  getFileColumns,
  getFileMobileColumns,
} from "@/components/common/file/file-columns";

export const Route = createFileRoute("/_protected/tutor/files/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [filter, setFilter] = useState<FileFilter | undefined>(undefined);
  const [page, setPage] = useState(1);
  const limit = 10;
  const user = getUser();

  const [uploadOpen, setUploadOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["files", filter, page],
    queryFn: () => getFiles({ filter, page, limit }),
    retry: false,
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-base font-semibold text-neutral-800">Files</h1>
        <div className="flex items-center gap-2">
          <FileFilterSegment
            value={filter}
            onChange={(f) => {
              setPage(1);
              setFilter(f);
            }}
          />
          <Button icon={<Upload />} onClick={() => setUploadOpen(true)}>
            Upload
          </Button>
        </div>
      </div>

      <FileUploadModal open={uploadOpen} onClose={() => setUploadOpen(false)} />

      <AppTable<AppFile>
        columns={getFileColumns(user?.sub ?? "")}
        mobileColumns={getFileMobileColumns(user?.sub ?? "")}
        data={data?.data ?? []}
        loading={isLoading}
        scroll={{ x: "max-content" }}
        rowKey={(r) =>
          r.file_id != null ? String(r.file_id) : `skeleton-${Math.random()}`
        }
        pagination={{
          current: page,
          pageSize: limit,
          total: data?.meta.total ?? 0,
          onChange: (p) => setPage(p),
          showSizeChanger: false,
        }}
      />
    </div>
  );
}
