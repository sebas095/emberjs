import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create() {
      const list = this.store.createRecord('list', {
        title: this.listTitle
      });

      list.save();
    }
  }
});
