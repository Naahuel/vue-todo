<template>
  <div class="todo-group">
    <h2>{{group.name}}</h2>
    <AddTodo v-bind:groupId="group.id" />
    <div class="todo-group__list">
      <Todo v-for="todo in group.todos" v-bind:todo="todo" :key="todo.id" />
    </div>
  </div>
</template>

<script>
// Imported components
import AddTodo from '@/components/AddTodo.vue';
import Todo from '@/components/Todo.vue';

export default {
  // Component name
  name: 'TodoGroup',

  // Imported components
  components:{
    AddTodo,
    Todo
  },

  // Props
  props: {
    group: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
