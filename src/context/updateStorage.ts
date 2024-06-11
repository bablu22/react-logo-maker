import { createContext } from "react";

type UpdateStorageType = {
  updateStorage: Record<string, unknown>;
  setUpdateStorage: (value: Record<string, unknown>) => void;
  downloadIcon: unknown;
  setDownloadIcon: (value: unknown) => void;
};

export const UpdateStorage = createContext<UpdateStorageType>({
  updateStorage: {},
  setUpdateStorage: () => {},
  downloadIcon: null,
  setDownloadIcon: () => {},
});
