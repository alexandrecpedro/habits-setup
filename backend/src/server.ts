// Back-end API RESTful
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

app.register(cors)
app.register(appRoutes)

// http://localhost:3333
app.listen({
    port: 3333,
    // host: '0.0.0.0', // for mobile
}).then(() => {
    console.log('HTTP Server running!')
})