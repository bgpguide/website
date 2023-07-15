import { Bars3Icon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { SiGithub } from "@icons-pack/react-simple-icons"
import Link from "next/link";
import { useState } from "react"

export function Wrapper({children}) {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            <MobileMenu
                isOpen={mobileMenuIsOpen}
            />
            <div className="fixed top-0 left-0 w-full bg-white/[50%] backdrop-blur-sm border-b border-gray-200/[75%] z-[50]">
                <div className="container">
                    <div className="flex gap-4 items-center">
                        <Link href="/" className="flex gap-2 items-center">
                            <img src="/vendor/logo.png" className="h-7 w-7" />
                            <p className="text-lg font-medium py-5 md:py-0">bgp.guide</p>
                        </Link>
                        <div className="hidden md:flex flex-grow justify-center nav">
                            <a href="#">Guides</a>
                            <a href="#">Resources</a>
                            <a href="#">Documentation</a>
                            <a href="#">Donate</a>
                        </div>
                        <a href="#" className="hidden md:flex text-sm flex gap-2 items-center px-3 py-6 border-b border-transparent hover:border-black text-gray-700 hover:text-black">
                            GitHub
                            <SiGithub className="h-4 w-4" />
                        </a>
                        <div className="flex md:hidden flex-grow justify-end">
                            <button onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)} className="p-1 hover:bg-gray-50 rounded-lg">
                                {!mobileMenuIsOpen ? <Bars3Icon className="h-6 w-6" /> : 
                                <XMarkIcon className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-grow">
                {children}
            </div>
            <div className="container py-12">
                <div className="flex items-center gap-4">
                    <p className="text-xs text-gray-500">Copyleft bgp.guide contributors.</p>
                    <div className="flex flex-grow justify-end">
                        <p className="text-xs text-gray-500">a <a target="_blank" href="https://kjartann.is/" className="text-sky-500 font-medium underline hover:opacity-80">kjartann.is</a> website.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function MobileMenu({isOpen}) {
    return (
        <div className={`fixed top-0 left-0 w-full bg-white z-[45] rounded-b-lg shadow-lg px-6 pt-20 pb-6 ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition duration-[200ms] ease-in-out`}>
            <div className="flex flex-col gap-1 mobile-nav">
                <a href="#">
                    Guides
                    <ChevronRightIcon className="h-4 w-4" />
                </a>
                <a href="#">
                    Resources
                    <ChevronRightIcon className="h-4 w-4" />
                </a>
                <a href="#">
                    Documentation
                    <ChevronRightIcon className="h-4 w-4" />
                </a>
                <a href="#">
                    Donate
                    <ChevronRightIcon className="h-4 w-4" />
                </a>
            </div>
            <div className="pt-2">
                <a href="#" className="text-sm bg-gray-50 hover:bg-gray-100/[75%] p-3 -mx-3 rounded-lg flex items-center justify-between gap-4">
                    GitHub
                    <SiGithub className="h-4 w-4" />
                </a>
            </div>
        </div>
    )
}