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
  <!-- <input type="radio"
    v-for="index in numberOfRadios"
    :name="generatedName"
    :value="isActive"
    :key="index"
    @change="toggleRadioActive"
  > -->
  </div>
</template>

<script>
import randomColor from 'randomcolor';
import IdAndActiveState from './mixins/IdAndActiveState.vue';

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
      // activeRadio: null,
      generatedName: null
      // ,
      // sound: new Audio(this.soundFilePath),
      // soundEnded: false,
      // soundDelay: 1000,
      // soundPlayBackRate: 1
    };
  },

  methods: {
    nextRadio: function() {
      if (this.isActive === this.numberOfRadios) {
        // this.activeRadio = null;
        this.$store.commit('deactivate', {id: this.selfId});
      } else {
        this.$store.commit('increment', {id: this.selfId});
        // this.activeRadio++;
      }
    },
    toggleRadioActive: function(e) {
      var textInputValue = e.target.value;
      var objToSend = {id: this.selfId, textInputValue: textInputValue};
      this.$store.commit('toggleValueActive', objToSend);
    }
    // playSoundWithLoop: function() {
    //   var that = this;

    //   if (!this.soundFilePath) return; // ¯\_(ツ)_/¯

    //   this.sound.addEventListener('ended', function listener() {
    //     that.soundEnded = true;
    //     that.sound.removeEventListener('ended', listener);
    //   });

    //   this.soundEnded = false;
    //   this.sound.currentTime = 0;
    //   this.sound.play();
    // }
  },
  watch: {
    // soundEnded: function() {
    //   var that = this;
    //   if (this.soundEnded === true && this.activeRadio) {
    //     this.soundDelayTimeout = setTimeout(function() {
    //       that.playSoundWithLoop();
    //     }, that.soundDelay);
    //   }
    // },

    // activeRadio: function() {
    //   clearTimeout(this.soundDelayTimeout);
    //   if (this.activeRadio) {
    //     this.playSoundWithLoop();
    //   } else {
    //     this.sound.pause();
    //     this.sound.currentTime = 0;
    //   }
    // }
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
    },
    computedClass: function() {
      return {
        'element-wrap--active': this.isActive
      };
    }
  },
  created: function() {
    // this.sound.preload = 'auto';
    this.generatedName = new Date().getTime() + Math.round(Math.random()*1000);
  }
}
</script>