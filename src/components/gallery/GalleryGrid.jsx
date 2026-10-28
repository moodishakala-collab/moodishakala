import { motion } from "motion/react";
import { Images } from "lucide-react";
import GalleryCard from "./GalleryCard";
import GalleryModal from "./GalleryModal";
import { useState } from "react";

const GalleryGrid = ({ artworks }) => {

    const [selectedArtwork, setSelectedArtwork] = useState(null);

    return (
        <>
            <section
                id="art-gallery"
                className="bg-[#f5f5f3] px-5 py-20 sm:px-8 lg:px-12 lg:py-10"
            >

                <div className="mx-auto max-w-7xl">

                    {/* HEADER */}

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
                    >

                        <div>

                            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                                Explore The Collection
                            </p>

                            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                                Discover 

                                <span className="pl-3 text-orange-500">
                                     Odisha's Art
                                </span>
                            </h2>

                        </div>

                        <div className="flex items-center gap-2 text-sm text-black/45">

                            <Images
                                size={17}
                                className="text-orange-100"
                            />

                            {artworks.length} artworks

                        </div>

                    </motion.div>

                    {/* GRID */}

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {artworks.map((artwork, index) => (

                            <GalleryCard
                                key={artwork.id}
                                artwork={artwork}
                                index={index}
                                onClick={() => setSelectedArtwork(artwork)}
                            />

                        ))}

                    </div>

                </div>

            </section>

            <GalleryModal
                artwork={selectedArtwork}
                onClose={() => setSelectedArtwork(null)}
            />
        </>
    );
};

export default GalleryGrid;