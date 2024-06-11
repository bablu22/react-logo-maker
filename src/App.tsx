import Header from "@/components/Header";
import IconPreview from "./components/IconPreview";
import IconGenerator from "./components/IconGenerator";
import { UpdateStorage } from "./context/updateStorage";
import { useState, Dispatch, SetStateAction } from "react";

const App = () => {
  const [updateStorage, setUpdateStorage] = useState<Record<string, unknown>>(
    {}
  );
  const [downloadIcon, setDownloadIcon] = useState<unknown>();

  return (
    <UpdateStorage.Provider
      value={{
        updateStorage,
        setUpdateStorage: setUpdateStorage as Dispatch<
          SetStateAction<Record<string, unknown>>
        >,
        downloadIcon,
        setDownloadIcon,
      }}
    >
      <div className="flex flex-col min-h-full">
        <Header />
        <div className="flex flex-col items-start w-full px-4 py-10 mx-auto lg:flex-row max-w-7xl gap-x-8 sm:px-6 lg:px-8">
          <aside className="w-full mb-8 lg:w-1/3 shrink-0 lg:mb-0">
            <IconGenerator />
          </aside>

          <main className="flex-1 w-full">
            <IconPreview />
          </main>
        </div>
      </div>
    </UpdateStorage.Provider>
  );
};

export default App;
