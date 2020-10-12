<template>
  <div>
    <v-app-bar
      color="#00575A"
      flat>
      <v-app-bar-nav-icon color="white"  @click="drawer = true"/>

      <v-toolbar-title>
        Recipfy
      </v-toolbar-title>

      <v-spacer />

      <v-btn class="mr-4"
             color="white"
             text
             v-if="isLogged"
             @click="logOut">Salir
      </v-btn>

      <v-container v-else>
        <v-row justify="end">
          <v-btn class="mr-4"
                 color="white"
                 @click="$router.push({path: '/'})"
                 text>
            Iniciar Sesión
          </v-btn>

          <span class="mr-4"
                style="color: white;">
          |
        </span>

          <v-btn class="mr-4"
                 color="white"
                 @click="$router.push({path: '/Signup'})"
                 text>
            Registrarse
          </v-btn>

        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary>
      <v-list
        nav
        dense>

        <v-list-item-group
          v-model="group"
          active-class="teal lighten-2"
           color="black">
          <v-list-item @click="$router.push({path: '/search'})">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push({path: `/favorites/${getUserId}`})">
            <v-list-item-icon>
              <v-icon>mdi-heart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Favorites</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import Signup from "@/views/Signup.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapState(["isLogged"]),
    ...mapGetters(['getUserId'])
  },
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    logOut() {
      this.$store.commit('CHANGE_SESSION_STATE', false)
      this.$router.replace({
        name: "Login",
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
