<script>
import uuid from 'uuid/v4';
import randomColor from 'randomColor';

export default {
  data: function() {
    return {
      selfId: null
    }
  },

  created: function() {
    this.registerInStore();
  },

  computed: {
    isActive: function () {
      var that = this;
      var currentStateObj = this.$store.state.myComponents.find(function(component) {
        return component.id === that.selfId;
      });

      return currentStateObj.isActive;
    },

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
    toggleActive: function() {
      this.$store.commit('toggleActive', {id: this.selfId});
    },
    registerInStore: function() {
      this.selfId = uuid();
      this.$store.state.myComponents.push({id: this.selfId, isActive: null});
    }
  }
}
</script>
