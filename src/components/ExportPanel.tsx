import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface ExportPanelProps {
  settings: {
    baseSize: number;
    selectedScale: string;
    selectedFont: string;
  };
}

export const ExportPanel = ({ settings }: ExportPanelProps) => {
  const generateCSS = () => {
    const { baseSize, selectedScale, selectedFont } = settings;
    const scale = parseFloat(selectedScale);
    
    return `/* Typography Scale */
:root {
  --base-size: ${baseSize}px;
  --scale-ratio: ${scale};
  --font-family: ${selectedFont};
}

body {
  font-family: var(--font-family);
  font-size: var(--base-size);
}

h1 { font-size: calc(var(--base-size) * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }
h2 { font-size: calc(var(--base-size) * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }
h3 { font-size: calc(var(--base-size) * var(--scale-ratio) * var(--scale-ratio)); }
h4 { font-size: calc(var(--base-size) * var(--scale-ratio)); }`;
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