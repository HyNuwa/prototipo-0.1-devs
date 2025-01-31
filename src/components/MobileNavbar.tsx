
import * as React from "react"

import SheetMenu from "./SheetMenu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
//import { Button } from "./ui/button";
//import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CircleUserRound } from 'lucide-react';
import LoginMenu from "./LoginMenu";


function DesktopNavbar() {

  return (
    <div className="flex md:hidden items-center">
        <Dialog>
          <DialogTrigger asChild>
            <button className="p-0 icon-button">
              <CircleUserRound size={30}  absoluteStrokeWidth={true}/>
            </button>
          </DialogTrigger>
            <DialogContent className="bg-slate-100">

              <DialogHeader className="sr-only"> {/*sr-only means screen readers only will detect this component while hidden it visually*/}
                <DialogTitle>Log In - Register Menu </DialogTitle>
              </DialogHeader>
              <LoginMenu />
            </DialogContent>
        </Dialog>
        <SheetMenu />
    </div>
  )
}

export default DesktopNavbar;