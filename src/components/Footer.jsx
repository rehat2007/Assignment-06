import Image from 'next/image'

const Footer = () => {
    return (
        <footer className=" px-4 py-4 border-t border-gray-700 bg-[#090A0D]">
            <div className=" mx-auto flex min-h-12 max-w-7xl items-center justify-between  gap-3 px-3 py-2 max-[400px]:flex-col max-[400px]:justify-center" >
                {/* Logo */}
                <div className="flex items-center gap-1.5">
                    <Image
                        src="/assets/logo.png"
                        width={15}
                        height={15}
                        alt="Picture of the author"
                    />

                    <span className="text-[10px] font-bold tracking-[0.08em] text-white">
                        FTLLOG
                    </span>
                </div>

                {/* Copyright */}
                <p className="text-center text-[7px] tracking-wide text-[#383838] sm:text-[8px]">
                    © 2026 FTLLOG — Work? Library. This hard, long honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;