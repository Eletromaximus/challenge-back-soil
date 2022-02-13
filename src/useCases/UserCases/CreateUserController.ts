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
      const result = await this.createUserCase.execute({
        name,
        email,
        password
      })
      return res.status(201).send(result)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }

  async login (req: Request, res: Response): Promise<Response> {
    const user = req.body

    try {
      const loginUser = await this.createUserCase.login(user)

      return res.status(201).send(loginUser)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}
