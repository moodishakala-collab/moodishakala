import React from "react";
import { motion } from "motion/react";
import {
    FaShoppingBag,
    FaTshirt,
} from "react-icons/fa";
import {
    GiClothes,
    GiAmpleDress,
    GiBallerinaShoes,
} from "react-icons/gi";

const Herosection = () => {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">

            {/* =====================================================
                BACKGROUND VIDEO
            ====================================================== */}

            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                "
            >
                <source
                    src="/hero-video.mp4"
                    type="video/mp4"
                />

                Your browser does not support the video tag.
            </video>

            {/* =====================================================
                DARK OVERLAY
            ====================================================== */}

            <div
                className="
                    absolute
                    inset-0
                    bg-black/60
                "
            />

            {/* Optional gradient for better text visibility */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-black/40
                    via-black/30
                    to-black/70
                "
            />

            {/* =====================================================
                HERO CONTENT
            ====================================================== */}

            <div
                className="
                    relative
                    z-10
                    flex
                    min-h-screen
                    flex-col
                    items-center
                    justify-center
                    px-4
                    text-center
                "
            >

                {/* =================================================
                    BRAND
                ================================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-white"
                >
                    <h1
                        className="
                            text-5xl
                            font-black
                            tracking-tight
                            sm:text-6xl
                            md:text-7xl
                            lg:text-8xl
                        "
                    >
                        Bharat{" "}

                        <span className="text-orange-500">
                            Trend
                        </span>
                    </h1>
                </motion.div>

                {/* =================================================
                    TAGLINE
                ================================================= */}

                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.25,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        mt-5
                        text-2xl
                        font-semibold
                        tracking-wide
                        text-white
                        sm:text-3xl
                        md:text-4xl
                    "
                >
                    Wear Your Style.
                </motion.h2>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <motion.p
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.45,
                        duration: 0.7,
                    }}
                    className="
                        mt-4
                        max-w-xl
                        text-sm
                        font-medium
                        leading-7
                        text-white/80
                        sm:text-base
                        md:text-lg
                    "
                >
                    Discover fashion that speaks for you.
                    <br />
                    Timeless style, modern trends, made for every you.
                </motion.p>

                {/* =================================================
                    FASHION ICONS
                ================================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.6,
                        duration: 0.6,
                    }}
                    className="
                        mt-8
                        flex
                        items-center
                        justify-center
                        gap-5
                        text-white
                        sm:gap-7
                    "
                >
                    <motion.div
                        whileHover={{
                            y: -5,
                            scale: 1.1,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                    >
                        <FaShoppingBag size={30} />
                    </motion.div>

                    <motion.div
                        whileHover={{
                            y: -5,
                            scale: 1.1,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                    >
                        <FaTshirt size={30} />
                    </motion.div>

                    <motion.div
                        whileHover={{
                            y: -5,
                            scale: 1.1,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                    >
                        <GiClothes size={30} />
                    </motion.div>

                    <motion.div
                        whileHover={{
                            y: -5,
                            scale: 1.1,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                    >
                        <GiAmpleDress size={30} />
                    </motion.div>

                    <motion.div
                        whileHover={{
                            y: -5,
                            scale: 1.1,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                    >
                        <GiBallerinaShoes size={30} />
                    </motion.div>
                </motion.div>

                {/* =================================================
                    CTA
                ================================================= */}

                <motion.button
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.75,
                        duration: 0.6,
                    }}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#f97316",
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                    className="
                        mt-12
                        flex
                        cursor-pointer
                        items-center
                        gap-2
                        rounded-full
                        bg-white
                        px-10
                        py-4
                        font-semibold
                        text-black
                        shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                        transition-colors
                        duration-300
                    "
                >
                    Explore Now

                    <span className="text-lg">
                        →
                    </span>
                </motion.button>

            </div>

            {/* =====================================================
                BOTTOM FADE
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-32
                    bg-gradient-to-t
                    from-black/50
                    to-transparent
                "
            />

        </section>
    );
};

export default Herosection;