import { Router } from 'express'
import { createUserController } from './useCases/UserCases'
import { createMealController } from './useCases/MealCases'

const router = Router()

router.post('/users', (request, response) => {
  createUserController.handle(request, response)
})

router.get('/meals', (request, response) => {
  createMealController.handle(request, response)
})

export { router }
