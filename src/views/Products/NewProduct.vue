<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <h1 class="mb-3">New product</h1>
        <v-form ref="form" :lazy-validation="lazy" v-model="valid" class="mb-3">
          <v-text-field
            name="title"
            label="Title"
            v-model="title"
            :rules="[v => !!v || 'Title is required']"
          ></v-text-field>
          <v-text-field
            name="vendor"
            label="Vendor"
            type="text"
            v-model="vendor"
          ></v-text-field>
          <v-text-field
            name="color"
            label="Color"
            type="text"
            v-model="color"
          ></v-text-field>
          <v-text-field
            name="material"
            label="Material"
            type="text"
            v-model="material"
          ></v-text-field>
          <v-text-field
            name="price"
            label="Price"
            v-model="price"
            :rules="[v => !!v || 'Price is required']"
          ></v-text-field>
          <v-textarea label="Description" v-model="description"></v-textarea>
        </v-form>
        <v-row>
          <v-col cols="12">
            <v-btn color="warning">
              Upload
              <v-icon right>mdi-cloud-upload</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-img src="" max-height="200"></v-img>
          </v-col>
          <v-col cols="12" class="py-0">
            <v-switch color="primary" label="Add to Promo?" v-model="promo" class="my-0"/>
          </v-col>
          <v-col cols="12" class="pt-0">
            <v-btn
              :loading="loading"
              :disabled="!valid || loading"
              color="success"
              @click="createProduct"
            >Create product</v-btn>
          </v-col>
        </v-row>
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
      title: '',
      vendor: '',
      color: '',
      material: '',
      price: 0,
      description: '',
      promo: false
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    createProduct() {
      if (this.$refs.form.validate()) {
        const product = {
          title: this.title,
          vendor: this.vendor,
          color: this.color,
          material: this.material,
          price: this.price,
          description: this.description,
          promo: this.promo,
          imageSrc: 'https://image.ibb.co/fZzq1o/Lenovo_Legion_Y520.jpg'
        };
        
        this.$store.dispatch('createProduct', product)
          .then(() => {
            this.$router.push('/list');
          })
          .catch(() => {});
      }
    }
  }
};
</script>
