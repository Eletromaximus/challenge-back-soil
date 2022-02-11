import { IUsersRepository } from '../IUserRepository'
import { User } from '../../entities/User'

const knex = require('../../database')
const userDb = knex('users')

export class PostgresUsersRepository implements IUsersRepository {
  async findByEmail (email: string): Promise<User> {
    console.log('chegou nos repositorios')
    const user = await userDb
      .select()
      .from('users')
      .where('email', email)
      .then(() => {
        console.log('data')
      })
      .catch((err: any) => {
        console.log(err, 'aqui')
      })

    return user
  }

  async save (user: User): Promise<void> {
    console.log('chegou no save')
    await userDb
      .insert(user)
      .then(() => {
        console.log('sucesso ao inserir')
      })
      .catch(() => {
        console.log('falha ao inserir')
      })
  }
}
