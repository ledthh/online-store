<template>
  <v-app>
    <NavBar />
    <v-snackbar
      multi-line
      color="error"
      :value="error != null"
      @input="closeError"
    >
      {{ error }}
      <template v-slot:action="{ attrs }">
        <v-btn
          depressed
          v-bind="attrs"
          @click="closeError"
        >Close</v-btn>
      </template>
    </v-snackbar>
    <router-view />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: "App",
  components: {
    NavBar
  },
  data() {
    return {
      snackbar: true
    }
  },
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError');
    }
  }
};
</script>
