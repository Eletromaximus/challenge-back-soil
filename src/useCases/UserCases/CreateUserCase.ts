import { User } from '../../entities/User'
import { IUsersRepository } from '../../repositories/IUserRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserCase {
  constructor (
    private usersRepository: IUsersRepository
  ) {
    this.usersRepository = usersRepository
  }

  async execute ({ name, email, password }: ICreateUserRequestDTO): Promise<void> {
    const userAlreadyExist: User | undefined = await this.usersRepository.findByEmail(email)

    if (userAlreadyExist) {
      throw new Error('User already exist.')
    }

    const user = new User({ name, email, password })

    return await this.usersRepository.save(user)
  }

  async login (user: ICreateUserRequestDTO): Promise<ICreateUserRequestDTO[]> {
    const userLogin = await this.usersRepository.login(user)

    if (userLogin) {
      throw new Error('Login Error')
    }

    return userLogin
  }
}
