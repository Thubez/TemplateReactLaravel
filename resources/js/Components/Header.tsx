import { Link } from '@inertiajs/react'
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Search, ShoppingCart, Globe, Menu, Heart } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import { useState } from "react"
import { MobileSidebar } from "./MobileSidebar"

export function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
    const userInitials = "JS"

    return (
        <header className="w-full border-b sticky top-0 z-50 bg-white">
            <div className="container flex items-center justify-between px-4 h-[72px]">
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileSidebarOpen(true)}
                    >
                        <Menu className="h-6 w-6" />
                    </Button>
                    <Link href="/" className="flex items-center space-x-2">
                        <svg
                            className="h-8 w-8 text-purple-600"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 6V2h4v4" />
                            <path d="m12 22-4-4 4-4" />
                            <path d="M22 6V2h-4v4" />
                            <path d="M18 18h4v-4" />
                            <path d="M2 6V2h4v4" />
                            <path d="M6 22H2v-4" />
                            <path d="M22 13a9 9 0 1 1-9-9" />
                        </svg>
                        <span className="text-xl font-bold">TryOutPro</span>
                    </Link>
                    <div className='hidden md:block text-sm font-medium text-gray-700 hover:text-purple-600'>
                        <DropdownMenu>
                            <DropdownMenuTrigger >
                                <div className='flex items-center space-x-2'>
                                    {/* <Globe /> */}
                                    <p>Kategori Try Out</p>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Ujian</DropdownMenuLabel>
                                <DropdownMenuItem>Bahasa Indonesia</DropdownMenuItem>
                                <DropdownMenuItem>English</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </div>
                <div className="hidden md:flex flex-1 mx-6">
                    <div className="relative w-full max-w-[720px]">
                        <Input
                            type="search"
                            placeholder="Cari try out atau materi"
                            className="w-full pl-10 "
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Link
                        href="/business"
                        className="hidden lg:block text-sm font-medium text-gray-700 hover:text-purple-600"
                    >
                        Try Out Institusi
                    </Link>
                    <Link
                        href="/teach"
                        className="hidden lg:block text-sm font-medium text-gray-700 hover:text-purple-600"
                    >
                        Buat Try Out
                    </Link>
                    {isLoggedIn ? (
                        <>
                            <Link
                                href="/learning"
                                className="hidden sm:block text-sm font-medium text-gray-700 hover:text-purple-600"
                            >
                                Try Out Saya
                            </Link>
                            <Button variant="ghost" size="icon" className="hidden sm:flex">
                                <Heart className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hidden sm:flex">
                                <ShoppingCart className="h-5 w-5" />
                            </Button>
                            <div className="relative">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="h-8 w-8 rounded-full bg-purple-700 text-white hover:bg-purple-800"
                                        >
                                            {userInitials}
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-56">
                                        <DropdownMenuItem>
                                            <div className="flex flex-col">
                                                <span className="font-medium">Januar Samjid</span>
                                                <span className="text-sm text-gray-500">januar@example.com</span>
                                            </div>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>Profil Saya</DropdownMenuItem>
                                        <DropdownMenuItem>Try Out Saya</DropdownMenuItem>
                                        <DropdownMenuItem>Analisis Performa</DropdownMenuItem>
                                        <DropdownMenuItem>Wishlist</DropdownMenuItem>
                                        <DropdownMenuItem>Pengaturan</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                                            Keluar
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-purple-600 text-[10px] font-bold text-white flex items-center justify-center">
                                    2
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button
                                variant="ghost"
                                className="hidden sm:inline-flex"
                                onClick={() => setIsLoggedIn(true)}
                            >
                                Login
                            </Button>
                            <Button className="hidden sm:inline-flex">
                                Daftar
                            </Button>
                        </>
                    )}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Globe className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Bahasa Indonesia</DropdownMenuItem>
                            <DropdownMenuItem>English</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <MobileSidebar
                isOpen={isMobileSidebarOpen}
                onClose={() => setIsMobileSidebarOpen(false)}
            />
        </header>
    )
}

