import express from 'express'
import { router } from './routes'
import cors from 'cors'
import 'express-async-errors'
import helmet from 'helmet'

const app = express()

app.use(express.json())

app.use(helmet())

app.use(cors())

app.use(router)

app.listen(process.env.PORT || 4000, () => {
  console.log('Bem vindo ao server')
})
