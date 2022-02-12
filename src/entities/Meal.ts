import { uuid } from 'uuidv4'

export class Meal {
  public email!: string
  public name!: string
  public data!: string
  public readonly id!: string
  public carboidratos!: string
  public vegetais!: string
  public proteinas!: string
  public gramsProteinas!: number
  public gramsVegetais!: number
  public gramsCarboidratos!: number

  constructor (props: Omit<Meal, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuid()
    }
  }
}
