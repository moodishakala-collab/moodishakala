import React from "react";
import { motion } from "motion/react";
import {
    MapPin,
    Phone,
    Mail,
    Clock3,
    Navigation,
    ArrowUpRight,
    Search,
} from "lucide-react";

const stores = [
    {
        city: "Angul, Odisha",
        name: "Angul Store",
        address: "Main Road, Angul, Odisha",
        rating: "EXCELLENT",
    },
    {
        city: "Jharsuguda, Odisha",
        name: "Jharsuguda Store",
        address: "Main Road, Jharsuguda, Odisha",
        rating: "EXCELLENT",
    },
    {
        city: "Keonjhar, Odisha",
        name: "Keonjhar Store",
        address: "Main Road, Keonjhar, Odisha",
        rating: "EXCELLENT",
    },
    {
        city: "Jajpur Road, Odisha",
        name: "Jajpur Road Store",
        address: "Main Road, Jajpur Road, Odisha",
        rating: "EXCELLENT",
    },
    {
        city: "Baripada, Odisha",
        name: "Baripada Store",
        address: "Main Road, Baripada, Odisha",
        rating: "VERY GOOD",
    },
    {
        city: "Balasore, Odisha",
        name: "Balasore Store",
        address: "Main Road, Balasore, Odisha",
        rating: "VERY GOOD",
    },
    {
        city: "Bhadrak, Odisha",
        name: "Bhadrak Store",
        address: "Main Road, Bhadrak, Odisha",
        rating: "VERY GOOD",
    },
    {
        city: "Rayagada, Odisha",
        name: "Rayagada Store",
        address: "Main Road, Rayagada, Odisha",
        rating: "VERY GOOD",
    },
    {
        city: "Bargarh, Odisha",
        name: "Bargarh Store",
        address: "Main Road, Bargarh, Odisha",
        rating: "GOOD",
    },
    {
        city: "Bhawanipatna, Odisha",
        name: "Bhawanipatna Store",
        address: "Main Road, Bhawanipatna, Odisha",
        rating: "GOOD",
    },
];

