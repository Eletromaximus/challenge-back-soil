import { Meal } from '../entities/Meal'
export interface IMealRepository {
  addMeal(meal: Meal): Promise<void>
  findId(id: string): Promise<Meal>
  findMeal(name: string, email: string, data?:string):Promise<Meal>
  delMeal(id: string): Promise<void>
  listMeal(advance?: number, column?: string, direction?: string): Promise<Meal[]>
}
