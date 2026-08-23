import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
    ArrowDownRight,
    ArrowUpRight,
    Check,
    Copy,
    Image as ImageIcon,
    Tag,
    Timer,
    X,
    Zap,
} from "lucide-react";

const Offer = () => {
    const [selectedDeal, setSelectedDeal] = useState(null);
    const [copiedCode, setCopiedCode] = useState("");

    // =========================================================
    // ACTIVE DEALS
    // =========================================================

    const activeDeals = [
        {
            title: "Men's Casual Tees",
            discount: "50% OFF",
            description: "Min. 50% off",
            price: "₹499",
            oldPrice: "₹999",
            ending: "Ends in 2 days",
            image: "/offers/mens-casual-tees.png",
        },
        {
            title: "Women's Kurtis",
            discount: "40% OFF",
            description: "Min. 40% off",
            price: "₹799",
            oldPrice: "₹1,399",
            ending: "Ends in 3 days",
            image: "/offers/womens-kurtis.png",
        },
        {
            title: "Kids' Wear",
            discount: "60% OFF",
            description: "Min. 60% off",
            price: "₹399",
            oldPrice: "₹999",
            ending: "Ends in 1 day",
            image: "/offers/kids-wear.png",
        },
        {
            title: "Footwear",
            discount: "45% OFF",
            description: "Min. 45% off",
            price: "₹899",
            oldPrice: "₹1,699",
            ending: "Ends in 5 days",
            image: "/offers/footwear.png",
        },
    ];

    // =========================================================
    // FLASH SALE
    // =========================================================

    const flashDeals = [
        {
            title: "Men's Jeans",
            discount: "70% OFF",
            description: "Flash deal",
            price: "₹699",
            oldPrice: "₹2,299",
            ending: "Only 5 left",
            image: "/offers/mens-jeans.jpg",
        },
        {
            title: "Women's Dresses",
            discount: "65% OFF",
            description: "Flash deal",
            price: "₹599",
            oldPrice: "₹1,799",
            ending: "Only 12 left",
            image: "/offers/womens-dresses.png",
        },
        {
            title: "Girls' Ethnic",
            discount: "55% OFF",
            description: "Flash deal",
            price: "₹499",
            oldPrice: "₹1,199",
            ending: "Only 8 left",
            image: "/offers/girls-ethnic.png",
        },
        {
            title: "Accessories",
            discount: "50% OFF",
            description: "Flash deal",
            price: "₹299",
            oldPrice: "₹599",
            ending: "Only 20 left",
            image: "/offers/accessories.png",
        },
    ];

    // =========================================================
    // CATEGORIES
    // =========================================================

    const categories = [
        {
            title: "Men's Wear",
            discount: "Up to 50% Off",
            image: "/offers/mens-wear.png",
        },
        {
            title: "Women's Wear",
            discount: "Up to 60% Off",
            image: "/offers/womens-wear.png",
        },
        {
            title: "Kids' Wear",
            discount: "Up to 70% Off",
            image: "/offers/kids-wear-category.jpg",
        },
        {
            title: "Footwear",
            discount: "Up to 45% Off",
            image: "/offers/footwear-category.jpg",
        },
        {
            title: "Accessories",
            discount: "Up to 55% Off",
            image: "/offers/accessories-category.jpg",
        },
        {
            title: "Ethnic Wear",
            discount: "Up to 65% Off",
            image: "/offers/ethnic-wear.jpg",
        },
    ];

    // =========================================================
    // COUPONS
    // =========================================================

    const coupons = [
        {
            code: "SAVE20",
            title: "Extra 20% off",
            description: "on orders above ₹1,999",
        },
        {
            code: "FIRST50",
            title: "Flat 50% off",
            description: "on your first purchase",
        },
        {
            code: "FREESHIP",
            title: "Free shipping",
            description: "on all orders above ₹999",
        },
        {
            code: "BUNDLE30",
            title: "30% off",
            description: "when you buy 3 or more items",
        },
    ];

    // =========================================================
    // COPY COUPON
    // =========================================================

    const copyCoupon = async (code) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopiedCode(code);

            setTimeout(() => {
                setCopiedCode("");
            }, 1800);
        } catch (error) {
            console.log(error);
        }
    };

    // =========================================================
    // IMAGE COMPONENT
    // =========================================================

    const OfferImage = ({
        src,
        alt,
        large = false,
    }) => {
        const [imageError, setImageError] = useState(false);

        return (
            <div
                className={`
                    relative
                    overflow-hidden
                    bg-[#eeeeeb]
                    ${large
                        ? "h-[330px] sm:h-[390px]"
                        : "h-[245px] sm:h-[280px]"
                    }
                `}
            >
                {!imageError && src ? (
                    <motion.img
                        src={src}
                        alt={alt}
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
                            object-cover
                            object-center
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
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-black/30
                            "
                        >
                            Offer Image
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
            </div>
        );
    };

    // =========================================================
    // ACTIVE DEAL CARD
    // =========================================================

    const DealCard = ({ deal, index }) => {
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
                    amount: 0.12,
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
                    flex-col
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-black/[0.07]
                    bg-white
                    shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                    transition-shadow
                    duration-500
                    hover:shadow-[0_20px_45px_rgba(0,0,0,0.10)]
                "
            >
                {/* IMAGE */}

                <button
                    type="button"
                    onClick={() => setSelectedDeal(deal)}
                    className="
                        relative
                        block
                        w-full
                        text-left
                    "
                >
                    <OfferImage
                        src={deal.image}
                        alt={deal.title}
                    />

                    {/* Discount */}

                    <span
                        className="
                            absolute
                            left-4
                            top-4
                            rounded-full
                            bg-orange-500
                            px-3.5
                            py-1.5
                            text-[9px]
                            font-bold
                            tracking-[0.16em]
                            text-white
                            shadow-lg
                        "
                    >
                        {deal.discount}
                    </span>

                    {/* Number */}

                    <span
                        className="
                            absolute
                            bottom-4
                            left-4
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            bg-white/90
                            text-[9px]
                            font-bold
                            text-black/45
                            backdrop-blur-sm
                        "
                    >
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Arrow */}

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

                {/* CONTENT */}

                <div
                    className="
                        flex
                        flex-1
                        flex-col
                        p-5
                    "
                >
                    <div
                        className="
                            flex
                            items-start
                            justify-between
                            gap-4
                        "
                    >
                        <div>
                            <p
                                className="
                                    mb-1.5
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.18em]
                                    text-black/35
                                "
                            >
                                {deal.description}
                            </p>

                            <h3
                                className="
                                    text-lg
                                    font-semibold
                                    tracking-[-0.035em]
                                "
                            >
                                {deal.title}
                            </h3>
                        </div>

                        <div className="shrink-0 text-right">
                            <p className="text-base font-bold">
                                {deal.price}
                            </p>

                            <p
                                className="
                                    mt-0.5
                                    text-[10px]
                                    text-black/30
                                    line-through
                                "
                            >
                                {deal.oldPrice}
                            </p>
                        </div>
                    </div>

                    <div
                        className="
                            mt-auto
                            flex
                            items-center
                            justify-between
                            border-t
                            border-black/[0.07]
                            pt-4
                        "
                    >
                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                text-[10px]
                                font-semibold
                                text-orange-600
                            "
                        >
                            <Timer size={13} />
                            {deal.ending}
                        </div>

                        <button
                            type="button"
                            onClick={() =>
                                setSelectedDeal(deal)
                            }
                            className="
                                flex
                                items-center
                                gap-1.5
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.12em]
                            "
                        >
                            View
                            <ArrowUpRight size={13} />
                        </button>
                    </div>
                </div>
            </motion.article>
        );
    };

    // =========================================================
    // FLASH CARD
    // =========================================================

    const FlashCard = ({ deal, index }) => {
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
                    amount: 0.12,
                }}
                transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                }}
                whileHover={{
                    y: -6,
                }}
                className="
                    group
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-white/10
                    bg-white/[0.06]
                    backdrop-blur-sm
                "
            >
                <button
                    type="button"
                    onClick={() => setSelectedDeal(deal)}
                    className="block w-full text-left"
                >
                    <div className="relative">
                        <OfferImage
                            src={deal.image}
                            alt={deal.title}
                        />

                        <span
                            className="
                                absolute
                                left-4
                                top-4
                                flex
                                items-center
                                gap-1.5
                                rounded-full
                                bg-orange-500
                                px-3
                                py-1.5
                                text-[9px]
                                font-bold
                                tracking-[0.15em]
                                text-white
                            "
                        >
                            <Zap size={11} fill="currentColor" />
                            {deal.discount}
                        </span>
                    </div>

                    <div className="p-5 text-white">
                        <div
                            className="
                                flex
                                items-start
                                justify-between
                                gap-3
                            "
                        >
                            <div>
                                <p
                                    className="
                                        mb-1.5
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-[0.18em]
                                        text-white/35
                                    "
                                >
                                    {deal.description}
                                </p>

                                <h3
                                    className="
                                        text-lg
                                        font-semibold
                                        tracking-[-0.03em]
                                    "
                                >
                                    {deal.title}
                                </h3>
                            </div>

                            <div className="text-right">
                                <p className="text-base font-bold">
                                    {deal.price}
                                </p>

                                <p
                                    className="
                                        mt-0.5
                                        text-[10px]
                                        text-white/25
                                        line-through
                                    "
                                >
                                    {deal.oldPrice}
                                </p>
                            </div>
                        </div>

                        <div
                            className="
                                mt-4
                                flex
                                items-center
                                justify-between
                                border-t
                                border-white/10
                                pt-4
                            "
                        >
                            <span
                                className="
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.16em]
                                    text-orange-400
                                "
                            >
                                {deal.ending}
                            </span>

                            <span
                                className="
                                    flex
                                    h-7
                                    w-7
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                    text-black
                                "
                            >
                                <ArrowUpRight size={13} />
                            </span>
                        </div>
                    </div>
                </button>
            </motion.article>
        );
    };

    // =========================================================
    // CATEGORY CARD
    // =========================================================

    const CategoryCard = ({ category, index }) => {
        const [imageError, setImageError] = useState(false);

        return (
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
                    duration: 0.5,
                    delay: index * 0.04,
                }}
                whileHover={{
                    y: -5,
                }}
                className="
                    group
                    relative
                    h-[250px]
                    overflow-hidden
                    rounded-[22px]
                    bg-black
                "
            >
                {!imageError && category.image ? (
                    <motion.img
                        src={category.image}
                        alt={category.title}
                        onError={() => setImageError(true)}
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-105
                        "
                    />
                ) : (
                    <div
                        className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            bg-[#eeeeeb]
                            text-black/20
                        "
                    >
                        <ImageIcon
                            size={32}
                            strokeWidth={1.3}
                        />
                    </div>
                )}

                {/* Overlay */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-black/20
                        to-transparent
                    "
                />

                <div
                    className="
                        absolute
                        bottom-5
                        left-5
                        right-5
                        text-white
                    "
                >
                    <p
                        className="
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-orange-400
                        "
                    >
                        {category.discount}
                    </p>

                    <div
                        className="
                            mt-1.5
                            flex
                            items-center
                            justify-between
                            gap-3
                        "
                    >
                        <h3
                            className="
                                text-xl
                                font-semibold
                                tracking-[-0.035em]
                            "
                        >
                            {category.title}
                        </h3>

                        <span
                            className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-white
                                text-black
                                transition-transform
                                duration-300
                                group-hover:-rotate-45
                            "
                        >
                            <ArrowUpRight size={15} />
                        </span>
                    </div>
                </div>
            </motion.div>
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
                {/* Decorative circles */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-40
                        -top-40
                        h-[520px]
                        w-[520px]
                        rounded-full
                        border
                        border-white/[0.06]
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        -bottom-56
                        -left-40
                        h-[500px]
                        w-[500px]
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
                            gap-12
                            lg:grid-cols-[1fr_0.5fr]
                        "
                    >
                        {/* TITLE */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 35,
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
                                    mb-7
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                <span
                                    className="
                                        h-px
                                        w-9
                                        bg-orange-500
                                    "
                                />

                                <span
                                    className="
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.28em]
                                        text-white/45
                                    "
                                >
                                    Limited Time
                                </span>
                            </div>

                            <h1
                                className="
                                    max-w-4xl
                                    text-6xl
                                    font-semibold
                                    leading-[0.88]
                                    tracking-[-0.065em]
                                    sm:text-7xl
                                    lg:text-[94px]
                                "
                            >
                                Unbeatable
                                <span className="block text-orange-500">
                                    Deals
                                </span>
                                <span className="block text-white/30">
                                    & Offers
                                </span>
                            </h1>
                        </motion.div>

                        {/* DESCRIPTION */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 25,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.15,
                            }}
                            className="lg:pb-2"
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
                                Grab the best deals before they're
                                gone. Massive discounts on men's,
                                women's, and kids' fashion. Shop
                                now and save big on your favorite
                                styles.
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
                                        text-orange-500
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
                                    Shop & Save
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* HERO STATS */}

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
                                    text-4xl
                                    font-semibold
                                    tracking-[-0.05em]
                                    text-orange-500
                                "
                            >
                                70%
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
                                Max Discount
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
                                    text-4xl
                                    font-semibold
                                    tracking-[-0.05em]
                                "
                            >
                                500+
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
                                Deals Live
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                ACTIVE DEALS
            ====================================================== */}

            <section
                className="
                    bg-[#f4f4f1]
                    px-4
                    py-14
                    sm:px-6
                    lg:px-10
                    lg:py-20
                "
            >
                <div className="mx-auto max-w-6xl">

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
                                <span className="h-px w-7 bg-black" />

                                <span
                                    className="
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-[0.25em]
                                        text-black/40
                                    "
                                >
                                    Ending Soon
                                </span>
                            </div>

                            <h2
                                className="
                                    text-3xl
                                    font-semibold
                                    tracking-[-0.05em]
                                    sm:text-5xl
                                "
                            >
                                Active Deals
                            </h2>
                        </div>

                        <p
                            className="
                                max-w-xs
                                text-xs
                                leading-6
                                text-black/40
                                sm:text-sm
                            "
                        >
                            Grab these offers before they expire
                        </p>
                    </motion.div>

                    <div
                        className="
                            grid
                            items-stretch
                            gap-5
                            sm:grid-cols-2
                            lg:grid-cols-4
                        "
                    >
                        {activeDeals.map((deal, index) => (
                            <DealCard
                                key={deal.title}
                                deal={deal}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
                FLASH SALE
            ====================================================== */}

            <section
                className="
                    bg-black
                    px-4
                    py-14
                    text-white
                    sm:px-6
                    lg:px-10
                    lg:py-20
                "
            >
                <div className="mx-auto max-w-6xl">

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
                                    className="
                                        h-px
                                        w-7
                                        bg-orange-500
                                    "
                                />

                                <span
                                    className="
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-[0.25em]
                                        text-white/40
                                    "
                                >
                                    Hurry Up
                                </span>
                            </div>

                            <h2
                                className="
                                    text-3xl
                                    font-semibold
                                    tracking-[-0.05em]
                                    sm:text-5xl
                                "
                            >
                                Flash Sale
                            </h2>
                        </div>

                        <p
                            className="
                                max-w-xs
                                text-xs
                                leading-6
                                text-white/40
                                sm:text-sm
                            "
                        >
                            Lightning deals for a limited time only
                        </p>
                    </motion.div>

                    <div
                        className="
                            grid
                            gap-5
                            sm:grid-cols-2
                            lg:grid-cols-4
                        "
                    >
                        {flashDeals.map((deal, index) => (
                            <FlashCard
                                key={deal.title}
                                deal={deal}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
                CATEGORY DISCOUNTS
            ====================================================== */}

            <section
                className="
                    bg-[#f4f4f1]
                    px-4
                    py-14
                    sm:px-6
                    lg:px-10
                    lg:py-20
                "
            >
                <div className="mx-auto max-w-6xl">

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
                        className="mb-8 sm:mb-10"
                    >
                        <div
                            className="
                                mb-3
                                flex
                                items-center
                                gap-2.5
                            "
                        >
                            <span className="h-px w-7 bg-black" />

                            <span
                                className="
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.25em]
                                    text-black/40
                                "
                            >
                                Shop By Category
                            </span>
                        </div>

                        <div
                            className="
                                flex
                                flex-col
                                justify-between
                                gap-4
                                sm:flex-row
                                sm:items-end
                            "
                        >
                            <h2
                                className="
                                    text-3xl
                                    font-semibold
                                    tracking-[-0.05em]
                                    sm:text-5xl
                                "
                            >
                                Category Discounts
                            </h2>

                            <p
                                className="
                                    max-w-xs
                                    text-xs
                                    leading-6
                                    text-black/40
                                    sm:text-sm
                                "
                            >
                                Big savings across all departments
                            </p>
                        </div>
                    </motion.div>

                    <div
                        className="
                            grid
                            gap-4
                            sm:grid-cols-2
                            lg:grid-cols-3
                        "
                    >
                        {categories.map((category, index) => (
                            <CategoryCard
                                key={category.title}
                                category={category}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
                COUPONS
            ====================================================== */}

            <section
                className="
                    bg-white
                    px-4
                    py-14
                    sm:px-6
                    lg:px-10
                    lg:py-20
                "
            >
                <div className="mx-auto max-w-6xl">

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
                                    className="
                                        h-px
                                        w-7
                                        bg-orange-500
                                    "
                                />

                                <span
                                    className="
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-[0.25em]
                                        text-black/40
                                    "
                                >
                                    Exclusive
                                </span>
                            </div>

                            <h2
                                className="
                                    text-3xl
                                    font-semibold
                                    tracking-[-0.05em]
                                    sm:text-5xl
                                "
                            >
                                Coupon Codes
                            </h2>
                        </div>

                        <p
                            className="
                                max-w-xs
                                text-xs
                                leading-6
                                text-black/40
                                sm:text-sm
                            "
                        >
                            Apply at checkout for extra savings
                        </p>
                    </motion.div>

                    <div
                        className="
                            grid
                            gap-4
                            sm:grid-cols-2
                            lg:grid-cols-4
                        "
                    >
                        {coupons.map((coupon, index) => (
                            <motion.div
                                key={coupon.code}
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
                                    duration: 0.5,
                                    delay: index * 0.05,
                                }}
                                whileHover={{
                                    y: -5,
                                }}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[22px]
                                    border
                                    border-black/[0.08]
                                    bg-[#f4f4f1]
                                    p-5
                                "
                            >
                                {/* Decorative */}

                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        -right-10
                                        -top-10
                                        h-28
                                        w-28
                                        rounded-full
                                        border
                                        border-black/[0.05]
                                    "
                                />

                                <div
                                    className="
                                        relative
                                        flex
                                        items-start
                                        justify-between
                                        gap-4
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-black
                                            text-white
                                        "
                                    >
                                        <Tag size={17} />
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            copyCoupon(
                                                coupon.code
                                            )
                                        }
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-black/10
                                            bg-white
                                            text-black
                                            transition-all
                                            duration-300
                                            hover:bg-black
                                            hover:text-white
                                        "
                                        aria-label={`Copy ${coupon.code}`}
                                    >
                                        {copiedCode ===
                                            coupon.code ? (
                                            <Check size={15} />
                                        ) : (
                                            <Copy size={15} />
                                        )}
                                    </button>
                                </div>

                                <div className="relative mt-6">
                                    <p
                                        className="
                                            text-[9px]
                                            font-bold
                                            uppercase
                                            tracking-[0.18em]
                                            text-black/35
                                        "
                                    >
                                        Coupon Code
                                    </p>

                                    <h3
                                        className="
                                            mt-1
                                            text-2xl
                                            font-bold
                                            tracking-[0.04em]
                                        "
                                    >
                                        {coupon.code}
                                    </h3>

                                    <p
                                        className="
                                            mt-4
                                            text-sm
                                            font-semibold
                                            text-black
                                        "
                                    >
                                        {coupon.title}
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-xs
                                            text-black/40
                                        "
                                    >
                                        {coupon.description}
                                    </p>
                                </div>

                                <div
                                    className="
                                        mt-5
                                        border-t
                                        border-dashed
                                        border-black/10
                                        pt-4
                                    "
                                >
                                    <span
                                        className="
                                            text-[9px]
                                            font-bold
                                            uppercase
                                            tracking-[0.15em]
                                            text-orange-600
                                        "
                                    >
                                        Apply at checkout
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
                FINAL CTA
            ====================================================== */}

            <section
                className="
                    bg-[#f4f4f1]
                    px-5
                    pb-16
                    sm:px-8
                    lg:px-10
                    lg:pb-24
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
                            rounded-[30px]
                            bg-black
                            px-6
                            py-14
                            text-center
                            text-white
                            sm:px-10
                            lg:py-20
                        "
                    >
                        <div
                            className="
                                pointer-events-none
                                absolute
                                left-1/2
                                top-0
                                h-80
                                w-80
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-full
                                border
                                border-white/[0.06]
                            "
                        />

                        <div className="relative">
                            <div
                                className="
                                    mx-auto
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-orange-500
                                    text-white
                                "
                            >
                                <Tag size={20} />
                            </div>

                            <p
                                className="
                                    mt-5
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.28em]
                                    text-white/35
                                "
                            >
                                Bharat Trend Offers
                            </p>

                            <h2
                                className="
                                    mx-auto
                                    mt-3
                                    max-w-2xl
                                    text-4xl
                                    font-semibold
                                    tracking-[-0.05em]
                                    sm:text-5xl
                                    lg:text-6xl
                                "
                            >
                                Shop more.
                                <span className="text-orange-500">
                                    {" "}Save more.
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
                                Don't miss the latest deals,
                                flash sales and exclusive offers
                                from Bharat Trend.
                            </p>

                            <motion.a
                                href="/new-arrivals"
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
                                Explore New Arrivals

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
                DEAL MODAL
            ====================================================== */}

            <AnimatePresence>
                {selectedDeal && (
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
                            setSelectedDeal(null)
                        }
                        className="
                            fixed
                            inset-0
                            z-[9999]
                            flex
                            items-center
                            justify-center
                            bg-black/75
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
                                    setSelectedDeal(null)
                                }
                                className="
                                    absolute
                                    right-4
                                    top-4
                                    z-30
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

                            {/* IMAGE */}

                            <div
                                className="
                                    h-[350px]
                                    overflow-hidden
                                    bg-[#eeeeeb]
                                    md:h-full
                                    md:min-h-[520px]
                                "
                            >
                                <img
                                    src={selectedDeal.image}
                                    alt={selectedDeal.title}
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                    "
                                    onError={(e) => {
                                        e.currentTarget.style.display =
                                            "none";
                                    }}
                                />
                            </div>

                            {/* CONTENT */}

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
                                        bg-orange-500
                                        px-3
                                        py-1.5
                                        text-[9px]
                                        font-bold
                                        tracking-[0.16em]
                                        text-white
                                    "
                                >
                                    {selectedDeal.discount}
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
                                    {selectedDeal.description}
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
                                    {selectedDeal.title}
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
                                            text-2xl
                                            font-bold
                                        "
                                    >
                                        {selectedDeal.price}
                                    </span>

                                    <span
                                        className="
                                            text-sm
                                            text-black/30
                                            line-through
                                        "
                                    >
                                        {selectedDeal.oldPrice}
                                    </span>
                                </div>

                                <div
                                    className="
                                        mt-5
                                        flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        bg-orange-50
                                        px-4
                                        py-3
                                        text-xs
                                        font-semibold
                                        text-orange-600
                                    "
                                >
                                    <Timer size={15} />
                                    {selectedDeal.ending}
                                </div>

                                <p
                                    className="
                                        mt-5
                                        text-xs
                                        leading-6
                                        text-black/40
                                    "
                                >
                                    Grab this limited-time Bharat
                                    Trend offer before it expires.
                                    Shop your favorite styles and
                                    save more.
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
                                    Shop This Deal

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

export default Offer;