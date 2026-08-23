import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    FaShoppingBag,
    FaTshirt,
} from "react-icons/fa";
import {
    GiClothes,
    GiAmpleDress,
    GiBallerinaShoes,
} from "react-icons/gi";

const heroImages = [
    "/c1.jpeg",
    "/c2.jpeg",
    "/c3.jpeg",
    "/c4.jpeg",
    "/c5.jpeg",
];

const Herosection = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) =>
                (prev + 1) % heroImages.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-hidden">

            {/* =====================================================
                BACKGROUND IMAGE CAROUSEL
            ====================================================== */}

            <div className="absolute inset-0">

                <AnimatePresence mode="sync">

                    <motion.div
                        key={currentImage}
                        initial={{
                            opacity: 0,
                            scale: 1.08,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 1.03,
                        }}
                        transition={{
                            opacity: {
                                duration: 1.2,
                                ease: "easeInOut",
                            },
                            scale: {
                                duration: 5.5,
                                ease: "linear",
                            },
                        }}
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("${heroImages[currentImage]}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />

                </AnimatePresence>

            </div>


            {/* =====================================================
                DARK OVERLAY
            ====================================================== */}

            <div
                className="
                    absolute
                    inset-0
                    bg-black/65
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
                ================================================== */}

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
                ================================================== */}

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
                    }}
                    className="
                        mt-5
                        text-2xl
                        font-semibold
                        tracking-wide
                        text-white
                        sm:text-3xl
                    "
                >
                    Wear Your Style.
                </motion.h2>


                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.45,
                        duration: 0.7,
                    }}
                    className="
                        mt-4
                        max-w-xl
                        text-base
                        leading-7
                        text-gray-300
                        sm:text-lg
                    "
                >
                    Discover fashion that speaks for you.
                    <br />
                    Timeless style, modern trends, made for every you.
                </motion.p>


                {/* =================================================
                    FASHION ICONS
                ================================================== */}

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
                        delay: 0.3,
                        duration: 0.6,
                    }}
                    className="
                        mt-8
                        flex
                        gap-8
                        text-white
                    "
                >

                    <FaShoppingBag size={35} />

                    <FaTshirt size={35} />

                    <GiClothes size={35} />

                    <GiAmpleDress size={35} />

                    <GiBallerinaShoes size={35} />

                </motion.div>


                {/* =================================================
                    CTA
                ================================================== */}

                <motion.button
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                    className="
                        mt-12
                        cursor-pointer
                        rounded-full
                        bg-blue-700
                        px-10
                        text-white
                        py-4
                        font-semibold
                        shadow-xl
                        transition-all
                        duration-300
                        hover:bg-orange-500
                    "
                >
                    Explore Now
                </motion.button>


                {/* =================================================
                    CAROUSEL INDICATORS
                ================================================== */}

                <div
                    className="
                        absolute
                        bottom-8
                        left-1/2
                        flex
                        -translate-x-1/2
                        items-center
                        gap-2
                    "
                >

                    {heroImages.map((_, index) => (

                        <button
                            key={index}
                            onClick={() =>
                                setCurrentImage(index)
                            }
                            className={`
                                h-1.5
                                rounded-full
                                transition-all
                                duration-500
                                cursor-pointer

                                ${currentImage === index
                                    ? "w-8 bg-orange-500"
                                    : "w-2 bg-white/50"
                                }
                            `}
                            aria-label={`Go to slide ${index + 1}`}
                        />

                    ))}

                </div>

            </div>

        </div>
    );
};

export default Herosection;