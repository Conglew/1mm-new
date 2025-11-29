// project/vue.config.js

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  // 打包輸出資料夾，沿用你原本的 build
  // Build output folder (same as you set before)
  outputDir: 'build',

  // 關鍵：讓 GitHub Pages 在子路徑 /1mm-new/ 底下也能正確載入資源
  // Important: correct asset paths when deployed under /1mm-new/ on GitHub Pages
  publicPath: process.env.NODE_ENV === 'production'
    ? '/1mm-new/'   // 這裡的字串要和 GitHub repo 名稱一樣
    : '/'
})
