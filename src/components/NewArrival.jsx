import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
    ArrowDownRight,
    ArrowUpRight,
    Image as ImageIcon,
    X,
} from "lucide-react";

const NewArrival = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    // =========================================================
    // TRENDING PRODUCTS
    // =========================================================

    const trendingProducts = [
        {
            name: "Classic Polo Tee",
            category: "Men's Casual",
            price: "₹1,299",
            oldPrice: "₹1,799",
            badge: "NEW",
            image: "/newArrivals/classic-polo-tee.png",
        },
        {
            name: "Floral Kurti",
            category: "Women's Ethnic",
            price: "₹1,599",
            oldPrice: "₹2,199",
            badge: "NEW",
            image: "/newArrivals/floral-kurti.png",
        },
        {
            name: "Slim Fit Jeans",
            category: "Men's Denim",
            price: "₹2,499",
            oldPrice: "₹3,299",
            badge: "NEW",
            image: "/newArrivals/slim-fit-jeans.png",
        },
        {
            name: "Summer Dress",
            category: "Women's Western",
            price: "₹1,899",
            oldPrice: "₹2,499",
            badge: "NEW",
            image: "/newArrivals/summer-dress.png",
        },
    ];

    // =========================================================
    // SEASONAL PRODUCTS
    // =========================================================

    const seasonalProducts = [
        {
            name: "Linen Shirt",
            category: "Men's Summer",
            price: "₹1,799",
            oldPrice: "₹2,399",
            badge: "SUMMER",
            image: "/newArrivals/linen-shirt.png",
        },
        {
            name: "Cotton Top",
            category: "Women's Summer",
            price: "₹999",
            oldPrice: "₹1,499",
            badge: "SUMMER",
            image: "/newArrivals/cotton-top.png",
        },
        {
            name: "Kids Shorts Set",
            category: "Kids' Summer",
            price: "₹1,299",
            oldPrice: "₹1,899",
            badge: "SUMMER",
            image: "/newArrivals/kids-shorts-set.jpg",
        },
        {
            name: "Sandals",
            category: "Footwear",
            price: "₹1,499",
            oldPrice: "₹2,199",
            badge: "SUMMER",
            image: "/newArrivals/sandals.png",
        },
    ];

    // =========================================================
    // FESTIVAL PRODUCTS
    // =========================================================

    const festivalProducts = [
        {
            name: "Silk Kurta Set",
            category: "Men's Festive",
            price: "₹3,499",
            oldPrice: "₹4,999",
            badge: "FESTIVE",
            image: "/newArrivals/silk-kurta-set.png",
        },
        {
            name: "Jewelry Set",
            category: "Accessories",
            price: "₹2,999",
            oldPrice: "₹4,499",
            badge: "FESTIVE",
            image: "/newArrivals/jewelry-set.png",
        },
        {
            name: "Lehenga Choli",
            category: "Women's Festive",
            price: "₹5,999",
            oldPrice: "₹8,999",
            badge: "FESTIVE",
            image: "/newArrivals/lehenga-choli.png",
        },
        {
            name: "Kids Ethnic Set",
            category: "Kids' Festive",
            price: "₹1,999",
            oldPrice: "₹2,999",
            badge: "FESTIVE",
            image: "/newArrivals/kids-ethnic-set.png",
        },
    ];

    // =========================================================
    // PRODUCT CARD
    // =========================================================

    const ProductCard = ({ product, index }) => {
        const [imageError, setImageError] = useState(false);

        return (
            <motion.article
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.15,
                }}
                transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                    y: -6,
                }}
                className="
                    group
                    flex
                    h-full
                    min-h-0
                    flex-col
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-black/[0.07]
                    bg-white
                    text-left
                    shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                    transition-shadow
                    duration-500
                    hover:shadow-[0_20px_45px_rgba(0,0,0,0.10)]
                "
            >
                {/* =================================================
                    IMAGE
                ================================================= */}

                <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="
                        relative
                        block
                        h-[330px]
                        w-full
                        shrink-0
                        overflow-hidden
                        bg-[#eeeeeb]
                        text-left
                        sm:h-[350px]
                        lg:h-[365px]
                    "
                >
                    {!imageError && product.image ? (
                        <motion.img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            onError={() => setImageError(true)}
                            whileHover={{
                                scale: 1.05,
                            }}
                            transition={{
                                duration: 0.65,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                h-full
                                w-full
                                object-contain
                                object-center
                                p-5
                                sm:p-6
                            "
                        />
                    ) : (
                        <div
                            className="
                                flex
                                h-full
                                w-full
                                flex-col
                                items-center
                                justify-center
                                bg-[#eeeeeb]
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-black/10
                                    bg-white
                                    text-black/25
                                "
                            >
                                <ImageIcon
                                    size={25}
                                    strokeWidth={1.5}
                                />
                            </div>

                            <p
                                className="
                                    mt-4
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.20em]
                                    text-black/30
                                "
                            >
                                Product Image
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[10px]
                                    text-black/20
                                "
                            >
                                Image coming soon
                            </p>
                        </div>
                    )}

                    {/* BADGE */}

                    <span
                        className="
                            absolute
                            left-4
                            top-4
                            rounded-full
                            bg-black
                            px-3.5
                            py-1.5
                            text-[9px]
                            font-bold
                            tracking-[0.18em]
                            text-white
                            shadow-sm
                        "
                    >
                        {product.badge}
                    </span>

                    {/* NUMBER */}

                    <span
                        className="
                            absolute
                            bottom-4
                            left-4
                            text-[10px]
                            font-semibold
                            tracking-[0.15em]
                            text-black/25
                        "
                    >
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* HOVER VIEW */}

                    <span
                        className="
                            absolute
                            bottom-4
                            right-4
                            flex
                            h-10
                            w-10
                            translate-y-2
                            items-center
                            justify-center
                            rounded-full
                            bg-black
                            text-white
                            opacity-0
                            transition-all
                            duration-300
                            group-hover:translate-y-0
                            group-hover:opacity-100
                        "
                    >
                        <ArrowUpRight size={17} />
                    </span>
                </button>

                {/* =================================================
                    PRODUCT DETAILS
                ================================================= */}

                <div
                    className="
                        flex
                        flex-1
                        flex-col
                        p-5
                    "
                >
                    {/* Category + Price */}

                    <div
                        className="
                            flex
                            items-start
                            justify-between
                            gap-4
                        "
                    >
                        <div className="min-w-0">
                            <p
                                className="
                                    mb-2
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.18em]
                                    text-black/40
                                "
                            >
                                {product.category}
                            </p>

                            <h3
                                className="
                                    text-lg
                                    font-semibold
                                    leading-tight
                                    tracking-[-0.035em]
                                    text-black
                                    sm:text-[19px]
                                "
                            >
                                {product.name}
                            </h3>
                        </div>

                        <div className="shrink-0 text-right">
                            <p
                                className="
                                    text-base
                                    font-bold
                                    tracking-[-0.02em]
                                    text-black
                                "
                            >
                                {product.price}
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[10px]
                                    text-black/30
                                    line-through
                                "
                            >
                                {product.oldPrice}
                            </p>
                        </div>
                    </div>

                    {/* Bottom */}

                    <div
                        className="
                            mt-auto
                            flex
                            items-center
                            justify-between
                            border-t
                            border-black/[0.08]
                            pt-4
                        "
                    >
                        <span
                            className="
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.20em]
                                text-black/35
                            "
                        >
                            New Arrival
                        </span>

                        <button
                            type="button"
                            onClick={() =>
                                setSelectedProduct(product)
                            }
                            className="
                                flex
                                items-center
                                gap-2
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.12em]
                                text-black
                            "
                        >
                            View

                            <span
                                className="
                                    flex
                                    h-6
                                    w-6
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-black
                                    text-white
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-0.5
                                    group-hover:-translate-y-0.5
                                "
                            >
                                <ArrowUpRight size={12} />
                            </span>
                        </button>
                    </div>
                </div>
            </motion.article>
        );
    };

    // =========================================================
    // COLLECTION SECTION
    // =========================================================

    const CollectionSection = ({
        eyebrow,
        title,
        description,
        products,
        dark = false,
    }) => {
        return (
            <section
                className={`
                    px-4
                    py-14
                    sm:px-6
                    lg:px-10
                    lg:py-20
                    ${dark
                        ? "bg-black text-white"
                        : "bg-[#f4f4f1]"
                    }
                `}
            >
                <div className="mx-auto max-w-6xl">

                    {/* SECTION HEADER */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="
                            mb-8
                            flex
                            flex-col
                            justify-between
                            gap-4
                            sm:mb-10
                            sm:flex-row
                            sm:items-end
                        "
                    >
                        <div>

                            <div
                                className="
                                    mb-3
                                    flex
                                    items-center
                                    gap-2.5
                                "
                            >
                                <span
                                    className={`
                                        h-px
                                        w-7
                                        ${dark
                                            ? "bg-white/40"
                                            : "bg-black"
                                        }
                                    `}
                                />

                                <span
                                    className={`
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-[0.25em]
                                        ${dark
                                            ? "text-white/40"
                                            : "text-black/35"
                                        }
                                    `}
                                >
                                    {eyebrow}
                                </span>
                            </div>

                            <h2
                                className="
                                    text-3xl
                                    font-semibold
                                    tracking-[-0.05em]
                                    sm:text-4xl
                                    lg:text-5xl
                                "
                            >
                                {title}
                            </h2>
                        </div>

                        <p
                            className={`
                                max-w-sm
                                text-xs
                                leading-6
                                sm:text-sm
                                ${dark
                                    ? "text-white/40"
                                    : "text-black/40"
                                }
                            `}
                        >
                            {description}
                        </p>
                    </motion.div>

                    {/* PRODUCT GRID */}

                    <div
                        className="
                            grid
                            items-stretch
                            gap-5
                            sm:grid-cols-2
                            lg:grid-cols-4
                        "
                    >
                        {products.map((product, index) => (
                            <ProductCard
                                key={product.name}
                                product={product}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    return (
        <main className="min-h-screen bg-white text-black">

            {/* =====================================================
                HERO
            ====================================================== */}

            <section
                className="
                    relative
                    overflow-hidden
                    bg-black
                    text-white
                "
            >
                {/* Decorative Circle */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-40
                        -top-40
                        h-[500px]
                        w-[500px]
                        rounded-full
                        border
                        border-white/[0.06]
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        -bottom-48
                        -left-40
                        h-[450px]
                        w-[450px]
                        rounded-full
                        border
                        border-white/[0.05]
                    "
                />

                <div
                    className="
                        relative
                        mx-auto
                        max-w-6xl
                        px-5
                        pb-20
                        pt-32
                        sm:px-8
                        lg:px-10
                        lg:pb-24
                        lg:pt-36
                    "
                >
                    <div
                        className="
                            grid
                            items-end
                            gap-10
                            lg:grid-cols-[1fr_0.45fr]
                        "
                    >

                        {/* HERO TITLE */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div
                                className="
                                    mb-6
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                <span
                                    className="
                                        h-px
                                        w-8
                                        bg-white/50
                                    "
                                />

                                <span
                                    className="
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-[0.27em]
                                        text-white/40
                                    "
                                >
                                    Just Dropped
                                </span>
                            </div>

                            <h1
                                className="
                                    text-6xl
                                    font-semibold
                                    leading-[0.88]
                                    tracking-[-0.065em]
                                    sm:text-7xl
                                    lg:text-[92px]
                                "
                            >
                                Fresh

                                <span className="block text-orange-500">
                                    Styles
                                </span>

                                <span className="block text-white/30">
                                    Just Landed
                                </span>
                            </h1>
                        </motion.div>

                        {/* HERO DESCRIPTION */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 20,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.15,
                            }}
                        >
                            <p
                                className="
                                    max-w-md
                                    text-sm
                                    leading-7
                                    text-white/50
                                    sm:text-base
                                "
                            >
                                Be the first to shop our latest
                                collection. Trendsetting designs,
                                premium fabrics, and must-have
                                pieces for the season — now live
                                and ready to explore.
                            </p>

                            <div
                                className="
                                    mt-7
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/10
                                    "
                                >
                                    <ArrowDownRight size={16} />
                                </div>

                                <span
                                    className="
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.2em]
                                        text-white/40
                                    "
                                >
                                    Explore New Arrivals
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* STATS */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.35,
                        }}
                        className="
                            mt-14
                            grid
                            max-w-xl
                            grid-cols-2
                            gap-px
                            overflow-hidden
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/10
                        "
                    >
                        <div
                            className="
                                bg-black/80
                                px-5
                                py-5
                            "
                        >
                            <p
                                className="
                                    text-3xl
                                    font-semibold
                                    tracking-[-0.04em]
                                "
                            >
                                250+
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.18em]
                                    text-white/35
                                "
                            >
                                New Items
                            </p>
                        </div>

                        <div
                            className="
                                bg-black/80
                                px-5
                                py-5
                            "
                        >
                            <p
                                className="
                                    text-3xl
                                    font-semibold
                                    tracking-[-0.04em]
                                "
                            >
                                Weekly
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.18em]
                                    text-white/35
                                "
                            >
                                Updates
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                TRENDING NOW
            ====================================================== */}

            <CollectionSection
                eyebrow="Trending Now"
                title="Latest Fashion"
                description="The hottest styles everyone is talking about"
                products={trendingProducts}
            />

            {/* =====================================================
                THIS SEASON
            ====================================================== */}

            <CollectionSection
                eyebrow="This Season"
                title="Seasonal Collection"
                description="Curated picks for the current season"
                products={seasonalProducts}
                dark
            />

            {/* =====================================================
                FESTIVAL
            ====================================================== */}

            <CollectionSection
                eyebrow="Celebrate In Style"
                title="Festival Collection"
                description="Traditional meets trendy for every celebration"
                products={festivalProducts}
            />

            {/* =====================================================
                FINAL CTA
            ====================================================== */}

            <section
                className="
                    bg-[#f4f4f1]
                    px-5
                    py-14
                    sm:px-8
                    lg:px-10
                    lg:py-20
                "
            >
                <div className="mx-auto max-w-6xl">
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.98,
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
                            duration: 0.7,
                        }}
                        className="
                            relative
                            overflow-hidden
                            rounded-[28px]
                            bg-black
                            px-6
                            py-14
                            text-center
                            text-white
                            sm:px-10
                            lg:py-20
                        "
                    >
                        {/* Decorative Circle */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                left-1/2
                                top-0
                                h-72
                                w-72
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-full
                                border
                                border-white/[0.06]
                            "
                        />

                        <div className="relative">
                            <p
                                className="
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.28em]
                                    text-white/35
                                "
                            >
                                Fresh From Bharat Trend
                            </p>

                            <h2
                                className="
                                    mx-auto
                                    mt-4
                                    max-w-2xl
                                    text-4xl
                                    font-semibold
                                    tracking-[-0.05em]
                                    sm:text-5xl
                                    lg:text-6xl
                                "
                            >
                                Your next

                                <span className="text-orange-500">
                                    {" "}favorite
                                </span>

                                <span className="block text-white/30">
                                    is waiting.
                                </span>
                            </h2>

                            <p
                                className="
                                    mx-auto
                                    mt-5
                                    max-w-md
                                    text-xs
                                    leading-6
                                    text-white/40
                                    sm:text-sm
                                "
                            >
                                Discover fresh styles, premium
                                fabrics and everyday fashion made
                                for modern Bharat.
                            </p>

                            <motion.a
                                href="/women"
                                whileHover={{
                                    scale: 1.04,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                className="
                                    mt-7
                                    inline-flex
                                    items-center
                                    gap-3
                                    rounded-full
                                    bg-white
                                    px-5
                                    py-3
                                    text-xs
                                    font-semibold
                                    text-black
                                "
                            >
                                Explore Collection

                                <span
                                    className="
                                        flex
                                        h-6
                                        w-6
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-black
                                        text-white
                                    "
                                >
                                    <ArrowUpRight size={12} />
                                </span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                PRODUCT MODAL
            ====================================================== */}

            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        onClick={() =>
                            setSelectedProduct(null)
                        }
                        className="
                            fixed
                            inset-0
                            z-[9999]
                            flex
                            items-center
                            justify-center
                            bg-black/70
                            p-4
                            backdrop-blur-md
                        "
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.94,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.94,
                                y: 20,
                            }}
                            transition={{
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            onClick={(e) =>
                                e.stopPropagation()
                            }
                            className="
                                relative
                                grid
                                max-h-[90vh]
                                w-full
                                max-w-4xl
                                overflow-hidden
                                rounded-[28px]
                                bg-white
                                shadow-2xl
                                md:grid-cols-2
                            "
                        >
                            {/* CLOSE */}

                            <button
                                type="button"
                                onClick={() =>
                                    setSelectedProduct(null)
                                }
                                aria-label="Close product details"
                                className="
                                    absolute
                                    right-4
                                    top-4
                                    z-20
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-black
                                    text-white
                                    transition-transform
                                    duration-300
                                    hover:scale-105
                                "
                            >
                                <X size={16} />
                            </button>

                            {/* MODAL IMAGE */}

                            <div
                                className="
                                    flex
                                    h-[350px]
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    bg-[#eeeeeb]
                                    md:h-full
                                    md:min-h-[520px]
                                "
                            >
                                <img
                                    src={
                                        selectedProduct.image
                                    }
                                    alt={
                                        selectedProduct.name
                                    }
                                    className="
                                        h-full
                                        w-full
                                        object-contain
                                        p-6
                                    "
                                    onError={(e) => {
                                        e.currentTarget.style.display =
                                            "none";
                                    }}
                                />
                            </div>

                            {/* MODAL CONTENT */}

                            <div
                                className="
                                    flex
                                    flex-col
                                    justify-center
                                    p-7
                                    sm:p-10
                                "
                            >
                                <span
                                    className="
                                        w-fit
                                        rounded-full
                                        bg-black
                                        px-3
                                        py-1.5
                                        text-[9px]
                                        font-bold
                                        tracking-[0.18em]
                                        text-white
                                    "
                                >
                                    {selectedProduct.badge}
                                </span>

                                <p
                                    className="
                                        mt-5
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.2em]
                                        text-black/35
                                    "
                                >
                                    {selectedProduct.category}
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        text-3xl
                                        font-semibold
                                        tracking-[-0.05em]
                                        sm:text-4xl
                                    "
                                >
                                    {selectedProduct.name}
                                </h2>

                                <div
                                    className="
                                        mt-5
                                        flex
                                        items-end
                                        gap-3
                                    "
                                >
                                    <span
                                        className="
                                            text-xl
                                            font-bold
                                        "
                                    >
                                        {selectedProduct.price}
                                    </span>

                                    <span
                                        className="
                                            text-sm
                                            text-black/30
                                            line-through
                                        "
                                    >
                                        {selectedProduct.oldPrice}
                                    </span>
                                </div>

                                <p
                                    className="
                                        mt-5
                                        text-xs
                                        leading-6
                                        text-black/45
                                    "
                                >
                                    Discover this latest Bharat
                                    Trend collection piece,
                                    designed with modern style,
                                    comfort and everyday elegance
                                    in mind.
                                </p>

                                <button
                                    type="button"
                                    className="
                                        mt-7
                                        flex
                                        h-11
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-full
                                        bg-black
                                        px-5
                                        text-xs
                                        font-semibold
                                        text-white
                                        transition-colors
                                        duration-300
                                        hover:bg-orange-500
                                    "
                                >
                                    Explore Product

                                    <ArrowUpRight size={14} />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default NewArrival;