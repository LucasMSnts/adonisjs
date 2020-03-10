'use strict'

// adonis make:hook Task

// https://adonisjs.com/docs/4.1/database-hooks

const Mail = use('Mail')
const Helpers = use('Helpers')
const TaskHook = exports = module.exports = {}

TaskHook.sendNewTaskMail = async (taskInstance) => {
  if (!taskInstance.user_id && !taskInstance.dirty.user_id) return // dirty = alterações recentes

  const { email, username } = await taskInstance.user().fetch()
  const file = await taskInstance.file().fetch()

  const { title } = taskInstance

  await Mail.send(
    ['emails.new_task'],
    { username, title, hasAttachment: !!file },
    message => {
      message
        .to(email)
        .from('lucas@outlook.com.br', 'Lucas | O EMAIL')
        .subject('Nova tarefa para você')

      if (file) {
        message.attach(Helpers.tmpPath(`uploads/${file.file}`), {
          filename: file.name
        })
      }
    }
  )
}
