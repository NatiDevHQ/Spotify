import { axiosInstance } from "@/lib/axios";

import { create } from "zustand";

export const useMusicStore = create((set) => ({
  albums: [],
  songs: [],
  isLoading: false,
  error: null,

  fetchAlbums: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get("/albums");
      set({ albums: response.data });
    } catch (error: any) {
      set({ error: error.message.data.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useMusicStore;
