import { Request, Response } from 'express'
import { TypeMeal } from '../../entities/TypeMeal'
import { CreateTypeMealCase } from './CreateTypeMealCase'

export class CaseTypeController {
  constructor (
    private createTypeMealCase: CreateTypeMealCase
  ) {
    this.createTypeMealCase = createTypeMealCase
  }

  async handle (req: Request, res: Response) {
    const data: TypeMeal = req.body

    try {
      await this.createTypeMealCase.execute(data)

      res.status(201)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}
