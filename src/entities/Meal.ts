
export class Meal {
  public email!: string
  public name!: string
  public data!: string

  constructor (props: Meal) {
    Object.assign(this, props)
  }
}
