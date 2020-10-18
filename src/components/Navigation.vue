<template>
  <div class="navigation-wrapper">
    <nav>
      <router-link v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`"
      class="spacing">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<style> 

  .navigation-wrapper {
    height: 100%;
  }

  nav {
    display: flex;
    flex-direction: column;
    text-align: start;
  }

  nav > a {
    color: white;
    text-decoration: none;
    padding: 20px 10px;
  }

  nav > a:hover {
    color: #000033;
  }

  nav > a:focus {
    color: #000033;
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
          text: 'Podcast',
          page:'/podcast'
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