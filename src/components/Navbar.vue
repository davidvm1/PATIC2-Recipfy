<template>
  <v-app-bar color="#00575A" flat>
    <v-app-bar-nav-icon color="white" />

    <v-toolbar-title>Recipfy</v-toolbar-title>

    <v-spacer />

    <v-btn class="mr-4" color="white" text v-if="isLogged" @click="logOut">Salir</v-btn>

    <v-container v-else>
      <v-row justify="end">
        <v-btn class="mr-4" color="white" text>Iniciar Sesión</v-btn>

        <span class="mr-4" style="color: white;">|</span>

        <v-btn class="mr-4" color="white" @click="$router.push({path: '/Signup'})" text>Registrarse</v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script>
import Signup from "@/views/Signup.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapState(["isLogged"]),
  },
  methods: {
    ...mapMutations(["changeSessionState"]),
    logOut() {
      this.changeSessionState(false);
      this.$router.replace({
        name: "Signup",
      });
    },
  },
};
</script>
<style scoped>
.v-toolbar__title {
  color: white;
}
</style>
