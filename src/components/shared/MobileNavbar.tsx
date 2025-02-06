
import * as React from "react"

import SheetMenu from "@/components/menu/SheetMenu"

//import { Button } from "./ui/button";
//import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CircleUserRound } from 'lucide-react';
import Link from "next/link";


function DesktopNavbar() {

  return (
    <div className="flex md:hidden items-center">
            <button className="p-0 icon-button">
              <Link href="/login">
                <CircleUserRound size={30}  absoluteStrokeWidth={true}/>
              </Link>
            </button>
        <SheetMenu />
    </div>
  )
}

export default DesktopNavbar;