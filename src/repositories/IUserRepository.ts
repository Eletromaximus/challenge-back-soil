import { User } from '../entities/User'

export interface ILogin {
  name: string,
  email: string,
}
export interface IUsersRepository {
  findByEmail(email: string): Promise<User>,
  save(user: User): Promise<void>
  login(user: User): Promise<ILogin>
}
