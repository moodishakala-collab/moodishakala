import { motion } from "motion/react";
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import poster from "../../assets/poster.png"

const GalleryHeritage = () => {
    return (
        <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">

            <div className="mx-auto max-w-7xl">

                <div className="grid items-center gap-10 lg:grid-cols-2">

                    {/* IMAGE */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                    >

                        <div className="group relative aspect-[4/3] overflow-hidden rounded-[28px] border border-blue-100 bg-blue-50">

                            <img
                                src={poster}
                                alt="Odisha traditional art"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                            <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                                Art • Culture • Heritage
                            </div>

                        </div>

                    </motion.div>

                    {/* CONTENT */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                    >

                        <div className="flex items-center gap-2 text-orange-600">

                            <Heart size={16} />

                            <span className="text-sm font-bold uppercase tracking-[0.2em]">
                                More Than Art
                            </span>

                        </div>

                        <h2 className="mt-4 text-3xl font-black leading-tight text-black sm:text-4xl lg:text-5xl">
                            Every Artwork
                            <span className="block text-orange-500">
                                Tells a Story.
                            </span>
                        </h2>

                        <p className="mt-5 leading-7 text-gray-800">
                            Odisha's artistic heritage is shaped by generations
                            of skilled artisans, traditional techniques and
                            stories passed from one generation to another.
                        </p>

                        <p className="mt-4 leading-7 text-gray-800">
                            This collection celebrates the beauty of that
                            heritage and the creative hands behind every
                            artwork.
                        </p>

                        <Link
                            to="/about"
                            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 font-bold text-white transition-all hover:bg-orange-600"
                        >
                            Discover Our Story

                            <ArrowRight
                                size={17}
                                className="transition-transform group-hover:translate-x-1"
                            />

                        </Link>

                    </motion.div>

                </div>

            </div>

        </section>
    );
};

export default GalleryHeritage;