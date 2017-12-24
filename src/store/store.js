import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var store = new Vuex.Store({
  state: {
    myComponents: [],
  },

  mutations: {
    toggleActive: function(state, id) {
      var componentObj = state.myComponents.find(component => component.id === id);
      return componentObj.isActive = !componentObj.isActive;
    }
  }
});

export default store;