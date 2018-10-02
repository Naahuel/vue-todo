<template>
  <div class="todo-groups">
    <div class="todo-groups__list-item" v-for="group in groups" :key="group.id">
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
    background-color: #ffe;
    padding: 10px;
    margin: 10px 0;
    box-shadow: 1px 1px 10px 0px rgba(0,0,0,0.3);
  }
</style>
