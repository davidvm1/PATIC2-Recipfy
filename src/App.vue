<template>
  <v-app>
    <div>
      <Navbar/>
    </div>
    <router-view />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  },
  data: () => ({
    //
  }),
};
</script>
