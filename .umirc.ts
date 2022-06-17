import { defineConfig } from 'dumi';

const repo = 'antd-mobile-note';

export default defineConfig({
  title: 'antd-mobile-note',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  dynamicImport: {},
  postcssLoader: {},
  fastRefresh: {},
  alias: {
    'antd-mobile-note': process.cwd() + '/src',
  },
  navs: [
    {
      title: '笔记',
      path: '/note',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/yangdepp/antd-mobile-note',
    },
  ],
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
  themeConfig: {
    hd: {
      rules: [],
    },
  },
  locale: {
    default: 'zh-CN',
    antd: true,
  },
});
