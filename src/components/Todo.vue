<template>
  <span>
    <md-checkbox v-model="todo.resolved">{{todo.name}}</md-checkbox>
  </span>
</template>

<script>
export default {
  // Component name
  name: 'Todo',

  // Props
  props: {
    todo: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
