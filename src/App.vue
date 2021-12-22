<template>
	<div id="app">
    <v-app>
      <v-app-bar dark color="primary" app>
        <Header />
      </v-app-bar>
      <router-view></router-view>
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


</style>

<script>
import Header from '@/components/Header.vue'
export default {
  components:{
    Header,
  },

};
</script>
