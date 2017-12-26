<template>
  <label class="element-wrap" :class="computedClass" :style="styleObject">
    <div class="textinput-wrap">
      <input type="text" :value="isActive" @input="toggleValueActive">
      <div class="textinput-control textinput-control--fill-input" @click="fillInput">Fill input</div>
      <div class="textinput-control textinput-control--clear-input" @click="clearInput">Clear input</div>
    </div>
  </label>
</template>

<script>
import IdAndActiveState from './mixins/IdAndActiveState.vue';

export default {

  mixins: [IdAndActiveState],

  methods: {
    toggleValueActive: function(e) {
      var textInputValue = e.target.value;
      var objToSend = {id: this.selfId, textInputValue: textInputValue};
      this.$store.commit('toggleValueActive', objToSend);
    },
    fillInput: function() {
      var objToSend = {id: this.selfId, textInputValue: 'some text!'};
      this.$store.commit('toggleValueActive', objToSend);
    },
    clearInput: function() {
      var objToSend = {id: this.selfId};
      this.$store.commit('deactivate', objToSend);
    }
  }
}
</script>