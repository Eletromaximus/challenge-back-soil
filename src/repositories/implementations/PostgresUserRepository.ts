import { IUsersRepository } from '../IUserRepository'
import { User } from '../../entities/User'

const knex = require('../../database')

export class PostgresUsersRepository implements IUsersRepository {
  async findByEmail (email: string): Promise<User> {
    const user = await knex('users')
      .select()
      .from('users')
      .where('email', email)
      .then((data: User[]) => {
        console.log('busca bem sucedida', data, data[0])
        return data[0]
      })
      .catch((err: any) => {
        console.log(err, 'seria aqui?')
        return undefined
      })

    return user
  }

  async save (user: User): Promise<void> {
    const result = await knex('users')
      .insert(user)
      .then(() => {
        console.log('sucesso ao inserir User')
        return 'ok'
      })
      .catch((error: any) => {
        console.log(error, 'falha ao inserir User')
        return undefined
      })
    return result
  }

  async login (user: User): Promise<User> {
    const verify = await knex('users')
      .select()
      .from('users')
      .where({
        email: `${user.email}`,
        name: `${user.name}`,
        password: `${user.password}`
      })
      .then((data: User[]) => {
        console.log('busca bem sucedida', data)
        return data[0]
      })
      .catch((err: any) => {
        console.log(err)
        return undefined
      })

    return verify
  }
}
