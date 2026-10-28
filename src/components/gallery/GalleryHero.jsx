import { motion } from "motion/react";
import { ArrowDownRight, Palette, Sparkles } from "lucide-react";
import gallary from "../../assets/gallary.jpeg"
const GalleryHero = () => {
    return (
        <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-black text-white">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-orange-400/10" />

            <div className="pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full border border-orange-400/10" />


            {/* Background glow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-linear-to-br from-orange-500/5 via-transparent to-blue-500/10"
            />


            {/* CONTENT */}
            <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

                <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">


                    {/* ================= LEFT ================= */}
                    <motion.div
                        initial={{ opacity: 0, x: -45 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        {/* Label */}
                        <div className="mb-6 flex items-center gap-3">

                            <span className="h-px w-10 bg-orange-400" />

                            <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-orange-300">

                                <Sparkles size={13} />

                                Odisha Heritage

                            </span>

                        </div>


                        {/* Heading */}
                        <h1 className="max-w-3xl text-5xl font-semibold leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl xl:text-[82px]">

                            Stories Through

                            <span className="block text-orange-500">
                                Art & Craft
                            </span>

                        </h1>


                        {/* Description */}
                        <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base">

                            Explore the colours, traditions and craftsmanship
                            of Odisha through a collection of artworks created
                            with generations of skill and cultural heritage.

                        </p>


                        {/* Button */}
                        <div className="mt-8">

                            <motion.a
                                href="#art-gallery"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black"
                            >

                                Explore Gallery

                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">

                                    <ArrowDownRight size={14} />

                                </span>

                            </motion.a>

                        </div>


                        {/* Stats */}
                        <div className="mt-10 flex flex-wrap items-center gap-7 border-t border-white/10 pt-6">

                            {/* Heritage */}
                            <div>

                                <p className="text-2xl font-semibold">
                                    Odisha
                                </p>

                                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                                    Heritage
                                </p>

                            </div>


                            <div className="h-10 w-px bg-white/10" />


                            {/* Art */}
                            <div className="flex items-center gap-2">

                                <Palette size={18} />

                                <div>

                                    <p className="text-2xl font-semibold">
                                        Art
                                    </p>

                                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                                        Collection
                                    </p>

                                </div>

                            </div>


                            <div className="h-10 w-px bg-white/10" />


                            {/* Handcrafted */}
                            <div>

                                <p className="text-sm font-semibold">
                                    Handcrafted
                                </p>

                                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                                    Cultural Stories
                                </p>

                            </div>

                        </div>

                    </motion.div>



                    {/* ================= RIGHT IMAGE ================= */}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, x: 40 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{
                            duration: 0.9,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative mx-auto w-full max-w-[475px] mt-1"
                    >

                        <motion.div
                            animate={{
                                y: [0, -7, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/10 bg-[#171717] shadow-2xl shadow-black/40 mt-5"
                        >

                            {/* IMAGE */}
                            <img
                                src={gallary}
                                alt="Odisha traditional artwork"
                                className="h-full w-full object-cover"
                            />


                            {/* Image gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent" />


                            {/* Image information */}
                            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl">

                                <div>

                                    <p className="text-[10px] uppercase tracking-[0.2em] text-orange-300/70">
                                        Odisha Art
                                    </p>

                                    <p className="mt-1 text-sm font-medium">
                                        Preserving tradition through creativity
                                    </p>

                                </div>


                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black">

                                    <Palette size={16} />

                                </div>

                            </div>

                        </motion.div>


                        

                    </motion.div>

                </div>

            </div>

        </section>
    );
};

export default GalleryHero;