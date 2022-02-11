import { TypeMeal } from '../entities/TypeMeal'

export interface ITypeMealRepository {
  addType(typeMeal: TypeMeal): Promise<void>
  findType(id: string): Promise<TypeMeal>
}
