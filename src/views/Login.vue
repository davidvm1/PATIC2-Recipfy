<template>
  <v-card min-width="500" class="mx-auto mt-13 mb-13 pa-13">
    <v-card-title class="title">Iniciar Sesión</v-card-title>
    <v-form class="text-center" ref="SignInForm">
      <v-text-field
        append-icon="mdi-email-multiple-outline"
        outlined
        rounded
        type="email"
        label="Correo electrónico"
        :rules="[rules.required,rules.email]"
        v-model="email"
        required
      ></v-text-field>

      <v-text-field
        append-icon="mdi-lock-question"
        outlined
        rounded
        name="input-10-2"
        label="Contraseña"
        class="input-group--focused"
        type="password"
        :rules="[rules.required]"
        v-model="password"
        @click:append="show3 = !show3"
      ></v-text-field>

      <v-radio-group>
        <v-radio color="#00575A" label="Recuerdame" value="radio-1"></v-radio>
      </v-radio-group>

      <v-btn
        dark
        min-width="40%"
        min-height="40px"
        class="signup-btn mt-5"
        color="#00575A"
        @click="pressed"
      >Ingresar</v-btn>

    <v-btn 
    text 
    color="#00575A"
    @click="rememberPass">
    ¿Olvidaste la contraseña?
    </v-btn>

      <v-alert class="mt-5" type="error" v-if="error">{{error}}</v-alert>
    </v-form>
  </v-card>
</template>
<script>
import rules from "@/libs/rules";
import { mapState } from "vuex";
import firebaseService from "@/services/firebaseServices";
export default {
  name: "Login",
  computed: {
    ...mapState(["isLogged"]),
  },
  data() {
    return {
      email: "",
      password: "",
      rules: rules,
      error: "",
    };
  },
  methods: {
    async pressed() {
      if (this.email && this.password) {
        //Se puede iniciar sesión
        try {
          const user = await firebaseService.Sign(this.email, this.password);
          this.$store.commit("CHANGE_SESSION_STATE", true);
          //console.log("Si se loguea!!")
          this.$router.replace({
            name: "Search",
          });
          if (!user || !user.user) {
            return;
          }
        } catch (err) {
          this.error = err;
        }
      }
    },
      async rememberPass (){
        //Aqui se pone el metodo
        if(this.email){
          try {
            const user = await firebaseService.rememberPass(this.email)
            this.error="Acabamos de enviar un mensaje a tu correo electronico para que recuperes tu cuenta"
            this.email=""
            if (!user || !user.user) {
              return
            } 
          }catch (err) {
            this.error = err
          }
        }else{
          this.error="Ingresa tu correo para recuperar tu contraseña"
        }
      }
    } 
}
</script>
<style scoped>
.title {
  justify-content: center !important;
}
</style>