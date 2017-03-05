
@ATtinder = @ATtinder || {}

app = do (Backbone, Marionette) ->

  App = new Marionette.Application

  App.rootRoute = 'dashboard'
  App.Radio = Backbone.Radio

  App.addRegions
    mainRegion: '#main-region'

  App.addInitializer ->
    App.module('TinderImage').start()

  App.on 'start', (options) ->
    if Backbone.history
      Backbone.history.start({pushstate: true})
      if Backbone.history.fragment is ""
        @navigate(@rootRoute, trigger: true)

  App

$.extend(@ATtinder, app)
