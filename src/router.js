import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './components/MainRoutePages/LandingPage'
import AboutPage from './components/MainRoutePages/AboutPage'
import ArticlesPage from './components/MainRoutePages/ArticlesPage'
import EpisodesPage from './components/MainRoutePages/EpisodesPage'
import ShopPage from './components/MainRoutePages/ShopPage'
import SupportPage from './components/MainRoutePages/SupportPage'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
    },
    { 
      path: '/landingpage', 
      name: 'LandingPage', 
      component: LandingPage 
    },
    { 
      path: '/aboutpage', 
      name: 'AboutPage', 
      component: AboutPage 
    },
    { 
      path: '/articlespage', 
      name: 'ArticlesPage', 
      component: ArticlesPage 
    },
    { 
      path: '/episodespage', 
      name: 'EpisodesPage', 
      component: EpisodesPage 
    },
    { 
      path: '/shoppage', 
      name: 'ShopPage', 
      component: ShopPage 
    },
    { 
      path: '/supportpage', 
      name: 'SupportPage', 
      component: SupportPage 
    },
  ]
})