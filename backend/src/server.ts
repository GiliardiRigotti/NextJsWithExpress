import Fastify from 'fastify'
import multipart from '@fastify/multipart'
import cors from '@fastify/cors'
import path from "path";
import { appRoutes } from './routes'


const app = Fastify()
app.register(multipart)

app.register(require('@fastify/static'), {
    root: path.join(__dirname, 'uploads'),
    prefix: '/public/',
})


app.register(cors)

app.register(appRoutes)


app.listen({
    port: 3333
}).then(() => {
    console.log(`Server running!`)
})