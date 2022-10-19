import { Schema, model } from "mongoose";

// https://mongoosejs.com/docs/typescript.html

export interface IEvent {
  name: string;
  type: string;
  date: Date;
}

const eventSchema = new Schema<IEvent>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  date: { type: Date, required: true },
});

const Event = model<IEvent>("Event", eventSchema);

export default Event;
