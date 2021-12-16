<template>
  <router-link
    class="list-link"
    :to="{ name: 'ListDetails', params: { id: list.id } }"
  >
    <div class="list-card">
      <span>{{ list.date }} {{ list.time }}</span>
      <h4>{{ list.title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.list-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.list-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
