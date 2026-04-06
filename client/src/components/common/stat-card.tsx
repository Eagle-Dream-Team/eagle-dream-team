import React from "react";

export function StatCard({
  label,
  value,
  icon,
  loading,
}: {
  label: string;
  value?: number;
  icon: React.ReactNode;
  loading?: boolean;
}) {
  return (
    <div className="border rounded-xl p-4 bg-white flex items-center gap-4">
      <div className="p-2 bg-neutral-100 rounded-lg">{icon}</div>
      <div>
        <p className="text-xs text-neutral-400">{label}</p>
        {loading ? (
          <div className="h-6 w-16 bg-neutral-200 rounded animate-pulse mt-1" />
        ) : (
          <p className="text-xl font-semibold text-neutral-800">{value ?? 0}</p>
        )}
      </div>
    </div>
  );
}
