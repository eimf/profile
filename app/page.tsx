import SideNav from "./sidebar/sidebar";
import About from "./sections/about";
import Skills from "./sections/skills";

export default function Home() {
  return (
    <main
      className={`flex-none md:flex min-h-screen justify-between m-3`}
    >
      <div className="w-full md:w-160 mb-3">
        <SideNav />
        <About />
      </div>
      <div className="w-full mx-10">
        <Skills />
      </div>
    </main>
  );
}
