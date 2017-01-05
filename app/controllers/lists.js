import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create() {
      const list = this.store.createRecord('list', {
        title: this.listTitle
      });

      list.save();
    },
    addItem(description, list) {
      // Vamos a guardar el item
      const item = this.store.createRecord('item', {
        description: description
      });

      list.get('items').then((items) => {
        list.get('items').addObject(item);
        item.save();
        list.save();
      });
    }
  }
});
