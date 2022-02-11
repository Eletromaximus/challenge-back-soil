import { TypeMeal } from '../../entities/TypeMeal'
import { ITypeMealRepository } from '../../repositories/ITypeMealRepository'
import { ICreateTypeMealDTO } from './CreateTypeMealDTO'

export class CreateTypeMealCase {
  constructor (
    private useTypeMeal: ITypeMealRepository
  ) {
    this.useTypeMeal = useTypeMeal
  }

  async execute ({ type, grams, id }: ICreateTypeMealDTO) {
    const find = await this.useTypeMeal.findType(id)

    if (find) {
      throw new Error('This TypeMeal Already Exist')
    }

    const typeMeal = new TypeMeal({
      type,
      grams
    })

    await this.useTypeMeal.addType(typeMeal)
  }
}
