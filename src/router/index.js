import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProgramsView from '../views/ProgramsView.vue'
import PhysicalProgram from '../views/Programs/PhysicalProgram.vue'
import VirtualReality from '@/views/Programs/VirtualReality.vue'
import CulturalEtiquette from '@/views/Programs/CulturalEtiquette.vue'
import GreenHazz from '@/views/Programs/GreenHazz.vue'
import LocalizedAnnouncement from '@/views/Programs/LocalizedAnnouncement.vue'
import PaceYourself from '@/views/Programs/PaceYourself.vue'
import VolunteerMatch from '@/views/Programs/VolunteerMatch.vue'
import CalmZones from '@/views/Programs/CalmZones.vue'
import CommunitySupport from '@/views/Programs/CommunitySupport.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/programs',
      name: 'programs',
      component: ProgramsView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
      component: AboutView
    },
    {
      path: '/programs/physical',
      name: 'programs-physical',
      component: PhysicalProgram
    },
    {
      path: '/programs/virtual',
      name: 'programs-virtual',
      component: VirtualReality
    },
    {
      path: '/programs/etiquette',
      name: 'programs-etiquette',
      component: CulturalEtiquette
    },
    {
      path: '/programs/green',
      name: 'programs-green',
      component: GreenHazz
    },
    {
      path: '/programs/localized',
      name: 'programs-localized',
      component: LocalizedAnnouncement
    },
    {
      path: '/programs/pace',
      name: 'programs-pace',
      component: PaceYourself
    },
    {
      path: '/programs/volunteer',
      name: 'programs-volunteer',
      component: VolunteerMatch
    },
    {
      path: '/programs/calmzones',
      name: 'programs-calmzones',
      component: CalmZones
    },
    {
      path: '/programs/community-support',
      name: 'programs-community-support',
      component: CommunitySupport
    },
  ]
})

export default router
