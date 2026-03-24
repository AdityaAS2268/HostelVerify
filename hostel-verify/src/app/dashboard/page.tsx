"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import AttendanceStatusCard from "@/components/attendance/AttendanceStatusCard";
import MarkAttendanceButton from "@/components/attendance/MarkAttendanceButton";
import AttendanceHistory from "@/components/attendance/AttendanceHistory";

export default function DashboardPage() {
  const router = useRouter();

  const [status, setStatus] = useState<"present" | "absent">("absent");
  const [lastMarked, setLastMarked] = useState<string | null>(null);
  const [alreadyMarkedToday, setAlreadyMarkedToday] = useState(false);

  // ✅ Date formatter (DD/MM/YYYY)
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-GB");
  };

  const [history, setHistory] = useState([
    { date: "20/03/2026", status: "Present" },
    { date: "19/03/2026", status: "Absent" },
  ]);

  const handleMarkAttendance = () => {
    const today = new Date().toLocaleDateString("en-GB");
    const savedDate = localStorage.getItem("attendanceDate");

    if (savedDate === today) {
      alert("Attendance already marked for today!");
      return;
    }

    router.push("/verify");
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      router.push("/login");
      return;
    }

    const today = new Date().toLocaleDateString("en-GB");
    const savedDate = localStorage.getItem("attendanceDate");
    const savedTime = localStorage.getItem("attendanceTime");

    if (savedDate === today) {
      setStatus("present");
      setAlreadyMarkedToday(true);

      if (savedTime) {
        setLastMarked(savedTime);
      }
    } else {
      setStatus("absent");
      setAlreadyMarkedToday(false);
      setLastMarked(null);
    }

    // ✅ Load history
    const storedHistory = localStorage.getItem("attendanceHistory");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    const handleFocus = () => {
      const today = new Date().toLocaleDateString("en-GB");
      const savedDate = localStorage.getItem("attendanceDate");

      if (savedDate === today) {
        setAlreadyMarkedToday(true);
        setStatus("present");
      }
    };

    window.addEventListener("focus", handleFocus);

    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      <AttendanceStatusCard
        status={status}
        lastMarked={lastMarked || undefined}
      />

      <div>
        <MarkAttendanceButton
          onClick={handleMarkAttendance}
          disabled={alreadyMarkedToday}
        />
      </div>

      <div className="bg-red-500 text-white p-4">Tailwind Working</div>

      <AttendanceHistory records={history} />
    </div>
  );
}
