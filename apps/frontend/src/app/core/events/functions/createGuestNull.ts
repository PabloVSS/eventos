import { Id } from "../../shared";
import Guest from "../model/Guest";

export default function createGuestNull(): Partial<Guest> {
  return {
    id: Id.new(),
    name: "",
    email: "",
    confirm: true,
    hasCompanion: false,
    companionCount: 0,
  };
}
