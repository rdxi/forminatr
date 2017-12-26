import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var store = new Vuex.Store({
  state: {
    // [{id: <number>, isActive: <null,true,1,3>}]
    myComponents: [],
    ignoreMedia: true
  },

  getters: {
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

    startCascade: function(state) {
      clearInterval(this.cascadeInterval);

      // deactivate all items
      state.myComponents.forEach(function(item) {
        var ignoreMedia = state.ignoreMedia && item.isMedia;
        if (ignoreMedia) return; // don't toggle if media

        item.isActive = null;
      });

      // toggle items one by one
      var currentIndex = 0;
      this.cascadeInterval = setInterval(function() {
        var currentItem = state.myComponents[currentIndex];

        var ignoreMedia = state.ignoreMedia && currentItem.isMedia;

        if (!ignoreMedia) { // don't toggle if media
          currentItem.isActive = !currentItem.isActive ? 1 : null;
        }
        currentIndex = (currentIndex >= state.myComponents.length -1) ? (0) : (currentIndex + 1);

      }, 100);
    },

    stopCascade: function(state) {
      clearInterval(this.cascadeInterval);
    },

    invertActive: function(state) {
      state.myComponents.forEach(function(item) {
        item.isActive = !item.isActive ? 1 : null;
      });
    },

    toggleActive: function(state, data) {
      var componentObj = store.getters.getComponentById(data.id);
      return componentObj.isActive = !componentObj.isActive;
    },

    toggleValueActive: function(state, data) {
      var componentObj = store.getters.getComponentById(data.id);
      return componentObj.isActive = data.textInputValue ? data.textInputValue : null;
    },

    toggleIgnoreMedia: function(state, checkboxValue) {
      return state.ignoreMedia = checkboxValue;
    },

    activate: function(state, data) {
      var componentObj = store.getters.getComponentById(data.id);
      return componentObj.isActive = 1;
    },

    deactivate: function(state, data) {
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