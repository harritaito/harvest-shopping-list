<template>
  <div v-if="list">
    <h1>{{ list.title }}</h1>
    <p>{{ list.time }} {{ list.date }} by {{ list.maker }}</p>
    <p>{{ list.description }}</p>
    <ul>
      <li v-for="item in list.items" :key="item.index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['id'],
  created() {
    this.$store.dispatch('fetchList', this.id).catch((error) => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error },
      })
    })
  },
  computed: {
    list() {
      return this.$store.state.list
    },
  },
}
</script>

<style scoped>
li {
  list-style: none;
}
</style>
