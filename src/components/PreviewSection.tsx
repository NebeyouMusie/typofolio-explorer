import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";

interface PreviewSectionProps {
  baseSize: number;
  scale: number;
  fontFamily: string;
  unit: string;
  color: string;
  fontWeight: number;
  letterSpacing: number;
  lineHeight: number;
}

export const PreviewSection = ({ 
  baseSize, 
  scale, 
  fontFamily, 
  unit, 
  color,
  fontWeight,
  letterSpacing,
  lineHeight
}: PreviewSectionProps) => {
  const { theme } = useTheme();
  
  const calculateSize = (level: number) => {
    const size = baseSize * Math.pow(scale, level);
    switch (unit) {
      case "rem":
        return `${(size / 16).toFixed(3)}rem`;
      case "pt":
        return `${Math.round(size * 0.75)}pt`;
      default:
        return `${Math.round(size)}px`;
    }
  };

  const textColor = color !== "#000000" ? color : theme === "dark" ? "#ffffff" : "#000000";

  const textStyle = {
    fontFamily: `${fontFamily}, sans-serif`,
    color: textColor,
    fontWeight,
    letterSpacing: `${letterSpacing}em`,
    lineHeight
  };

  return (
    <Card className="p-6 space-y-8">
      <h2 className="text-2xl font-semibold mb-4">Preview</h2>
      
      <div className="space-y-6" style={textStyle}>
        <div>
          <div className="text-sm text-muted-foreground mb-2">h1 / {calculateSize(4)}</div>
          <div style={{ fontSize: calculateSize(4) }}>The quick brown fox jumps over the lazy dog</div>
        </div>
        
        <div>
          <div className="text-sm text-muted-foreground mb-2">h2 / {calculateSize(3)}</div>
          <div style={{ fontSize: calculateSize(3) }}>The quick brown fox jumps over the lazy dog</div>
        </div>
        
        <div>
          <div className="text-sm text-muted-foreground mb-2">h3 / {calculateSize(2)}</div>
          <div style={{ fontSize: calculateSize(2) }}>The quick brown fox jumps over the lazy dog</div>
        </div>
        
        <div>
          <div className="text-sm text-muted-foreground mb-2">h4 / {calculateSize(1)}</div>
          <div style={{ fontSize: calculateSize(1) }}>The quick brown fox jumps over the lazy dog</div>
        </div>

        <div>
          <div className="text-sm text-muted-foreground mb-2">h5 / {calculateSize(0.5)}</div>
          <div style={{ fontSize: calculateSize(0.5) }}>The quick brown fox jumps over the lazy dog</div>
        </div>

        <div>
          <div className="text-sm text-muted-foreground mb-2">h6 / {calculateSize(0.25)}</div>
          <div style={{ fontSize: calculateSize(0.25) }}>The quick brown fox jumps over the lazy dog</div>
        </div>
        
        <div>
          <div className="text-sm text-muted-foreground mb-2">p / {calculateSize(0)}</div>
          <div style={{ fontSize: calculateSize(0) }}>The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </Card>
  );
};