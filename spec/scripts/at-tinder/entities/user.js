var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.ATtinder.module('Entities', function(Entities, ATtinder, Backbone, Marionette, $, _) {
  return Entities.User = (function(_super) {
    __extends(User, _super);

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    return User;

  })(Backbone.Model);
});
