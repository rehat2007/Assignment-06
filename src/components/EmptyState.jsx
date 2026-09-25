import Link from 'next/link'

const EmptyState = () => {
    return (
        <section className="w-full px-2 py-6 sm:px-6 md:px-3">
            <div
                className="
                    flex
                    min-h-50
                    w-full
                    items-center
                    justify-center
                    border
                    border-dotted
                    rounded-lg
                    border-[#3b4042]
                    bg-[#0F1115]
                    px-5
                    py-10
                    sm:min-h-55
                    sm:px-8
                    md:min-h-60
                "
            >
                <div className="flex flex-col items-center text-center">
                    
                    {/* Heading */}
                    <h2
                        className="
                            text-[13px]
                            font-extrabold
                            tracking-[0.04em]
                            text-white
                            sm:text-xl
                        "
                    >
                        NOTHING HERE YET
                    </h2>

                    {/* Description */}
                    <p
                        className="
                            mt-1
                            max-w-70
                            text-[9px]
                            font-medium
                            leading-relaxed
                            text-[#73777F]
                            sm:max-w-none
                            sm:text-[13px]
                        "
                    >
                        Browse the library and add a lift to get today moving.
                    </p>

                    {/* Button */}
                    <button
                        className="
                            mt-4
                            rounded-full
                            bg-[#B6FF00]
                            px-5
                            py-2
                            text-[9px]
                            font-bold
                            text-[#10130B]
                            shadow-[0_0_18px_rgba(182,255,0,0.25)]
                            transition-all
                            duration-200
                            hover:scale-105
                            hover:bg-[#C2FF33]
                            hover:shadow-[0_0_22px_rgba(182,255,0,0.4)]
                            active:scale-95
                            sm:px-6
                            sm:py-3
                            sm:text-[13px]
                        "
                    >
                        <Link href={'/'}>Go to workouts</Link>
                    </button>

                </div>
            </div>
        </section>
    );
};

export default EmptyState