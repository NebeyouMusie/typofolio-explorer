import { Input } from "@/components/ui/input";

interface ColorSelectorProps {
  selectedColor: string;
  onColorChange: (value: string) => void;
}

export const ColorSelector = ({ selectedColor, onColorChange }: ColorSelectorProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Text Color</label>
      <div className="flex gap-2">
        <Input
          type="color"
          value={selectedColor}
          onChange={(e) => onColorChange(e.target.value)}
          className="w-12 h-10 p-1 cursor-pointer"
        />
        <Input
          type="text"
          value={selectedColor}
          onChange={(e) => onColorChange(e.target.value)}
          className="flex-1"
          placeholder="#000000"
        />
      </div>
    </div>
  );
};