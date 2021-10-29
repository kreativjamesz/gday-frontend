<template>
  <v-layout>
    <v-skeleton-loader v-if="loading" transition="fade" type="table" />
    <v-data-table
      v-else
      class="elevation-0"
      :fixed-header="true"
      :headers="headers"
      :items="data"
      :items-per-page="paging.limit"
      :hide-default-footer="true"
      v-bind="$attrs"
      v-on="$listeners"
      @click:row="rowAction"
    >
      <template
        v-for="(_, scopedSlotName) in $scopedSlots"
        #[scopedSlotName]="slotData"
      >
        <slot :name="scopedSlotName" v-bind="slotData" />
      </template>

      <template v-for="(_, slotName) in $slots" #[slotName]>
        <slot :name="slotName" />
      </template>
      
      <template #[`item.actions`]="{ item }">
        <v-btn
          v-for="(action, key) in item.actions"
          v-show="action.show"
          :key="key"
          fab
          x-small
          text
          @click.stop
          @click="$emit('table-action', action, item)"
          ><v-icon color="#767676">{{ action.icon }}</v-icon>
        </v-btn>
      </template>
      <template #no-data>
        <v-btn
          class="transform-none spacing-0 font-bold mt-10"
          color="primary"
          text
        >
          No records found
        </v-btn>
      </template>
      <template #no-results>
        <v-btn
          class="transform-none spacing-0 font-bold mt-10"
          color="primary"
          text
        >
          No records found
        </v-btn>
      </template>
    </v-data-table>
  </v-layout>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    loading: {
      type: Boolean,
      default: false
    },

    showSearch: {
      type: Boolean,
      default: true
    },

    showFilter: {
      type: Boolean,
      default: true
    },

    headers: {
      type: Array,
      default: () => {
        return []
      }
    },

    data: {
      type: Array,
      default: () => {
        return []
      }
    },

    paging: {
      type: Object,
      default: () => {
        return {
          limit: 10,
          total: 1,
          limitList: [10, 20, 30, 40, 50]
        }
      }
    },

    searchPh: {
      type: String,
      default: 'Search...'
    },

    filterPh: {
      type: String,
      default: 'All Display In'
    },

    filterData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: () => ({
    footer: false,
    showConfirm: false,
    confirm: {},
    actionItem: {}
  }),

  methods: {
    pager(currentPage, limit) {
      this.$emit('pager', currentPage, limit)
    },

    search(value) {
      this.$emit('search', value)
    },

    filter(value) {
      this.$emit('filter', value)
    },

    rowAction(item) {
      this.$emit('row-event', item)
    },

    confirmAction() {
      this.showConfirm = false
      this.$emit('table-action', this.actionItem)
    }
  }
}
</script>

<style></style>
