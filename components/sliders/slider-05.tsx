import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Slider05() {
  return (
    <div className="space-y-4">
      <Label>Slider with tiny thumb</Label>
      <Slider defaultValue={[25]} className="[&>:last-child>span]:w-2.5 [&>:last-child>span]:h-6 [&>:last-child>span]:border-[3px] [&>:last-child>span]:ring-offset-0 [&>:last-child>span]:bg-primary [&>:last-child>span]:border-background" aria-label="Slider with tiny thumb" />
    </div>
  );
}
