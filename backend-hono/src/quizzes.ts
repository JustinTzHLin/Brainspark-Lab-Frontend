import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.json('list quizzes'))

export default app