import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function LogoBig() {
  return (
    <div>
      <Link href="/" className={`flex flex-col items-center gap-2 ${font.className}`}>

        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo"
        />

        <h1 className="text-5X1">
            DIGITAL INVITATION

        </h1>
      </Link>
    </div>
  )
}