<template>
  <div>
    <md-dialog
      :md-active.sync="showAddDialog"
      :md-fullscreen="false"
    >
      <md-dialog-title>Nuevo groupo de tareas</md-dialog-title>

      <md-dialog-content>
        <md-field>
          <label>Nombre de grupo...</label>
          <md-input autofocus v-model="todoGroupName" md-counter="20"></md-input>
        </md-field>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showAddDialog = false">Cancelar</md-button>
        <md-button class="md-primary" @click="_addTodoGroup">Guardar</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button @click="_showAddDialog">
      Nuevo grupo <md-icon>add</md-icon>
    </md-button>
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
      todoGroupName: '',
      showAddDialog: false
    };
  },

  // Methods
  methods: {
    // Agregar todo
    _addTodoGroup() {
      if( this.todoGroupName ){
        // Call the action
        this.addTodoGroup(this.todoGroupName);
        // Reset local state
        Object.assign(this, {showAddDialog: false, todoGroupName: ''});
      }
    },

    // Show the dialog
    _showAddDialog(){
      // Reset local text
      this.showAddDialog = true;
    },

    // Map our vuex actions into this component
    ...mapActions(['addTodoGroup'])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .md-button{
    z-index: 5;
  }
</style>
