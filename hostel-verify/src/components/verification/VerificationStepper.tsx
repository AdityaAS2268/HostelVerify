import LocationStep from "./LocationStep";
import WifiStep from "./WifiStep";
import BiometricStep from "./BiometricStep";
import Button from "@/components/ui/Button";

type Props = {
  locationVerified: boolean;
  wifiVerified: boolean;
  biometricVerified: boolean;
  onLocationVerify: () => void;
  onWifiVerify: () => void;
  onBiometricVerify: () => void;
  onFinalSubmit: () => void;
};

export default function VerificationStepper({
  locationVerified,
  wifiVerified,
  biometricVerified,
  onLocationVerify,
  onWifiVerify,
  onBiometricVerify,
  onFinalSubmit,
}: Props) {
  const allVerified = locationVerified && wifiVerified && biometricVerified;

  return (
    <div className="space-y-4">
      <LocationStep verified={locationVerified} onVerify={onLocationVerify} />

      <WifiStep verified={wifiVerified} onVerify={onWifiVerify} />

      <BiometricStep
        verified={biometricVerified}
        onVerify={onBiometricVerify}
      />

      <Button onClick={onFinalSubmit} disabled={!allVerified}>
        Mark Attendance
      </Button>
    </div>
  );
}
