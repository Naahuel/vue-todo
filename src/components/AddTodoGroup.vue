<template>
  <div>
    <md-dialog :md-active="showAddDialog" :md-fullscreen="false">
      <md-dialog-title>
        Agregar grupo de tareas
      </md-dialog-title>
      <md-dialog-content>
        <md-field>
          <label>Nombre de grupo...</label>
          <md-input :autofocus="true" :value="todoGroupName" @keyup="_handleKeyPress" md-counter="20"></md-input>
        </md-field>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="_hideAddDialog">Cancelar</md-button>
        <md-button class="md-primary" @click="_addTodoGroup">Listo</md-button>
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
        this._hideAddDialog();
        setTimeout(() => {
          // HACK: There's some problem with the md-input component
          // that doesn't let me update this
          this.todoGroupName = '';
        }, 0);
      }
    },

    // Show the dialog
    _showAddDialog(){
      // Reset local text
      this.showAddDialog = true;
    },

    // Hide the dialog
    _hideAddDialog(){
      // Reset local text
      this.showAddDialog = false;
    },

    // Handle input keypress
    // USE KEYUP ENVENT
    // This method is preferred to using v-model
    // because it updates the model in real time in mobile browsers
    // where keyboards don't fire the event corretly
    _handleKeyPress(event){
      this.todoGroupName = event.target.value;
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
