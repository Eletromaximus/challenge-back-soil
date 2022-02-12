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
        console.log('busca bem sucedida de Meal', data)
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
        console.log('apagado com sucesso')
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
        console.log('refeição encontrada', data)
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
    advance: number = 0,
    column: string = 'data',
    direction: string = 'ASC'
  ): Promise<Meal[]> {
    const list = await knex('meals')
      .select()
      .from('meals')
      .where('email', email)
      .limit(5)
      .orderBy(column, direction)
      .offset(Math.floor(advance))
      .then((data: Meal[]) => {
        console.log(data)
        return data
      })
      .catch((err: any) => {
        console.log(err)
        return undefined
      })

    return list
  }
}
