'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) { // verifica se a senha foi alterada
        userInstance.password = await Hash.make(userInstance.password) // criptografa a senha
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */

  // https://adonisjs.com/docs/4.1/relationships#_inserts_updates_deletes

  addresses () {
    return this.hasMany('App/Models/UserAddress')
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  project () {
    return this.belongsTo('App/Models/Project')
  }

  tasks () {
    return this.hasMany('App/Models/Task')
  }
}

module.exports = User
