import Vue from 'vue';
import Vuex from 'vuex';
import uuid from 'uuid';

// Mutation constants
import { ADD_TODO_GROUP, ADD_TODO, DO_TODO, UNDO_TODO, REMOVE_TODO, REMOVE_TODO_GROUP } from './mutation-constants';

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

    // Do todo
    doTodo ({commit}, todoId){
      commit(DO_TODO, todoId);
    },

    // Undo todo
    undoTodo ({commit}, todoId){
      commit(UNDO_TODO, todoId);
    },

    // Remove todo
    removeTodo ({commit}, todoId){
      commit(REMOVE_TODO, todoId);
    },

    // Remove todo grup
    removeTodoGroup ({commit}, groupId){
      commit(REMOVE_TODO_GROUP, groupId);
    }
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
          state.groups[groupIndex].todos.push({
            id: uuid(),
            name: todo.name,
            resolved: false
          });
        }
      });
    },

    [DO_TODO] (state, todoId) {
      // Set a todo to resolved
      state.groups.forEach((group, groupIndex) => {
        group.todos.forEach((todo, todoIndex) => {
          if( todo.id == todoId ){
            state.groups[groupIndex].todos[todoIndex].resolved = true;
          }
        });
      });
    },

    [UNDO_TODO] (state, todoId) {
      // Set a todo to unresolved
      state.groups.forEach((group, groupIndex) => {
        group.todos.forEach((todo, todoIndex) => {
          if( todo.id == todoId ){
            state.groups[groupIndex].todos[todoIndex].resolved = false;
          }
        });
      });
    },

    [REMOVE_TODO] (state, todoId) {
      // Remove todo by id
      state.groups.forEach((group, groupIndex) => {
        group.todos.forEach((todo, todoIndex) => {
          if( todo.id == todoId ){
            state.groups[groupIndex].todos.splice(todoIndex, 1);
          }
        });
      });
    },

    [REMOVE_TODO_GROUP] (state, groupId) {
      // Remove todo group by id
      state.groups.forEach((group, groupIndex) => {
        if( group.id == groupId ){
          state.groups.splice(groupIndex, 1);
        }
      });
    },
  }
});
