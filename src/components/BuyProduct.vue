<template>
  <v-dialog width="400" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        rounded
        depressed
        class="mx-2"
        v-on="on"
        v-bind="attrs"
      >{{ title }}</v-btn>
    </template>
    <v-card>
      <v-row class="pa-0 ma-0">
        <v-col cols="12">
          <p class="text-h4 py-3 text-center font-weight-bold">Order</p>
          <v-divider />
          <v-text-field label="Name" v-model="name" @change="onChange"></v-text-field>
          <v-text-field label="Phone" v-model="phone" @change="onChange"></v-text-field>
          <v-divider />
        </v-col>
        <v-col cols="12">
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              outlined
              :disabled="localLoading"
              @click="onCancel"
            >Cancel</v-btn>
            <v-btn
              color="primary"
              :disabled="empty || localLoading"
              :loading="localLoading"
              @click="onPurchase"
            >Purchase</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['product', 'title'],
  data() {
    return {
      empty: true,
      localLoading: false,
      dialog: false,
      name: '',
      phone: ''
    }
  },
  methods: {
    onCancel() {
      this.name = '';
      this.phone = '';
      this.dialog = false;
    },
    onPurchase() {
      if (this.empty == false) {
        this.localLoading = true;
        
        this.$store.dispatch('purchaseOrder', {
          name: this.name,
          phone: this.phone,
          productId: this.product.id,
          ownerId: this.product.ownerId
        })
        .finally(() => {
          this.name = '';
          this.phone = '';
          this.localLoading = false;
          this.dialog = false;
        });
      }
    },
    onChange() {
      this.empty = !(this.name !== '' && this.phone !== '');
    }
  }
}
</script>