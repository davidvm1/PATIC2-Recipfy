<template>
  <v-card min-width="500" class="mx-auto mt-13 mb-13 pa-13">
    <v-card-title class="title">Crear una Cuenta</v-card-title>
    <v-form class="text-center" ref="form" @submit.prevent="pressed">
      <v-text-field
        append-icon="mdi-account-circle-outline"
        outlined
        label="Nombre"
        v-model="name"
        rounded
        required
      ></v-text-field>

      <v-text-field
        append-icon="mdi-account-circle-outline"
        outlined
        label="Apellido"
        v-model="lastname"
        rounded
        required
      ></v-text-field>

      <v-text-field
        append-icon="mdi-email-multiple-outline"
        outlined
        type="email"
        label="Correo"
        v-model="email"
        rounded
        required
      ></v-text-field>

      <v-text-field
        append-icon="mdi-lock-question"
        outlined
        name="input-10-2"
        label="Contraseña"
        class="input-group--focused"
        type="password"
        v-model="password"
        rounded
        @click:append="show3 = !show3"
      ></v-text-field>

      <v-text-field
        append-icon="mdi-lock-question"
        outlined
        name="input-10-2"
        label="Repite la contraseña"
        class="input-group--focused"
        type="password"
        rounded
        @click:append="show3 = !show3"
      ></v-text-field>

      <v-radio-group>
        <v-radio color="#00575A" label="Estoy de acuerdo con los Términos de Uso" value="radio-1"></v-radio>
      </v-radio-group>

      <v-btn
        dark
        min-width="40%"
        min-height="40px"
        class="signup-btn mt-5"
        color="#00575A"
        type="submit"
      >Crear cuenta</v-btn>

      <v-alert class="mt-5" type="error" v-if="error">{{error.message}}</v-alert>
    </v-form>
  </v-card>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Signup",
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async pressed() {
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);

        this.changeSessionState(true);
        this.$router.replace({
          name: "Secret",
        });
      } catch (err) {
        console.log(err);
      }
    },
    ...mapMutations(["changeSessionState"]),
  },
  computed: {
    ...mapState(["isLogged"]),
  },
};
</script>
<style scoped>
.title {
  justify-content: center !important;
}
</style>
