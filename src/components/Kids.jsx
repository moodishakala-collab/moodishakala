import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    ArrowRight,
    ChevronRight,
    Star,
    X,
} from "lucide-react";

const categories = [
    {
        name: "Casual Tshirt",
        image: "/kids/Casual Tshirt.png",
    },
    {
        name: "Denim Jeans",
        image: "/kids/Denim Jeans.png",
    },
    {
        name: "Frock Dress",
        image: "/kids/Frock Dress.png",
    },
    {
        name: "Hoodie",
        image: "/kids/Hoodie.png",
    },
    {
        name: "Joggers",
        image: "/kids/Joggers.png",
    },
    {
        name: "Kids Co-Ord Set",
        image: "/kids/Kids Co-Ord Set.png",
    },
    {
        name: "Polo Tshirt",
        image: "/kids/Polo tshirt.png",
    },
    {
        name: "Shorts",
        image: "/kids/Shorts.png",
    },
];

const Kids = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <main className="min-h-screen bg-white text-black">

            {/* =====================================================
                HERO SECTION
            ====================================================== */}

            <section className="relative overflow-hidden bg-black text-white">

                {/* Decorative Circles */}

                <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />

                <div className="pointer-events-none absolute -bottom-52 -left-40 h-[500px] w-[500px] rounded-full border border-white/10" />

                <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">

                    <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

                        {/* LEFT CONTENT */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 35,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >

                            {/* Label */}

                            <div className="mb-7 flex items-center gap-3">

                                <span className="h-px w-10 bg-white/50" />

                                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                                    New Arrivals
                                </span>

                            </div>


                            {/* Heading */}

                            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl xl:text-[88px]">

                                Dress Them in

                                <span className="block text-orange-500">
                                    Joy & Comfort
                                </span>

                            </h1>


                            {/* Description */}

                            <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                                Discover adorable kids' fashion crafted for
                                every little adventure. From playful casuals
                                to charming party wear, let them shine with
                                style and comfort.
                            </p>


                            {/* Playful Comfort */}

                            <div className="mt-7 flex items-start gap-3">

                                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">

                                    <Star
                                        size={15}
                                        fill="currentColor"
                                    />

                                </div>

                                <div>

                                    <p className="text-sm font-semibold">
                                        Playful Comfort
                                    </p>

                                    <p className="mt-1 max-w-md text-xs leading-5 text-white/40">
                                        Soft, safe, and durable fabrics
                                        designed for every little explorer
                                        and dreamer.
                                    </p>

                                </div>

                            </div>


                            {/* CTA */}

                            <div className="mt-9 flex flex-wrap items-center gap-4">

                                <motion.button
                                    whileHover={{
                                        scale: 1.03,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    onClick={() => {
                                        document
                                            .getElementById("kids-categories")
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                    }}
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-3
                                        rounded-full
                                        bg-white
                                        px-6
                                        py-3.5
                                        text-sm
                                        font-semibold
                                        text-black
                                    "
                                >

                                    Explore Collection

                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">

                                        <ArrowRight size={14} />

                                    </span>

                                </motion.button>

                            </div>


                            {/* Stats */}

                            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-7">

                                {/* Styles */}

                                <div>

                                    <p className="text-2xl font-semibold">
                                        600+
                                    </p>

                                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                                        Styles
                                    </p>

                                </div>


                                <div className="h-10 w-px bg-white/10" />


                                {/* Rating */}

                                <div className="flex items-center gap-2">

                                    <Star
                                        size={17}
                                        fill="currentColor"
                                    />

                                    <div>

                                        <p className="text-2xl font-semibold">
                                            4.8
                                        </p>

                                        <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                                            Rating
                                        </p>

                                    </div>

                                </div>


                                <div className="h-10 w-px bg-white/10" />


                                {/* Offer */}

                                <div>

                                    <p className="text-sm font-semibold">
                                        Kids' Special
                                    </p>

                                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                                        Buy 2 Get 1 Free
                                    </p>

                                </div>

                            </div>

                        </motion.div>


                        {/* =================================================
                            HERO IMAGE
                        ================================================== */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.94,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.9,
                                delay: 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative"
                        >

                            <div
                                className="
                                    group
                                    relative
                                    aspect-4/5
                                    overflow-hidden
                                    rounded-4xl
                                    border
                                    border-white/10
                                    bg-[#171717]
                                "
                            >

                                <motion.img
                                    src="/kids/kids.jpg"
                                    alt="Kids Collection"
                                    whileHover={{
                                        scale: 1.04,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        object-center
                                    "
                                />


                                {/* Floating Info */}

                                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl">

                                    <div>

                                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                                            Kids Collection
                                        </p>

                                        <p className="mt-1 text-sm font-medium">
                                            Style made for little explorers
                                        </p>

                                    </div>


                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">

                                        <ArrowRight size={16} />

                                    </div>

                                </div>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                PLAYFUL COMFORT
            ====================================================== */}

            <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">

                <div className="mx-auto max-w-7xl">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
                    >

                        {/* Label */}

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-px w-8 bg-black" />

                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/50">
                                    Playful Comfort
                                </span>

                            </div>

                        </div>


                        {/* Content */}

                        <div>

                            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                                Soft, safe, and durable fabrics designed
                                for every little explorer and dreamer.
                            </h2>

                        </div>

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
                SHOP BY CATEGORY
            ====================================================== */}

            <section
                id="kids-categories"
                className="bg-[#f5f5f3] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >

                <div className="mx-auto max-w-7xl">

                    {/* HEADER */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
                    >

                        <div>

                            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                                Shop By Category
                            </p>

                            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">

                                Little Ones

                                <span className="block text-orange-500">
                                    Big Style
                                </span>

                            </h2>

                        </div>


                        <p className="max-w-md text-sm leading-6 text-black/50">
                            Explore our curated collection for every little
                            adventurer
                        </p>

                    </motion.div>


                    {/* CATEGORY GRID */}

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                        {categories.map((category, index) => (

                            <motion.div
                                key={category.name}
                                onClick={() =>
                                    setSelectedCategory(category)
                                }
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.1,
                                }}
                                transition={{
                                    delay: index * 0.04,
                                    duration: 0.5,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={{
                                    y: -5,
                                }}
                                className="
                                    group
                                    relative
                                    cursor-pointer
                                    overflow-hidden
                                    rounded-[22px]
                                    border
                                    border-black/10
                                    bg-white
                                    p-5
                                    transition-shadow
                                    duration-300
                                    hover:shadow-xl
                                "
                            >

                                {/* IMAGE */}

                                <div
                                    className="
                                        relative
                                        mb-5
                                        aspect-[4/3]
                                        overflow-hidden
                                        rounded-[17px]
                                        bg-[#eeeeec]
                                    "
                                >

                                    <motion.img
                                        src={category.image}
                                        alt={category.name}
                                        loading="lazy"
                                        whileHover={{
                                            scale: 1.08,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="
                                            absolute
                                            inset-0
                                            h-full
                                            w-full
                                            scale-[1.08]
                                            object-cover
                                            object-center
                                        "
                                    />


                                    {/* NUMBER */}

                                    <span
                                        className="
                                            absolute
                                            left-3
                                            top-3
                                            z-10
                                            flex
                                            h-8
                                            w-8
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-orange-500
                                            text-[10px]
                                            font-bold
                                            text-white
                                            shadow-sm
                                        "
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                </div>


                                {/* CARD CONTENT */}

                                <div className="flex items-center justify-between gap-3">

                                    <div className="min-w-0">

                                        <p className="text-sm font-semibold leading-5 text-black">
                                            {category.name}
                                        </p>

                                        <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-black/35">
                                            Explore collection
                                        </p>

                                    </div>


                                    <motion.div
                                        whileHover={{
                                            x: 3,
                                        }}
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-black
                                            text-white
                                        "
                                    >

                                        <ChevronRight size={16} />

                                    </motion.div>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                FINAL CTA
            ====================================================== */}

            <section className="bg-black px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">

                <div className="mx-auto max-w-7xl">

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.97,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="
                            relative
                            overflow-hidden
                            rounded-[32px]
                            border
                            border-white/10
                            bg-[#111]
                            px-6
                            py-14
                            text-center
                            sm:px-10
                            lg:px-20
                            lg:py-20
                        "
                    >

                        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                            Kids Collection
                        </p>


                        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">

                            Big smiles.

                            <span className="block text-white/40">
                                Bigger style.
                            </span>

                        </h2>


                        <motion.button
                            whileHover={{
                                scale: 1.03,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            onClick={() => {
                                document
                                    .getElementById("kids-categories")
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                            }}
                            className="
                                mt-8
                                inline-flex
                                items-center
                                gap-3
                                rounded-full
                                bg-white
                                px-7
                                py-3.5
                                text-sm
                                font-semibold
                                text-black
                            "
                        >

                            Explore Kids Wear

                            <ArrowRight size={16} />

                        </motion.button>

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
                CATEGORY MODAL
            ====================================================== */}

            <AnimatePresence>

                {selectedCategory && (

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        onClick={() => setSelectedCategory(null)}
                        className="
                            fixed
                            inset-0
                            z-[9999]
                            flex
                            items-center
                            justify-center
                            bg-black/70
                            px-4
                            py-6
                            backdrop-blur-md
                        "
                    >

                        {/* MODAL */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.92,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.94,
                                y: 20,
                            }}
                            transition={{
                                duration: 0.45,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className="
                                relative
                                w-full
                                max-w-4xl
                                overflow-hidden
                                rounded-[30px]
                                border
                                border-white/10
                                bg-[#111]
                                shadow-2xl
                            "
                        >

                            {/* CLOSE */}

                            <motion.button
                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    delay: 0.2,
                                }}
                                onClick={() => setSelectedCategory(null)}
                                className="
                                    absolute
                                    right-4
                                    top-4
                                    z-20
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-black/70
                                    text-white
                                    backdrop-blur-md
                                    transition
                                    duration-300
                                    hover:bg-white
                                    hover:text-black
                                "
                                aria-label="Close"
                            >

                                <X size={19} />

                            </motion.button>


                            {/* MODAL IMAGE */}

                            <div
                                className="
                                    relative
                                    flex
                                    min-h-[420px]
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    bg-[#eeeeec]
                                    sm:min-h-[560px]
                                "
                            >

                                <motion.img
                                    initial={{
                                        scale: 0.94,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                    }}
                                    transition={{
                                        delay: 0.08,
                                        duration: 0.6,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    src={selectedCategory.image}
                                    alt={selectedCategory.name}
                                    className="
                                        h-full
                                        max-h-[72vh]
                                        w-full
                                        object-contain
                                        object-center
                                        p-6
                                        sm:p-10
                                    "
                                />

                            </div>


                            {/* MODAL CONTENT */}

                            <div
                                className="
                                    flex
                                    flex-col
                                    gap-5
                                    border-t
                                    border-white/10
                                    bg-[#111]
                                    p-6
                                    sm:flex-row
                                    sm:items-center
                                    sm:justify-between
                                    sm:px-8
                                    sm:py-7
                                "
                            >

                                <div>

                                    <p
                                        className="
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.25em]
                                            text-orange-500
                                        "
                                    >
                                        Kids Collection
                                    </p>


                                    <h3
                                        className="
                                            mt-1
                                            text-2xl
                                            font-semibold
                                            tracking-tight
                                            text-white
                                            sm:text-3xl
                                        "
                                    >
                                        {selectedCategory.name}
                                    </h3>


                                    <p className="mt-1 text-sm text-white/40">
                                        Explore our latest collection
                                    </p>

                                </div>


                                <motion.button
                                    whileHover={{
                                        scale: 1.03,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    className="
                                        flex
                                        w-full
                                        items-center
                                        justify-center
                                        gap-3
                                        rounded-full
                                        bg-white
                                        px-6
                                        py-3.5
                                        text-sm
                                        font-semibold
                                        text-black
                                        sm:w-auto
                                    "
                                >

                                    Explore Collection

                                    <span
                                        className="
                                            flex
                                            h-7
                                            w-7
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-black
                                            text-white
                                        "
                                    >

                                        <ArrowRight size={14} />

                                    </span>

                                </motion.button>

                            </div>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>

        </main>
    );
};

export default Kids;