<template>
  <div>
    <md-dialog-prompt
      :md-active.sync="showAddDialog"
      v-model="todoGroupName"
      md-title="Agregar grupo de tareas"
      md-input-placeholder="Nombre de grupo..."
      md-input-maxlength="20"
      md-cancel-text="Cancelar"
      md-confirm-text="Listo"
      @md-confirm="_addTodoGroup"
    />

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
        setTimeout(() => {
          // HACK: There's some problem with the md-dialog-prompt component
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
