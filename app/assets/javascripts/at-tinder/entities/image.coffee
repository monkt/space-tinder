@ATtinder.module 'Entities', (Entities, ATtinder, Backbone, Marionette, $, _) ->

  class Entities.Image extends Backbone.Model

    defaults: ->
      src: 'http://atmedia.imgix.net/'
      gallery_width: '300'
      gallery_height: '200'
      loaded: false

    constructor: (options) -> super

  class Entities.Images extends Backbone.Collection
    model: Entities.Image

    preload: ->
      _.each @where(loaded: false), (img) ->
        image = new Image()
        image.onload = -> img.set loaded: true
        image.src = "#{img.get('src')}#{img.get('id')}"

  API =

    # open /Applications/Google\ Chrome.app --args --disable-web-security --user-data-dir
    getImages: (attrs, callback) ->
      $.getJSON 'http://www.apartmenttherapy.com/admin/galleries/sample.json', (data) ->
        images = _.map data, (id) -> new ATtinder.Entities.Image(id: id)
        callback(images)

  ATtinder.reqres.setHandler 'entities:images', (attrs, callback) ->
    API.getImages(attrs, callback)
