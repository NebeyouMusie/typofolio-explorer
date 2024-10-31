import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ScaleSelectorProps {
  selectedScale: string;
  onScaleChange: (value: string) => void;
}

export const ScaleSelector = ({ selectedScale, onScaleChange }: ScaleSelectorProps) => {
  const scales = [
    { name: "Minor Second", value: "1.067" },
    { name: "Major Second", value: "1.125" },
    { name: "Minor Third", value: "1.200" },
    { name: "Major Third", value: "1.250" },
    { name: "Perfect Fourth", value: "1.333" },
    { name: "Golden Ratio", value: "1.618" },
  ];

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Scale Ratio</label>
      <Select value={selectedScale} onValueChange={onScaleChange}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {scales.map((scale) => (
            <SelectItem key={scale.value} value={scale.value}>
              {scale.name} ({scale.value})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};