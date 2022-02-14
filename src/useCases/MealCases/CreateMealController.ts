import { Request, Response } from 'express'
import { CreateMealCase } from './CreateMealCase'

export class CreateMealController {
  constructor (
    private createMealCase: CreateMealCase
  ) {
    this.createMealCase = createMealCase
  }

  async handle (req: Request, res: Response) {
    const data = req.body

    try {
      const result = await this.createMealCase.execute(data)

      return res.status(201).send(result)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }

  async delete (req: Request, res: Response) {
    const { id } = req.body

    try {
      const result = await this.createMealCase.delete(id)

      return res.status(200).send(result)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }

  async listOfMeals (req: Request, res: Response) {
    const { email, initialDate, finalDate } = req.body

    try {
      const listMeals = await this.createMealCase.listMeals(
        email,
        initialDate,
        finalDate
      )

      return res.status(201).send(listMeals)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}
