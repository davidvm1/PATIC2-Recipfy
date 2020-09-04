<template>
  <v-card min-width="500"
          class="mx-auto mt-13 mb-13 pa-13">
    <v-card-title class="title">
      Crear una Cuenta
    </v-card-title>
    <v-form
        class="text-center"
        ref="form">
        <v-text-field
          append-icon="mdi-account-circle-outline"
          outlined
          label="Nombre"
          required>
        </v-text-field>

        <v-text-field
          append-icon="mdi-account-circle-outline"
          outlined
          label="Apellido"
          required>
        </v-text-field>

      <v-text-field
        append-icon="mdi-email-multiple-outline"
        outlined
        type="email"
        label="Correo"
        required>
      </v-text-field>

      <v-text-field
        append-icon="mdi-lock-question"
        outlined
        name="input-10-2"
        label="Contraseña"
        class="input-group--focused"
        type="password"
        @click:append="show3 = !show3">
    </v-text-field>

    <v-text-field
        append-icon="mdi-lock-question"
        outlined
        name="input-10-2"
        label="Respite la contraseña"
        class="input-group--focused"
        type="password"
        @click:append="show3 = !show3">
    </v-text-field>

    <v-radio-group>
      <v-radio
        color="#00575A"
        label="Estoy de acuerdo con los Términos de Uso"
        value="radio-1">
      </v-radio>
    </v-radio-group>

    <v-btn
        dark
        min-width="40%"
        min-height="40px"
        class="signup-btn mt-5"
        color="#00575A">
        Crear cuenta
    </v-btn>

      </v-form>
  </v-card>
</template>
<script>
  export default {
    name: 'Navbar',
    data () {
      return {

      }
    }
  }
</script>
<style scoped>
  .title{
    justify-content: center !important;
  }
</style>
