import Vue from 'vue';
import Router from 'vue-router';
import CharactersView from '@/views/CharactersView';
import CharacterInfo from '@/views/CharacterInfo';
import ProfessorInfo from '@/views/ProfessorInfo';
import ProfessorsView from '@/views/ProfessorsView';
import HomeView from '@/views/HomeView';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: HomeView
    },
    {
      path: 'characters',
      name: 'characters',
      component: CharactersView
    },
    {
      path: '/characterinfo',
      name: 'characterInfo',
      component: CharacterInfo,
      props: true
    },
    {
      path: 'professors',
      name: 'professors',
      component: ProfessorsView
    },
    {
      path: '/professorinfo',
      name: 'professorInfo',
      component: ProfessorInfo,
      props: true
    },
  ]
});

export default router;
