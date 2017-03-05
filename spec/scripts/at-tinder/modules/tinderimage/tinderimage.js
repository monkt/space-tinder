var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.ATtinder.module('TinderImage', function(TinderImage, ATtinder, Backbone, Marionette, $, _) {
  var API;
  TinderImage.Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.appRoutes = {
      'dashboard': 'showTinder',
      'dashboard(/:tab)(/)': 'showTab',
      'dashboard/*notFound': 'notFound'
    };

    Router.prototype.initialize = function() {
      return TinderImage.Controller.initialize();
    };

    return Router;

  })(Marionette.AppRouter);
  API = {
    showTinder: function() {
      return TinderImage.Controller.show('tinder');
    },
    showTab: function(tab) {
      var tabs;
      tabs = ['tinder', 'gallery'];
      if (!_.include(tabs, tab)) {
        tab = 'tinder';
      }
      return TinderImage.Controller.show(tab);
    },
    notFound: function() {
      return ATtinder.navigate("dashboard", {
        trigger: true,
        replace: true
      });
    }
  };
  return TinderImage.addInitializer(function() {
    return new TinderImage.Router({
      controller: API
    });
  });
});
