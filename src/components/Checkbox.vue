<template>
  <label class="element-wrap" :class="computedClass" :style="styleObject">
    <!-- <input type="checkbox" :value="isActive" @change="toggleActive"> -->
    <input type="checkbox" v-model="isActive">
  </label>
</template>

<script>
import IdAndActiveState from './mixins/IdAndActiveState.vue';

export default {
  // data: function() {
  //   return {
  //     isActive: null,
  //   };
  // },
  mixins: [IdAndActiveState],

  computed: {
    isActive: {
      get: function () {
        var componentObj = this.$store.state.myComponents.find(component => component.id === this.selfId);
        return componentObj.isActive;
      },
      set: function(value) {
        var objToSend = {id: this.selfId, textInputValue: value};
        this.$store.commit('toggleValueActive', objToSend);
      }
    },
    // styleObject: function() {
    //   return {
    //     'background-color': randomColor()
    //   };
    // },
    // computedClass: function() {
    //   return {
    //     'element-wrap--active': this.isActive
    //   };
    // }
  }

}
</script>
