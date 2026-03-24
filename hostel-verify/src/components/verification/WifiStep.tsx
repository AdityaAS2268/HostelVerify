import Button from "@/components/ui/Button";

type Props = {
  onVerify: () => void;
  verified: boolean;
};

export default function WifiStep({ onVerify, verified }: Props) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold">WiFi Verification</h3>

      <p className="text-sm text-text-secondary">
        Must be connected to hostel network.
      </p>

      <Button onClick={onVerify} disabled={verified}>
        {verified ? "Connected ✅" : "Check WiFi"}
      </Button>
    </div>
  );
}
