import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FontSelectorProps {
  selectedFont: string;
  onFontChange: (value: string) => void;
}

export const FontSelector = ({ selectedFont, onFontChange }: FontSelectorProps) => {
  const fonts = [
    { name: "Inter", family: "'Inter', sans-serif" },
    { name: "Arial", family: "Arial, sans-serif" },
    { name: "Helvetica", family: "Helvetica, sans-serif" },
    { name: "Times New Roman", family: "'Times New Roman', serif" },
    { name: "Georgia", family: "Georgia, serif" },
    { name: "Verdana", family: "Verdana, sans-serif" },
    { name: "System UI", family: "system-ui, sans-serif" },
  ];

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Font Family</label>
      <Select value={selectedFont} onValueChange={onFontChange}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {fonts.map((font) => (
            <SelectItem 
              key={font.name} 
              value={font.family}
              style={{ fontFamily: font.family }}
            >
              {font.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};