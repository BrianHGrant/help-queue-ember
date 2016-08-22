import Ember from 'ember';

export default Ember.Component.extend({
  questionCount: 0,

  actions: {
    questionProgress() {
      this.questionCount ++;
    },

    saveTicket() {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        description: this.get('description')
      };
      this.set('questionCount', 4);
      this.sendAction('saveTicket', params);
    }
  }
});
