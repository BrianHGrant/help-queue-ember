import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  question1: true,
  question2: false,
  question3: false,
  question4: false,
  question5: false,
  actions: {
    nextQuestion(index) {
      this.set('question' + index, false);
      this.set('question' + (index + 1), true);
    },

    saveTicket(index) {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        description: this.get('description'),
        status: true,
        timeOpen: moment(new Date()).unix()
      };
      this.set('question' + index, false);
      this.set('question' + (index + 1), true);
      this.sendAction('saveTicket', params);
    }
  }
});
