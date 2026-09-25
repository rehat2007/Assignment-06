import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Nabbar() {

    const links = <>
        <p className="rounded-full bg-[#1A2312] px-5 py-2.5 text-sm font-semibold text-[#C2F800] shadow-inner shadow-[#C2F800]/5 transition-all duration-200"><Link href="/">Home</Link></p>
        <p className="rounded-full px-5 py-2.5 text-sm font-medium text-[#8A909B] transition-colors duration-200 hover:bg-[#1A1B1F] hover:text-white"><Link href="/plane">My Plan</Link></p>
    </>

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#1E1E1E] bg-[#0C0D10]/90 backdrop-blur-md">
            <div className="mx-auto flex h-18 max-w-350 items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/assets/logo.png"
                        width={20}
                        height={20}
                        alt="Picture of the author"
                    />
                    <span className="text-[16px] font-bold tracking-wide text-white">
                        FITLOG
                    </span>
                </div>

                {/* Center Navigation */}
                <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full  p-1 md:flex">
                    {/* <a
                        href="#"
                        className="rounded-full bg-[#1A2312] px-5 py-2.5 text-sm font-semibold text-[#C2F800] shadow-inner shadow-[#C2F800]/5 transition-all duration-200"
                    >
                        Workouts
                    </a>

                    <a
                        href="/src/app/my-plane"
                        className="rounded-full px-5 py-2.5 text-sm font-medium text-[#8A909B] transition-colors duration-200 hover:bg-[#1A1B1F] hover:text-white"
                    >
                        My Plan
                    </a> */}
                    {links}

                </div>

                {/* Right Section */}
                <div className="hidden items-center gap-6 text-sm md:flex">
                    {/* Plan */}
                    <div className="flex items-center gap-2 text-[#B5B8BF] transition-colors duration-200 hover:text-white">
                        <span>Plan</span>

                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-[11px] font-bold text-black shadow-sm shadow-[#C2F800]/30">
                            1
                        </span>
                    </div>

                    <span className="h-5 w-px bg-[#242933]" />

                    {/* Saved */}
                    <div className="flex items-center gap-2 text-[#8A909B] transition-colors duration-200 hover:text-white">
                        <span>Saved</span>

                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#303238] text-[11px] text-[#B5B8BF] transition-colors duration-200 group-hover:border-[#C2F800]">
                            0
                        </span>
                    </div>
                </div>

                {/* Mobile Menu */}
                <button
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#26272B] text-[#C2F800] transition-all duration-200 hover:border-[#C2F800]/60 hover:bg-[#151812] active:scale-95 md:hidden"
                    aria-label="Open menu"
                >
                    <span className="text-xl">☰</span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex border-t border-[#1E1E1E] bg-[#0C0D10] px-4 py-3 md:hidden">
                <div className="flex w-full items-center justify-center gap-2">
                    <a
                        href="#"
                        className="rounded-full bg-[#1A2312] px-5 py-2 text-sm font-semibold text-[#C2F800] shadow-inner shadow-[#C2F800]/5"
                    >
                        Workouts
                    </a>

                    <a
                        href="#"
                        className="rounded-full px-5 py-2 text-sm font-medium text-[#8A909B] transition-colors duration-200 hover:text-white"
                    >
                        My Plan
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Nabbar