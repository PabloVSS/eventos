import { Id } from "../../shared";
import Event from "../model/Event";

export default function createEventNull(): Partial<Event> {
  return {
    id: Id.new(),
    name: "",
    description: "",
    date: new Date(),
    venue: "",
    expectedAudience: 1,
  };
}
