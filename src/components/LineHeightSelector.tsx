import { Slider } from "@/components/ui/slider";

interface LineHeightSelectorProps {
  lineHeight: number;
  onLineHeightChange: (value: number[]) => void;
}

export const LineHeightSelector = ({ lineHeight, onLineHeightChange }: LineHeightSelectorProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium">Line Height</label>
        <span className="text-sm text-muted-foreground">{lineHeight}</span>
      </div>
      <Slider
        value={[lineHeight]}
        onValueChange={onLineHeightChange}
        min={1}
        max={2}
        step={0.1}
        className="w-full"
      />
    </div>
  );
};