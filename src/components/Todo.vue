<template>
  <span class="todo-container">
    <md-checkbox v-bind:class="{ 'todo--resolved': todo.resolved }" @change="_toggleTodo" :value="!todo.resolved">
      {{todo.name}}
    </md-checkbox>
    <md-button @click="_deleteTodo" class="md-icon-button">
      <md-icon>highlight_off</md-icon>
    </md-button>
  </span>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  // Component name
  name: 'Todo',

  // Props
  props: {
    todo: Object
  },

  // Component methods
  methods: {
    _toggleTodo(change){
      if( change ){
        // Fire the DO_TODO action
        this.doTodo(this.todo.id);
      } else {
        // Fire the UNDO_TODO action
        this.undoTodo(this.todo.id);
      }
    },

    _deleteTodo(event){
      // Delete a todo
      // Stop event!
      event.stopPropagation();
      event.preventDefault();
      // Fire action!
      this.removeTodo(this.todo.id);
    },

    // Map our vuex actions into this component
    ...mapActions(['doTodo', 'undoTodo', 'removeTodo'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .todo-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;
  }
  .todo--resolved{
    text-decoration: line-through;
  }
</style>
