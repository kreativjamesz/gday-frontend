<template>
  <BaseLayout
    :layout-classes="layoutClasses"
    :class-container="classContainer"
  />
</template>

<script>
import BaseLayout from './Base.vue'
export default {
  name: 'LayoutDefault',
  components: { BaseLayout },
  data() {
    return {
      classContainer: {
        main: 'pa-0'
      },
      layoutClasses: {
        sidebar: 'app-sidebar',
        header: 'app-header',
        footer: 'app-footer'
      }
    }
  },
  created() {
    this.$store.commit('setLayout', {
      header: true,
      sidebar: true,
      footer: true
    })
  }
}
</script>

<style></style>
