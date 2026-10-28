import { motion } from "motion/react";
import { Heart } from "lucide-react";

import { philosophyData } from "../../data/aboutUsData";

const Philosophy = () => {

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

    return (
        <section className="bg-black px-5 py-5 sm:px-8 md:py-7">

            <div className="mx-auto max-w-6xl">

                {/* HEADER */}

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                    }}
                    variants={fadeUp}
                    className="max-w-2xl"
                >

                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-600">
                        {philosophyData.smallTitle}
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl md:text-6xl">

                        {philosophyData.title}

                        <span className="text-gray-600">
                            {" "}{philosophyData.highlight}
                        </span>

                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        {philosophyData.description}
                    </p>

                </motion.div>


                {/* BELIEF */}

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                    }}
                    variants={fadeUp}
                    className="mt-5 overflow-hidden rounded-[36px] bg-white p-8 text-black sm:p-12 md:p-16"
                >

                    <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr]">

                        <div>

                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                                {philosophyData.beliefLabel}
                            </p>

                            <h3 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">

                                {philosophyData.beliefTitle}

                                <span className="block text-orange-500">
                                    {philosophyData.beliefHighlight}
                                </span>

                            </h3>

                        </div>


                        <div>

                            <p className="leading-8 text-black/60">
                                {philosophyData.beliefDescription}
                            </p>

                            <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white">

                                <Heart size={15} />

                                {philosophyData.beliefTag}

                            </div>

                        </div>

                    </div>

                </motion.div>


                {/* PHILOSOPHY CARDS */}

                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {philosophyData.cards.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={item.title}
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: index * 0.08,
                                }}
                                whileHover={{
                                    y: -8,
                                }}
                                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
                            >

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black">
                                    <Icon size={21} />
                                </div>

                                <h3 className="mt-7 text-xl font-bold">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-400">
                                    {item.description}
                                </p>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
};

export default Philosophy;