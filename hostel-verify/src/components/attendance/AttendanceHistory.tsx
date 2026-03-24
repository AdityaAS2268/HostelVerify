import Badge from "@/components/ui/Badge";

export default function AttendanceHistory({
  records,
}: {
  records: { date: string; status: string }[];
}) {
  return (
    <div className="border rounded-2xl p-4 shadow-sm bg-white space-y-3">
      <h2 className="text-lg font-semibold">Attendance History</h2>

      <div className="space-y-2">
        {records.length === 0 && (
          <p className="text-gray-500 text-sm">No records found</p>
        )}

        {records.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-2"
          >
            <span>{item.date}</span>

            <Badge variant={item.status === "Present" ? "success" : "danger"}>
              {item.status}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
