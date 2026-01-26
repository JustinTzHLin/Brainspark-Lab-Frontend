import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.json('list users'))

export default app