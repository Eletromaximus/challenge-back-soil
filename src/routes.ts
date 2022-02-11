import { Router } from 'express'
import { createUserController } from './useCases'

const router = Router()

router.post('/users', (request, response) => {
  createUserController.handle(request, response)
})

export { router }
