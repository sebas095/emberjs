import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete() {
      this.$().slideUp('normal', () => {
        this.item.deleteRecord();
        this.item.save();
      });
    }
  }
});
