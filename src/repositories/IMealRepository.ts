import { Meal } from '../entities/Meal'
export interface IMealRepository {
  addMeal(meal: Meal): Promise<void>
  findId(id: string): Promise<Meal>
  findMeal({ name, email, data }: Omit<Meal, 'id'>): Promise<Meal>
  delMeal(id: string): Promise<void>
}
