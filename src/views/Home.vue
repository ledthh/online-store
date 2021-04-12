<template>
  <div>
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
                  {{ product.description.substring(0, 60) }}...
                </v-card-text>
                <div class="green--text">
                  <span class="title">Price: </span>${{ product.price }}
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer />
              <v-btn depressed rounded color="primary" outlined :to="'/product/' + product.id"
                >Description</v-btn
              >
              <v-btn depressed rounded color="primary">Add to cart</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'products',
    'promoProducts'
  ])
};
</script>
