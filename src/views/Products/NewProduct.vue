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
            <v-btn color="warning" @click="upload">
              Upload
              <v-icon right>mdi-cloud-upload</v-icon>
            </v-btn>
            <input
              type="file"
              ref="fileInput"
              style="display: none;"
              accept="image/*"
              @change="onFileChange"
            >
          </v-col>
          <v-col cols="12">
            <v-img :src="imageSrc" max-height="200" v-if="imageSrc"></v-img>
          </v-col>
          <v-col cols="12" class="py-0">
            <v-switch color="primary" label="Add to Promo?" v-model="promo" class="my-0"/>
          </v-col>
          <v-col cols="12" class="pt-0">
            <v-btn
              :loading="loading"
              :disabled="!valid || !image || loading"
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
      promo: false,
      image: null,
      imageSrc: ''
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    createProduct() {
      if (this.$refs.form.validate() && this.image) {
        const product = {
          title: this.title,
          vendor: this.vendor,
          color: this.color,
          material: this.material,
          price: this.price,
          description: this.description,
          promo: this.promo,
          image: this.image
        };
        
        this.$store.dispatch('createProduct', product)
          .then(() => {
            this.$router.push('/list');
          })
          .catch(() => {});
      }
    },
    upload() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result;
      }
      reader.readAsDataURL(file);
      this.image = file;
    }
  }
};
</script>
