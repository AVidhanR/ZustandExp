import { create } from "zustand";

// remember Zustand is a global state management library
// It's Asynchronous and it's a hook based library

type State = {
  appName: string;
  appDescription: string;
  appId: string;
};

type Actions = {
  setAppName: (appName: State["appName"]) => void;
  setAppDescription: (appDescription: State["appDescription"]) => void;
  setAppId: (appId: State["appId"]) => void;
};

const useData = create<State & Actions>((set) => {
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
