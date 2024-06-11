/* eslint-disable react-hooks/exhaustive-deps */
import { UpdateStorage } from "@/context/updateStorage";
import { icons } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import html2canvas from "html2canvas";

type IconPreviewProps = {
  bgColor: string;
  bgPadding: number;
  bgRounded: number;
  icon: string;
  iconColor: string;
  iconSize: number;
  iconRotate: number;
};
export type IconType = {
  name: string;
  color: string;
  size: number;
  rotate?: number;
};

const IconPreview = () => {
  const [storageValue, setStorageValue] = useState<IconPreviewProps>();
  const { updateStorage, downloadIcon } = useContext(UpdateStorage);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("icon") || "{}");
    setStorageValue(storageData as IconPreviewProps);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      const iconPreview = document.getElementById("icon-preview");

      if (iconPreview) {
        html2canvas(iconPreview).then((canvas) => {
          const link = document.createElement("a");
          link.download = "icon.png";
          link.href = canvas.toDataURL();
          link.click();
        });
      }
    }
  }, [downloadIcon]);

  const Icon = ({ name, color, size, rotate }: IconType) => {
    const LucideIcon = icons[name as keyof typeof icons];

    if (!LucideIcon) return null;

    return (
      <LucideIcon
        size={size}
        color={color}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    );
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="bg-gray-100  h-[500px] w-[500px] "
        style={{
          padding: storageValue?.bgPadding,
        }}
      >
        <div
          id="icon-preview"
          className="flex items-center justify-center w-full h-full "
          style={{
            background: storageValue?.bgColor,
            padding: storageValue?.bgPadding,
            borderRadius: storageValue?.bgRounded,
          }}
        >
          <Icon
            name={storageValue?.icon || "Smile"}
            color={storageValue?.iconColor || "#000"}
            size={storageValue?.iconSize || 280}
            rotate={storageValue?.iconRotate || 0}
          />
        </div>
      </div>
    </div>
  );
};

export default IconPreview;
