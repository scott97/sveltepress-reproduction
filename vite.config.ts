import { defineConfig } from 'vite'
import { sveltepress } from '@sveltepress/vite'

const config = defineConfig({
  plugins: [
    sveltepress({
      siteConfig: {
        title: 'Sveltepress',
        description: 'A content centered site build tool',
      },
    }),
  ],
})

export default config
