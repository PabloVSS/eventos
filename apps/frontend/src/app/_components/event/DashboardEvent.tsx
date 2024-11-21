import { Event } from "@/app/core"
import InformationsEvent from "./InformationsEvent"
import QrCodeAcess from "./QrCodeAccess"
import Statistics from "../shared/Statistics"

export interface DashboardEventProps {
  event: Event;
  absent: Absent[];
  present: Present[];
  totalOverall: number;
}

export default function DashboardEvent(props: DashboardEventProps) {
  return (
    <div className="flex flex-col gap-2">
        <div className="flex gap-2 self-stretch">
          <InformationsEvent event={props.event} className="flex-1" />
          <QrCodeAcess event={props.event} />
        </div>
        <div className="grid grid-cols-3 gap-6 mt-4">
          <Statistics
          text="Guest Attendance Expectation: "
          value={props.event.expectedAudience}
          image="/icones/convidados.svg" />
           <Statistics
          text="Guest Attendance Expectation: "
          value={props.present.length}
          image="/icones/confirmados.svg" />
           <Statistics
          text="Guest Attendance Expectation: "
          value={props.totalOverall}
          image="/icones/acompanhantes.svg" />
        </div>
    </div>
  )
}