<template>
  <div class="todos">
    <h4>{{todo.name}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    todo: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
