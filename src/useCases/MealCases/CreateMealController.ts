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
    const { email, data, name } = req.body

    try {
      this.createMealCase.delete({ email, data, name })

      return res.status(201).send()
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}
