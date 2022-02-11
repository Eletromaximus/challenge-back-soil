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
      await this.createMealCase.execute(data)

      return res.status(201).send()
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }

  async delete (req: Request, res: Response) {
    const { id } = req.body

    try {
      this.createMealCase.delete(id)

      return res.status(201).send()
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}
