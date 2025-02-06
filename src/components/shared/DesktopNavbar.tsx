

import * as React from "react"
import Link from "next/link"
//import { BellIcon } from "lucide-react" 

import { Button } from "@/components/ui/button"
//import {DialogTitle, } from "@/components/ui/dialog"
//import { Separator } from "@/components/ui/separator"

const routes = [
  {
    href: "/proyectos",
    label: "Proyectos",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/SignIn",
    label: "Contact",
  },
]

function DesktopNavbar() {

  return (
    <div className="hidden md:flex flex-grow items-center space-x-4">

        
        <div className="hidden md:flex space-x-4">
          {routes.map((route) => (
            <Button key={route.href} variant="ghost" asChild>
              <Link href={route.href}>{route.label}</Link>
            </Button>
          ))}
          <Button variant="ghost" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        {/*<Button variant="outline" className="ml-auto"asChild>
                <Link href="/notifications">
                    <BellIcon className="w-4 h-4"/>
                </Link>
        </Button>*/ }
    </div>
  )
}

export default DesktopNavbar;