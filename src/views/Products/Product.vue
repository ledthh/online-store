<template>
  <v-container class="mt-5" v-if="!loading">
    <v-card elevation="5" class="">
      <v-row justify="center">
        <v-col cols="12" lg="6">
          <v-img :src="product.imageSrc" height="350" />
        </v-col>
        <v-col cols="12" lg="6">
          <v-card flat class="px-3">
            <p class="text-h4 my-3 blue--text text--accent-4">{{ product.title }}</p>
            <div id="description" class="text-h5">
              <p>
                <span>Vendor:</span> {{ transformText(product.vendor) }}
              </p>
              <p>
                <span>Price: </span>
                <span class="green--text">$ {{ product.price }}</span>
              </p>
              <p>
                <span>Color: </span>
                <span
                  :title="product.color"
                  :style="{ backgroundColor: product.color }"
                  class="product-color"
                ></span>
              </p>
              <p>
                <span>Material:</span> {{ transformText(product.material) }}
              </p>
              <div>
                <p class="primary--text mb-0">Description:</p>
                <p class="text-body-1 mb-5">{{ product.description }}</p>
              </div>
              <v-card-actions>
                <app-edit-product :product="product"></app-edit-product>
                <v-btn class="mx-2" color="primary">Buy</v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
  <v-container v-else>
      <v-row>
        <v-col class="text-center pt-10">
          <v-progress-circular indeterminate color="primary" size="80" />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import EditProduct from '@/components/EditProduct'

export default {
  props: ['id'],
  components: {
    appEditProduct: EditProduct
  },
  computed: {
    product() {
      return this.$store.getters.productById(this.id);
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    transformText(text) {
      return text.charAt(0).toUpperCase() + text.substr(1);
    }
  }
};
</script>

<style scoped>
.product-color {
  display: inline-block;
  width: 50px;
  height: 20px;
  border: 1px solid #2b2b2b;
  border-radius: 10px;
}

#description > p {
  margin: 4px 0;
}

#description > p > span {
  color: #2962FF;
}
</style>