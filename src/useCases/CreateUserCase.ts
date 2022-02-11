import { User } from '../entities/User'
import { IUsersRepository } from '../repositories/IUserRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserCase {
  constructor (
    private usersRepository: IUsersRepository
  ) {
    this.usersRepository = usersRepository
  }

  async execute ({ name, email, password }: ICreateUserRequestDTO): Promise<void> {
    const userAlreadyExist = await this.usersRepository.findByEmail(email)

    if (userAlreadyExist) {
      throw new Error('User already exist.')
    }

    const user = new User({ name, email, password })

    await this.usersRepository.save(user)
  }
}
