import { create } from "zustand";

type State = {
  appName: string;
  appDescription: string;
  appId: string;
};

type Action = {
  setAppName: (appName: State["appName"]) => void;
  setAppDescription: (appDescription: State["appDescription"]) => void;
  setAppId: (appId: State["appId"]) => void;
};

const useData = create<State & Action>((set) => {
  return {
    appName: "",
    appDescription: "",
    appId: "",
    setAppName: (apName) => set(() => ({ appName: apName })),
    setAppDescription: (appDescription) =>
      set(() => ({ appDescription: appDescription })),
    setAppId: (appId) => set(() => ({ appId: appId })),
  };
});

export default useData;