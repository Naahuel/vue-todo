<template>
  <md-app md-mode="reveal">
    <md-app-toolbar class="md-primary">
      <span class="md-title">Mis Tareas</span>
    </md-app-toolbar>
    <md-app-content>
      <AddTodoGroup />
      <TodoGroups v-bind:groups="groups" />
    </md-app-content>
  </md-app>
</template>

<script>
// State utils
import { mapState } from 'vuex';

// Imported components
import AddTodoGroup from '@/components/AddTodoGroup.vue';
import TodoGroups from '@/components/TodoGroups.vue';

export default {
  // Component name
  name: 'App',

  // Imported components
  components: {
    TodoGroups,
    AddTodoGroup
  },

  // Computed methods & state
  // Ideally all the state should be handled here and
  // passed down to children through props
  computed: {
    ...mapState({
      groups: ({groups}) => groups
    })
  },
};
</script>

<style lang="scss">
  .md-app{
    --md-theme-default-background: #eee;
    min-height: 100vh;
  }
</style>
