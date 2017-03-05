var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.ATtinder.module('Entities', function(Entities, ATtinder, Backbone, Marionette, $, _) {
  var API;
  Entities.Image = (function(_super) {
    __extends(Image, _super);

    Image.prototype.defaults = function() {
      return {
        src: 'http://atmedia.imgix.net/',
        gallery_width: '300',
        gallery_height: '200',
        loaded: false
      };
    };

    function Image(options) {
      Image.__super__.constructor.apply(this, arguments);
    }

    return Image;

  })(Backbone.Model);
  Entities.Images = (function(_super) {
    __extends(Images, _super);

    function Images() {
      return Images.__super__.constructor.apply(this, arguments);
    }

    Images.prototype.model = Entities.Image;

    Images.prototype.preload = function() {
      return _.each(this.where({
        loaded: false
      }), function(img) {
        var image;
        image = new Image();
        image.onload = function() {
          return img.set({
            loaded: true
          });
        };
        return image.src = "" + (img.get('src')) + (img.get('id'));
      });
    };

    return Images;

  })(Backbone.Collection);
  API = {
    getImages: function(attrs, callback) {
      return $.getJSON('http://www.apartmenttherapy.com/admin/galleries/sample.json', function(data) {
        var images;
        images = _.map(data, function(id) {
          return new ATtinder.Entities.Image({
            id: id
          });
        });
        return callback(images);
      });
    }
  };
  return ATtinder.reqres.setHandler('entities:images', function(attrs, callback) {
    return API.getImages(attrs, callback);
  });
});
