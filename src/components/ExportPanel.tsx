import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ExportPanelProps {
  settings: {
    baseSize: number;
    selectedScale: string;
    selectedFont: string;
    selectedUnit: string;
    selectedColor: string;
  };
}

export const ExportPanel = ({ settings }: ExportPanelProps) => {
  const generateCSS = () => {
    const { baseSize, selectedScale, selectedFont, selectedUnit, selectedColor } = settings;
    const scale = parseFloat(selectedScale);
    
    const calculateSize = (level: number) => {
      const size = baseSize * Math.pow(scale, level);
      switch (selectedUnit) {
        case "rem":
          return `${(size / 16).toFixed(3)}rem`;
        case "pt":
          return `${Math.round(size * 0.75)}pt`;
        default:
          return `${Math.round(size)}px`;
      }
    };
    
    return `/* Typography Scale */
:root {
  --base-size: ${calculateSize(0)};
  --scale-ratio: ${scale};
  --font-family: ${selectedFont};
  --text-color: ${selectedColor};
}

body {
  font-family: var(--font-family);
  font-size: var(--base-size);
  color: var(--text-color);
}

h1 { font-size: ${calculateSize(4)}; }
h2 { font-size: ${calculateSize(3)}; }
h3 { font-size: ${calculateSize(2)}; }
h4 { font-size: ${calculateSize(1)}; }
h5 { font-size: ${calculateSize(0.5)}; }
h6 { font-size: ${calculateSize(0.25)}; }
p { font-size: ${calculateSize(0)}; }`;
  };

  const handleExportCSS = () => {
    const css = generateCSS();
    const blob = new Blob([css], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "typography-scale.css";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("CSS file exported successfully!");
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Export</h3>
      <Button onClick={handleExportCSS} className="w-full">
        Export CSS
      </Button>
    </div>
  );
};