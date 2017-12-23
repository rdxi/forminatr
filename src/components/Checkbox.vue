<template>
  <label class="element-wrap" :class="computedClass" :style="styleObject">
    <input type="checkbox" v-model="isActive">
  </label>
</template>

<script>
import randomColor from 'randomcolor';

export default {
  data: function() {
    return {
      isActive: null,
    };
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




Vue.component('checkbox-component', {
  template:
  `
  <label class="element-wrap" :class="computedClass" :style="styleObject">
    <input type="checkbox" v-model="isActive">
  </label>
  `,

  props: {
    // TODO remove this or something
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
      isActive: null,
      sound: new Audio(this.soundFilePath),
      soundEnded: false,
      soundDelay: 1000,
      soundPlayBackRate: 1
    };
  },
  methods: {
    playSoundWithLoop: function() {
      var that = this;

      this.sound.addEventListener('ended', function listener() {
        that.soundEnded = true;
        that.sound.removeEventListener('ended', listener);
      });

      this.soundEnded = false;
      this.sound.currentTime = 0;
      this.sound.play();
    }
  },
  watch: {
    soundEnded: function() {
      var that = this;
      if (this.soundEnded === true && this.activeRadio) {
        this.soundDelayTimeout = setTimeout(function() {
          that.playSoundWithLoop();
        }, that.soundDelay);
      }
    },

    isActive: function() {
      clearTimeout(this.soundDelayTimeout);
      if (this.isActive) {
        this.playSoundWithLoop();
      } else {
        this.sound.pause();
        this.sound.currentTime = 0;
      }
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
});