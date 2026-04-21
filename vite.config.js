import { defineConfig } from 'vite'

export default defineConfig({
  // Required for GitHub Pages to resolve assets correctly when hosted on a subpath (https://<username>.github.io/<repo-name>/)
  base: '/webtel-payroll/'
})
