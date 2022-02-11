import { Meal } from '../entities/Meal'

export interface IMealRepository {
  addMeal(meal: Meal): Promise<void>
  findDate(data: Date): Promise<Meal>
}
