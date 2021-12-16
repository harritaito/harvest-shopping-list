<template>
  <div class="lists">
    <ListCard v-for="list in lists" :key="list.id" :list="list"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListCard from '@/components/ListCard.vue'

export default {
  name: 'Home',
  components: {
    ListCard,
  },
  data() {
    return {
      lists: [
        {
          id: 123,
          date: 'December 15, 2021',
          time: '12:00',
          maker: 'Harri',
          title: 'This days shopping list',
          description: 'This is for healthly living',
          items: ['blueberries', 'cherries'],
        },
        {
          id: 123,
          date: 'December 16, 2021',
          time: '13:00',
          maker: 'Miia',
          title: 'This days shopping list',
          description: 'This is for healthly living',
          items: ['apples', 'mangos'],
        },
        {
          id: 123,
          date: 'December 17, 2021',
          time: '14:00',
          maker: 'Harri',
          title: 'Holiday shopping list',
          description: 'This is for decadent living',
          items: ['chocolate', 'cake'],
        },
      ],
    }
  },
}
</script>

<style scoped>
.lists {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
