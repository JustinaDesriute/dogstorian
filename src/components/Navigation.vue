<template>
  <div>
    <nav>
      <router-link v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`"
      class="spacing">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<style> 
  .spacing { 
    Margin-right: 10px; 
  } 
</style>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/LandingPage'
        },
        {
          id: 1,
          text: 'About',
          page:'/AboutPage'
        },
        {
          id: 2,
          text: 'Episodes',
          page:'/EpisodesPage'
        },
        {
          id: 3,
          text: 'Articles',
          page:'/ArticlesPage'
        },
        {
          id: 4,
          text: 'Shop',
          page:'/ShopPage'
        },
        {
          id: 5,
          text: 'Support',
          page:'/SupportPage'
        }
      ]
    }
  }
}
</script>