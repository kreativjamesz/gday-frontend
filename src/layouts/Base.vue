<template>
  <div id="app-wrapper">
    <!--/ Main Container /-->
    <div class="main-wrapper">
      <!--/ Base App Bar /-->
      <NavigationBar
        id="navigation-bar"
        v-if="$store.state.layout.header"
        :class="layoutClasses.header"
        ><slot name="navbar"></slot>
      </NavigationBar>
      <!--/ END Base App Bar /-->
      <div class="container-fluid" :class="classContainer.main">
        <router-view />
      </div>

      <!--/ Base Footer /-->
      <BaseFooter
        v-if="$store.state.layout.footer"
        :class="layoutClasses.footer"
        ><slot name="footer"></slot>
      </BaseFooter>
      <!--/ END Base Footer /-->
    </div>
    <!--/ END Main Container /-->
    <!--/ Base Navigation Drawer /-->
    <NavigationDrawer
      v-if="$store.state.layout.sidebar"
      :class="layoutClasses.sidebar"
      ><slot name="sidebar"></slot>
    </NavigationDrawer>
    <!--/ END Base Navigation Drawer /-->
  </div>
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
