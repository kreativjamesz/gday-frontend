import { mapMutations, mapActions, mapGetters } from 'vuex'

export const Mixin = {
  data() {
    return {
      //
    }
  },
  computed: {
    ...mapGetters({
      // ...
    })
  },
  methods: {
    ...mapMutations({
      // ...
    }),
    ...mapActions({
      // ...
    }),
    goTo(route) {
      this.$router.push(route)
    },
  }
}