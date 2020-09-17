<template>
  <v-app-bar
      color="#00575A"
      flat>
    <v-app-bar-nav-icon color="white" />

    <v-toolbar-title>
      Recipfy
    </v-toolbar-title>

    <v-spacer />
    <v-btn class="mr-4"
           color="white"
           @click="$router.push({path: '/Login'})"
           text>
      Iniciar Sesión
    </v-btn>
    <span class="mr-4"
          style="color: white;">
    </span>

    <v-btn class="mr-4"
           color="white"
           @click="$router.push({path: '/Signup'})"
           text>
      Registrarse
    </v-btn>
  </v-app-bar>
</template>
<script>
import Signup from "@/views/Signup.vue";
import { mapState } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapState(["isLogged"]),
  },
  methods: {
    logOut() {
      this.$store.commit('CHANGE_SESSION_STATE', false)
      this.$router.replace({
        name: "Signup",
      })
    },
  },
}
</script>
<style scoped>
.v-toolbar__title {
  color: white;
}
</style>
