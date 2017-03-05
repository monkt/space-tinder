this.ATtinder.module('TinderImage', function(TinderImage, ATtinder, Backbone, Marionette, $, _) {
  return TinderImage.Controller = {
    initialize: function() {
      $('.nav a').removeClass('active');
      this.images = new ATtinder.Entities.Images();
      return this.liked = new ATtinder.Entities.Images();
    },
    show: function(tab) {
      this.layout = new TinderImage.LayoutView({
        childEvents: {
          'new:image': (function(_this) {
            return function(previous) {
              return _this.likeImage(previous);
            };
          })(this)
        }
      });
      this.layout.on("show", (function(_this) {
        return function() {
          _this.layout.navRegion.show(new TinderImage.Nav);
          $(".nav ." + tab).addClass("active");
          return _this.dashboardTabFactory(tab);
        };
      })(this));
      return ATtinder.mainRegion.show(this.layout);
    },
    dashboardTabFactory: function(tab) {
      switch (tab) {
        case 'tinder':
          if (this.images.length === 0) {
            return this.loadImages();
          } else {
            return this.showImage();
          }
          break;
        case 'gallery':
          return this.layout.contentRegion.show(new TinderImage.Gallery({
            collection: this.liked,
            childView: {}
          }));
      }
    },
    loadImages: function() {
      return ATtinder.request('entities:images', {}, (function(_this) {
        return function(images) {
          _this.images.add(images);
          _this.images.preload();
          return _this.showImage();
        };
      })(this));
    },
    showImage: function() {
      if (this.images.length < 3) {
        return this.loadImages();
      } else {
        this.image = this.images.shift();
        return this.layout.contentRegion.show(new TinderImage.Tinder({
          model: this.image
        }));
      }
    },
    likeImage: function(previous) {
      if (previous.model.get('like')) {
        this.liked.add(this.image);
      }
      return this.showImage();
    }
  };
});
