import Ember from 'ember';

export default Ember.Controller.extend({
  localTime: new Date(),
  timeElapsed: new Date(),

  init: function() {
    this.updateTime();
  },

  updateTime: function(){
    var _this = this;

    Ember.run.later(function() {
      _this.set('timeElapsed', (_this.localTime - _this.timeOpen));
      _this.updateTime();
    }, 1000);
  }
});
