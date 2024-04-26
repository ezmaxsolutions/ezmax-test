import { RouteRecordRaw } from 'vue-router';

// prettier-ignore
const routes: RouteRecordRaw[] = [
   {
      path: '/',
      redirect: '/accueil'
   },
   {
      path: '/',
      component: () => import('src/layouts/default-layout.vue'),
      children: [
         {
            path: 'accueil',
            component: () => import('src/pages/page-home.vue')
         },
         {
            path: 'pokemon',
            component: () => import('src/pages/pokemon/page-pokemon-list.vue')
         }
         // TODO: Ajouter une page about
      ]
   },

   // Always leave this as last one,
   // but you can also remove it
   {
      path: '/:catchAll(.*)*',
      component: () => import('src/pages/page-error.vue')
   }
]

export default routes;
