<template>
  <v-main>
        <div class="banner"></div>
        <v-container fluid>
          <p class="text first-text">Armas, Armaduras e Bugigangas para 5ª edição de Dungeons & Dragons<br>
            Criar e gerenciar fichas de equipamento para PJs e NPCs nunca foi tão fácil!</p>
          <div class="armory">
            <h1 class="armory-title">Armas & Armaduras</h1>
            <p class="text armory-text">Esqueça o trabalho pesquisando  quais paginas estão suas armaduras e armas<br> Explore a lista de equipamentos de uma forma muito mais facil!</p>
            <a href="/weapons">
            <v-btn  class="armory-btn" color="primary" elevation="3" large>Armas</v-btn>
            </a>
            <a href="/armors">
              <v-btn class="armory-btn" color="primary" elevation="3" large>Armaduras</v-btn>
            </a>
          </div>
          <div class="trinket">
            <h1 class="trinket-title">Bugigangas</h1>
            <p class="text trinket-text">Sabe aquela parte do livro que você e o mestre ignoraram completamente por ser dificil de procurar?<br>Agora temos todas elas em um unico click!</p>
            <a href="/trinket">
              <v-btn class="trinket-btn" color="primary" elevation="3" large>Bugigangas</v-btn>
            </a>
          </div>
        </v-container>
      </v-main>
</template>

<style scoped>
 .banner {
    background-image: url(https://media.dnd.wizards.com/styles/second_hubpage_banner/public/images/head-banner/NEW-TO-DnD_What-is-DnD_Subsection_Hero_140718.jpg);
    height: 26vw;
    background-repeat: round;
}
.text {
    color: #333333;
    font-size: 1.2rem;
    font-weight: 100;
}
.v-main .v-main__wrap .container {
  padding: unset;
}
p.text.first-text {
  margin: 2rem 0;
}
.armory-btn{
  margin: 0 1rem 1rem;
}
.armory-title{
  padding-top: 1rem;
}
.armory-text{
  padding: 1rem 0;
}
.armory{
  background-color: #e1e1e1aa;
}
.trinket-btn{
  margin: 0 1rem 1rem;
}
.trinket-title{
  padding-top: 1rem;
}
.trinket-text{
  padding: 1rem 0;
}
#nav {
	padding: 30px;
}

h1{
  color: #333333
}
</style>
