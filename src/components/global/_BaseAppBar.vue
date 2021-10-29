<template>
  <v-app-bar app clipped-left color="white" dense light elevation="0">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/logo.svg"
        transition="scale-transition"
        width="24"
      />
      <span class="title h1">Meeting Room Booking</span>
    </div>
    <v-spacer></v-spacer>
    <v-btn text>
      <span class="mr-2">John Doe</span>
      <v-icon>mdi-account-circle-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'BaseAppBar'
}
</script>

<style></style>
