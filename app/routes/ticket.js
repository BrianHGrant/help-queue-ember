import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('ticket', params.ticket_id);
  },

  actions: {
    closeTicket(ticket) {
      ticket.set('status', false),
      ticket.save();
      this.transitionTo('index');
    }
  }
});
