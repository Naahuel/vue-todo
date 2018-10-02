<template>
  <div class="todo-group">
    <input v-model="todoGroupName" placeholder="Nombre de grupo">
    <button @click="_addTodoGroup">
      Agregar grupo
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  // Component Name
  name: 'AddTodoGroup',

  // Local state
  data() {
    return {
      todoGroupName: ''
    };
  },

  // Methods
  methods: {
    // Agregar todo
    _addTodoGroup() {
      if( this.todoGroupName ){
        // Call the action
        this.addTodoGroup(this.todoGroupName);
        // Reset local text
        this.todoGroupName = '';
      }
    },

    // Last but not least, map our vuex actions into this component
    ...mapActions(['addTodoGroup'])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
