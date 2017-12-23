<template>
  <label class="element-wrap" :class="computedClass" :style="styleObject">
    <button @click="toggleClass">Click me</button>
  </label>
</template>

<script>
import randomColor from 'randomcolor';

export default {
  data: function() {
    return {
      isActive: null
    };
  },
  mounted: function() {
    this.isActive = this.isActiveProp;
  },

  computed: {
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
  methods: {
    toggleClass: function() {
      this.isActive = !(this.isActive);
    }
  }
}
</script>


