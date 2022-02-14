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
    const itemList = ['café da manhã', 'almoço', 'café da tarde', 'janta', 'ceia']

    const listMeal = itemList.find(item => item === mealData.name)

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

    if (!sameDate) {
      throw new Error('Meal is not exist')
    }

    return await this.useMeal.delMeal(id)
  }

  async listMeals (
    email: string,
    initialDate: string,
    finalDate: string
  ) {
    const initial = new Date(initialDate)
    const final = new Date(finalDate)
    const verifyDate = initial <= final

    if (!verifyDate || !email) {
      throw new Error('Bad Request')
    }

    const list = await this.useMeal.listMeal(email, initialDate, finalDate)

    if (list.length <= 0) {
      throw new Error('List Fail')
    }

    return list
  }
}
