<template>
  <div class="todo-group">
    <div class="todo-group__header">
      <h2 class="md-title">{{group.name}}</h2>
      <md-button @click="_showRemoveDialog" class="md-dense md-fab">
        <md-icon>delete</md-icon>
      </md-button>
    </div>
    <div v-if="group.todos.length">
      <div v-if="!unresolved.length" class="todo-group__empty">
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
    <div v-if="!group.todos.length" class="todo-group__empty">
      <md-icon class="md-size-2x">remove_circle_outline</md-icon>
      <div class="md-subheading">No tenés ninguna tarea</div>
    </div>
    <AddTodo v-bind:groupId="group.id" />
    <md-dialog-confirm
      :md-active.sync="showRemoveDialog"
      md-title="Borrar grupo"
      :md-content="'¿Está seguro que desea borrar el grupo <strong>' + group.name + '</strong>?'"
      md-confirm-text="Borrar"
      md-cancel-text="Cancelar"
      @md-confirm="_removeGroup"
    />
  </div>
</template>

<script>
// Imported components
import AddTodo from '@/components/AddTodo.vue';
import Todo from '@/components/Todo.vue';
import { mapActions } from 'vuex';

export default {
  // Component name
  name: 'TodoGroup',

  // Imported components
  components:{
    AddTodo,
    Todo
  },

  // Local state
  data(){
    return {
      showRemoveDialog: false
    };
  },

  // Props
  props: {
    group: Object
  },

  // Methods
  methods:{
    _showRemoveDialog(){
      this.showRemoveDialog = true;
    },

    _removeGroup(){
      this.removeTodoGroup(this.group.id);
    },

    // Map our vuex actions into this component
    ...mapActions(['removeTodoGroup'])
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
  .todo-group{
    &__todo-list{
      &--resolved{
        // Resolved item list
        opacity: 0.3;
      }
    }
    &__empty{
      // Empty state
      text-align: center;
      margin-bottom: 1em;
    }
    &__header{
      // Header
      min-height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
