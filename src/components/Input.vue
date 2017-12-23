<template>
  <label class="element-wrap" :class="computedClass" :style="styleObject">
    <div class="textinput-wrap">
      <input type="text" v-model="isActive">
      <div class="textinput-control textinput-control--fill-input" @click="fillInput">Fill input</div>
      <div class="textinput-control textinput-control--clear-input" @click="clearInput">Clear input</div>
    </div>
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

  methods: {
    fillInput: function() {
      this.isActive = 'some text!';
    },
    clearInput: function() {
      this.isActive = null;
    }
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
  }
}
</script>