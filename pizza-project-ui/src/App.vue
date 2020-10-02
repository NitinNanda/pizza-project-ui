<template>
  <div id="app">
    <NavBar 
      :nav-links = "navLinks"
      :image-path="require('./assets/logo.png')"
      background="#006491"
      link-color="#fff"
      hoverBackground="#004666"
    />
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import NavBar from "./components/NavBar";

export default {
  components: {
    NavBar
  },
  data: function() {
    return {
      navLinks: [
        {
          text: 'HOME',
          path: '/',
          icon: 'ion-ios-home'
        },
        {
          text: 'MENU',
          path: '/menu',
          icon: 'ion-ios-menu'
        },
        {
          text: 'CONTACT',
          path: '/contact',
          icon: 'ion-ios-contact'
        }
      ]
    }
  }
};

</script>

<style lang="scss">
@import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 10px;
  margin-inline-end: 0;
}
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
