import { TypeMeal } from '../../entities/TypeMeal'
import { ITypeMealRepository } from '../ITypeMealRepository'

const knex = require('../../database')
const typeDB = knex('meals')

export class PostgresTypeMealRepository implements ITypeMealRepository {
  async addType (typeMeal: TypeMeal): Promise<void> {
    const result = await typeDB
      .insert(typeMeal)
      .then(() => {
        console.log('sucesso ao inserir Meal')
      })
      .catch(() => {
        console.log('falha ao inserir Meal')
      })

    return result
  }

  async findType (id: string): Promise<TypeMeal> {
    const find = await typeDB
      .select()
      .from('meals')
      .where('id', id)
      .then(() => {
        console.log('busca bem sucedida de Meal')
      })
      .catch((err: any) => {
        console.log(err)
      })

    return find
  }
}
