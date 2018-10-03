<template>
  <span class="todo-container" @click="_toggleTodo">
    <md-checkbox @change="_toggleTodo" :value="!todo.resolved">{{todo.name}}</md-checkbox>
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
    _toggleTodo(event){
      if( event && typeof event !== 'boolean' ){
        // If this is a boolean, it means it was fired from 
        // the md-checkbox component. Otherwise it was a click
        // event from the container
        event.preventDefault();
        event.stopPropagation();
        // We do this because for some reason I can't use @click on the checkbox
        // and if I do @change, it doesn't fire when I click the text of the checkbox
        // We stop the event from propagating from the container to the checkbox which
        // causes this method to fire twice
      }
      
      if( !this.todo.resolved ){
        // Fire the DO_TODO action
        this.doTodo(this.todo.id);
      } else {
        // Fire the UNDO_TODO action
        this.undoTodo(this.todo.id);
      }
    },

    // Map our vuex actions into this component
    ...mapActions(['doTodo', 'undoTodo'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .todo-container{
    display: block;
    width: 100%;
    cursor: pointer;
  }
</style>
