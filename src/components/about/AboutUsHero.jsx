import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

import { heroData } from "../../data/aboutUsData";
import aboutHero from "../../assets/aboutHero.jpeg"

const AboutUsHero = () => {
    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const stagger = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    return (
        <section className="relative min-h-[78vh] overflow-hidden bg-black">

            {/* BACKGROUND IMAGE */}

            <motion.div
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{
                    duration: 1.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
            >
                <img
                    src={aboutHero}
                    alt="Mo Odisha Kala"
                    className="h-full w-full object-cover object-center"
                />
            </motion.div>

            {/* DARK OVERLAY */}

            <div className="absolute inset-0 bg-black/65" />

            {/* LEFT GRADIENT */}

            <div className="absolute inset-0 bg-linear-to-r from-black/5 via-black/10 to-black/12" />

            {/* BOTTOM GRADIENT */}

            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/10" />

            {/* HERO CONTENT */}

            <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 md:pb-24">

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                    className="w-full"
                >

                    {/* SMALL TITLE */}

                    <motion.div
                        variants={fadeUp}
                        className="mb-7 flex items-center gap-4"
                    >
                        <span className="h-px w-12 bg-white" />

                        <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/60">
                            {heroData.smallTitle}
                        </span>
                    </motion.div>

                    {/* TITLE */}

                    <motion.h1
                        variants={fadeUp}
                        className="max-w-4xl text-3xl font-black leading-[0.9] tracking-[-0.01em] sm:text-4xl md:text-7xl"
                    >
                        {heroData.title}

                        <span className="block text-orange-500">
                            {heroData.highlight}
                        </span>
                    </motion.h1>

                    {/* BOTTOM CONTENT */}

                    <motion.div
                        variants={fadeUp}
                        className="mt-8 flex flex-col gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between"
                    >

                        <p className="max-w-xl text-sm leading-7 text-white sm:text-base">
                            {heroData.description}
                        </p>

                        <div className="flex shrink-0 items-center gap-3">

                            <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                                {heroData.journeyLabel}
                            </span>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white">
                                <ArrowDownRight size={17} />
                            </div>

                        </div>

                    </motion.div>

                </motion.div>

            </div>

            {/* BOTTOM FADE */}

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black to-transparent" />

        </section>
    );
};

export default AboutUsHero;