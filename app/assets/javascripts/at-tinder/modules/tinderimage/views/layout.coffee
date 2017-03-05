@ATtinder.module 'TinderImage', (TinderImage, ATtinder, Backbone, Marionette, $, _) ->

  class TinderImage.LayoutView extends Marionette.LayoutView

    template: "layout"

    regions:
      navRegion: ".dashboard-nav"
      contentRegion: ".dashboard-content"
