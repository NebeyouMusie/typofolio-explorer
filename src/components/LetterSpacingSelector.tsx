import { Slider } from "@/components/ui/slider";

interface LetterSpacingSelectorProps {
  letterSpacing: number;
  onLetterSpacingChange: (value: number[]) => void;
}

export const LetterSpacingSelector = ({ letterSpacing, onLetterSpacingChange }: LetterSpacingSelectorProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium">Letter Spacing</label>
        <span className="text-sm text-muted-foreground">{letterSpacing}em</span>
      </div>
      <Slider
        value={[letterSpacing]}
        onValueChange={onLetterSpacingChange}
        min={-0.1}
        max={0.5}
        step={0.01}
        className="w-full"
      />
    </div>
  );
};