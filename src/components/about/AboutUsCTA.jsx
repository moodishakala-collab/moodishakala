import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { ctaData } from "../../data/aboutUsData";

const AboutUsCTA = () => {

    return (
        <section className="bg-white px-5 py-20 text-black sm:px-8 md:py-28">

            <motion.div
                initial={{
                    opacity: 0,
                    y: 40,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 0.8,
                }}
                className="mx-auto max-w-7xl rounded-[40px] bg-black px-7 py-14 text-center text-white sm:px-12 sm:py-20"
            >

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-600">
                    {ctaData.smallTitle}
                </p>

                <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">

                    {ctaData.title}

                    <span className="text-orange-500">
                        {" "}{ctaData.highlight}
                    </span>

                </h2>

                <p className="mx-auto mt-5 max-w-xl text-gray-400">
                    {ctaData.description}
                </p>

                <motion.button
                    whileHover={{
                        scale: 1.04,
                    }}
                    whileTap={{
                        scale: 0.96,
                    }}
                    className="mt-9 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black"
                >
                    {ctaData.buttonText}

                    <ArrowRight size={17} />
                </motion.button>

            </motion.div>

        </section>
    );
};

export default AboutUsCTA;