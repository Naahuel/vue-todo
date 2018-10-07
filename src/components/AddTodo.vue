<template>
  <div class="add-todo">
    <form novalidate class="md-layout" @submit.prevent="_addTodo">
      <md-field>
        <label>Tarea...</label>
        <md-input :value="todoName" @keyup="_handleKeyPress"></md-input>
        <md-button @click="_addTodo" class="md-icon-button md-dense"><md-icon>done</md-icon></md-button>
      </md-field>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  // Component Name
  name: 'AddTodo',

  // Local state
  data() {
    return {
      todoName: ''
    };
  },

  // Props
  props: {
    groupId: String
  },

  // Methods
  methods: {
    // Agregar todo
    _addTodo() {
      if( this.todoName ){
        // Call the action
        this.addTodo({
          groupId: this.groupId,
          name: this.todoName
        });
        // Reset local text
        setTimeout(() => {
          // HACK: There's some problem with the md-input component
          // that doesn't let me update this
          this.todoName = '';
        }, 0);
      }
    },

    // Handle input keypress
    // USE KEYUP ENVENT
    // This method is preferred to using v-model
    // because it updates the model in real time in mobile browsers
    // where keyboards don't fire the event corretly
    _handleKeyPress(event){
      this.todoName = event.target.value;
    },

    // Last but not least, map our vuex actions into this component
    ...mapActions(['addTodo'])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .md-icon-button{
    position: relative;
    z-index: 1;
  }
</style>
