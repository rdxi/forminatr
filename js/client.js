// var audioFiles = {
//   1: 'css/sounds/01.mp3'
// };

// shows false when changing radios!
// var utils = {
//   isPlaying: function(audioObj) {
//     return audioObj
//         && audioObj.currentTime > 0
//         && !audioObj.paused
//         && !audioObj.ended
//         && audioObj.readyState > 2;
//   }
// };

// var soundOfMessage = new Audio('css/sounds/new-message.mp3');
// soundOfMessage.volume = 0.5;

// module.exports = soundOfMessage;

// soundOfMessage.play()

Vue.component('input-component', {
  template:
  `
  <label class="element-wrap" :class="computedClass" :style="styleObject">
    <div class="textinput-wrap">
      <input type="text" v-model="isActive">
      <div class="textinput-control textinput-control--fill-input" @click="fillInput">Fill input</div>
      <div class="textinput-control textinput-control--clear-input" @click="clearInput">Clear input</div>
    </div>
  </label>
  `,

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
});

Vue.component('radio-component', {
  template:
  `
  <div class="element-wrap"
    @click.self="nextRadio"
    :class="computedClass"
    :style="styleObject"
  >
    <input type="radio"
      v-bind:name="generatedName"
      v-model="activeRadio"
      v-for="index in numberOfRadios"
      v-bind:value="index"
    >
  </div>
  `,

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
});

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

Vue.component('button-component', {
  template:
  `
  <label class="element-wrap" :class="computedClass" :style="styleObject">
    <button @click="toggleClass">Click me</button>
  </label>
  `,

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
});

new Vue({
  el: '#vue-app'
});