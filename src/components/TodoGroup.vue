<template>
  <div class="todo-group">
    <h2 class="md-title">{{group.name}}</h2>
    <div v-if="group.todos.length">
      <div v-if="!unresolved.length" class="todo-group__empty-unresolved">
        <md-icon class="md-size-2x">done_all</md-icon>
        <div class="md-subheading">¡Todo hecho!</div>
      </div>
      <md-list>
        <md-list-item class="todo-group__todo-list--unresolved" v-for="todo in unresolved" :key="todo.id">
          <Todo v-bind:todo="todo" />
        </md-list-item>
        <md-list-item class="todo-group__todo-list--resolved" v-for="todo in resolved" :key="todo.id">
          <Todo v-bind:todo="todo" />
        </md-list-item>
      </md-list>
    </div>
    <md-empty-state
      v-if="!group.todos.length"
      md-label="No tenés tareas!"
      md-description="Creá una tarea para usar este grupo">
    </md-empty-state>
    <AddTodo v-bind:groupId="group.id" />
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
  },

  // Computed data
  computed:{
    unresolved(){
      return this.group.todos.filter(item => !item.resolved);
    },
    resolved(){
      return this.group.todos.filter(item => item.resolved);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h2{
    margin-top: 0;
  }
  .md-list{
    margin-bottom: 1em;
    margin-left: -1em;
    margin-right: -1em;
    padding: 0;
    background-color: white;
  }
  .md-list-item{
    background-color: white;
  }
  .todo-group__todo-list--resolved{
    opacity: 0.3;
  }
  .todo-group__empty-unresolved{
    text-align: center;
    margin-bottom: 1em;
  }
</style>
