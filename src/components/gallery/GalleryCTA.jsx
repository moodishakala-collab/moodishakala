import { motion } from "motion/react";
import { ArrowRight, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const GalleryCTA = () => {
    return (
        <section className="bg-[#FAF7F2] px-5 py-20 sm:px-8 lg:px-12 lg:py-13">

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
                className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-black px-7 py-14 text-center sm:px-12 lg:px-20 lg:py-15"
            >
                <div className="pointer-events-none absolute left-25 top-15 h-70 w-70 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
                <div className="pointer-events-none absolute left-15 top-52 h-15 w-15 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />

                <motion.div
                    animate={{
                        rotate: [0, 8, 0, -8, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="relative"
                >
                    <Palette
                        className="mx-auto text-orange-400"
                        size={30}
                    />
                </motion.div>

                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.3em] text-orange-300/60">
                    Mo Odisha Kala
                </p>

                <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                    Discover the soul of

                    <span className="block text-orange-400">
                        Odisha through art.
                    </span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100/70">
                    Explore handcrafted creations that bring Odisha's rich
                    artistic traditions into your world.
                </p>

                <Link
                    to="/crafts"
                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-3.5 font-bold text-white transition-all hover:bg-orange-600"
                >
                    Explore Crafts

                    <ArrowRight size={17} />
                </Link>

            </motion.div>

        </section>
    );
};

export default GalleryCTA;