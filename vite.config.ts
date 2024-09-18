import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "localhost",//代理人地址 ,0.0.0.0也可以
    open: false,//是否自动打开
    port: 5174, // 重点，通过代理转发到8080,可以不配置
    proxy: {
      "/api": {
        // target: 'http://api.m.1000xian.com',
        target: 'http://api.test.1000xian.com',
        changeOrigin: true,//地址替换
        secure: false,  // 如果是https接口，需要配置这个参数
        rewrite: (path) => path.replace(/^\/api/, ""),//消除作案痕迹 将api替换为空
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@pages': path.join(__dirname, 'src/pages'),
      '@components': path.join(__dirname, 'src/components'),
      '@assets': path.join(__dirname, 'src/assets'),
      '@utils': path.join(__dirname, 'src/utils')
    }
  }
})




