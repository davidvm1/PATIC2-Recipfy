<template>
  <v-container>
    <v-row>
      <v-img src="../assets/logo.png" height="20vh" width="50%" contain></v-img>
    </v-row>
    <v-row align="center">
      <v-combobox v-model="chips" chips clearable label="Ingresa tus ingredientes" multiple solo>
        <template v-slot:selection="{ attrs, item, select, selected }">
          <v-chip
            v-bind="attrs"
            :input-value="selected"
            close
            @click="select"
            @click:close="remove(item)"
          >
            <strong>{{ item }}</strong>&nbsp;
          </v-chip>
        </template>
      </v-combobox>
    </v-row>
    <v-row justify="center">
      <v-btn class="ml-2" large>Buscar</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      chips: [],
    };
  },

  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },
  },
};
</script>

<style>
</style>