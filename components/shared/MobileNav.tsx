"use client"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

import Link from "next/link"
import Image from "next/image"
import { SignedIn } from "@clerk/nextjs"
import { UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { navLinks } from '@/constants'
import { SignedOut } from "@clerk/nextjs"
import { Button } from "../ui/button"

const MobileNav = () => {
    const pathname = usePathname
    return (
        <header className="header">
            <Link href="/" className="flex  gap-5 md:py-2">
                <Image src="/assets/images/logo-tex.svg"
                    alt="logo"
                    width={80}
                    height={22} />
            </Link>

            <nav className="flex gap-2">
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                    <Sheet>
                        <SheetTrigger>
                            <Image 
                            src = "/assets/icons/menu.svg"
                            alt = "menu"
                            width={32}
                            height={32}
                            className="cursor-pointer" />
                        </SheetTrigger>
                        <SheetContent className="sheet-content sm:w-64">
                            <>
                            
                           <Image 
                           src= "/assets/images/logo-tex.svg"
                           alt = "logo"
                           width={60}
                           height={20} 
                           />
                       <ul className='sidebar-nav-elements'>
                            {navLinks.slice(0,6).map((link) => {
                                const isActive = link.route === pathname();

                                return (
                                    <li 
                                     className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                                    key={link.route}>
                                        <Link className='sidebar-link cursor-pointer' href={link.route}>
                                            <Image
                                                src={link.icon}
                                                alt="logo"
                                                width={24}
                                                height={24}
                                              

                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}
                            </ul>
                            </>
                        </SheetContent>
                    </Sheet>

                </SignedIn>

                <SignedOut>
                        <Button asChild className="button bg-purple-gradient bg-cover">
                            <Link href="/sign-in"></Link>
                        </Button>
                 </SignedOut>
            </nav>
        </header>
    )
}

export default MobileNav
