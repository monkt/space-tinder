var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.ATtinder.module('TinderImage', function(TinderImage, ATtinder, Backbone, Marionette, $, _) {
  return TinderImage.Tinder = (function(_super) {
    __extends(Tinder, _super);

    function Tinder() {
      return Tinder.__super__.constructor.apply(this, arguments);
    }

    Tinder.prototype.template = "tinder";

    Tinder.prototype.ui = {
      like: ".like",
      dislike: ".dislike",
      tinder: ".tinder",
      loading: ".loading"
    };

    Tinder.prototype.events = {
      "click @ui.like": function() {
        return this.updateTinder(true);
      },
      "click @ui.dislike": function() {
        return this.updateTinder(false);
      }
    };

    Tinder.prototype.modelEvents = function() {
      return {
        'change:loaded': function(model) {
          this.ui.loading.hide();
          return this.ui.tinder.fadeIn();
        }
      };
    };

    Tinder.prototype.onRender = function() {
      if (!this.model.get('loaded')) {
        this.ui.tinder.hide();
        return this.ui.loading.show();
      }
    };

    Tinder.prototype.updateTinder = function(like) {
      this.model.set({
        'like': like
      });
      return this.triggerMethod('new:image');
    };

    return Tinder;

  })(Marionette.ItemView);
});
