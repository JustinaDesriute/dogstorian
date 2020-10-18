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
          page:'/home'
        },
        {
          id: 1,
          text: 'About',
          page:'/about'
        },
        {
          id: 2,
          text: 'Episodes',
          page:'/episodes'
        },
        {
          id: 3,
          text: 'Blog',
          page:'/blog'
        },
        {
          id: 4,
          text: 'Store',
          page:'/store'
        },
        {
          id: 5,
          text: 'Support',
          page:'/support'
        }
      ]
    }
  }
}
</script>