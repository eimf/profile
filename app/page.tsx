
import SideNav from './sidebar/sidebar'
import { lusitana } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main
      className={`${lusitana.className} flex min-h-screen flex-col items-left justify-between p-24`}
    >
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* divide the whole screen in 2 colums for large and medium screen and a single one for small screens*/}
        <div className="flex flex-col items-center justify-between">
        </div>
        <div className="right-section">

        </div>
        
        <div className="image-container">
          
        </div>
      </div>
    </main>
  );
}
