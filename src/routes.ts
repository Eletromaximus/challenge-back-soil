import { Router } from 'express'
import { createUserController } from './useCases/UserCases'
import { createMealController } from './useCases/MealCases'

const router = Router()

router.post('/users', (request, response) => {
  createUserController.handle(request, response)
})

router.post('/login', (request, response) => {
  createUserController.login(request, response)
})

router.get('/meals', (request, response) => {
  createMealController.handle(request, response)
})

router.delete('/delmeal', (request, response) => {
  createMealController.delete(request, response)
})

export { router }
