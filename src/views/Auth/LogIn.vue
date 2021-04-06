<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card elevation="12">
          <v-toolbar color="primary" elevation="0" dark>
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" :lazy-validation="lazy" v-model="valid">
              <v-text-field
                label="Email"
                name="email"
                type="email"
                prepend-icon="mdi-account"
                v-model="email"
                :rules="emailRules"
              >
              </v-text-field>
              <v-text-field
                label="Password"
                name="password"
                :type="showPass ? 'text' : 'password'"
                counter="8"
                prepend-icon="mdi-lock"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                v-model="password"
                :rules="passwordRules"
                @click:append="showPass = !showPass"
              >
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" :disabled="!valid" @click="onSubmit">Log in</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      lazy: false,
      email: '',
      password: '',
      showPass: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be equal or more than 8 characters'
      ]
    };
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        let user = {
          email: this.email,
          password: this.password
        };
        console.log(user);
      }
    }
  }
};
</script>
