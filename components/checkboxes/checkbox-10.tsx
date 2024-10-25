import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Checkbox10() {
  return (
    <div className="items-top relative flex gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-ring">
      <Checkbox
        id="checkbox-10"
        className="order-1 after:absolute after:inset-0"
        aria-describedby="checkbox-10-description"
      />
      <div className="grid grow gap-1">
        <Label htmlFor="checkbox-10">
          Label{" "}
          <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
            (Sublabel)
          </span>
        </Label>
        <p id="checkbox-10-description" className="text-xs text-muted-foreground">
          A short description goes here.
        </p>
      </div>
    </div>
  );
}
