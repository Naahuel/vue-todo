<template>
  <div class="layout">
    <AddTodoGroup />
    <TodoGroups v-bind:groups="groups" />
  </div>
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
  }
};
</script>

<style lang="scss">

</style>
