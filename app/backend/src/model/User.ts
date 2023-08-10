import { Model, Schema, models, model } from "mongoose";
import IUsers from "../interfaces/IUsers";

class UsersOdm {
  private schema: Schema;
  private model: Model<IUsers>;

  constructor() {
    this.schema = new Schema<IUsers>({
      userName: {type: String, required: true},
      password: {type: String, required: true},
      interests: {type: [String], required: true},
    });
    this.model = models.User || model('User', this.schema);
  }

  public async findAll():Promise<IUsers[]> {
    const users = await this.model.find();
    return users;
  }

  public async findOne(userName:string):Promise<IUsers | null> {
    const user = await this.model.findOne({userName});
    if(user) {
      return user;
    } else {
      return null
    }
  }

  public async create(user:IUsers):Promise<IUsers> {
    const newUser = await this.model.create(user)
    return newUser;
  }
}

export default UsersOdm;