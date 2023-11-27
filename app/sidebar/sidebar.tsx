import Link from "next/link";
import NavLinks from "./nav-links";
import TopSideBar from "./top-sidebar";
import Image from "next/image";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
  return (
    <div className="flex flex-col px-3 py-4 md:px-2">
      <TopSideBar />
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
    </div>
  );
}
