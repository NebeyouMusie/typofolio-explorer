import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FontWeightSelectorProps {
  selectedWeight: string;
  onWeightChange: (value: string) => void;
}

export const FontWeightSelector = ({ selectedWeight, onWeightChange }: FontWeightSelectorProps) => {
  const weights = [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ];

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Font Weight</label>
      <Select value={selectedWeight} onValueChange={onWeightChange}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {weights.map((weight) => (
            <SelectItem key={weight} value={weight}>
              {weight}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};