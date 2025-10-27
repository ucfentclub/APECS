import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/

export default defineConfig({
  base: '/APECS/', // 👈 This tells Vite the correct public path
  plugins: [react()],
})
