import { Hono } from 'hono'
import { poweredBy } from 'hono/powered-by'

const app = new Hono()
app.use('*', poweredBy())

app.get("/", c => c.json({ hello: 'world!' }))

app.post('/', async (c) => {
  const body = await c.req.json()
  return c.json(body)
})

app.get("/u/:id", async (c) => {
  const id = c.req.param('id')
  return c.json({ id })
})

app.all("/all", (c) => {
  return c.json({ hello: 'all!' })
})

export default app
