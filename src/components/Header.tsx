import { DownloadIcon } from "@radix-ui/react-icons";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { useContext } from "react";
import { UpdateStorage } from "@/context/updateStorage";

const Header = () => {
  const { setDownloadIcon } = useContext(UpdateStorage);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shrink-0 backdrop-blur-0">
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Logo />
        <div className="flex items-center gap-x-8">
          <Button onClick={() => setDownloadIcon(Date.now())} size="lg">
            <DownloadIcon className="w-4 h-4 mr-2" />
            <span>Download</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
