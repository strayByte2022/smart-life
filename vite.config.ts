import { defineConfig, loadEnv } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default () => {
  
  return defineConfig({
    root: './src',
    base: '',
    plugins: [reactRefresh()],

  })
}
//npm i --save-dev @types/node
