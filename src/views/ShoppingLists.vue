<template>
  <div class="lists">
    <h4>Shopping lists</h4>
    <ListCard v-for="list in lists" :key="list.id" :list="list" />
  </div>
</template>

<script>
import ListCard from '@/components/ListCard.vue'
import ListService from '@/services/ListService.js'

export default {
  name: 'ShoppingLists',
  components: {
    ListCard,
  },
  data() {
    return {
      lists: null,
    }
  },
  created() {
    ListService.getLists()
      .then((response) => {
        this.lists = response.data
      })
      .catch((error) => {
        console.log(error)
      })
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
