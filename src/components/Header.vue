<template>
  <nav class="site-header">
    <div class="container">
      <div class="header-logo">
        <button  class="header-logo-btn">
          <img class="logo-header" src="../assets/logo.png" alt="">
          <span class="header-title">Rpg Armory</span>
        </button>
      </div>
      <div class="nav-list">
        <ul>
          <a href="#">
            <li>Armas</li>
          </a>
          <a href="#">
            <li>Armaduras</li>
          </a>
          <a href="#">
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
.header-logo-btn{
  display: flex;
  align-items: center;
}
.logo-header{
  max-width: 2rem;
}
.header-title{
  font-weight: 900;
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