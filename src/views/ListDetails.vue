<template>
  <div v-if="list">
    <h1>{{ list.title }}</h1>
    <p>{{ list.time }} {{ list.date }} by {{ list.maker }}</p>
    <p>{{ list.description }}</p>
    <p><button @click="deleteList(list.id)">Delete List</button></p>
    <ul class="list">
      <li class="list-item" v-for="item in list.items" :key="item.index">
        <input class="list-item__input" type="checkbox" /><span class="list-item__label">{{ item }}</span>
      </li>
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
  methods: {
    deleteList(id) {
      this.$store
        .dispatch('deleteList', id)
        .then(() => {
          this.$router.push({
            name: 'ShoppingLists',
          })
        })
        .catch((error) => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error },
          })
        })
    },
  },
}
</script>

<style scoped>
.list {
  position: relative;
  width: 260px;
  margin: 0 auto;
  padding: 12px 0;
  background: #fff;
  border: 1px solid;
  border-color: #dfdcdc #d9d6d6 #ccc;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.list:before,
.list:after {
  content: '';
  position: absolute;
  z-index: -1;
  height: 4px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 2px;
}

.list-item {
  list-style: none;
  padding: 0;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  position: relative;
  display: block;
  padding: 0.4em 0.4em 0.4em 2em;
  margin: 0.5em 0;
  background: #dad2ca;
  text-decoration: none;
  border-radius: 0.3em;
  transition: 0.3s ease-out;
  text-align: left;
}

input[type='checkbox'] {
  position: relative;
  visibility: hidden;
  cursor: pointer;
}
input[type='checkbox']:hover {
  background: #e9e4e0;
}
input[type='checkbox']:active:after {
  transform: rotate(360deg);
}
input[type='checkbox']:after {
  content: '';
  visibility: visible;
  cursor: pointer;
  display: block;
  position: relative;
  left: -3.5em;
  top: 50%;
  margin-top: -1.3em;
  background: #f9dd94;
  height: 2em;
  width: 2em;
  line-height: 2em;
  border: 0.3em solid #fff;
  text-align: center;
  font-weight: bold;
  border-radius: 2em;
  transition: all 0.3s ease-out;
}

input[type='checkbox']:checked:after {
  content: '✓';
  background: linear-gradient(to right, #0a0, #84cf6a);
}
</style>
