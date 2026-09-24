import React from 'react'
import Image from 'next/image'

function Nabbar() {
    return (
        <nav className="w-full border-b border-[#1E1E1E] bg-[#0C0D10]">
            <div className="mx-auto flex  h-[82px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">

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
                <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
                    <a
                        href="#"
                        className="rounded-full bg-[#1A2312] px-5 py-2.5 text-sm font-medium text-[#C2F800] transition-colors"
                    >
                        Workouts
                    </a>

                    <a
                        href="#"
                        className="rounded-full px-5 py-2.5 text-sm font-medium text-[#8A909B] transition-colors hover:text-white"
                    >
                        My Plan
                    </a>
                </div>

                {/* Right Section */}
                <div className="hidden items-center gap-7 text-sm md:flex">
                    {/* Plan */}
                    <div className="flex items-center gap-2 text-[#B5B8BF]">
                        <span>Plan</span>

                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-[11px] font-bold text-black">
                            1
                        </span>
                    </div>

                    {/* Saved */}
                    <div className="flex items-center gap-2 text-[#8A909B]">
                        <span>Saved</span>

                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#303238] text-[11px] text-[#B5B8BF]">
                            0
                        </span>
                    </div>
                </div>

                {/* Mobile Menu */}
                <button
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#26272B] text-[#C2F800] md:hidden"
                    aria-label="Open menu"
                >
                    <span className="text-xl">☰</span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex border-t border-[#1E1E1E] px-4 py-3 md:hidden">
                <div className="flex w-full items-center justify-center gap-2">
                    <a
                        href="#"
                        className="rounded-full bg-[#1A2312] px-5 py-2 text-sm font-medium text-[#C2F800]"
                    >
                        Workouts
                    </a>

                    <a
                        href="#"
                        className="rounded-full px-5 py-2 text-sm font-medium text-[#8A909B] transition-colors hover:text-white"
                    >
                        My Plan
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Nabbar