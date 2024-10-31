import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface UnitSelectorProps {
  selectedUnit: string;
  onUnitChange: (value: string) => void;
}

export const UnitSelector = ({ selectedUnit, onUnitChange }: UnitSelectorProps) => {
  const units = ["px", "rem", "pt"];

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Size Unit</label>
      <Select value={selectedUnit} onValueChange={onUnitChange}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {units.map((unit) => (
            <SelectItem key={unit} value={unit}>
              {unit}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};