<template>
  <v-card
    class="sticky-card"
    :style="`top:` + top + `;` + `z-index:` + zIndex + `;`"
    elevation="0"
    flat
  >
    <v-card-text v-if="!template">
      <v-scroll-y-reverse-transition>
        <v-layout align-center>
          <h2>
            <v-icon v-if="back" @click="$router.back()">
              mdi-arrow-left
            </v-icon>
            {{ title }}
          </h2>
          <v-spacer />
          <v-btn
            v-for="(item, key) in headerButtons"
            :key="key"
            elevation="0"
            :color="item.color"
            :disabled="item.disabled"
            :outlined="item.label === 'Cancel'"
            large
            class="transform-none ma-1"
            @click="$emit('actions-event', item)"
            >{{ item.label }}
          </v-btn>
        </v-layout>
      </v-scroll-y-reverse-transition>
    </v-card-text>
    <v-card-text v-else>
      <v-scroll-y-reverse-transition>
        <v-layout align-center>
          <h2>
            <v-icon v-if="back" @click="$router.back()">
              mdi-arrow-left
            </v-icon>
            {{ title }}
          </h2>
          <v-spacer />
          <slot />
        </v-layout>
      </v-scroll-y-reverse-transition>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    top: String,
    zIndex: String,
    template: Boolean,
    back: Boolean,
    title: String,
    headerButtons: {
      type: Array,
      default: () => {
        return [
          {
            label: 'Cancel',
            color: 'grey',
            disabled: false
          },
          {
            label: 'Save',
            color: 'primary',
            disabled: false
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.sticky-card {
  position: sticky !important;
  border-bottom:1px solid #dedede;
}
</style>
