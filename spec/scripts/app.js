var app;

this.ATtinder = this.ATtinder || {};

app = (function(Backbone, Marionette) {
  var App;
  App = new Marionette.Application;
  App.rootRoute = 'dashboard';
  App.Radio = Backbone.Radio;
  App.addRegions({
    mainRegion: '#main-region'
  });
  App.addInitializer(function() {
    return App.module('TinderImage').start();
  });
  App.on('start', function(options) {
    if (Backbone.history) {
      Backbone.history.start({
        pushstate: true
      });
      if (Backbone.history.fragment === "") {
        return this.navigate(this.rootRoute, {
          trigger: true
        });
      }
    }
  });
  return App;
})(Backbone, Marionette);

$.extend(this.ATtinder, app);
