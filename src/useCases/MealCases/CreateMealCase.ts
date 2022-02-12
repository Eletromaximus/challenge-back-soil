import { Meal } from '../../entities/Meal'
import { IMealRepository } from '../../repositories/IMealRepository'
import { ICreateMealDTO } from './CreateMealDTO'

export class CreateMealCase {
  constructor (
    private useMeal: IMealRepository
  ) {
    this.useMeal = useMeal
  }

  async execute (mealData:ICreateMealDTO) {
    const listMeal = mealData.name === 'café da manha' || 'almoço' || 'café da tarde' || 'janta' || 'ceia'

    if (!listMeal || !mealData.email || !mealData.data) {
      throw new Error('Bad Request')
    }

    const sameDate = await this.useMeal.findMeal(
      mealData.name,
      mealData.email,
      mealData.data
    )

    if (sameDate) {
      throw new Error('Meal in this date already exist')
    }
    const meal = new Meal(mealData)

    return await this.useMeal.addMeal(meal)
  }

  async delete (id: string) {
    const sameDate = await this.useMeal.findId(id)

    if (sameDate) {
      throw new Error('Meal is not exist')
    }

    return await this.useMeal.delMeal(id)
  }

  async listMeals (
    email: string,
    advance: number = 0,
    column?: string,
    direction?: string
  ) {
    const verifyAdvance = advance >= 0
    const verifyDirection = direction === 'DESC' || 'ASC'

    if (!verifyAdvance || !verifyDirection || !email) {
      throw new Error('Bad Request')
    }

    const list = await this.useMeal.listMeal(email, advance, column, direction)

    if (list ! === []) {
      throw new Error('List Fail')
    }

    return list
  }
}
