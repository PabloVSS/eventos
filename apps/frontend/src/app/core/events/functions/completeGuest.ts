import Guest from "../model/Guest";
import validateGuest from "./validateGuest";

export default function completeGuest(guest: Partial<Guest>): Guest {
  const errors = validateGuest(guest);

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  const numberOfCompanions = guest.companionCount ?? 0;
  const isAccompanied =
    guest.hasCompanion && guest.confirm && numberOfCompanions > 0;

  const updatedGuest = {
    ...guest,
    guestCount: isAccompanied ? numberOfCompanions : 0,
    isAccompanied,
  };

  return updatedGuest as Guest;
}
