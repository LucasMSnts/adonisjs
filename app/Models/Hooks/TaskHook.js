'use strict'

// adonis make:hook Task

// https://adonisjs.com/docs/4.1/database-hooks

const Kue = use('Kue') // https://github.com/nrempel/adonis-kue
const Job = use('App/Jobs/NewTaskMail')

const TaskHook = exports = module.exports = {}

TaskHook.sendNewTaskMail = async (taskInstance) => {
  if (!taskInstance.user_id && !taskInstance.dirty.user_id) return // dirty = alterações recentes

  const { email, username } = await taskInstance.user().fetch()
  const file = await taskInstance.file().fetch()

  const { title } = taskInstance

  Kue.dispatch(Job.key, { email, username, file, title }, { attempts: 3 })
}
