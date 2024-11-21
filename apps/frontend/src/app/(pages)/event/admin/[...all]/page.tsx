"use client"
import DashboardEvent from "@/app/_components/event/DashboardEvent";
import FormPasswordEvent from "@/app/_components/event/FormPasswordEvent";
import { events, Event, Guest } from "@/app/core";
import { use, useEffect, useState } from "react";

export default function PageAdminEvent(props: any){
  const params: any = use(props.params);
  const id = params.all[0];
  const [event, setEvent] = useState< Event | null>(null);
  const [password, setpassword] = useState<String | null> (params.all[1] ?? null);

  const present = event?.guests.filter((c) => c.confirm) ?? [];
  const absent = event?.guests.filter((c) => !c.confirm) ?? [];

  const totalOverall = event?.guests.reduce(
    (total: number, guest: Guest) => { 
      return total + guest.companionCount + 1 
    },
    0
  )
  function loadingEvent(){
    const event = events.find((ev) => ev.id === id && ev.password === password);
    setEvent(event ?? null)
  }

  useEffect(() => {
    loadingEvent();
  }, [id, password]);

  return (
    <div className="flex flex-col items-center">
      {event ? <DashboardEvent 
      event={event}
      absent={absent}
      present={present}
      totalOverall={totalOverall ?? 0}
      
      /> : <FormPasswordEvent />}
    </div>
  )

  return event ? (
    <div className="flex flex-col">
      <span>Id: {id}</span>
      <span>Password: {password}</span>
    </div>
  ) : null;
}