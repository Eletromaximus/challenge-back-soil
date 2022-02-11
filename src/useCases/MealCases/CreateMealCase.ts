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
    const sameDate = await this.useMeal.findDate(data)

    if (sameDate) {
      throw new Error('Meal in this date already exist')
    }
    const meal = new Meal({ data, email, name })

    await this.useMeal.addMeal(meal)
  }
}
