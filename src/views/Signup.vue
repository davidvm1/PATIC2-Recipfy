<template>
  <v-card min-width="500" class="mx-auto mt-13 mb-13 pa-13">
    <v-card-title class="title">Create an Account</v-card-title>
    <v-form class="text-center"
            ref="SignInForm">
      <v-text-field
        append-icon="mdi-account-circle-outline"
        outlined
        label="Name"
        v-model="name"
        rounded
        :rules="[rules.required]"
        required>
      </v-text-field>

      <v-text-field
        append-icon="mdi-account-circle-outline"
        outlined
        label="Last Name"
        v-model="lastName"
        rounded
        :rules="[rules.required]"
        required>
      </v-text-field>

      <v-text-field
        append-icon="mdi-email-multiple-outline"
        outlined
        type="email"
        label="Email"
        v-model="email"
        rounded
        :rules="[rules.email, rules.required]"
        required>
      </v-text-field>

      <v-text-field
        append-icon="mdi-lock-question"
        outlined
        name="input-10-2"
        label="Password"
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
        label="confirm password"
        class="input-group--focused"
        type="password"
        rounded
        :rules="[rules.required, rules.min8]"
        @click:append="show3 = !show3">
      </v-text-field>

      <v-radio-group>
        <v-radio color="#00575A"
                 label="Im fine with the terms of usage"
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
        Create Account
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
        const newUser = {
          userId: user.user.uid,
          name: this.name,
          lastName: this.lastName
        }
        await firebaseService.addNewUserInstance(newUser)
        this.$store.commit("SET_NEW_USER", user);
        this.$store.commit('SET_USER_RECIPES', [])
        this.$store.commit('CHANGE_SESSION_STATE', true)
        this.$store.commit('SET_USER_NAMES', newUser)
        if (!user || !user.user) {
          return
        }
        this.$router.replace({
          name: "Search",
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
