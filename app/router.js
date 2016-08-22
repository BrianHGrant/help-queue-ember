import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('ticket', {path: '/ticket/:ticket_id'});
  this.route('ticket-submit', {path: '/ticket-submit/:ticket_id'});
  this.route('queue');
});

export default Router;
