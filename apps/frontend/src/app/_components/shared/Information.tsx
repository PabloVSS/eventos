export interface InformationProps {
  label: string;
  children: any;
}

export default function Information(props: InformationProps) {
  return (
    <div className="flex-1 flex flex-col items-start border border-zinc-800 px-6 py-2 rounded-lg">
      <span className="text-zinc-400 font-bold">{props.label}</span>
      <span className="text-xl">{props.children}</span>
    </div>
  )
}