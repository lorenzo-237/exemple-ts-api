import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { TestController } from '@controllers/tests.controller';
import { AuthMiddleware } from '@/middlewares/auth.middleware';

export class TestRoute implements Routes {
  public path = '/tests';
  public router = Router();
  public test = new TestController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.test.getHelloWorld);
    this.router.get(`${this.path}/private`, AuthMiddleware, this.test.getHelloWorld);
  }
}
