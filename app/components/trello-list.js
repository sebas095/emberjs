import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete() {
      this.$().slideUp('normal', () => {
        this.list.deleteRecord();
        this.list.save();
      });
    },
    addItem() {
      this.sendAction('action', this.itemDescription, this.list);
    },
    hideForm() {
      this.$('.form-hide').hide();
    },
    showForm() {
      this.$('.form-hide').show();
    }
  }
});
