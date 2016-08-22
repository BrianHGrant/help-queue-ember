import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  description: DS.attr(),
  status: DS.attr(),
  timeOpen: DS.attr(),

  // timeAgo: function() {
  // var time = this.get('timeOpen');
  //   setInterval(function(time){
  //     console.log(time);
  //     return moment(Date.now() - time).format('hh:mm:ss');
  //   }, 1000, time)
  // }.property()
});
