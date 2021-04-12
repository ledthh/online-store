<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="8" offset-sm="2">
        <h1 class="mb-3 text-center">My products</h1>
        <v-card v-for="product in myProducts" :key="product.id" class="mb-5" elevation="4">
          <v-row>
            <v-col cols="4">
              <v-img :src="product.imageSrc" height="250" />
            </v-col>
            
            <v-col cols="8">
              <v-card-text class="text-h4 pb-0">{{ product.title }}</v-card-text>
              <v-card-text class="text-subtitle-1 text--secondary">{{ product.description }}</v-card-text>

              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="primary"
                  depressed
                  :to="'/product/' + product.id"
                >Open</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'myProducts'
  ])
};
</script>
