<template>
  <v-navigation-drawer
    :mini-variant="$vuetify.breakpoint.smAndDown"
    :expand-on-hover="$vuetify.breakpoint.smAndDown"
    max-width="220px"
    open-on-hover
    clipped
    fixed
    app
  >
    <v-list dense color="primary--text">
      <v-list-item
        v-for="(item, index) in bookings"
        :key="index"
        :to="item.path"
        router
        link
        :class="!$vuetify.breakpoint.mobile ? `mx-2 my-1` : ``"
        ><v-list-item-action class="mr-3">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="font-heavy" v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!-- <div class="carousel pa-5" v-show="$store.getters.loggedIn">
        <Carousel :items="advertisements"/>
      </div> -->
    <!-- v-show="$store.getters.loggedIn && $store.getters.userRole !== 'admin'" -->
  </v-navigation-drawer>
</template>

<script>
import menuList from '@/data/menu'

export default {
  name: 'BaseNavigationDrawer',
  data() {
    return {
      items: menuList.items,
      bookings: menuList.bookings
    }
  }
}
</script>

<style></style>
