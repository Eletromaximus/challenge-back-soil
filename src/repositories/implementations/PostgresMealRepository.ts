import { IMealRepository } from '../IMealRepository'
import { Meal } from '../../entities/Meal'

const knex = require('../../database')

export class PostgresMealRepository implements IMealRepository {
  async addMeal (meal: Meal): Promise<void> {
    const result = await knex('meals')
      .insert(meal)
      .then(() => {
        console.log('sucesso ao inserir Meal')
        return 'ok'
      })
      .catch((error: any) => {
        console.log('falha ao inserir Meal', error)
        return undefined
      })

    return result
  }

  async findId (id: string): Promise<Meal> {
    const findByDate = await knex('meals')
      .select()
      .from('meals')
      .where('id', id)
      .then((data: Meal[]) => {
        return data[0]
      })
      .catch((err: any) => {
        console.log(err)
        return undefined
      })

    return findByDate
  }

  async delMeal (id: string): Promise<void> {
    const result = await knex('meals')
      .where('id', id)
      .del()
      .then(() => {
        return 'ok'
      })
      .catch((err: any) => {
        console.log(err)
        return undefined
      })
    return result
  }

  async findMeal (name: string, email: string, data: string): Promise<Meal> {
    const find = await knex('meals')
      .select()
      .from('meals')
      .where({
        name: `${name}`,
        email: `${email}`,
        data: `${data}`
      })
      .orderBy('data')
      .then((data: any) => {
        return data[0]
      })
      .catch((err: any) => {
        console.log(err)
        return undefined
      })

    return find
  }

  async listMeal (
    email: string,
    initialDate: string,
    finalDate: string,
    offset: number = 0
  ): Promise<Meal[]> {
    const list = await knex('meals')
      .select()
      .from('meals')
      .where('email', email)
      .whereBetween('data', [initialDate, finalDate])
      .limit(5)
      .offset(offset)
      .then((data: Meal[]) => {
        return data
      })
      .catch((err: any) => {
        console.log(err)
        return undefined
      })

    return list
  }
}
