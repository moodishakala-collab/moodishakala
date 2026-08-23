import {
    Shirt,
    Baby,
    Footprints,
    Watch,
    ChevronLeft,
    ChevronRight,
    Sparkles,
} from "lucide-react";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";

const VEHICLE_CATEGORIES = [
    {
        title: "Men's Wear",
        desc: "Casual · Ethnic · Formal",
        Icon: Shirt,
        tag: "Trending",
        image: "/categories/men.png",
    },
    {
        title: "Women's Wear",
        desc: "Ethnic · Western · Fusion",
        Icon: Shirt,
        tag: "Popular",
        image: "/categories/women.png",
    },
    {
        title: "Kids Wear Boys",
        desc: "Casual · Ethnic · Active",
        Icon: Baby,
        tag: "New",
        image: "/categories/boys.png",
    },
    {
        title: "Kids Wear Girls",
        desc: "Ethnic · Western · Party",
        Icon: Baby,
        tag: "Popular",
        image: "/categories/girls.png",
    },
    {
        title: "Footwear",
        desc: "Casual · Sports · Formal",
        Icon: Footprints,
        tag: "Trending",
        image: "/categories/footwear.png",
    },
    {
        title: "Accessories",
        desc: "Bags · Watches · Fashion Accessories",
        Icon: Watch,
        tag: "New",
        image: "/categories/accessories.png",
    },
];

