import Event from "../model/Event";

export default function validateEvent(event: Partial<Event>): string[] {
  const errors: string[] = [];

  if (!event.name) {
    errors.push("Name is required.");
  }
  if (!event.date) {
    errors.push("Date is required.");
  }
  if (!event.venue) {
    errors.push("Venue is required.");
  }
  if (!event.expectedAudience || event.expectedAudience < 1) {
    errors.push("Expected Audience is required.");
  }
  return errors;
}
