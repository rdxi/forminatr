<template>
  <div class="element-wrap"
    @click.self="nextRadio"
    :class="computedClass"
    :style="styleObject"
  >
    <input type="radio"
      v-model="isActive"
      v-for="index in numberOfRadios"
      :name="generatedName"
      :value="index"
      :key="index"
    >
  </div>
</template>

<script>
import randomColor from 'randomcolor';
import IdAndActiveState from './mixins/IdAndActiveState.vue';
import uuid from 'uuid/v4';

export default {
  mixins: [IdAndActiveState],

  props: {
    numberOfRadios: {
      type: Number,
      default: 1
    },
    soundFilePath: {
      type: String,
      default: ''
    }
  },

  data: function() {
    return {
      generatedName: null
    };
  },

  methods: {
    nextRadio: function() {
      if (this.isActive === this.numberOfRadios) {
        this.$store.commit('deactivate', {id: this.selfId});
      } else {
        this.$store.commit('increment', {id: this.selfId});
      }
    },
    toggleRadioActive: function(e) {
      var textInputValue = e.target.value;
      var objToSend = {id: this.selfId, textInputValue: textInputValue};
      this.$store.commit('toggleValueActive', objToSend);
    }
  },
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

    styleObject: function() {
      return {
        'animation-duration': (this.numberOfRadios / this.isActive)/(2*this.numberOfRadios) + 's', // first radio - slowest animation, last radio - fastest animation
        'background-color': randomColor()
      };
    }
  },
  created: function() {
    this.generatedName = uuid();
  }
}
</script>