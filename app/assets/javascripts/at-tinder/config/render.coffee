Backbone.Marionette.Renderer.render = (template, data) ->
  JST["#{template}"](data)
  # JST["at-tinder/#{template}"](data) # FIXME: namspacing
