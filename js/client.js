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
    }
  },

  data: function() {
    return {
      activeRadio: null,
      generatedName: null
    };
  },


  methods: {
    nextRadio: function() {
      if (this.activeRadio === this.numberOfRadios) {
        this.activeRadio = null;
      } else {
        this.activeRadio++;
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

  data: function() {
    return {
      isActive: null
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