import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var store = new Vuex.Store({
  state: {
    // {id: <number>, isActive: <null,true,1,3>}
    myComponents: [],
  },

  getters: {
    // getTodoById: (state) => (id) => {
    //   return state.todos.find(todo => todo.id === id);
    // },
    getComponentById: function(state) {
      return function(id) {
        return state.myComponents.find(component => component.id === id);
      };
    }

  },

  mutations: {
    activateAll: function(state) {
      state.myComponents.forEach(function(item) {
        item.isActive = 1;
      });
    },

    deactivateAll: function(state) {
      state.myComponents.forEach(function(item) {
        item.isActive = null;
      });
    },

    toggleActive: function(state, data) {
      // console.log('***', componentObjTest);
      // var componentObj = state.myComponents.find(component => component.id === id);
      var componentObj = store.getters.getComponentById(data.id);
      return componentObj.isActive = !componentObj.isActive;
    },

    toggleValueActive: function(state, data) {
      // var componentObj = state.myComponents.find(component => component.id === data.id);
      var componentObj = store.getters.getComponentById(data.id);
      return componentObj.isActive = data.textInputValue ? data.textInputValue : null;
    },

    deactivate: function(state, data) {
      // var componentObj = state.myComponents.find(component => component.id === data.id);
      var componentObj = store.getters.getComponentById(data.id);
      return componentObj.isActive = null;
    },

    increment: function(state, data) {
      // var componentObj = state.myComponents.find(component => component.id === data.id);
      var componentObj = store.getters.getComponentById(data.id);
      return componentObj.isActive++;
    }
  }
});

export default store;