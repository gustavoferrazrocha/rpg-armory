<template>
	<div id="app">
  <!-- App.vue -->
    <v-app>
      <!-- <v-navigation-drawer app>
        
      </v-navigation-drawer> -->

      <v-app-bar dark color="primary" app>
        <Header />
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main>

        <!-- Provides the application the proper gutter -->
        <v-container fluid>

          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
  </div>
</template>

<style>
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

<script>
import Header from '@/components/Header.vue'
export default {
  components:{
    Header,
  },

};
</script>
