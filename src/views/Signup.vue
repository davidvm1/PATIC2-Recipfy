<template>
  <v-card min-width="500"
          class="mx-auto mt-13 pa-13">
    <v-card-title class="title">
      Crear una Cuenta
    </v-card-title>
    <v-form
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
