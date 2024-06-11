/* eslint-disable react-hooks/exhaustive-deps */
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useContext, useEffect, useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";
import { UpdateStorage } from "@/context/updateStorage";

const BackgroundController = () => {
  const storedValue = JSON.parse(localStorage.getItem("icon") || "{}");

  const [rounded, setRounded] = useState(storedValue.bgRounded || 0);
  const [padding, setPadding] = useState(storedValue.bgPadding || 0);
  const [color, setColor] = useState(storedValue.bgColor || "#000000");
  const storageValue = JSON.parse(localStorage.getItem("icon") || "{}");
  const { setUpdateStorage } = useContext(UpdateStorage);

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgColor: color,
      bgRounded: rounded,
      bgPadding: padding,
    };
    setUpdateStorage(updatedValue);
    localStorage.setItem("icon", JSON.stringify(updatedValue));
  }, [rounded, padding, color]);

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <Label>Rounded</Label>
          <Label>({rounded}px)</Label>
        </div>

        <Slider
          defaultValue={[rounded]}
          min={0}
          max={240}
          step={1}
          onValueChange={(value) => setRounded(value[0])}
        />
      </div>
      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <Label>Padding</Label>
          <Label>({padding}px)</Label>
        </div>

        <Slider
          defaultValue={[padding]}
          min={0}
          max={100}
          step={1}
          onValueChange={(value) => setPadding(value[0])}
        />
      </div>
      <div className="flex flex-col space-y-3">
        <Label>Color</Label>
        <ColorPicker value={color} onChange={setColor} className="w-full" />
      </div>
    </div>
  );
};

export default BackgroundController;
