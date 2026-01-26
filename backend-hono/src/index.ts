import { Hono } from 'hono'
import quizzes from './quizzes.js'
import users from './users.js'

const app = new Hono()

const welcomeStrings = [
  'Hello Hono!',
  'To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/backend/hono'
]

app.get('/', (c) => {
  return c.text(welcomeStrings.join('\n\n'))
})

app.route('/quizzes', quizzes)
app.route('/users', users)

export default app
