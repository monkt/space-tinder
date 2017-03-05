var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.ATtinder.module('TinderImage', function(TinderImage, ATtinder, Backbone, Marionette, $, _) {
  TinderImage.GalleryImage = (function(_super) {
    __extends(GalleryImage, _super);

    function GalleryImage() {
      return GalleryImage.__super__.constructor.apply(this, arguments);
    }

    GalleryImage.prototype.template = 'image';

    GalleryImage.prototype.className = 'gallery-image';

    return GalleryImage;

  })(Marionette.ItemView);
  return TinderImage.Gallery = (function(_super) {
    __extends(Gallery, _super);

    function Gallery() {
      return Gallery.__super__.constructor.apply(this, arguments);
    }

    Gallery.prototype.className = 'jumbotron';

    Gallery.prototype.buildChildView = function(child, ChildViewClass, childViewOptions) {
      return new ATtinder.TinderImage.GalleryImage({
        model: child
      });
    };

    return Gallery;

  })(Marionette.CollectionView);
});
