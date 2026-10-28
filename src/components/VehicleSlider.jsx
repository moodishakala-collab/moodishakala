import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "motion/react";

import mandala from "../assets/home/mandala.jpeg";
import resin from "../assets/home/resin.jpeg";
import frame from "../assets/home/frame.png";
import Embroidery from "../assets/home/Embroidery.png";
import painting from "../assets/home/painting.png";
import craft7 from "../assets/crafts/craft7.png";


const CRAFT_CATEGORIES = [
    {
        title: "Mandala Art",
        desc: "Intricate hand-drawn patterns created with patience, creativity and beautiful geometric details.",
        tag: "Handcrafted",
        image: mandala,
    },
    {
        title: "Resin Art",
        desc: "Beautiful handcrafted creations made with resin, colors and artistic elements for a unique finish.",
        tag: "Creative",
        image: resin,
    },
    {
        title: "Paintings",
        desc: "Original handmade paintings that bring imagination, emotion and artistic expression to life.",
        tag: "Artwork",
        image: painting,
    },
    {
        title: "Photo Frames",
        desc: "Personalised photo frames designed to turn your favourite memories into beautiful keepsakes.",
        tag: "Personalised",
        image: frame,
    },
    {
        title: "Customised Items",
        desc: "Unique personalised handmade products created specially to match your ideas, occasions and memories.",
        tag: "Customised",
        image: craft7,
    },
    {
        title: "Embroidery",
        desc: "Detailed handmade embroidery crafted with colourful threads, creative patterns and delicate stitching.",
        tag: "Handcrafted",
        image: Embroidery,
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
        <div className="w-full bg-white py-10 px-8 overflow-hidden">
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
                    className="flex items-end justify-between mb-4"
                >
                    <div>

                        <div className="flex items-center gap-2 mb-3">
                            <div className="h-px w-8 bg-zinc-900" />

                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                                Our Crafts
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 leading-none">
                            Discover Our <span className="relative inline-block">Crafts

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
                            Explore beautiful handmade creations crafted with creativity, care and a personal touch.
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
                        className="flex gap-5 pt-10 overflow-x-auto scroll-smooth pb-4 px-1"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >

                        {CRAFT_CATEGORIES.map((c, i) => {

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
                                    className="group relative w-80 shrink-0 cursor-pointer border border-orange-300 rounded-3xl overflow-hidden"
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
                                        className="relative rounded-3xl p-6 sm:p-7 overflow-hidden h-full min-h-[220px]"
                                        style={{
                                            backgroundImage: `url(${c.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    >

                                        {/* Background Overlay */}
                                        <motion.div
                                            animate={{
                                                backgroundColor: isHovered
                                                    ? "rgba(0,0,0,0.72)"
                                                    : "rgba(0,0,0,0.45)",
                                            }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                            className="absolute inset-0 z-0"
                                        />

                                        {/* Category Tag */}
                                        <motion.div
                                            animate={{
                                                backgroundColor: isHovered
                                                    ? "rgba(255,255,255,0.12)"
                                                    : "rgba(255,255,255,0.9)",

                                                color: isHovered
                                                    ? "#ffffff"
                                                    : "#71717a",

                                                borderColor: isHovered
                                                    ? "rgba(255,255,255,0.15)"
                                                    : "rgba(255,255,255,0.8)",
                                            }}
                                            className="relative z-10 inline-flex items-center gap-1.5 border text-[9px] font-black uppercase tracking-[0.18em] px-2.5 py-1.5 rounded-full mb-5 transition-colors"
                                        >

                                            <Sparkles size={8} />

                                            {c.tag}

                                        </motion.div>

                                        {/* Title */}
                                        <motion.h3
                                            animate={{
                                                color: "#ffffff",
                                            }}
                                            transition={{
                                                duration: 0.2,
                                            }}
                                            className="relative z-10 text-lg font-black tracking-tight leading-none mt-15 mb-2"
                                        >
                                            {c.title}
                                        </motion.h3>

                                        {/* Description */}
                                        <motion.p
                                            animate={{
                                                color: "rgba(255,255,255,0.75)",
                                            }}
                                            transition={{
                                                duration: 0.2,
                                            }}
                                            className="relative z-10 text-xs font-medium leading-relaxed"
                                        >
                                            {c.desc}
                                        </motion.p>

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
                            label: "Craft Categories",
                        },
                        {
                            num: "100+",
                            label: "Handmade Designs",
                        },
                        {
                            num: "1000+",
                            label: "Custom Creations",
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