<template>
  <div class="form-container">
    <h2>Create a shopping list</h2>
    <form @submit.prevent="onSubmit">
      <input v-model="list.title" type="text" placeholder="Title" />
      <input v-model="list.description" type="text" placeholder="Description" />
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <span :class="{ done: todo.done }" @click="doneItem(todo)">{{
            todo
          }}</span
          >&nbsp;
          <button @click="removeItem(index)">Remove</button>
        </li>
      </ul>
      <h4 v-if="todos.length === 0">Empty list.</h4>
      <form class="input-group" @submit.prevent="addItem()">
        <input
          v-model="newItem"
          name="newItem"
          autocomplete="off"
          type="text"
          placeholder="Item"
          id="newcolumn"
        />
        <button id="addButton">Add Item</button>
      </form>

      <button id="submitButton" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'

export default {
  setup() {
    const newItem = ref('')
    const defaultData = []
    const todosData = JSON.parse(localStorage.getItem('todos')) || defaultData
    const todos = ref(todosData)

    function addItem() {
      if (newItem.value) {
        todos.value.push(newItem.value)
        newItem.value = ''
      }
      saveData()
    }
    function removeItem(index) {
      todos.value.splice(index, 1)
      saveData()
    }
    function saveData() {
      const storageData = JSON.stringify(todos.value)
      localStorage.setItem('todos', storageData)
    }
    return {
      todos,
      newItem,
      addItem,
      removeItem,
      saveData,
    }
  },
  data() {
    return {
      list: {
        id: '',
        date: '',
        time: '',
        maker: '',
        title: '',
        description: '',
        items: [],
      },
    }
  },
  created() {
    setInterval(this.getNow, 1000)
  },
  methods: {
    getNow: function () {
      const today = new Date()
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
      const date =
        monthNames[today.getMonth()] +
        ' ' +
        (today.getDate() + 1) +
        ', ' +
        today.getFullYear()
      const time = today.getHours() + ':' + today.getMinutes()
      this.list.date = date
      this.list.time = time
    },
    onSubmit() {
      const list = {
        ...this.list,
        id: uuidv4(),
        items: this.todos,
        maker: this.$store.state.user,
      }
      this.$store
        .dispatch('createList', list)
        .then(() => {
          this.$router.push({
            name: 'ListDetails',
            params: { id: list.id },
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
li {
  list-style-type: none;
}
.input-group {
  display: flex;
}
.input-group > #newcolumn {
  flex-grow: 2;
}

.input-group > #addButton {
  flex-grow: 1;
}
button#addButton {
  height: 35px;
  margin-bottom: 24px;
}
button#submitButton {
  align-items: center;
  height: 50px;
  padding: 0 40px;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s linear;
}
button#submitButton:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
input {
  display: block;
  width: 100%;
  height: 30px;
  margin-bottom: 24px;
}
input[type='text'] {
  padding: 0px 10px;
}
input:focus {
  border-color: #16c0b0;
  outline: 0;
}

.form-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10%;
}
select:focus {
  border-color: #16c0b0;
  outline: 0;
}
</style>