function VehicleSlider() {
    const [hovered, setHovered] = useState(null);
    const sliderRef = useRef(null);

    const scroll = (dir) => {
        if (!sliderRef.current) return;

        sliderRef.current.scrollBy({
            left: dir === "left" ? -300 : 300,
            behavior: "smooth",
        });
    };

    return (
        <div className="w-full bg-white py-20 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-end justify-between mb-10"
                >
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="h-px w-8 bg-zinc-900" />

                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                                Collections
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 leading-none">
                            Shop <br />

                            <span className="relative inline-block">
                                Categories

                                <motion.div
                                    initial={{
                                        scaleX: 0,
                                    }}
                                    whileInView={{
                                        scaleX: 1,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.4,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-zinc-900 origin-left"
                                />
                            </span>
                        </h2>

                        <p className="text-zinc-400 text-sm mt-3 font-medium">
                            Discover the latest trends for everyone
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="hidden sm:flex items-center gap-2">
                        <motion.div
                            whileTap={{
                                scale: 0.88,
                            }}
                            onClick={() => scroll("left")}
                            className="w-11 h-11 rounded-2xl border border-zinc-200 bg-white flex items-center justify-center hover:bg-zinc-900 hover:border-zinc-900 hover:text-white disabled:opacity-25 disabled:hover:bg-white disabled:hover:text-zinc-900 disabled:hover:border-zinc-200 transition-all text-zinc-700 shadow-sm"
                        >
                            <ChevronLeft
                                size={18}
                                strokeWidth={2.5}
                            />
                        </motion.div>

                        <motion.div
                            whileTap={{
                                scale: 0.88,
                            }}
                            onClick={() => scroll("right")}
                            className="w-11 h-11 rounded-2xl border border-zinc-200 bg-white flex items-center justify-center hover:bg-zinc-900 hover:border-zinc-900 hover:text-white disabled:opacity-25 disabled:hover:bg-white disabled:hover:text-zinc-900 disabled:hover:border-zinc-200 transition-all text-zinc-700 shadow-sm"
                        >
                            <ChevronRight
                                size={18}
                                strokeWidth={2.5}
                            />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Categories */}
                <div className="relative">
                    <div
                        ref={sliderRef}
                        className="flex gap-5 pt-20 overflow-x-auto scroll-smooth pb-4 px-1"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {VEHICLE_CATEGORIES.map((c, i) => {
                            const isHovered = hovered === i;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{
                                        opacity: 0,
                                        y: 28,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.1 + i * 0.08,
                                        duration: 0.5,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    onHoverStart={() => setHovered(i)}
                                    onHoverEnd={() => setHovered(null)}
                                    whileHover={{
                                        y: -8,
                                    }}
                                    className="group relative min-w-55 sm:min-w-65 shrink-0 cursor-pointer border border-orange-300 rounded-3xl"
                                >
                                    <motion.div
                                        animate={{
                                            backgroundColor: isHovered
                                                ? "#09090b"
                                                : "#ffffff",

                                            borderColor: isHovered
                                                ? "#09090b"
                                                : "#e4e4e7",

                                            boxShadow: isHovered
                                                ? "0 24px 56px rgba(0,0,0,0.2)"
                                                : "0 2px 16px rgba(0,0,0,0.06)",
                                        }}
                                        transition={{
                                            duration: 0.25,
                                        }}
                                        className="relative rounded-3xl   p-6 sm:p-7 overflow-hidden h-full"
                                    >

                                        {/* Category Tag */}
                                        <motion.div
                                            animate={{
                                                backgroundColor: isHovered
                                                    ? "rgba(255,255,255,0.12)"
                                                    : "#f4f4f5",

                                                color: isHovered
                                                    ? "#ffffff"
                                                    : "#71717a",

                                                borderColor: isHovered
                                                    ? "rgba(255,255,255,0.15)"
                                                    : "#e4e4e7",
                                            }}
                                            className="relative z-10 inline-flex items-center gap-1.5 border text-[9px] font-black uppercase tracking-[0.18em] px-2.5 py-1.5 rounded-full mb-5 transition-colors"
                                        >
                                            <Sparkles size={8} />

                                            {c.tag}
                                        </motion.div>

                                        {/* Icon */}
                                        <motion.div
                                            animate={{
                                                backgroundColor: isHovered
                                                    ? "rgba(255,255,255,0.1)"
                                                    : "#f4f4f5",

                                                borderColor: isHovered
                                                    ? "rgba(255,255,255,0.15)"
                                                    : "#e4e4e7",
                                            }}
                                            className="relative z-10 w-14 h-14 rounded-2xl border flex items-center justify-center mb-5 transition-colors"
                                        >
                                            <motion.div
                                                animate={{
                                                    color: isHovered
                                                        ? "#ffffff"
                                                        : "#3f3f46",
                                                }}
                                                transition={{
                                                    duration: 0.2,
                                                }}
                                            >
                                                <c.Icon
                                                    size={24}
                                                    strokeWidth={1.4}
                                                />
                                            </motion.div>
                                        </motion.div>

                                        {/* Title */}
                                        <motion.h3
                                            animate={{
                                                color: isHovered
                                                    ? "#ffffff"
                                                    : "#09090b",
                                            }}
                                            transition={{
                                                duration: 0.2,
                                            }}
                                            className="relative z-10 text-lg font-black tracking-tight leading-none mb-2"
                                        >
                                            {c.title}
                                        </motion.h3>

                                        {/* Description */}
                                        <motion.p
                                            animate={{
                                                color: isHovered
                                                    ? "rgba(255,255,255,0.5)"
                                                    : "#a1a1aa",
                                            }}
                                            transition={{
                                                duration: 0.2,
                                            }}
                                            className="relative z-10 text-xs font-medium leading-relaxed"
                                        >
                                            {c.desc}
                                        </motion.p>

                                        {/* Product Image */}
                                        <motion.img
                                            src={c.image}
                                            alt={c.title}
                                            initial={{
                                                opacity: 0,
                                                x: 20,
                                                y: 10,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                                y: 0,
                                            }}
                                            animate={{
                                                scale: isHovered ? 1.05 : 1,
                                                x: isHovered ? -3 : 0,
                                            }}
                                            transition={{
                                                duration: 0.35,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="absolute z-[1] right-[-8px] bottom-[-4px] w-[125px] sm:w-[140px] h-[175px] sm:h-[190px] object-contain object-bottom pointer-events-none select-none"
                                        />

                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.7,
                    }}
                    className="flex items-center gap-6 mt-8 pt-6 border-t border-zinc-100"
                >
                    {[
                        {
                            num: "6+",
                            label: "Categories",
                        },
                        {
                            num: "100+",
                            label: "Styles",
                        },
                        {
                            num: "24/7",
                            label: "Shopping",
                        },
                    ].map((d, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3"
                        >
                            <p className="text-zinc-900 text-lg font-black tracking-tight">
                                {d.num}
                            </p>

                            <p className="text-zinc-400 text-xs font-medium">
                                {d.label}
                            </p>
                        </div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
}

export default VehicleSlider;