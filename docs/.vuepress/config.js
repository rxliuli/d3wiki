/**
 * @type import('vuepress-vite').AppConfig
 */
module.exports = {
  bundler: '@vuepress/vite',
  /**
   * @type import('@vuepress/theme-default').DefaultThemeData
   */
  themeConfig: {
    navbar: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/sections/' },
    ],
    sidebar: {
      '/sections': [
        '/sections/',
        '/sections/author',
        '/sections/introduction',
        '/sections/helloword',
        '/sections/selection',
        '/sections/select',
        '/sections/makechart',
        '/sections/scale',
        '/sections/axis',
        '/sections/chart',
        '/sections/transition',
        '/sections/enterexit',
        '/sections/interactive',
        '/sections/layout',
        '/sections/pie',
        '/sections/force',
        '/sections/tree',
        '/sections/chinamap',
      ],
    },
  },
}
