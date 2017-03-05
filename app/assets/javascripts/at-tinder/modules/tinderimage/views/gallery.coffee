@ATtinder.module 'TinderImage', (TinderImage, ATtinder, Backbone, Marionette, $, _) ->

  class TinderImage.GalleryImage extends Marionette.ItemView

    template: 'image'
    className: 'gallery-image'

  # class TinderImage.EmptyGallery extends Marionette.ItemView
  #   template: _.template('Nothing to display.')

  class TinderImage.Gallery extends Marionette.CollectionView

    className: 'jumbotron'
    # emptyView: TinderImage.EmptyGallery

    buildChildView: (child, ChildViewClass, childViewOptions) ->
      new ATtinder.TinderImage.GalleryImage model: child
