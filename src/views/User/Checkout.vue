<template>
  <v-container>
    <v-row>
      <v-col class="text-center pt-10" v-if="loading">
        <v-progress-circular indeterminate color="primary" size="80" />
      </v-col>
      <v-col v-else-if="!loading && orders.length == 0">
        <h1 class="text-center">You have no orders</h1>
      </v-col>
      <v-col cols="12" sm="6" offset-sm="3" v-else>
        <h1 class="mb-3">Orders</h1>
        <v-list two-line elevation="4">
          <v-list-item
            v-for="order in orders"
            :key="order.id"
            color="red"
          >
            <v-list-item-action>
              <v-checkbox
                success
                :input-value="order.done"
                :disabled="order.done"
                @change="markDone(order)"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ order.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                depressed
                outlined
                color="primary"
                :to="'/product/' + order.productId"
                >Open</v-btn
              >
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {}
  },
  computed: mapGetters([
    'loading',
    'orders'
  ]),
  methods: {
    markDone(order) {
      this.$store.dispatch('markOrderDone', order.id)
      .then(() => {
        order.done = true;
      })
      .catch(() => {})
    }
  },
  created() {
    this.$store.dispatch('fetchOrders');
  }
};
</script>
