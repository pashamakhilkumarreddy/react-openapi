import { create } from 'zustand';

type State = {
  prompt: string;
  images: string[];
};

type Action = {
  setPrompt: (prompt: string) => void;
  addImage: (image: string) => void;
  getImages: () => string[];
  removeAllImages: () => void;
};

const useImageStore = create<State & Action>((set, get) => ({
  prompt: '',
  images: [],
  setPrompt: (prompt) => set(() => ({ prompt })),
  addImage: (image) => set((state) => ({ images: [...state.images, image] })),
  getImages: () => get().images,
  removeAllImages: () => set({ images: [] }),
}));

export default useImageStore;
