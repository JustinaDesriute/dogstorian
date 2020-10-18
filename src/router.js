import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './components/MainRoutePages/LandingPage'
import AboutPage from './components/MainRoutePages/AboutPage'
import ArticlesPage from './components/MainRoutePages/ArticlesPage'
import EpisodesPage from './components/MainRoutePages/EpisodesPage'
import StorePage from './components/MainRoutePages/StorePage'
import SupportPage from './components/MainRoutePages/SupportPage'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
    },
    { 
      path: '/home', 
      name: 'home', 
      component: LandingPage 
    },
    { 
      path: '/about', 
      name: 'about', 
      component: AboutPage 
    },
    { 
      path: '/blog', 
      name: 'blog', 
      component: ArticlesPage 
    },
    { 
      path: '/episodes', 
      name: 'episodes', 
      component: EpisodesPage 
    },
    { 
      path: '/store', 
      name: 'store', 
      component: StorePage 
    },
    { 
      path: '/support', 
      name: 'support', 
      component: SupportPage 
    },
  ]
})