import { resolve } from 'path';
import { defineConfig } from 'vite';

const pages = resolve(__dirname, 'pages');
const images = reseolve(__dirname, 'images');

export default defineConfig({
  pages,
  images,
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(pages, 'About.html'),
        contact: resolve(pages, 'Contact.html'),
        terms: resolve(pages, 'TOS.html'),
        copyrights: resolve(pages, 'copyright.html'),
        forest_img: resolve(images, 'Forest.jpg'),
        mountain_img: resolve(images, 'Mountain.png'),
        autumn_img: resolve(images, 'Autumn.png'),
        adventure_img: resolve(images, 'AnimeScenery.png'),
        aurora_img: resolve(images, 'Aurora.png'),
        mntrng_img: resolve(images, 'MountainRange.png'),
        river_img: resolve(images, 'River.png'),
        valley_img: resolve(images, 'ValleyForest.png'),
        side_img: resolve(images, 'Countryside.png'),
      },
    },
  },
});
