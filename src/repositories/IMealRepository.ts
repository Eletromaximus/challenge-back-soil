import { Meal } from '../entities/Meal'
export interface IMealRepository {
  addMeal(meal: Meal): Promise<void>
  findId(id: string): Promise<Meal>
  findMeal(name: string, email: string, data:string):Promise<Meal>
  delMeal(id: string): Promise<void>
  listMeal(
    email: string,
    initialDate?: string,
    finalDate?: string
  ): Promise<Meal[]>
}
