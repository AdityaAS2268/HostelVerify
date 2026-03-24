"use client";

import Badge from "@/components/ui/Badge";

export default function AttendanceStatusCard({
  status,
  lastMarked,
}: {
  status: "present" | "absent";
  lastMarked?: string;
}) {
  return (
    <div className="border rounded-2xl p-4 shadow-sm bg-white space-y-2">
      <h2 className="text-lg font-semibold">Today&apos;s Status</h2>

      <div>
        {status === "present" ? (
          <Badge variant="success">Present</Badge>
        ) : (
          <Badge variant="danger">Absent</Badge>
        )}
      </div>

      {lastMarked && (
        <p className="text-sm text-gray-500">Last marked at: {lastMarked}</p>
      )}
    </div>
  );
}
