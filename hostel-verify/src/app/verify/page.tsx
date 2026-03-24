"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import VerificationStepper from "@/components/verification/VerificationStepper";

export default function VerifyPage() {
  const router = useRouter();

  const [locationVerified, setLocationVerified] = useState(false);
  const [wifiVerified, setWifiVerified] = useState(false);
  const [biometricVerified, setBiometricVerified] = useState(false);

  const handleSubmit = () => {
    const now = new Date();
    const today = now.toLocaleDateString("en-GB");
    const time = now.toLocaleTimeString();

    // Existing storage
    localStorage.setItem("attendanceMarked", "true");
    localStorage.setItem("attendanceTime", time);
    localStorage.setItem("attendanceDate", today);

    // 🆕 Store history
    const existingHistory = JSON.parse(
      localStorage.getItem("attendanceHistory") || "[]",
    );

    const newEntry = { date: today, status: "Present" };

    // Avoid duplicate same-day entries
    const updatedHistory = [
      newEntry,
      ...existingHistory.filter((item: any) => item.date !== today),
    ];

    localStorage.setItem("attendanceHistory", JSON.stringify(updatedHistory));

    router.push("/dashboard");
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Attendance Verification</h1>

      <VerificationStepper
        locationVerified={locationVerified}
        wifiVerified={wifiVerified}
        biometricVerified={biometricVerified}
        onLocationVerify={() => setLocationVerified(true)}
        onWifiVerify={() => setWifiVerified(true)}
        onBiometricVerify={() => setBiometricVerified(true)}
        onFinalSubmit={handleSubmit}
      />
    </div>
  );
}
