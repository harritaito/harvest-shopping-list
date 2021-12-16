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
// Dynamic routing for shopping list details. Should probably use store!
import ListService from '@/services/ListService.js'
export default {
  props: ['id'],
  data() {
    return {
      list: null,
    }
  },
  created() {
    ListService.getList(this.id)
      .then((response) => {
        this.list = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style scoped>
 li {
   list-style: none;
 }
</style>
