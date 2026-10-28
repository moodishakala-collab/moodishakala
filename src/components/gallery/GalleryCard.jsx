import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const GalleryCard = ({ artwork, index, onClick }) => {

    return (
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
                amount: 0.12,
            }}
            transition={{
                duration: 0.6,
                delay: (index % 4) * 0.07,
                ease: [0.22, 1, 0.36, 1],
            }}
            onClick={onClick}
            className="group relative cursor-pointer overflow-hidden rounded-[24px] border border-black/10 bg-white"
        >

            <div className="relative aspect-[4/5] overflow-hidden bg-[#eeeeec]">

                <motion.img
                    src={artwork.image}
                    alt={artwork.title}
                    loading="lazy"
                    whileHover={{
                        scale: 1.035,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full w-full object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/75 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                </span>

                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
                >
                    <ArrowUpRight size={17} />
                </motion.div>

                <div className="absolute bottom-5 left-5 right-5 text-white">

                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-orange-300">
                        Odisha Craft
                    </p>

                    <h3 className="mt-1 text-lg font-semibold">
                        {artwork.title}
                    </h3>

                </div>

            </div>

        </motion.div>
    );
};

export default GalleryCard;