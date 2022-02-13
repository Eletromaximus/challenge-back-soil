import { Router } from 'express'
import { createUserController } from './useCases/UserCases'
import { createMealController } from './useCases/MealCases'

const router = Router()

router.post('/users', (request, response) => {
  return createUserController.handle(request, response)
})

router.post('/login', (request, response) => {
  return createUserController.login(request, response)
})

router.post('/meals', (request, response) => {
  return createMealController.handle(request, response)
})

router.post('/listmeals', (request, response) => {
  return createMealController.listOfMeals(request, response)
})

router.delete('/delmeal', (request, response) => {
  return createMealController.delete(request, response)
})

export { router }
