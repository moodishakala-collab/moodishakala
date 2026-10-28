import { motion } from "motion/react";
import { Sparkles, ArrowUpRight } from "lucide-react";

import craft from "../assets/crafts/craft.png";
import craft1 from "../assets/crafts/craft1.png";
import craft2 from "../assets/crafts/craft2.png";
import craft3 from "../assets/crafts/craft3.png";
import craft4 from "../assets/crafts/craft4.png";
import craft5 from "../assets/crafts/craft5.png";
import craft6 from "../assets/crafts/craft6.png";
import craft7 from "../assets/crafts/craft7.png";
import craft8 from "../assets/crafts/craft8.png";
import craft9 from "../assets/crafts/craft9.png";
import craft10 from "../assets/crafts/craft10.png";
import craft18 from "../assets/crafts/craft18.png";
import craft11 from "../assets/crafts/craft11.png";
import craft12 from "../assets/crafts/craft12.png";
import craft13 from "../assets/crafts/craft13.png";
import craft14 from "../assets/crafts/craft14.png";
import craft15 from "../assets/crafts/craft15.png";
import craft16 from "../assets/crafts/craft16.png";
import craft17 from "../assets/crafts/craft17.png";
import craft19 from "../assets/crafts/craft19.png";
import craft20 from "../assets/crafts/craft20.png";
import craft21 from "../assets/crafts/craft21.png";

import image1 from "../assets/crafts/image1.png";
import image2 from "../assets/crafts/image2.png";
import image3 from "../assets/crafts/image3.png";
import image4 from "../assets/crafts/image4.png";
import image5 from "../assets/crafts/image5.png";
import image6 from "../assets/crafts/image6.png";
import image7 from "../assets/crafts/image7.png";
import image8 from "../assets/crafts/image8.png";
import image9 from "../assets/crafts/image9.png";
import image10 from "../assets/crafts/image10.png";
import image11 from "../assets/crafts/image11.png";
import image12 from "../assets/crafts/image12.png";
import image13 from "../assets/crafts/image13.png";
import image14 from "../assets/crafts/image14.png";
import image15 from "../assets/crafts/image15.png";
import image16 from "../assets/crafts/image16.png";
import image17 from "../assets/crafts/image17.png";
import image18 from "../assets/crafts/image18.png";
import image19 from "../assets/crafts/image19.png";
import image20 from "../assets/crafts/image20.png";
import image21 from "../assets/crafts/image21.png";
import image22 from "../assets/crafts/image22.png";
import image23 from "../assets/crafts/image23.png";
import image24 from "../assets/crafts/image24.png";
import image25 from "../assets/crafts/image25.png";
import image26 from "../assets/crafts/image26.png";
import image27 from "../assets/crafts/image27.png";
import image28 from "../assets/crafts/image28.png";
import image29 from "../assets/crafts/image29.png";
import image30 from "../assets/crafts/image30.png";

import Embrio from "../assets/crafts/Embrio.png";
import Embrio1 from "../assets/crafts/Embrio1.png";
import Embrio2 from "../assets/crafts/Embrio2.png";
import Embrio3 from "../assets/crafts/Embrio3.png";
import Embrio4 from "../assets/crafts/Embrio4.png";
import Embrio5 from "../assets/crafts/Embrio5.png";


const CRAFTS = [
    {
        title: "Mandala Art",

        subtitle: "Sacred Patterns & Detailed Designs",

        description:
            "Mandala art brings together symmetry, intricate patterns and meaningful details. Each composition is created with patience and precision, transforming traditional artistic elements into a visually balanced handmade artwork.",

        images: [
            craft,
            craft2,
            craft4,
            craft6,
            craft17,
            craft19,
            craft21,
            image1,
            image3,
            image21,
            image22,
            image25,
            image26,
            image27,
            image28,
            image30,
        ],

        tag: "Intricate Art",
    },

    {
        title: "Resin Art",

        subtitle: "Modern Handmade Creations",

        description:
            "Resin art combines flowing textures, layered colors and contemporary creativity. Every piece is individually crafted, creating unique patterns and finishes that make each artwork different from the next.",

        images: [
            image6,
            image7,
            image8,
            image9,
            image10,
        ],

        tag: "Contemporary Art",
    },

    {
        title: "Painting",

        subtitle: "Traditional & Contemporary Expressions",

        description:
            "Painting captures ideas, emotions and cultural stories through color and composition. From traditional influences to contemporary expressions, each artwork reflects the creativity and individuality of the artist.",

        images: [
            craft1,
            image2,
            image4,
            image5,
            image23,
            image24,
        ],

        tag: "Painted Stories",
    },

    {
        title: "Photo Frames",

        subtitle: "Art That Preserves Memories",

        description:
            "Photo frames transform meaningful memories into beautifully presented pieces. Designed with creativity and attention to detail, each frame adds an artistic touch while giving special moments a lasting place.",

        images: [
            image29,
            image20,
            image19,
            image18,
            image17,
            image16,
            image15,
            image14,
            image13,
            image12,
            image11,
            craft3,
        ],

        tag: "Decorative Art",
    },

    {
        title: "Customised Arts",

        subtitle: "Personalised Art Made For You",

        description:
            "Customised art turns personal ideas, memories and inspirations into unique handmade creations. Each piece can be shaped around an individual story, making the artwork meaningful and personal.",

        images: [
            craft5,
            craft7,
            craft8,
            craft9,
            craft10,
            craft11,
            craft12,
            craft13,
            craft14,
            craft15,
            craft16,
            craft18,
            craft20,
        ],

        tag: "Made Personal",
    },

    {
        title: "Embroidery",

        subtitle: "Thread, Texture & Handmade Detail",

        description:
            "Embroidery celebrates the beauty of handcrafted textile work through carefully placed threads, patterns and colors. Every design reflects patience, creativity and the traditional value of handmade craftsmanship.",

        images: [
            Embrio,
            Embrio1,
            Embrio2,
            Embrio3,
            Embrio4,
            Embrio5,
        ],

        tag: "Textile Art",
    },
];


