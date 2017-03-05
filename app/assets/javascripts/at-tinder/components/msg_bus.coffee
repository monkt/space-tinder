# @ATtinder.msgBus =
#
#   reqres  : ATtinder.reqres
#   request : ATtinder.request
#   commands: ATtinder.commands
#   execute : ATtinder.execute
#   on      : ATtinder.on
#   trigger : ATtinder.trigger
#
#   subscribe: (channel, callback) ->
#     @on channel, callback
#
#   notify: (channel, data) ->
#     @trigger channel, data
#
#   monitor: (callback) ->
#     @on 'all', callback
