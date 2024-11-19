import { Id, Password } from "../../shared";
import Event from "../model/Event";
import validateEvent from "./validateEvent";

export default function completeEvents(eventPartial: Partial<Event>): Event {
  const errors = validateEvent(eventPartial);

  if (errors.length) {
    throw new Error(errors.join("\n"));
  }

  const event: Event = {
    ...eventPartial,
    id: eventPartial.id ?? Id.new(),
    password: eventPartial.password ?? Password.new(20),
    expectedAudience: +(eventPartial.expectedAudience ?? 1),
  } as Event;

  return event;
}
