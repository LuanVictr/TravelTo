import mongoose from "mongoose";

interface ITravel {
  travelName: string;
  travelDescription: string;
  travelDestination: string;
  travelDate: string;
  travelActivities:Array<string>;
  travelers:Array<mongoose.Schema.Types.ObjectId>;
}

export default ITravel;