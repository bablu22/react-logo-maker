import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { icons, ListStart } from "lucide-react";
import { IconType } from "./IconPreview";
import { iconList } from "@/constant/icon";
import { useState } from "react";

interface IconListProps {
  setIcons: (icon: IconType) => void;
}

const IconList = ({ setIcons }: IconListProps) => {
  const [open, setOpen] = useState(false);

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
    <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} variant="outline" size="lg">
          <ListStart className="mr-2" /> Select Icon
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Pick your favorite icon</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-6 gap-4 max-h-[400px] overflow-y-auto p-2 border rounded">
            {iconList.map((icon, index) => (
              <div
                key={index}
                onClick={() => {
                  setIcons(icon as unknown as IconType), setOpen(false);
                }}
                className="flex items-center justify-center p-2 border cursor-pointer"
              >
                <Icon
                  name={icon as keyof typeof icons}
                  color="#000000"
                  size={32}
                  rotate={0}
                />
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default IconList;
