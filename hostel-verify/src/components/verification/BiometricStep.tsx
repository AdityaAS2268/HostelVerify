import Button from "@/components/ui/Button";

type Props = {
  onVerify: () => void;
  verified: boolean;
};

export default function BiometricStep({ onVerify, verified }: Props) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold">Biometric Verification</h3>

      <p className="text-sm text-text-secondary">
        Authenticate using fingerprint/face (simulated).
      </p>

      <Button onClick={onVerify} disabled={verified}>
        {verified ? "Authenticated ✅" : "Verify Biometrics"}
      </Button>
    </div>
  );
}
