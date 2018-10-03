<template>
  <div class="todo-groups">
    <md-empty-state
      v-if="!groups.length"
      md-icon="assignment"
      md-label="Creá un grupo de tareas"
      md-description="No tenés ningún grupo. Podés agrupar tus tareas para organizarlas mejor.">
    </md-empty-state>
    <div v-else class="todo-groups__list-item md-elevation-2" v-for="group in groups" :key="group.id">
      <TodoGroup v-bind:group="group" />
    </div>
  </div>
</template>

<script>
import TodoGroup from '@/components/TodoGroup.vue';

export default {
  // Component name
  name: 'TodoGroups',

  // Imported components
  components: {
    TodoGroup
  },

  // Props
  props: {
    groups: Array
  }
};
</script>


<style lang="scss">
  .todo-groups__list-item{
    padding: 1em;
    margin-bottom: 1em;
    background-color: white;
  }
</style>
