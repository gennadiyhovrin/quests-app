import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

export const useApplicationStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        data: "",
        setData: (data: string) => set({ data: data }),
      }),
      {
        name: 'application-storage', 
        storage: createJSONStorage(() => localStorage), 
        partialize(state: StoreState) { 
          return state;
        },
      },
    ),
  ),
);

interface ApplicationState {
  data: string;
}

interface ApplicationActions {
  setData: (data: string) => void;
}

type StoreState = ApplicationState & ApplicationActions;
