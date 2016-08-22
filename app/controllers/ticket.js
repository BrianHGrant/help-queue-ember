import Ember from 'ember';

export default Ember.Controller.extend({
  localTime: new Date(),
  timeElapsed: moment(new Date()).format("LTS"),

  init: function() {
    this.updateTime();

  },

  updateTime: function(){
    var _this = this;
    Ember.run.later(function() {
      _this.set('timeElapsed', moment((new Date() - _this.model.get('timeOpen'))).format("hh:mm:ss"));
      _this.updateTime();
        console.log(_this.get('timeElapsed'));
    }, 1000);
  }
});
