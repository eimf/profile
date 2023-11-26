import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main
      className={`${lusitana.className} flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Image
          // tailwindcss: width: an small image at the top most left corner of the page
          // tailwindcss: dynamic width: 1/4 of the screen
          className="w-1/6 h-1/6 rounded-full mr-4 float-left"
          src="/photo.jpeg"
          alt="Ezequiel Lopez"
          width={200}
          height={200}
        />
      </div>
    </main>
  );
}
