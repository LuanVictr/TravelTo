import IUsers from "../interfaces/IUsers";
import UsersOdm from "../model/User";
import UserNotFoundException from "../exceptions/NotFound";
import WrongPasswordException from "../exceptions/WrongPassword";
import UserAlreadyExists from "../exceptions/UserAlreadyExists";

class LoginService {
  private model:UsersOdm;

  constructor() {
    this.model = new UsersOdm();
  }

  public async login({userName, password}:IUsers) {
    try {
      const user = await this.model.findOne(userName);

      if(!user) {
        throw new UserNotFoundException();
      }

      if(user.password != password) {
        throw new WrongPasswordException();
      }

      return "Success";
    } catch (error) {
      throw error;
    }
  }

  public async signIn(newUserInfo:IUsers) {
    try {
    const userExists = await this.model.findOne(newUserInfo.userName);
    if(userExists) {
      throw new UserAlreadyExists();
    }
    const newUser = await this.model.create(newUserInfo);
    return newUser;
    } catch(error) {
      throw error;
    }
  }

}

export default LoginService;