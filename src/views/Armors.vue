<template>
  <div class="main">
    <h1>Armors</h1>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="armors"
        :search="search"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      armors: [],
      search: '',
      headers: [
          {
            text: 'Nome',
            align: 'start',
            value: 'name',
          },
          { text: 'Preço', value: 'price' },
          { text: 'Classe de Armadura (CA)', value: 'armorclass' },
          { text: 'Força', value: 'stregnth' },
          { text: 'Furtividade', value: 'furtivity' },
          { text: 'Peso', value: 'weight' },
        ],
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    axios
      .get("https://www.dnd5eapi.co/api/equipment-categories/armor")
      .then((response) => (this.armors = response.data.equipment))
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style >
p {
  margin-top: 3rem;
}
</style>