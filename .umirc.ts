import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  history: {
    type: 'hash',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/img-to-pdf', component: '@/pages/ImgToPDF' },
    { path: '/merge-pdf', component: '@/pages/MergePDF' },
    { path: '/img-to-txt', component: '@/pages/ImgToTxt' },
  ],
  fastRefresh: {},
});
