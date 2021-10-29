<template>
  <v-app>
    <!--/ Main Container /-->
    <v-main>
      <!--/ Base App Bar /-->
      <BaseAppBar
        id=""
        v-if="$store.state.layout.header"
        :class="layoutClasses.header"
        ><slot name="navbar"></slot>
      </BaseAppBar>
      <!--/ END Base App Bar /-->
      <v-container fluid :class="classContainer.main">
        <router-view />
      </v-container>

      <!--/ Base Footer /-->
      <BaseFooter
        v-if="$store.state.layout.footer"
        :class="layoutClasses.footer"
        ><slot name="footer"></slot>
      </BaseFooter>
      <!--/ END Base Footer /-->
    </v-main>
    <!--/ END Main Container /-->
    <!--/ Base Navigation Drawer /-->
    <BaseNavigationDrawer
      v-if="$store.state.layout.sidebar"
      :class="layoutClasses.sidebar"
      ><slot name="sidebar"></slot>
    </BaseNavigationDrawer>
    <!--/ END Base Navigation Drawer /-->
  </v-app>
</template>

<script>
export default {
  name: 'Base',
  props: {
    classContainer: Object,
    layoutClasses: Object
  }
}
</script>

<style></style>
