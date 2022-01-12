<template>
  <div class="main">
    <h1>equipment</h1>
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
      >
      </v-data-table>
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
      search: "",
      headers: [
        {
          text: "Nome",
          align: "start",
          value: "name",
        },
        { text: "Preço", value: "cost.quantity" },
        { text: "Classe de Armadura (CA)", value: "armor_class.base" },
        { text: "Força", value: "str_minimum" },
        { text: "Furtividade", value: "stealth_disadvantage" },
        { text: "Peso", value: "weight" },
      ],
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    axios
      .get("https://www.dnd5eapi.co/api/equipment-categories/armor")
      .then((response) => {
        this.getEquipmentData(response.data.equipment);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    getEquipmentData(equipment) {
      for (let armor of equipment) {
        axios
          .get(`https://www.dnd5eapi.co${armor.url}`)
          .then((response) => {
            this.armors.push(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style >
p {
  margin-top: 3rem;
}
</style>