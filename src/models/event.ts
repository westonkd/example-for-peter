import { Schema, model } from "mongoose";

// https://mongoosejs.com/docs/typescript.html

export interface IEvent {
  name: string;
  type: string;
  user_id: number;
  date: Date;
}

const eventSchema = new Schema<IEvent>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  user_id: { type: Number, required: true },
  date: { type: Date, required: true },
});

const Event = model<IEvent>("Event", eventSchema);

export default Event;