function OurCrafts() {
    return (
        <div className="w-full overflow-hidden bg-white">

            {/* =====================================================
                PAGE HEADER
            ===================================================== */}

            <section className="relative px-6 pt-10 pb-16 sm:px-8 sm:pt-18 lg:px-12">

                {/* Background Decoration */}

                <div className="pointer-events-none absolute right-[-120px] top-10 h-72 w-72 rounded-full border border-orange-500/10" />

                <div className="pointer-events-none absolute right-[-60px] top-24 h-52 w-52 rounded-full border border-orange-500/10" />

                <div className="mx-auto max-w-7xl">

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
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        {/* Small Label */}

                        <div className="mb-5 flex items-center gap-2">

                            <motion.div
                                initial={{
                                    width: 0,
                                }}
                                animate={{
                                    width: 32,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.2,
                                }}
                                className="h-px bg-zinc-900"
                            />

                          

                        </div>


                        {/* Main Heading */}

                        <h1 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl mt-14">

                            The Art of{" "}

                            <span className="relative inline-block">

                                Odisha

                                <motion.div
                                    initial={{
                                        scaleX: 0,
                                    }}
                                    animate={{
                                        scaleX: 1,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.45,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="absolute -bottom-2 left-0 right-0 h-1 origin-left bg-orange-500"
                                />

                            </span>

                        </h1>


                        {/* Description */}

                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.3,
                            }}
                            className="mt-7 max-w-2xl text-sm font-medium leading-relaxed text-zinc-400 sm:text-base"
                        >
                            Explore a collection of handmade expressions,
                            traditional techniques and contemporary creations
                            that celebrate the creativity, imagination and
                            craftsmanship of Odisha.
                        </motion.p>

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
                CRAFT COLLECTION
            ===================================================== */}

            <section className="px-6 pb-14 sm:px-8 lg:px-12">

                <div className="mx-auto max-w-7xl">

                    {CRAFTS.map((craft, i) => (

                        <motion.section
                            key={craft.title}

                            initial={{
                                opacity: 0,
                                y: 45,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            viewport={{
                                once: true,
                                amount: 0.08,
                            }}

                            transition={{
                                duration: 0.75,
                                ease: [0.22, 1, 0.36, 1],
                            }}

                            className="mb-18 last:mb-0 sm:mb-6"
                        >

                            {/* =================================================
                                CRAFT HEADING
                            ================================================= */}

                            <div className="mb-8 sm:mb-10">

                                <div className="mb-2 flex items-center gap-2">

                                    <motion.div
                                        initial={{
                                            width: 0,
                                        }}
                                        whileInView={{
                                            width: 32,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                        }}
                                        className="h-px bg-orange-500"
                                    />

                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                                        {craft.subtitle}
                                    </span>

                                </div>


                                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                                    {/* Title */}

                                    <div>

                                        <motion.h2
                                            initial={{
                                                opacity: 0,
                                                x: -20,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            transition={{
                                                duration: 0.65,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="text-4xl font-black leading-none tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl"
                                        >
                                            {craft.title}
                                        </motion.h2>


                                        {/* Tag */}

                                        <div className="mt-5 flex items-center gap-3">

                                            <div className="h-px w-12 bg-zinc-900" />

                                            <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />

                                            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-zinc-300">
                                                {craft.tag}
                                            </span>

                                        </div>

                                    </div>


                                    {/* Description */}

                                    <motion.p
                                        initial={{
                                            opacity: 0,
                                            y: 15,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            duration: 0.7,
                                            delay: 0.1,
                                        }}
                                        className="max-w-xl text-sm font-medium leading-7 text-zinc-400 sm:text-base lg:text-right"
                                    >
                                        {craft.description}
                                    </motion.p>

                                </div>

                            </div>


                            {/* =================================================
                                PHOTO GRID

                                IMPORTANT:
                                Every image gets the SAME SIZE.
                                object-contain keeps the COMPLETE PHOTO visible.
                            ================================================= */}

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">

                                {craft.images.map((image, imageIndex) => (

                                    <motion.div
                                        key={imageIndex}

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
                                            amount: 0.05,
                                        }}

                                        transition={{
                                            duration: 0.55,
                                            delay: Math.min(imageIndex * 0.045, 0.45),
                                            ease: [0.22, 1, 0.36, 1],
                                        }}

                                        whileHover={{
                                            y: -4,
                                        }}

                                        className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 p-2 transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)] sm:p-3"
                                    >

                                        {/* Image Area */}

                                        <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-white">

                                            {/* Soft Background Decoration */}

                                            <div className="pointer-events-none absolute left-3 top-3 h-8 w-8 rounded-full border border-orange-500/10 transition-all duration-500 group-hover:scale-125" />

                                            <div className="pointer-events-none absolute bottom-3 right-3 h-12 w-12 rounded-full border border-zinc-200/70 transition-all duration-500 group-hover:scale-110" />


                                            {/* COMPLETE IMAGE */}

                                            <img
                                                src={image}
                                                alt={`${craft.title} ${imageIndex + 1}`}
                                                className="relative z-10 h-full w-full object-contain p-3 transition-transform duration-700 ease-out sm:p-5"
                                            />


                                            {/* Top Number */}

                                            <div className="absolute left-3 top-3 z-20">

                                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-[8px] font-black text-zinc-700 shadow-sm backdrop-blur-sm">

                                                    {String(imageIndex + 1).padStart(2, "0")}

                                                </span>

                                            </div>


                                            {/* Bottom Hover Overlay */}

                                            <div className="absolute inset-x-0 bottom-0 z-20 translate-y-3 bg-gradient-to-t from-black/65 via-black/10 to-transparent px-4 pb-4 pt-12 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                                                <div className="flex items-center justify-between">

                                                    <span className="text-[8px] font-black uppercase tracking-[0.15em] text-white">

                                                        {craft.title}

                                                    </span>

                                                    <ArrowUpRight
                                                        size={14}
                                                        className="text-white"
                                                    />

                                                </div>

                                            </div>

                                        </div>

                                    </motion.div>

                                ))}

                            </div>


                            {/* =================================================
                                SECTION FOOTER
                            ================================================= */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: 1,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.2,
                                }}
                                className="mt-6 flex items-center justify-between"
                            >

                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-300">

                                    {String(i + 1).padStart(2, "0")} /{" "}

                                    {String(CRAFTS.length).padStart(2, "0")}

                                </span>


                                <div className="flex items-center gap-2">

                                    <Sparkles
                                        size={11}
                                        className="text-orange-500"
                                    />

                                    <span className="text-[9px] font-black uppercase tracking-[0.15em] text-zinc-300">

                                        Mo Odisha Kala

                                    </span>

                                </div>

                            </motion.div>


                            {/* Section Divider */}

                            {i !== CRAFTS.length - 1 && (

                                <motion.div
                                    initial={{
                                        scaleX: 0,
                                    }}
                                    whileInView={{
                                        scaleX: 1,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.15,
                                    }}
                                    className="mt-16 h-px origin-left bg-gradient-to-r from-zinc-200 via-zinc-100 to-transparent sm:mt-15"
                                />

                            )}

                        </motion.section>

                    ))}

                </div>

            </section>


            {/* =====================================================
                BOTTOM CTA
            ===================================================== */}

            <section className="px-6 pb-20 sm:px-8 lg:px-12">

                <div className="mx-auto max-w-7xl">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 35,
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
                            duration: 0.75,
                            ease: [0.22, 1, 0.36, 1],
                        }}

                        className="relative overflow-hidden rounded-[2rem] bg-zinc-950 px-7 py-12 sm:px-12 sm:py-16"
                    >

                        {/* Decorative Circles */}

                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10"
                        />

                        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full border border-orange-500/10" />


                        <div className="relative z-10 max-w-2xl">

                            {/* Small Label */}

                            <div className="mb-5 flex items-center gap-2">

                                <div className="h-px w-8 bg-orange-500" />

                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                                    Preserve • Create • Celebrate
                                </span>

                            </div>


                            {/* CTA Heading */}

                            <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">

                                Art that connects

                                <span className="text-orange-500">
                                    {" "}tradition & creativity.
                                </span>

                            </h2>


                            {/* CTA Description */}

                            <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-500">

                                Discover handmade expressions created with
                                imagination, patience and craftsmanship —
                                celebrating the artistic spirit of Odisha.

                            </p>

                        </div>

                    </motion.div>

                </div>

            </section>

        </div>
    );
}

export default OurCrafts;