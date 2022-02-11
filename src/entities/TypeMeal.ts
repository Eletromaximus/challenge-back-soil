
import { uuid } from 'uuidv4'
export class TypeMeal {
  public type!: string
  public grams!: number
  public readonly id!: string

  constructor (props: Omit<TypeMeal, 'id'>, id?: string) {
    Object.assign(props)

    if (!id) {
      this.id = uuid()
    }
  }
}
