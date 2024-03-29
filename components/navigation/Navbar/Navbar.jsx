import React from "react";
import { useRouter } from "next/router";
import UserDropdown from "../../dropdown/UserDropdown";

export default function Navbar() {
  const router = useRouter();
  return (
    <div hidden={!router.pathname.includes("admin") ? true : false}>
      <nav className="hidden md:flex  top-0 left-0 w-full z-10 bg-gray-600 md:flex-row md:flex-nowrap  md:justify-start  items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <a
            className="text-white text-sm uppercase hidden md:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Buku Tamu
          </a>

          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
    </div>
  );
}
