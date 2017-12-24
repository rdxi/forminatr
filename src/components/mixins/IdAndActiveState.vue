<script>
export default {
  data: function() {
    return {
      selfId: null
    }
  },

  created: function() {
    this.selfId = new Date().getTime() + Math.round(Math.random()*1000);
    this.$store.state.myComponents.push({id: this.selfId, isActive: null});
  },

  computed: {
    isActive: function () {
      var that = this;
      var currentStateObj = this.$store.state.myComponents.find(function(component) {
        return component.id === that.selfId;
      });

      return currentStateObj.isActive;
    }
  },

  methods: {
    toggleActive: function() {
      this.$store.commit('toggleActive', {id: this.selfId});
    }
  }
}
</script>