const Store = () => {
    return (
        <main className="min-h-screen bg-white text-black">

            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative overflow-hidden bg-black text-white">

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
                        -bottom-40
                        -left-40
                        h-[450px]
                        w-[450px]
                        rounded-full
                        bg-orange-500/10
                        blur-3xl
                    "
                />

                <div
                    className="
                        relative
                        mx-auto
                        max-w-7xl
                        px-5
                        pb-20
                        pt-32
                        sm:px-8
                        lg:px-10
                        lg:pb-24
                        lg:pt-36
                    "
                >

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
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="max-w-4xl"
                    >

                        {/* Label */}

                        <div className="mb-7 flex items-center gap-3">

                            <span
                                className="
                                    rounded-full
                                    bg-orange-500
                                    px-4
                                    py-2
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.2em]
                                    text-black
                                "
                            >
                                Store Locator
                            </span>

                            <span className="h-px w-10 bg-white/20" />

                        </div>

                        {/* Heading */}

                        <h1
                            className="
                                text-5xl
                                font-semibold
                                leading-[0.9]
                                tracking-[-0.07em]
                                sm:text-6xl
                                lg:text-[82px]
                            "
                        >
                            Find a Store
                            <span className="block text-orange-500">
                                Near You.
                            </span>
                        </h1>

                        {/* Description */}

                        <p
                            className="
                                mt-7
                                max-w-2xl
                                text-sm
                                leading-7
                                text-white/60
                                sm:text-base
                            "
                        >
                            Discover Bharat Trend stores across
                            315+ cities in 28 states and experience
                            fashion closer to you.
                        </p>

                    </motion.div>


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
                            duration: 0.6,
                            delay: 0.2,
                        }}
                        className="
                            mt-12
                            grid
                            max-w-2xl
                            grid-cols-3
                            border-y
                            border-white/10
                        "
                    >

                        <div className="py-5">

                            <p className="text-2xl font-semibold">
                                315+
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[9px]
                                    uppercase
                                    tracking-[0.15em]
                                    text-white/40
                                "
                            >
                                Cities
                            </p>

                        </div>


                        <div
                            className="
                                border-x
                                border-white/10
                                px-5
                                py-5
                            "
                        >

                            <p className="text-2xl font-semibold">
                                28
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[9px]
                                    uppercase
                                    tracking-[0.15em]
                                    text-white/40
                                "
                            >
                                States
                            </p>

                        </div>


                        <div className="px-5 py-5">

                            <p className="text-2xl font-semibold text-orange-500">
                                24/7
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[9px]
                                    uppercase
                                    tracking-[0.15em]
                                    text-white/40
                                "
                            >
                                Fashion
                            </p>

                        </div>

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
                SEARCH / INTRO
            ====================================================== */}

            <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">

                <div className="mx-auto max-w-7xl">

                    <div
                        className="
                            flex
                            flex-col
                            justify-between
                            gap-8
                            lg:flex-row
                            lg:items-end
                        "
                    >

                        <div>

                            <p
                                className="
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.25em]
                                    text-orange-500
                                "
                            >
                                Our Stores
                            </p>

                            <h2
                                className="
                                    mt-3
                                    text-4xl
                                    font-semibold
                                    leading-[0.95]
                                    tracking-[-0.06em]
                                    sm:text-5xl
                                "
                            >
                                Visit us
                                <span className="text-black/25">
                                    {" "}near you.
                                </span>
                            </h2>

                        </div>


                        {/* Search UI */}

                        <div
                            className="
                                flex
                                h-12
                                w-full
                                max-w-sm
                                items-center
                                gap-3
                                rounded-full
                                border
                                border-black/10
                                bg-[#f5f5f2]
                                px-5
                            "
                        >

                            <Search
                                size={17}
                                className="text-black/40"
                            />

                            <input
                                type="text"
                                placeholder="Search city or store"
                                className="
                                    w-full
                                    bg-transparent
                                    text-sm
                                    outline-none
                                    placeholder:text-black/35
                                "
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                STORE GRID
            ====================================================== */}

            <section
                className="
                    bg-[#f3f3f0]
                    px-5
                    py-14
                    sm:px-8
                    lg:px-10
                    lg:py-20
                "
            >

                <div className="mx-auto max-w-7xl">

                    <div
                        className="
                            grid
                            gap-5
                            sm:grid-cols-2
                            lg:grid-cols-3
                        "
                    >

                        {stores.map((store, index) => (

                            <motion.article
                                key={store.name}
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
                                    amount: 0.1,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.05,
                                }}
                                whileHover={{
                                    y: -6,
                                }}
                                className="
                                    group
                                    overflow-hidden
                                    rounded-[28px]
                                    bg-white
                                    shadow-[0_12px_40px_rgba(0,0,0,0.05)]
                                "
                            >

                                {/* IMAGE */}

                                <div
                                    className="
                                        relative
                                        h-52
                                        overflow-hidden
                                        bg-[#deded9]
                                    "
                                >

                                    <img
                                        src="/bharat_trend.webp"
                                        alt="Bharat Trend Store"
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            transition-transform
                                            duration-700
                                            group-hover:scale-105
                                        "
                                    />

                                    {/* Image overlay */}

                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            bg-gradient-to-t
                                            from-black/40
                                            via-transparent
                                            to-transparent
                                        "
                                    />

                                    {/* Rating */}

                                    <div
                                        className="
                                            absolute
                                            left-4
                                            top-4
                                            rounded-full
                                            bg-white
                                            px-3
                                            py-1.5
                                            text-[8px]
                                            font-bold
                                            tracking-[0.12em]
                                        "
                                    >
                                        {store.rating}
                                    </div>

                                    {/* Open Now */}

                                    <div
                                        className="
                                            absolute
                                            right-4
                                            top-4
                                            flex
                                            items-center
                                            gap-1.5
                                            rounded-full
                                            bg-black
                                            px-3
                                            py-1.5
                                            text-[8px]
                                            font-semibold
                                            text-white
                                        "
                                    >

                                        <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

                                        OPEN NOW

                                    </div>

                                </div>


                                {/* CONTENT */}

                                <div className="p-6">

                                    {/* Location */}

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            text-orange-500
                                        "
                                    >

                                        <MapPin size={14} />

                                        <span
                                            className="
                                                text-[10px]
                                                font-bold
                                                uppercase
                                                tracking-[0.12em]
                                            "
                                        >
                                            {store.city}
                                        </span>

                                    </div>


                                    {/* Store Name */}

                                    <h3
                                        className="
                                            mt-3
                                            text-2xl
                                            font-semibold
                                            tracking-[-0.04em]
                                        "
                                    >
                                        {store.name}
                                    </h3>


                                    {/* Address */}

                                    <div
                                        className="
                                            mt-5
                                            flex
                                            items-start
                                            gap-3
                                            text-sm
                                            leading-6
                                            text-black/60
                                        "
                                    >

                                        <MapPin
                                            size={16}
                                            className="
                                                mt-1
                                                shrink-0
                                                text-black/35
                                            "
                                        />

                                        <span>
                                            {store.address}
                                        </span>

                                    </div>


                                    {/* Phone */}

                                    <div
                                        className="
                                            mt-3
                                            flex
                                            items-center
                                            gap-3
                                            text-sm
                                            text-black/60
                                        "
                                    >

                                        <Phone
                                            size={15}
                                            className="text-black/35"
                                        />

                                        <span>
                                            1800-123-4567
                                        </span>

                                    </div>


                                    {/* Email */}

                                    <div
                                        className="
                                            mt-3
                                            flex
                                            items-center
                                            gap-3
                                            text-sm
                                            text-black/60
                                        "
                                    >

                                        <Mail
                                            size={15}
                                            className="text-black/35"
                                        />

                                        <span>
                                            info@bharattrend.com
                                        </span>

                                    </div>


                                    {/* Timing */}

                                    <div
                                        className="
                                            mt-3
                                            flex
                                            items-center
                                            gap-3
                                            text-sm
                                            text-black/60
                                        "
                                    >

                                        <Clock3
                                            size={15}
                                            className="text-black/35"
                                        />

                                        <span>
                                            10:00 AM - 9:00 PM
                                            {" "}(All Days)
                                        </span>

                                    </div>


                                    {/* Categories */}

                                    <div className="mt-5 flex flex-wrap gap-2">

                                        {[
                                            "Men",
                                            "Women",
                                            "Kids",
                                            "Footwear",
                                        ].map((item) => (

                                            <span
                                                key={item}
                                                className="
                                                    rounded-full
                                                    bg-[#f1f1ee]
                                                    px-3
                                                    py-1.5
                                                    text-[9px]
                                                    font-semibold
                                                    text-black/60
                                                "
                                            >
                                                {item}
                                            </span>

                                        ))}

                                    </div>


                                    {/* Directions */}

                                    <motion.a
                                        href="#"
                                        whileHover={{
                                            scale: 1.02,
                                        }}
                                        whileTap={{
                                            scale: 0.98,
                                        }}
                                        className="
                                            mt-6
                                            flex
                                            h-11
                                            w-full
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-full
                                            bg-black
                                            text-xs
                                            font-semibold
                                            text-white
                                            transition-colors
                                            duration-300
                                            hover:bg-orange-500
                                            hover:text-black
                                        "
                                    >

                                        <Navigation size={14} />

                                        Get Directions

                                        <ArrowUpRight size={14} />

                                    </motion.a>

                                </div>

                            </motion.article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                BOTTOM CTA
            ====================================================== */}

            <section className="bg-black px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-20">

                <div className="mx-auto max-w-7xl">

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
                            flex
                            flex-col
                            justify-between
                            gap-8
                            sm:flex-row
                            sm:items-end
                        "
                    >

                        <div>

                            <p
                                className="
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.25em]
                                    text-orange-500
                                "
                            >
                                Bharat Trend
                            </p>

                            <h2
                                className="
                                    mt-3
                                    max-w-2xl
                                    text-4xl
                                    font-semibold
                                    leading-[0.95]
                                    tracking-[-0.06em]
                                    sm:text-5xl
                                "
                            >
                                Your style.
                                <span className="text-white/25">
                                    {" "}Your store.
                                </span>

                                <span className="block">
                                    Your Bharat Trend.
                                </span>
                            </h2>

                        </div>


                        <motion.div
                            whileHover={{
                                rotate: 8,
                                scale: 1.1,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            className="text-orange-500"
                        >
                            <ArrowUpRight
                                size={50}
                                strokeWidth={1}
                            />
                        </motion.div>

                    </motion.div>

                </div>

            </section>

        </main>
    );
};

export default Store;