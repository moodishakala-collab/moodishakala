import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, X } from "lucide-react";

const GalleryModal = ({ artwork, onClose }) => {

    return (
        <AnimatePresence>

            {artwork && (

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={onClose}
                    className="fixed inset-0 z-9999 flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-md"
                >

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.94,
                            y: 25,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.96,
                            y: 15,
                        }}
                        transition={{
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-4xl overflow-hidden rounded-[24px] border border-white/10 bg-[#111] shadow-2xl"
                    >

                        {/* CLOSE */}

                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
                            aria-label="Close"
                        >
                            <X size={19} />
                        </button>

                        {/* IMAGE */}

                        <div className="relative flex max-h-[75vh] min-h-100 items-center justify-center overflow-hidden bg-[#eeeeec] sm:min-h-125">

                            <motion.img
                                initial={{
                                    opacity: 0,
                                    scale: 0.96,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 0.6,
                                }}
                                src={artwork.image}
                                alt={artwork.title}
                                className="h-full max-h-[75vh] w-full object-contain p-4 sm:p-8"
                            />

                        </div>

                        {/* CONTENT */}

                        <div className="flex flex-col gap-5 border-t border-white/10 bg-[#111] p-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7">

                            <div>

                                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-orange-500">
                                    Odisha Craft
                                </p>

                                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                    {artwork.title}
                                </h3>

                                <p className="mt-2 max-w-xl text-sm leading-6 text-white/40">
                                    {artwork.description}
                                </p>

                            </div>

                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black sm:w-auto"
                            >
                                View Artwork

                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                                    <ArrowRight size={14} />
                                </span>

                            </motion.button>

                        </div>

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>
    );
};

export default GalleryModal;