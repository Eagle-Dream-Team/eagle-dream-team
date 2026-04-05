import { useState } from "react";
import { Modal, Upload, App } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UploadFile } from "antd/es/upload";
import { uploadFile } from "@/services/common/file";
import { UploadIcon } from "lucide-react";
import { toast } from "sonner";

const { Dragger } = Upload;

interface Props {
  open: boolean;
  onClose: () => void;
}

export function FileUploadModal({ open, onClose }: Props) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      await Promise.all(
        fileList
          .filter((f) => !!f.originFileObj)
          .map((f) => {
            console.log("uploading", f.originFileObj, f.name);
            const file = f.originFileObj as File;
            return uploadFile(file, f.name);
          }),
      );
    },
    onSuccess: () => {
      toast.success("Files uploaded successfully");
      queryClient.invalidateQueries({ queryKey: ["files"] });
      setFileList([]);
      onClose();
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message ?? "Upload failed");
    },
  });

  return (
    <Modal
      open={open}
      onCancel={() => {
        setFileList([]);
        onClose();
      }}
      title="Upload Files"
      okText="Upload"
      onOk={() => fileList.length > 0 && mutate()}
      okButtonProps={{ loading: isPending, disabled: fileList.length === 0 }}
      destroyOnHidden
    >
      <div className="py-4">
        <Dragger
          multiple
          fileList={fileList}
          beforeUpload={() => false}
          onChange={({ fileList: newList }) => setFileList(newList)}
          onDrop={(e) => console.log("Dropped files", e.dataTransfer.files)}
        >
          <p className="ant-upload-drag-icon">
            <UploadIcon />
          </p>
          <p className="ant-upload-text">
            Click or drag files to this area to upload
          </p>
          <p className="ant-upload-hint">Supports single or bulk upload.</p>
        </Dragger>
      </div>
    </Modal>
  );
}
