import Vue from 'vue';
import Router from 'vue-router';
import CharactersView from '@/views/CharactersView';
import CharacterInfo from '@/views/CharacterInfo';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '',
      name: 'characters',
      component: CharactersView
    },
    {
      path: '/character',
      name: 'characterInfo',
      component: CharacterInfo,
      props: true
    },
  ]
});

export default router;
