import { create } from 'zustand';

interface IAppSettings {
  onboarded: boolean;
  setOnboarded: ((bool: boolean) => void);
  loggedIn: boolean;
  setLoggedIn: ((bool: boolean) => void);
}

const useAppSettings = create<IAppSettings>()(set => ({
  onboarded: false,
  setOnboarded: (bool) => (set(() => ({ onboarded: bool }))),
  loggedIn: false,
  setLoggedIn: (bool) => (set(() => ({ loggedIn: bool }))),
}));

export default useAppSettings;
