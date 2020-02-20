// CRIAR MODELS
// adonis make:model File -m -c
// -m = cria a migration
// -c = cria o controller

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FileSchema extends Schema {
  up () {
    this.create('files', (table) => {
      table.increments()
      table.string('file').notNullable()
      table.string('name').notNullable()
      table.string('type', 20) // ver se é uma imagem, arquivo pdf... || tamanho de 20 caracteres
      table.string('subtype', 20) // o tipo do "type", ex.: type = imagem, subtype = .png
      table.timestamps()
    })
  }

  down () {
    this.drop('files')
  }
}

module.exports = FileSchema

// Depois para executar a migration:  adonis migration:run
