import { Table, Skeleton } from "antd";
import type { TableProps, ColumnType } from "antd/es/table";
import type { Key } from "react";
import type { TableRowSelection } from "antd/es/table/interface";
import { useIsMobile } from "@/lib/windowSize";

interface AppTableProps<T> extends Omit<TableProps<T>, "columns"> {
  columns: ColumnType<T>[];
  mobileColumns?: ColumnType<T>[];
  data?: T[];
  loading?: boolean;
  onRowClick?: (record: T, index?: number) => void;
  className?: string;
  size?: "small" | "middle" | "large";
  bordered?: boolean;
  scroll?: { x?: string | number | true; y?: string | number };
  rowKey?: string | ((record: T) => string);
  rowSelectionEnabled?: boolean;
  checkboxWidth?: number;
  rowClassName?: string | ((record: T, index: number) => string);
  pagination?: TableProps<T>["pagination"];
  selectedRowKeys?: Key[];
  onSelectionChange?: (selectedRowKeys: Key[], selectedRows: T[]) => void;
}

const generateSkeletonData = <T,>(rowCount: number = 5): T[] => {
  return Array.from({ length: rowCount }, (_, index) => ({
    key: `skeleton-${index}`,
  })) as T[];
};

export function AppTable<T>({
  columns,
  mobileColumns,
  data = [],
  loading = false,
  onRowClick,
  onRow,
  //   className = "rounded-md border",
  className = "",
  size = "middle",
  bordered = false,
  scroll = { x: "max-content" },
  rowKey = (record: any) => record.key || record.id,
  rowClassName,
  pagination,
  rowSelectionEnabled = false,
  checkboxWidth = 48,
  selectedRowKeys,
  onSelectionChange,
  ...restProps
}: AppTableProps<T>) {
  const defaultRowClassName = (_record: T, index: number): string => {
    const baseClasses = "hover:cursor-pointer";
    const alternatingClass = index % 2 === 0 ? "" : "alternate-row";
    return `${baseClasses} ${alternatingClass}`;
  };

  const isMobile = useIsMobile();

  const displayColumns = loading
    ? columns.map((col) => ({
        ...col,
        render: () => <Skeleton.Input active size="small" block />,
      }))
    : columns;

  const rowSelection: TableRowSelection<T> | undefined = rowSelectionEnabled
    ? {
        type: "checkbox",
        columnWidth: checkboxWidth,
        selectedRowKeys: selectedRowKeys,
        onChange: (selectedRowKeys: Key[], selectedRows: T[]) => {
          onSelectionChange?.(selectedRowKeys, selectedRows);
        },
      }
    : undefined;

  if (mobileColumns && isMobile) {
    return (
      <div>
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="border rounded-xl p-4 mb-3 shadow-sm bg-white"
              >
                <Skeleton active paragraph={{ rows: 2 }} />
              </div>
            ))
          : data.map((record: T, index) => (
              <div
                key={
                  typeof rowKey === "function"
                    ? rowKey(record)
                    : (record as any)[rowKey ?? "id"]
                }
                onClick={() =>
                  onRow?.(record, index)?.onClick?.(
                    {} as React.MouseEvent<HTMLElement>,
                  )
                }
                className="border rounded-xl p-4 mb-3 shadow-sm bg-white"
              >
                {mobileColumns.map((col, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-1 border-b last:border-0"
                  >
                    <span className="text-sm text-zinc-500">
                      {col.title as React.ReactNode}
                    </span>
                    <span className="text-sm font-medium">
                      {col.render
                        ? col.render(
                            col.dataIndex
                              ? (record as any)[col.dataIndex as string]
                              : record,
                            record,
                            i,
                          )
                        : col.dataIndex
                          ? (record as any)[col.dataIndex as string]
                          : null}
                    </span>
                  </div>
                ))}
              </div>
            ))}
      </div>
    );
  }

  return (
    //Todo:table border radius
    <Table<T>
      size={size}
      bordered={bordered}
      className={className}
      scroll={scroll}
      rowKey={rowKey}
      rowClassName={defaultRowClassName}
      loading={false}
      pagination={pagination}
      // rowSelection={
      //   rowSelectionEnabled
      //     ? { type: "checkbox", columnWidth: checkboxWidth }
      //     : undefined
      // }
      dataSource={
        loading && data.length === 0 ? generateSkeletonData<T>() : data
      }
      rowSelection={rowSelection}
      columns={displayColumns}
      onRow={onRow}
      //   onRow={
      //     onRowClick
      //       ? (record, index) => ({
      //           onClick: () => onRowClick(record, index),
      //         })
      //       : undefined
      //   }
      {...restProps}
    />
  );
}
