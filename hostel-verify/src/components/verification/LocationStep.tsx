import Button from "@/components/ui/Button";

type Props = {
  onVerify: () => void;
  verified: boolean;
};

export default function LocationStep({ onVerify, verified }: Props) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold">Location Verification</h3>

      <p className="text-sm text-text-secondary">
        Verify you are inside hostel premises.
      </p>

      <Button onClick={onVerify} disabled={verified}>
        {verified ? "Verified ✅" : "Verify Location"}
      </Button>
    </div>
  );
}
