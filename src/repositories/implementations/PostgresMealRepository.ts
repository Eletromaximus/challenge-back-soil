import { IMealRepository } from '../IMealRepository'
import { Meal } from '../../entities/Meal'

const knex = require('../../database')
const userDb = knex('meals')

export class PostgresMealRepository implements IMealRepository {
  async addMeal (meal: Meal): Promise<void> {
    const user = await userDb
      .insert(meal)
      .then(() => {
        console.log('sucesso ao inserir Meal')
      })
      .catch(() => {
        console.log('falha ao inserir Meal')
      })

    return user
  }

  async findDate (data: Date): Promise<Meal> {
    const findByDate = await userDb
      .select()
      .from('meals')
      .where('data', data)
      .then(() => {
        console.log('busca bem sucedida de Meal')
      })
      .catch((err: any) => {
        console.log(err)
      })

    return findByDate
  }
}
