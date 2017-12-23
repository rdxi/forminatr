<template>
  <div class="element-wrap"
    @click.self="nextRadio"
    :class="computedClass"
    :style="styleObject"
  >
  <input type="radio"
    v-model="activeRadio"
    v-for="index in numberOfRadios"
    :name="generatedName"
    :value="index"
    :key="index"
  >
  </div>
</template>

<script>
import randomColor from 'randomcolor';

export default {
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
      activeRadio: null,
      generatedName: null,
      sound: new Audio(this.soundFilePath),
      soundEnded: false,
      soundDelay: 1000,
      soundPlayBackRate: 1
    };
  },

  methods: {
    nextRadio: function() {
      if (this.activeRadio === this.numberOfRadios) {
        this.activeRadio = null;
      } else {
        this.activeRadio++;
      }
    },
    playSoundWithLoop: function() {
      var that = this;

      if (!this.soundFilePath) return; // ¯\_(ツ)_/¯

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

    activeRadio: function() {
      clearTimeout(this.soundDelayTimeout);
      if (this.activeRadio) {
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
        'animation-duration': (this.numberOfRadios / this.activeRadio)/(2*this.numberOfRadios) + 's', // first radio - slowest animation, last radio - fastest animation
        'background-color': randomColor()
      };
    },
    computedClass: function() {
      return {
        'element-wrap--active': this.activeRadio
      };
    }
  },
  created: function() {
    var that = this;

    this.sound.preload = 'auto';
    // this.soundPlayBackRate = this.sound.playbackRate;

    this.generatedName = new Date().getTime() + Math.round(Math.random()*1000);
  }
}
</script>