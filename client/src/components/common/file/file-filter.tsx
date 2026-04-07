import type { FileFilter } from "@/models/file";
import { Segmented } from "antd";

interface Props {
  value: FileFilter | undefined;
  onChange: (filter: FileFilter | undefined) => void;
}

export function FileFilterSegment({ value, onChange }: Props) {
  return (
    <Segmented
      size="small"
      value={value ?? "all"}
      onChange={(v) => onChange(v === "all" ? undefined : (v as FileFilter))}
      options={[
        { label: "All", value: "all" },
        { label: "My Files", value: "mine" },
        { label: "Received", value: "shared_with_me" },
      ]}
    />
  );
}
