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
import SpiritualPreparation from '@/views/Programs/SpiritualPreparation.vue'
import IncreasePrayerView from '@/views/Spirituals/IncreasePrayerView.vue'
import RitualView from '@/views/Programs/RitualView.vue'
import RepentenceView from '@/views/Spirituals/RepentenceView.vue'
import CharityView from '@/views/Spirituals/CharityView.vue'
import SupplicationView from '@/views/Spirituals/SupplicationView.vue'
import BehaviorOutside from '@/views/Programs/BehaviorOutside.vue'



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
      path: '/programs/spiritual',
      name: 'programs-spiritual',
      component: SpiritualPreparation
    },
    {
      path: '/programs/ritual',
      name: 'programs-ritual',
      component: RitualView
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
    {
      path: '/spiritual/increase-prayer',
      name: 'spiritual-increase-prayer',
      component: IncreasePrayerView
    },
    {
      path: '/spiritual/repentence',
      name: 'spiritual-repentence',
      component: RepentenceView
    },
    {
      path: '/spiritual/charity',
      name: 'spiritual-charity',
      component: CharityView
    },
    {
      path: '/spiritual/supplication',
      name: 'spiritual-supplication',
      component: SupplicationView
    },
    {
      path: '/programs/behavior',
      name: 'programs-behavior',
      component: BehaviorOutside
    },


  ]
})

export default router
