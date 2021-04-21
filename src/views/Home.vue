<template>
  <div v-if="!loading">
    <v-container>
      <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item
          v-for="(product, i) in promoProducts"
          :key="i"
          :src="product.imageSrc"
        >
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container>
      <v-row justify="space-around">
        <v-col
          v-for="(product, i) in products"
          :key="i"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card>
            <router-link :to="'/product/' + product.id">
              <v-img :src="product.imageSrc" height="350" />
            </router-link>
            <v-card-title>
              <div>
                <h3 class="text-center">{{ product.title }}</h3>
                <v-card-text class="text-subtitle-2 px-0">
                  {{ shortenDescription(product.description) }}
                </v-card-text>
                <div class="green--text">
                  <span class="title">Price: </span>${{ product.price }}
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer />
              <v-btn
                depressed
                rounded
                outlined
                color="primary"
                :to="'/product/' + product.id"
              >Description</v-btn>
              <buy-product-dialog :product="product" :title="'Add to cart'" />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-row>
        <v-col class="text-center pt-10">
          <v-progress-circular indeterminate color="primary" size="80" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BuyProduct from '@/components/BuyProduct'

export default {
  components: {
    buyProductDialog: BuyProduct
  },
  computed: mapGetters([
    'loading',
    'products',
    'promoProducts'
  ]),
  methods: {
    shortenDescription(text) {
      return text.substring(0, 60) + text.length > 59 ? '...' : '';
    }
  }
};
</script>
