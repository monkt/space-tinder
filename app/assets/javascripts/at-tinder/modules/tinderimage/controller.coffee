@ATtinder.module 'TinderImage', (TinderImage, ATtinder, Backbone, Marionette, $, _) ->

  TinderImage.Controller =

    initialize: ->
      $('.nav a').removeClass('active')
      @images = new ATtinder.Entities.Images()
      @liked = new ATtinder.Entities.Images()

    show: (tab) ->

      @layout = new TinderImage.LayoutView childEvents: 'new:image': (previous) => @likeImage(previous)

      @layout.on "show", =>
        @layout.navRegion.show new TinderImage.Nav
        $(".nav .#{tab}").addClass "active"
        @dashboardTabFactory(tab)

      ATtinder.mainRegion.show @layout

    dashboardTabFactory: (tab) ->
      switch tab
        when 'tinder'
          if @images.length is 0 then @loadImages() else @showImage()
        when 'gallery'
          @layout.contentRegion.show new TinderImage.Gallery collection: @liked, childView: {}

    loadImages: ->
      ATtinder.request 'entities:images', {}, (images) =>
        @images.add(images)
        @images.preload()
        @showImage()

    showImage: ->
      if @images.length < 3 # buffer extra images
        @loadImages()
      else
        @image = @images.shift()
        @layout.contentRegion.show new TinderImage.Tinder model: @image

    likeImage: (previous) ->
      if previous.model.get('like') then @liked.add(@image)
      @showImage()
