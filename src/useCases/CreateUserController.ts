import { Request, Response } from 'express'
import { CreateUserCase } from './CreateUserCase'

export class CreateUserController {
  constructor (
    private createUserCase: CreateUserCase
  ) {
    this.createUserCase = createUserCase
  }

  async handle (req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body
    try {
      await this.createUserCase.execute({
        name,
        email,
        password
      })

      return res.status(201).send()
    } catch (err: any) {
      console.log('ainda entra')
      return res.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}
