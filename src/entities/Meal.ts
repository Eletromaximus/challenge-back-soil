
export class Meal {
  public email!: string
  public name!: string
  public data!: Date

  constructor (props: Meal) {
    Object.assign(this, props)
  }
}
