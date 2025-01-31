"use client"
import Link from "next/link";
import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";
import SearchForm from "./SearchForm";
import Image from "next/image";

//import { useState } from "react";

// import { currentUser } from "@clerk/nextjs/server";
// import { syncUser } from "@/actions/user.action";

function Navbar() {
//   const user = await currentUser();
//   if (user) await syncUser(); // POST
  //const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <nav className="w-full border-b backdrop-blur shadow-sm">
      {/*<div className=" max-w-7xl mx-auto px-4">*/}
        <div className="flex items-center justify-between h-16 max-w-7xl mx-auto px-4">
          <div className="flex items-center mr-6 flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-black font-mono tracking-wider">
              <Image
                src="/logoDevsVertical.png"
                alt="Logo Devs Project desktop"
                width={143}
                height={48}
                className="hidden md:block md:w-[143px]"
              />
              <Image
                src="/logo.png"
                alt="Logo Devs Project mobile"
                width={36}
                height={36}
                className="block md:hidden md:w-[36px] md:h-[36px]"
              />
            </Link>
          </div>
          
          <SearchForm mini/>

          <DesktopNavbar />
          <MobileNavbar />
        </div>
      {/*</div>*/}
    </nav>
  );
}
export default Navbar;