import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete() {
      this.$().fadeOut('normal', () => {
        this.item.deleteRecord();
        this.item.save();
      });
    }
  }
});
