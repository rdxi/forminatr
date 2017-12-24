<template>
  <label class="element-wrap" :class="computedClass" :style="styleObject">
    <button @click="toggleActive">Click me</button>
  </label>
</template>

<script>
import randomColor from 'randomcolor';
import IdAndActiveState from './mixins/IdAndActiveState.vue'

export default {
  // this data moved to global store
  // data: function() {
  //   return {
  //     // isActive: null
  //   };
  // }
  // data: function() {
  //   return {
  //     selfId: null
  //   }
  // },

  mixins: [IdAndActiveState],

  computed: {
    // isActive: function () {
    //   var that = this;
    //   var currentStateObj = this.$store.state.myComponents.find(function(component) {
    //     return component.id === that.selfId;
    //   });

    //   return currentStateObj.isActive;
    // },

    styleObject: function() {
      return {
        'background-color': randomColor()
      };
    },
    computedClass: function() {
      return {
        'element-wrap--active': this.isActive
      };
    }
  },
  // methods: {
  //   toggleActive: function() {
  //     this.$store.commit('toggleActive', this.selfId);
  //   }
  // },
  // created: function() {
  //   // generate component id and send it to store
  //   this.selfId = new Date().getTime() + Math.round(Math.random()*1000);
  //   this.$store.state.myComponents.push({id: this.selfId, isActive: false});
  // }
}
</script>