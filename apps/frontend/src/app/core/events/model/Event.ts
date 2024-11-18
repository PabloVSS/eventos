/** @format */

import Guest from "./Guest";

export default interface Event {
  id: string;
  alias: string;
  password: string;
  name: string;
  date: Date;
  venue: string;
  description: string;
  coverImage: string;
  backgroundImage: string;
  expectedAudience: number;
  guests: Guest[];
}
