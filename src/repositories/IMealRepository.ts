import { Meal } from '../entities/Meal'

export interface IMealRepository {
  addMeal(meal: Meal): Promise<void>
  findDate(data: string): Promise<Meal>
  delMeal({ data, email }: Meal): Promise<void>
}
