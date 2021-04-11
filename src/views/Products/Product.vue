<template>
  <v-container class="mt-5">
    <v-card elevation="5" class="">
      <v-row justify="center">
        <v-col cols="12" lg="6">
          <v-img src="https://image.ibb.co/fZzq1o/Lenovo_Legion_Y520.jpg" height="350" />
        </v-col>
        <v-col cols="12" lg="6">
          <v-card flat class="px-3">
            <p class="text-h4 my-3 blue--text text--accent-4">Title laptop</p>
            <div id="description" class="text-h5">
              <p>
                <span>Vendor:</span> Alexander
              </p>
              <p>
                <span>Price: </span>
                <span class="green--text">$ 999</span>
              </p>
              <p>
                <span>Color: </span>
                <span
                  :title="'red'"
                  :style="{ backgroundColor: 'red' }"
                  class="product-color"
                ></span>
              </p>
              <p>
                <span>Material:</span> Metal
              </p>
              <div>
                <p class="primary--text mb-0">Description:</p>
                <p class="text-body-1 mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary">Edit</v-btn>
                <v-btn color="primary">Buy</v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
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