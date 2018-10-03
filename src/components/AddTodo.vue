<template>
  <div class="add-todo">
    <md-field>
      <label>Tarea...</label>
      <md-input v-model="todoName"></md-input>
      <md-button @click="_addTodo" class="md-icon-button md-dense"><md-icon>done</md-icon></md-button>
    </md-field>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  // Component Name
  name: 'addTodo',

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
        this.todoName = '';
      }
    },

    // Last but not least, map our vuex actions into this component
    ...mapActions(['addTodo'])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
