import Link from "next/link";
import LogoBig from "./_components/templates/LogoBig";


export default function Home() {
  return (
    <div
    className="
      h-screen flex flex-col justify-center  items-center gap-10
      bg-[url('/background_principal.svg')] bg-cove
      "
    >
        <div className="flex flex-col items-center gap-4">
          <LogoBig />
          <p className="text-zinc-500 font-light w-96 leading-6 text-center">
            Crie e gerencie o convite do seu evento de forma rápida e fácil, sem complicações
          </p>
        </div>
        <Link href="/event" className="botao azul text-lg uppercase">
          Crie Seu evento
        </Link>
    </div>
  );
}
