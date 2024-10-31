import { Card } from "@/components/ui/card";

interface PreviewSectionProps {
  baseSize: number;
  scale: number;
  fontFamily: string;
}

export const PreviewSection = ({ baseSize, scale, fontFamily }: PreviewSectionProps) => {
  const calculateSize = (level: number) => {
    return Math.round(baseSize * Math.pow(scale, level));
  };

  return (
    <Card className="p-6 space-y-8">
      <h2 className="text-2xl font-semibold mb-4">Preview</h2>
      
      <div className="space-y-6" style={{ fontFamily }}>
        <div>
          <div className="text-sm text-muted-foreground mb-2">h1 / {calculateSize(4)}px</div>
          <div style={{ fontSize: calculateSize(4) }}>The quick brown fox jumps over the lazy dog</div>
        </div>
        
        <div>
          <div className="text-sm text-muted-foreground mb-2">h2 / {calculateSize(3)}px</div>
          <div style={{ fontSize: calculateSize(3) }}>The quick brown fox jumps over the lazy dog</div>
        </div>
        
        <div>
          <div className="text-sm text-muted-foreground mb-2">h3 / {calculateSize(2)}px</div>
          <div style={{ fontSize: calculateSize(2) }}>The quick brown fox jumps over the lazy dog</div>
        </div>
        
        <div>
          <div className="text-sm text-muted-foreground mb-2">h4 / {calculateSize(1)}px</div>
          <div style={{ fontSize: calculateSize(1) }}>The quick brown fox jumps over the lazy dog</div>
        </div>
        
        <div>
          <div className="text-sm text-muted-foreground mb-2">Base / {calculateSize(0)}px</div>
          <div style={{ fontSize: calculateSize(0) }}>The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </Card>
  );
};