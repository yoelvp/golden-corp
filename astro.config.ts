import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://golden.pe',
  build: {
    inlineStylesheets: 'always'
  },
  compressHTML: true,
  prefetch: true,
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind()]
  // output: 'server'
});
