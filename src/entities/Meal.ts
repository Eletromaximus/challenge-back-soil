
interface IType {
  name: string,
  grams: number
}
export class Meal {
  public name!: string
  public type!: IType
  public data!: Date

  constructor (props: Meal) {
    Object.assign(this, props)
  }
}
