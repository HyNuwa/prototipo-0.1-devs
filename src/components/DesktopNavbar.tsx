"use client"

import * as React from "react"
import Link from "next/link"
import { BellIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import SearchForm from "./SearchForm"
import { useSearchParams } from 'next/navigation'
import SheetMenu from "./SheetMenu"
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

export function DesktopNavbar() {

  const searchParams = useSearchParams()
 
  const query = searchParams.get('search')

  return (
    <nav className="border-b shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <Link href="/" className="font-bold text-xl">
          Devs Project
        </Link>

        <SearchForm query={query ?? ""} mini/>

        <Button variant="outline" className="ml-auto"asChild>
                <Link href="/notifications">
                    <BellIcon className="w-4 h-4"/>
                </Link>
        </Button>
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

        <SheetMenu />
      </div>
    </nav>
  )
}

export default DesktopNavbar;