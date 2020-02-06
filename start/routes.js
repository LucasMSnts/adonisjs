'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

// Mostrar lista de rotas no terminal: adonis route:list
