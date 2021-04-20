<template>
  <v-dialog width="400" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="primary" v-on="on" v-bind="attrs">
        Edit
      </v-btn>
    </template>
    <v-card>
      <v-row class="pa-0 ma-0">
        <v-col cols="12">
          <p class="text-h4 py-3 text-center font-weight-bold">Edit product</p>
          <v-divider />
          <v-text-field label="Title product" v-model="editedTitle"></v-text-field>
          <v-textarea label="Description" v-model="editedDescription"></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" outlined @click="onCancel">Cancel</v-btn>
            <v-btn color="primary" @click="onSave">Save</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      dialog: false,
      editedTitle: this.product.title,
      editedDescription: this.product.description
    }
  },
  methods: {
    onCancel() {
      this.editedTitle = this.product.title;
      this.editedDescription = this.product.description;
      this.dialog = false;
    },
    onSave() {
      if (this.editedTitle !== '' && this.editedDescription !== '') {
        this.$store.dispatch('updateProduct', {
          id: this.product.id,
          title: this.editedTitle,
          description: this.editedDescription
        });
        
        this.dialog = false;
      }
    }
  }
}
</script>