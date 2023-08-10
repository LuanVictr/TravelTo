import LoginService from "../service/login.service";
import { Request, Response } from "express";

class LoginController {
  private service:LoginService;
  constructor() {
    this.service = new LoginService();
  }

  public health = (_req:Request, res:Response) => {
    res.status(200).send("Healthy");
  }

  public login = async (req:Request, res:Response) => {
    try {

      const userInfo = req.body;
      const loginResult = await this.service.login(userInfo);

      res.status(200).json({message: loginResult});
      
    } catch (error:any) {
      res.status(error.statusCode).json({message: error.message});
    }
  }

  public signIn = async(req:Request, res:Response) => {
    try {

      const newUserInfo = req.body;
      const newUser = await this.service.signIn(newUserInfo);

      res.status(201).json(newUser);

    } catch(error:any) {
      res.status(error.statusCode).json({message: error.message});
    }
  }

}

export default LoginController;