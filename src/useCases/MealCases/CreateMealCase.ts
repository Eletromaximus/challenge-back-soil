import { Meal } from '../../entities/Meal'
import { IMealRepository } from '../../repositories/IMealRepository'
import { ICreateMealDTO } from './CreateMealDTO'

export class CreateMealCase {
  constructor (
    private useMeal: IMealRepository
  ) {
    this.useMeal = useMeal
  }

  async execute ({ data, email, name }:ICreateMealDTO) {
    const listMeal = name === 'café da manha' || 'almoço' || 'café da tarde' || 'janta' || 'ceia'

    if (!listMeal) {
      throw new Error('Name Invalid')
    }

    const sameDate = await this.useMeal.findMeal({
      data,
      email,
      name
    })

    if (sameDate) {
      throw new Error('Meal in this date already exist')
    }
    const meal = new Meal({ data, email, name })

    await this.useMeal.addMeal(meal)
  }

  async delete (id: string) {
    const sameDate = await this.useMeal.findId(id)

    if (!sameDate) {
      throw new Error('Meal is not exist')
    }

    await this.useMeal.delMeal(id)
  }

  async listMeals (advance: number = 0, column?: string, direction?: string) {
    const verifyAdvance = advance >= 0
    const verifyDirection = direction === 'DESC' || 'ASC'

    if (!verifyAdvance || !verifyDirection) {
      throw new Error('Bad Request')
    }

    const list = await this.useMeal.listMeal(advance, column, direction)

    if (!list) {
      throw new Error('List Fail')
    }

    return list
  }
}
