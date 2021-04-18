import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/img-to-pdf', component: '@/pages/ImgToPDF' },
    { path: '/merge-pdf', component: '@/pages/MergePDF' },
  ],
  fastRefresh: {},
});
