import { IMealRepository } from '../IMealRepository'
import { Meal } from '../../entities/Meal'

const knex = require('../../database')
const mealDb = knex('meals')

export class PostgresMealRepository implements IMealRepository {
  async addMeal (meal: Meal): Promise<void> {
    const result = await mealDb
      .insert(meal)
      .then(() => {
        console.log('sucesso ao inserir Meal')
      })
      .catch((error: any) => {
        console.log('falha ao inserir Meal', error)
      })

    return result
  }

  async findId (id: string): Promise<Meal> {
    const findByDate = await mealDb
      .select()
      .from('meals')
      .where('id', id)
      .then(() => {
        console.log('busca bem sucedida de Meal')
      })
      .catch((err: any) => {
        console.log(err)
      })

    return findByDate
  }

  async delMeal (id: string): Promise<void> {
    await mealDb
      .where(id)
      .del()
      .then(() => {
        console.log('apagado com sucesso')
      })
      .catch((err: any) => {
        console.log(err)
      })
  }

  async findMeal (name: string, email: string, data: string): Promise<Meal> {
    console.log(name, email, data)
    const find = await mealDb
      .select()
      .from('meals')
      .where({
        name: `${name}`,
        email: `${email}`,
        data: `${data}`
      })
      .orderBy('data')
      .then((data: any) => {
        console.log('Meal encontrada')
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
    console.log(email)
    const list = await mealDb
      .select()
      .from('meals')
      .where('email', email)
      .limit(5)
      .orderBy(column, direction)
      .offset(Math.floor(advance))
      .then(() => {
        console.log('Lista preenchida')
      })
      .catch((err: any) => {
        console.log(err, 'é aqui')
      })

    return list
  }
}
