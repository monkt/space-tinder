var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.ATtinder.module('TinderImage', function(TinderImage, ATtinder, Backbone, Marionette, $, _) {
  return TinderImage.LayoutView = (function(_super) {
    __extends(LayoutView, _super);

    function LayoutView() {
      return LayoutView.__super__.constructor.apply(this, arguments);
    }

    LayoutView.prototype.template = "layout";

    LayoutView.prototype.regions = {
      navRegion: ".dashboard-nav",
      contentRegion: ".dashboard-content"
    };

    return LayoutView;

  })(Marionette.LayoutView);
});
