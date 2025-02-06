"use client";
import * as React from "react"

import { Menu, RocketIcon, InfoIcon, BookTextIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

import Link from "next/link"


function SheetMenu(){
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
          <SheetTitle>Menu</SheetTitle>
            <div className="flex flex-col space-y-4 mt-4">
              {/* {routes.map((route) => (
                <React.Fragment key={route.href}>
                  <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
                    <Link href={route.href}>{route.label}</Link>
                  </Button>
                  <Separator />
                </React.Fragment>
              ))} */}
              <Button variant="ghost" className="flex items-center gap-3 justify-start" onClick={() => setIsOpen(false)} asChild>
                <Link href="/proyectos">
                    <RocketIcon className="w-4 h-4"/>
                    Proyectos
                </Link>
              </Button>
              <Button variant="ghost" className="flex items-center gap-3 justify-start" onClick={() => setIsOpen(false)} asChild>
                <Link href="/about">
                    <InfoIcon className="w-4 h-4"/>
                    About
                </Link>
              </Button>
              <Button variant="ghost" className="flex items-center gap-3 justify-start" onClick={() => setIsOpen(false)} asChild>
                <Link href="/carreras">
                    <BookTextIcon className="w-4 h-4"/>
                    Carreras
                </Link>
              </Button>
            </div>
            {/*Botones Sign In y log In abajo del sheet vista mobil*/}
            <div className="flex flex-col space-y-4 mb-8">
              <Button asChild onClick={() => setIsOpen(false)}>
                <Link href="/signup">Sign Up</Link>
              </Button>
              <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
                <Link href="/login">Log In</Link>
              </Button>
            </div>

          </SheetContent>
        </Sheet>
    );
}

export default SheetMenu;