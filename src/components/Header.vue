<template>
  <nav class="site-header">
    <div class="container">
      <div class="header-logo">
        <button  class="header-logo-btn">
          <router-link to='/'>
          <img class="logo-header" src="../assets/logo.png" alt="">
          <span class="header-title">Rpg Armory</span>
          </router-link>
        </button>
      </div>
      <div class="nav-list">
        <ul>
          <a href="/weapons">
            <li>Armas</li>
          </a>
          <a href="/armors">
            <li>Armaduras</li>
          </a>
          <a href="/trinket">
            <li>Bugigangas</li>
          </a>
          <a href="#">
            <li>Seus Itens</li>
          </a>
          <a href="#">
           <li>Crie seus Itens</li>
          </a>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.site-header{
  min-width: 100%;
}
a {
    display: flex;
    align-items: center;
    text-decoration: none;
}
.logo-header{
  max-width: 2rem;
}
.header-title{
  font-weight: 900;
  color: white;
}
.container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
ul{
  display: flex;
  list-style: none;
}
li{
  margin: 0 1rem;
  color: white;
}
</style>