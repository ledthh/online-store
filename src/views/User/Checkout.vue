<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
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
export default {
  data() {
    return {
      orders: [
        {
          id: 1,
          productId: 12,
          name: "Alexander",
          phone: "22-22-22",
          done: false
        },
        {
          id: 2,
          productId: 13,
          name: "Konstantin",
          phone: "22-22-24",
          done: false
        },
        {
          id: 3,
          productId: 10,
          name: "Dmitryi",
          phone: "22-88-22",
          done: false
        },
        {
          id: 4,
          productId: 22,
          name: "Alexander",
          phone: "42-22-24",
          done: false
        }
      ]
    };
  },
  methods: {
    markDone(order) {
      order.done = true;
    }
  }
};
</script>
