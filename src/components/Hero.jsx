import React from 'react'
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#0B0C0F] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-112.5 max-w-307.5 items-center overflow-hidden rounded-2xl border border-[#272C34]">

        {/* Content */}
        <div className="w-full px-7 py-12 sm:px-10 md:px-14 lg:w-[60%] lg:py-16">

          {/* Small Label */}
          <p className="mb-6 text-xs font-bold tracking-[0.12em] text-[#C8FF00] sm:text-sm">
            WORKOUT LIBRARY
          </p>

          {/* Heading */}
          <h1 className="max-w-162.5 font-anton text-5xl leading-[0.92] tracking-tight text-[#F5F5F5] sm:text-6xl md:text-7xl lg:text-[68px]">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-132.5 text-base leading-6 text-[#9EA3AD] sm:text-lg sm:leading-7">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Button */}
          <button
            className="mt-7 rounded-md bg-[#C8FF00] px-6 py-3 text-sm font-bold
                       text-black transition-all duration-200
                       hover:bg-[#D5FF33] hover:scale-[1.02]
                       active:scale-[0.98]"
          >
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Workout Image */}
        <div className="relative hidden h-full min-h-112.5 flex-1 lg:block">
          <Image
            src="/assets/banner.png"
            alt="Workout illustration"
            fill
            priority
            className="object-contain object-center p-8 xl:p-12"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero
