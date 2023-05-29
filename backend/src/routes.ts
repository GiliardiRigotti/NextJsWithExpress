import { FastifyInstance } from "fastify"
import { prisma } from "./lib/prisma"
import { z } from "zod"
import * as fs from 'fs'
import util from 'util'
import { pipeline } from 'stream'
const pump = util.promisify(pipeline)

export async function appRoutes(app: FastifyInstance) {

    app.post('/product', async (request, response) => {
        const createBody = z.object({
            title: z.string(),
            description: z.string(),
            categoryId: z.string(),
            price: z.number(),
            imageName: z.string(),
        })

        const { title, description, categoryId, price, imageName } = createBody.parse(request.body)
        const today = new Date().toISOString()

        const product = await prisma.product.create({
            data: {
                title,
                description,
                price,
                created_at: today,
                category_id: categoryId,
                image: imageName,
            }
        })

        return product
    })


    app.post('/category', async (request, response) => {
        const createBody = z.object({
            title: z.string(),
        })

        const { title } = createBody.parse(request.body)
        const today = new Date().toISOString()

        const category = await prisma.category.create({
            data: {
                title,
                created_at: today,

            }
        })

        return category
    })

    app.get('/products', async (request, response) => {
        const product = await prisma.product.findMany()
        return product
    })

    app.get('/categories', async (request, response) => {
        const category = await prisma.category.findMany()
        return category
    })

    app.get('/uploads', async (request, response) => {
        const category = await prisma.image.findMany()
        return category
    })

    app.post('/product/upload', async function (request, reply) {

        const parts = request.files({ limits: { fileSize: 40 * 1024 * 1024 } })
        const today = new Date().toISOString()
        let fileName = ""

        for await (const part of parts) {
            fileName = part.filename
            await pump(part.file, fs.createWriteStream(__dirname + `/uploads/${part.filename}`))
            const image = await prisma.image.create({
                data: {
                    uri: part.filename,
                    product_id: part.fields.id.value,
                    created_at: today,
                }
            })
            return { fileName }
        }


        return { message: 'files uploaded' }

        // The rest of your code
    })

}

