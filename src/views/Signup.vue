<template>
  <v-card min-width="500" class="mx-auto mt-13 mb-13 pa-13">
    <v-card-title class="title">Crear una Cuenta</v-card-title>
    <v-form class="text-center"
            ref="SignInForm">
      <v-text-field
        append-icon="mdi-account-circle-outline"
        outlined
        label="Nombre"
        v-model="name"
        rounded
        :rules="[rules.required]"
        required>
      </v-text-field>

      <v-text-field
        append-icon="mdi-account-circle-outline"
        outlined
        label="Apellido"
        v-model="lastName"
        rounded
        :rules="[rules.required]"
        required>
      </v-text-field>

      <v-text-field
        append-icon="mdi-email-multiple-outline"
        outlined
        type="email"
        label="Correo"
        v-model="email"
        rounded
        :rules="[rules.email, rules.required]"
        required>
      </v-text-field>

      <v-text-field
        append-icon="mdi-lock-question"
        outlined
        name="input-10-2"
        label="Contraseña"
        class="input-group--focused"
        type="password"
        v-model="password"
        rounded
        :rules="[rules.required, rules.min8]"
        @click:append="show3 = !show3">
      </v-text-field>

      <v-text-field
        append-icon="mdi-lock-question"
        outlined
        name="input-10-2"
        label="Repite la contraseña"
        class="input-group--focused"
        type="password"
        rounded
        :rules="[rules.required, rules.min8]"
        @click:append="show3 = !show3">
      </v-text-field>

      <v-radio-group>
        <v-radio color="#00575A"
                 label="Estoy de acuerdo con los Términos de Uso"
                 v-model="this.terms"
                 value="radio-1" />
      </v-radio-group>

      <v-btn
        dark
        min-width="40%"
        min-height="40px"
        class="signup-btn mt-5"
        color="#00575A"
        @click="pressed">
        Crear cuenta
      </v-btn>

      <v-alert class="mt-5"
               type="error"
               v-if="error">
        {{error.message}}
      </v-alert>
    </v-form>
  </v-card>
</template>

<script>
import rules from '@/libs/rules'
import { mapState } from "vuex";
import firebaseService from '@/services/firebaseServices'

export default {
  name: "Signup",
  computed: {
    ...mapState(["isLogged"]),
  },
  data() {
    return {
      email: "",
      name: "",
      lastName: "",
      password: "",
      error: "",
      rules: rules,
      terms: false
    };
  },
  methods: {
    async pressed() {
      if (!this.$refs.SignInForm.validate()) return
      try {
        const user = await firebaseService.createUser(this.email, this.password)
        this.$store.commit('CHANGE_SESSION_STATE', true)
        if (!user || !user.user) {
          return
        }
        this.$router.replace({
          name: "Secret",
        })
      } catch (err) {
        this.error = err
      }
    }
  },
};
</script>
<style scoped>
.title {
  justify-content: center !important;
}
</style>
