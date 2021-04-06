<template>
  <div>
    <v-navigation-drawer app temporary dark color="primary" v-model="sideNav">
      <v-list class="pa-0">
        <v-list-item-group>
          <v-list-item :to="link.url" v-for="link in links" :key="link.title">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dense dark color="primary">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="sideNav = !sideNav"
      />
      <v-toolbar-title>Online Store</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          elevation="0"
          color="primary"
          v-for="(link, i) in links"
          :key="i"
          :to="link.url"
        >
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      links: [
        { icon: "mdi-account-box", title: "Login", url: "/login" },
        { icon: "mdi-account-plus", title: "Sign Up", url: "/signup" },
        { icon: "mdi-plus-box", title: "New Product", url: "/new" },
        { icon: "mdi-view-list", title: "My Products", url: "/list" },
        { icon: "mdi-cart", title: "Cart", url: "/checkout" }
      ]
    };
  }
};
</script>
