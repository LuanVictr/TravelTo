import mongoose, { Model, Schema, model, models } from "mongoose";
import ITravel from "../interfaces/ITravel";

class TravelOdm {
  private schema: Schema;
  private model:Model<ITravel>;

  constructor() {
    this.schema = new Schema<ITravel>({
      travelName: {type: String, required: true},
      travelDescription: {type: String, required: true},
      travelDate: {type: String, required: true},
      travelActivities: {type: [String]},
      travelers: {type:[mongoose.Schema.Types.ObjectId], ref: 'User'},
    })
    this.model = models.Travel || model('Travel', this.schema);
  }

  public async findAll():Promise<ITravel[]> {
    const allTravels = await this.model.find();
    return allTravels;
  }
}

export default TravelOdm;