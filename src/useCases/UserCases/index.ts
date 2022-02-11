import { CreateUserCase } from './CreateUserCase'
import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUserRepository'
import { CreateUserController } from './CreateUserController'

const postgresUserRepository = new PostgresUsersRepository()

const createUserCase = new CreateUserCase(
  postgresUserRepository
)

const createUserController = new CreateUserController(
  createUserCase
)

export { createUserController }
