import { motion } from "motion/react";
import { Check } from "lucide-react";

import { storyData } from "../../data/aboutUsData";
import aboutStory from "../../assets/aboutStory.png"
const AboutUsStory = () => {

    const fadeLeft = {
        hidden: {
            opacity: 0,
            x: -70,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const fadeRight = {
        hidden: {
            opacity: 0,
            x: 70,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative overflow-hidden bg-white px-5 py-20 text-black sm:px-8 md:py-15">

            <div className="absolute right-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-black/[0.035] blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

                    {/* IMAGE */}

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={fadeLeft}
                        className="relative"
                    >

                        <div className="relative overflow-hidden rounded-[36px] bg-black">

                            <motion.img
                                src={aboutStory}
                                alt="About Mo Odisha Kala"
                                whileHover={{ scale: 1.04 }}
                                transition={{ duration: 0.7 }}
                                className="h-[500px] w-full object-cover sm:h-[600px]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-black/80 px-5 py-4 text-white backdrop-blur-xl">

                                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                                    {storyData.imageLabel}
                                </p>

                                <p className="mt-1 text-xl font-bold">
                                    {storyData.imageTitle}
                                </p>

                            </div>

                        </div>

                        <div className="absolute -bottom-8 -right-5 hidden h-28 w-28 items-center justify-center rounded-full bg-black text-center text-white shadow-2xl sm:flex">

                            <div>
                                <p className="text-2xl font-black">
                                    Odisha
                                </p>

                                <p className="text-[9px] uppercase tracking-widest text-gray-500">
                                    Heritage
                                </p>
                            </div>

                        </div>

                    </motion.div>

                    {/* CONTENT */}

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={fadeRight}
                    >

                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                            {storyData.smallTitle}
                        </p>

                        <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">
                            {storyData.title}

                            <span className="block text-orange-500">
                                {storyData.highlight}
                            </span>
                        </h2>

                        <div className="mt-8 h-1 w-16 rounded-full bg-black" />

                        <p className="mt-8 text-base leading-8 text-black/60">
                            {storyData.description}
                        </p>

                        <p className="mt-5 text-base font-semibold text-black/80">
                            {storyData.commitmentTitle}
                        </p>

                        <div className="mt-5 space-y-3">

                            {storyData.commitments.map((item, index) => (

                                <motion.div
                                    key={item}
                                    initial={{
                                        opacity: 0,
                                        x: -15,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay: index * 0.06,
                                    }}
                                    className="flex items-start gap-3"
                                >

                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-white">
                                        <Check size={11} />
                                    </span>

                                    <p className="text-sm leading-6 text-black/65">
                                        {item}
                                    </p>

                                </motion.div>

                            ))}

                        </div>

                        <p className="mt-7 text-sm leading-7 text-black/55">
                            {storyData.ending}
                        </p>

                    </motion.div>

                </div>

            </div>

        </section>
    );
};

export default AboutUsStory;