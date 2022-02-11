import { uuid } from 'uuidv4'

export class Meal {
  public email!: string
  public name!: string
  public data!: string
  public readonly id!: string

  constructor (props: Omit<Meal, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuid()
    }
  }
}
