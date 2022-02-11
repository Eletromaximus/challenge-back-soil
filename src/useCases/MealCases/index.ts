import { PostgresMealRepository } from '../../repositories/implementations/PostgresMealRepository'
import { CreateMealCase } from './CreateMealCase'
import { CreateMealController } from './CreateMealController'

const postgresMealRepository = new PostgresMealRepository()

const createMealCase = new CreateMealCase(
  postgresMealRepository
)

const createMealController = new CreateMealController(
  createMealCase
)

export { createMealController }
