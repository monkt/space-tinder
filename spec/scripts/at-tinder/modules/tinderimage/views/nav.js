var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.ATtinder.module('TinderImage', function(TinderImage, ATtinder, Backbone, Marionette, $, _) {
  return TinderImage.Nav = (function(_super) {
    __extends(Nav, _super);

    function Nav() {
      return Nav.__super__.constructor.apply(this, arguments);
    }

    Nav.prototype.template = "nav";

    return Nav;

  })(Marionette.ItemView);
});
