@ATtinder.module 'TinderImage', (TinderImage, ATtinder, Backbone, Marionette, $, _) ->

  class TinderImage.Router extends Marionette.AppRouter

    appRoutes:
      'dashboard'             : 'showTinder'
      'dashboard(/:tab)(/)'   : 'showTab'
      'dashboard/*notFound'   : 'notFound'

    initialize: -> TinderImage.Controller.initialize()

    # onRoute: (name, path) -> console.log 'track path frequency'

  API =

    showTinder: -> TinderImage.Controller.show('tinder')

    showTab: (tab) ->
      tabs = ['tinder', 'gallery']
      tab = 'tinder' unless _.include(tabs, tab)
      TinderImage.Controller.show(tab)

    notFound: -> ATtinder.navigate("dashboard", {trigger: true, replace: true})

  TinderImage.addInitializer -> new TinderImage.Router(controller: API)
