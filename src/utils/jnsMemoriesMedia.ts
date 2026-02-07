/// <reference types="vite/client" />

// Images (all folders)
const imageModules = import.meta.glob<{ default: string }>(
  "/src/assets/images/**/*.{jpg,jpeg,png,webp,avif}",
  { eager: true }
);

// Videos (all folders)
// const videoModules = import.meta.glob<{ default: string }>(
//   "/src/assets/videos/**/*.{mp4,mov,MOV}",
//   { eager: true }
// );

// Optional: sort by path so order is consistent
const sortByPath = (a: any, b: any) => a[0].localeCompare(b[0]);

export const jnsMemoriesMedia = [
  ...Object.entries(imageModules)
    .sort(sortByPath)
    .map(([path, mod]: any) => ({
      type: "image",
      src: mod.default,
      category: path.split("/")[4], // roost | elite | sunrise...
    })),

  // ...Object.entries(videoModules)
  //   .sort(sortByPath)
  //   .map(([path, mod]: any) => ({
  //     type: "video",
  //     src: mod.default,
  //     category: path.split("/")[4],
  //   })),
];