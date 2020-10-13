<template>
  <v-card min-width="500" class="mx-auto mt-13 mb-13 pa-13">
    <v-card-title class="title"> Log in </v-card-title>
    <v-form class="text-center" ref="SignInForm">
      <v-text-field
        append-icon="mdi-email-multiple-outline"
        outlined
        rounded
        type="email"
        label="Email"
        :rules="[rules.required, rules.email]"
        v-model="email"
        required
      >
      </v-text-field>

      <v-text-field
        append-icon="mdi-lock-question"
        outlined
        rounded
        name="input-10-2"
        label="Password"
        class="input-group--focused"
        type="password"
        :rules="[rules.required]"
        v-model="password"
        @click:append="show3 = !show3"
      >
      </v-text-field>

      <v-radio-group>
        <v-radio color="#00575A" label="Remember me" value="radio-1"> </v-radio>
      </v-radio-group>

      <v-btn
        dark
        min-width="40%"
        min-height="40px"
        class="signup-btn mt-5"
        color="#00575A"
        @click="pressed"
      >
        Log in
      </v-btn>

      <v-btn text color="#00575A" @click="rememberPass()">
        Forgot Password?
      </v-btn>

      <v-alert class="mt-5" type="error" v-if="error">
        {{ error }}
      </v-alert>
    </v-form>
  </v-card>
</template>
<script>
import rules from "@/libs/rules";
import { mapState, mapGetters } from "vuex";
import firebaseService from "@/services/firebaseServices";
export default {
  name: "Login",
  computed: {
    ...mapState(["isLogged"]),
    ...mapGetters(["getUserId"])
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
        try {
          const user = await firebaseService.Sign(this.email, this.password);
          this.$store.commit("SET_NEW_USER", user);
          this.$store.commit("CHANGE_SESSION_STATE", true);
          if (!user || !user.user) {
            return;
          }
          const recipesIds = await this.$store.dispatch('getUserRecipes',this.getUserId)
          if (recipesIds) {
            this.$store.commit('SET_USER_RECIPES', recipesIds.favRecipes)
          }
          await this.$router.replace({
            name: "Search",
          });
        } catch (err) {
          this.error = err;
        }
      }
    },
    async rememberPass() {
      if (this.email) {
        try {
          const user = await firebaseService.rememberPass(this.email);
          this.error =
            "We send recovery email, check it out";
          this.email = "";
          if (!user || !user.user) {
            return;
          }
        } catch (err) {
          this.error = err;
        }
      } else {
        this.error = "All fields are required";
      }
    }
  }
};
</script>
<style scoped>
.title {
  justify-content: center !important;
}
</style>
