<template>
  <div id="nav" class="nav">
    <nav>
      <router-link :to="{ name: 'ShoppingLists' }">Lists</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'ListCreate' }">Create a list</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
