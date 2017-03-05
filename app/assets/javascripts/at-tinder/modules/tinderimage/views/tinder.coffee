@ATtinder.module 'TinderImage', (TinderImage, ATtinder, Backbone, Marionette, $, _) ->

  class TinderImage.Tinder extends Marionette.ItemView

    template: "tinder"

    ui:
      like      : ".like"
      dislike   : ".dislike"
      tinder    : ".tinder"
      loading   : ".loading"

    events:
      "click @ui.like"      : -> @updateTinder(true)
      "click @ui.dislike"   : -> @updateTinder(false)

    modelEvents: ->
      'change:loaded'  : (model) ->
        @ui.loading.hide()
        @ui.tinder.fadeIn()

    onRender: ->
      unless @model.get 'loaded' # image loading feeback
        @ui.tinder.hide()
        @ui.loading.show()

    updateTinder: (like) ->
      @model.set 'like': like
      @triggerMethod('new:image')
