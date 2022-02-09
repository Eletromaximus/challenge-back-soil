import { User } from '../entities/User'
import { IUserRepository } from '../repositories/IUserRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserCase {
  private usersRepository: IUserRepository

  constructor (
    usersRepository: IUserRepository
  ) {
    this.usersRepository = usersRepository
  }

  async execute (data: ICreateUserRequestDTO) {
    const userAlreadyExist = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExist) {
      throw new Error('User already exist.')
    }

    const user = new User(data)

    await this.usersRepository.save(user)
  }
}
