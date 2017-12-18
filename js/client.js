Vue.component('input-component', {
  template:
  `
  <label class="element-wrap" :class="computedClass">
    <input type="text" v-model="isActive">
  </label>
  `,

  data: function() {
    return {
      isActive: null
    };
  },
  computed: {
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
    :style="computedAnimationDuration"
  >
    <input type="radio"
      v-bind:name="dateCreated"
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
      dateCreated: null
    };
  },


  methods: {
    nextRadio: function() {
      if (this.activeRadio === this.numberOfRadios) {
        this.activeRadio = null;
        // document.querySelector(".element-wrap--active").style.animationDuration
        // set animation duration css rule to (this.numberOfRadios / this.activeRadio)
      } else {
        this.activeRadio++;
        // this.styleObject['animation-duration'] = (this.numberOfRadios / this.activeRadio)/2 + 's';
      }
    }
  },
  computed: {
    computedAnimationDuration: function() {
      return {
        'animation-duration': (this.numberOfRadios / this.activeRadio)/(2*this.numberOfRadios) + 's'
      };
    },
    computedClass: function() {
      return {
        'element-wrap--active': this.activeRadio
      };
    }
  },
  created: function() {
    this.dateCreated = new Date().getTime();
  }
});

Vue.component('checkbox-component', {
  template:
  `
  <label class="element-wrap" :class="computedClass">
    <input type="checkbox" v-model="isActive">
  </label>
  `,

  data: function() {
    return {
      isActive: null
    };
  },
  computed: {
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
  <label class="element-wrap" :class="computedClass">
    <button @click="toggleClass">Click me</button>
  </label>
  `,

  data: function() {
    return {
      isActive: null
    };
  },

  computed: {
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