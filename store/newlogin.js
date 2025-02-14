import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStoreNewLogin = create(
  persist(
    (set) => ({
      user: null,
      authToken: null,

     
      newLogin: () => set({ user: JSON.parse(localStorage.getItem('user')), authToken: localStorage.getItem('authToken') }),
      
      logout: () => set({ user: null, authToken: null }),
    }),

    {
      name: "bears-storage",
    }
  )
);
