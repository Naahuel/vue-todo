import Vue from 'vue';
import Vuex from 'vuex';
import uuid from 'uuid';

// Mutation constants
import { ADD_TODO_GROUP, ADD_TODO } from './mutation-constants';

Vue.use(Vuex);

export default new Vuex.Store({

  // Root state
  state: {
    groups:[]
  },

  // Actions
  actions: {
    // Add a todo group
    addTodoGroup ({commit}, name) {
      commit(ADD_TODO_GROUP, name);
    },

    // Add a todo
    addTodo ({commit}, todo) {
      commit(ADD_TODO, todo);
    },
  },

  // Mutations
  mutations: {
    [ADD_TODO_GROUP] (state, name) {
      // Add a todo group with a unique ID
      state.groups.unshift({
        id: uuid(),
        name,
        todos: []
      });
    },

    [ADD_TODO] (state, todo) {
      // Add a todo with a unique ID in a group
      state.groups.forEach((group, groupIndex) => {
        if( group.id == todo.groupId ){
          state.groups[groupIndex].todos.unshift({
            id: uuid(),
            name: todo.name
          });
        }
      });
    },
  }
});
