'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')

// Mostrar lista de rotas no terminal: adonis route:list
