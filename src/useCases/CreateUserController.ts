import { Request, Response } from 'express'
import { CreateUserCase } from './CreateUserUseCase'

export class CreateUserController {
  private createUseCase: CreateUserCase

  constructor (
    createUseCase: CreateUserCase
  ) {
    this.createUseCase = createUseCase
  }

  async handle (req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body

    try {
      await this.createUseCase.execute({
        name,
        email,
        password
      })

      return res.status(201).send({ message: 'ok' })
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}
