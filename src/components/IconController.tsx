/* eslint-disable react-hooks/exhaustive-deps */

import { Label } from "./ui/label";
import { Slider } from "@/components/ui/slider";
import { useContext, useEffect, useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";
import { UpdateStorage } from "@/context/updateStorage";
import IconList from "./IconList";

const IconController = () => {
  const storedValue = JSON.parse(localStorage.getItem("icon") || "{}");

  const [icon, setIcon] = useState(storedValue.icon || "Smile");
  const [size, setSize] = useState(storedValue.iconSize || 280);
  const [rotate, setRotate] = useState(storedValue.iconRotate || 0);
  const [color, setColor] = useState(storedValue.iconColor || "#000000");
  const storageValue = JSON.parse(localStorage.getItem("icon") || "{}");
  const { setUpdateStorage } = useContext(UpdateStorage);

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: icon,
    };
    setUpdateStorage(updatedValue);
    localStorage.setItem("icon", JSON.stringify(updatedValue));
  }, [size, rotate, color, icon]);

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex flex-col space-y-3">
        <Label>Icon</Label>
        <IconList setIcons={(icon) => setIcon(icon)} />
      </div>
      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <Label>Size</Label>
          <Label>({size}px)</Label>
        </div>

        <Slider
          defaultValue={[size]}
          min={16}
          max={512}
          step={1}
          onValueChange={(value) => setSize(value[0])}
        />
      </div>
      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <Label>Rotate</Label>
          <Label>({rotate}°)</Label>
        </div>

        <Slider
          defaultValue={[rotate]}
          min={0}
          max={360}
          step={1}
          onValueChange={(value) => setRotate(value[0])}
        />
      </div>

      <div className="flex flex-col space-y-3">
        <Label>Color</Label>
        <ColorPicker
          value={color}
          onChange={(color) => setColor(color)}
          hideControls
          hideEyeDrop
          hideAdvancedSliders
          hideColorGuide
          hideInputType
          className="w-full -z-1"
        />
      </div>
    </div>
  );
};

export default IconController;
