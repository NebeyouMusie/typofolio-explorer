import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { PreviewSection } from "@/components/PreviewSection";
import { ScaleSelector } from "@/components/ScaleSelector";
import { FontSelector } from "@/components/FontSelector";
import { ExportPanel } from "@/components/ExportPanel";

const Index = () => {
  const [baseSize, setBaseSize] = useState(16);
  const [selectedScale, setSelectedScale] = useState("1.250");
  const [selectedFont, setSelectedFont] = useState("Inter");

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Typography Scale Generator</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Card className="lg:col-span-4 p-6 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Settings</h2>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Base Font Size</label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[baseSize]}
                    onValueChange={(value) => setBaseSize(value[0])}
                    min={12}
                    max={24}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-sm font-mono w-12">{baseSize}px</span>
                </div>
              </div>

              <FontSelector
                selectedFont={selectedFont}
                onFontChange={setSelectedFont}
              />

              <ScaleSelector
                selectedScale={selectedScale}
                onScaleChange={setSelectedScale}
              />
            </div>

            <ExportPanel
              settings={{
                baseSize,
                selectedScale,
                selectedFont,
              }}
            />
          </Card>

          <div className="lg:col-span-8">
            <PreviewSection
              baseSize={baseSize}
              scale={parseFloat(selectedScale)}
              fontFamily={selectedFont}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;