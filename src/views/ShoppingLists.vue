<template>
  <div class="lists">
    <h4>Shopping lists</h4>
    <ListCard v-for="list in lists" :key="list.id" :list="list" />
  </div>
</template>

<script>
import ListCard from '@/components/ListCard.vue'

export default {
  name: 'ShoppingLists',
  components: {
    ListCard,
  },
  created() {
    this.$store.dispatch('fetchLists').catch((error) => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error },
      })
    })
  },
  computed: {
    lists() {
      return this.$store.state.lists
    },
  },
}
</script>

<style scoped>
.lists {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h4 {
  font-size: 20px;
}
</style>
