import { IUsersRepository, ILogin } from '../IUserRepository'
import { User } from '../../entities/User'

const knex = require('../../database')
const userDb = knex('users')

export class PostgresUsersRepository implements IUsersRepository {
  async findByEmail (email: string): Promise<User> {
    const user = await userDb
      .select()
      .from('users')
      .where('email', email)
      .then(() => {
        console.log('busca bem sucedida')
      })
      .catch((err: any) => {
        console.log(err)
      })

    return user
  }

  async save (user: User): Promise<void> {
    await userDb
      .insert(user)
      .then(() => {
        console.log('sucesso ao inserir User')
      })
      .catch((error: any) => {
        console.log(error, 'falha ao inserir User')
      })
  }

  async login (user: User): Promise<ILogin> {
    const login = await userDb
      .select('name', 'email')
      .from('users')
      .where({
        email: `${user.email}`,
        name: `${user.name}`,
        password: `${user.password}`
      })
      .then((data: any) => {
        console.log('busca bem sucedida')
        return data[0]
      })
      .catch((err: any) => {
        console.log(err)

        return undefined
      })

    return login
  }
}
