import React from "react";
import { motion } from "motion/react";
import {
    ArrowUpRight,
    MapPin,
    RefreshCcw,
    ShieldCheck,
    ShoppingBag,
    Star,
    TrendingUp,
} from "lucide-react";

const HomeExtraSections = () => {
    const fastFashion = [
        {
            number: "01",
            title: "Summer Vibes",
            subtitle: "Light fabrics · Bright colors",
            image: "", // 👉 Yaha apna image URL / path daalein
        },
        {
            number: "02",
            title: "Ethnic Fusion",
            subtitle: "Modern kurtas · Festive ready",
            image: "", // 👉 Yaha apna image URL / path daalein
        },
        {
            number: "03",
            title: "Casual Everyday",
            subtitle: "Jeans · T-Shirts · Comfort",
            image: "", // 👉 Yaha apna image URL / path daalein
        },
        {
            number: "04",
            title: "Festive Glow",
            subtitle: "Traditional · Party Wear",
            image: "", // 👉 Yaha apna image URL / path daalein
        },
        {
            number: "05",
            title: "New Arrivals",
            subtitle: "Fresh Styles · Trending Now",
            image: "", // 👉 Yaha apna image URL / path daalein
        },
    ];

    const shoppingDeals = [
        {
            tag: "BEST DEAL",
            price: "Under ₹499",
            items: "T-Shirts · Tops · Kids Wear",
            image: "", // 👉 Yaha apna image URL / path daalein
        },
        {
            tag: "TRENDING",
            price: "Under ₹799",
            items: "Kurtas · Jeans · Kurti",
            image: "", // 👉 Yaha apna image URL / path daalein
        },
        {
            tag: "PREMIUM",
            price: "Under ₹999",
            items: "Festive Wear · Co-ord Sets",
            image: "", // 👉 Yaha apna image URL / path daalein
        },
        {
            tag: "NEW ARRIVAL",
            price: "Women's Wear",
            items: "Latest Collection",
            image: "", // 👉 Yaha apna image URL / path daalein
        },
        {
            tag: "HOT SALE",
            price: "Up To 50% Off",
            items: "Footwear",
            image: "", // 👉 Yaha apna image URL / path daalein
        },
    ];

    const promises = [
        {
            icon: MapPin,
            number: "100",
            suffix: "",
            title: "Upcoming 100 Stores",
            description:
                "Spreading across Tier-2, Tier-3 & Tier-4 cities with new stores opening soon across Odisha • Jharkhand • Chhattisgarh • West Bengal • Bihar • Assam",
            smallText: "Coming Soon",
        },
        {
            icon: ShieldCheck,
            number: "100%",
            suffix: "",
            title: "Premium Quality",
            description:
                "Carefully selected premium fabrics and superior stitching techniques are combined to deliver lasting comfort, exceptional durability, and unmatched style for your everyday.",
            smallText: "QUALITY ASSURED",
        },
        {
            icon: TrendingUp,
            number: "₹199",
            suffix: "",
            title: "Truly Affordable",
            description:
                "Discover fashion-forward collections and trendsetting styles offered at highly competitive prices that make perfect sense for the budget of every modern Indian.",
            smallText: "STARTING PRICE",
        },
        {
            icon: RefreshCcw,
            number: "15",
            suffix: "",
            title: "Easy Exchange",
            description:
                "Shop with absolute confidence through our seamless, transparent, and completely hassle-free return and exchange policy designed specifically to ensure your complete.",
            smallText: "DAYS POLICY",
        },
    ];

    const customers = [
        {
            rating: "5.0",
            review:
                "The quality is excellent and the prices are unbelievable! I bought kurtis for myself and my daughter. Both loved the fit and fabric.",
            name: "Priya Sharma",
            location: "Ranchi, Jharkhand",
            image: "/customer/priya.jpg",
        },
        {
            rating: "4.5",
            review:
                "Finally a brand that understands middle-class families. Great collection for men and kids. The store in Patna is well organized and staff is very helpful.",
            name: "Rahul Verma",
            location: "Kolkata, West Bengal",
            image: "/customer/rahul.jpg",
        },
        {
            rating: "5.0",
            review:
                "Bought festive wear for the whole family during Diwali. Everything was perfect — color, fitting, and price. Will definitely shop again!",
            name: "Anjali Patel",
            location: "Ranchi, Jharkhand",
            image: "/customer/anjali.jpg",
        },
    ];

    return (
        <main className="w-full overflow-hidden bg-white text-black">

            {/* =====================================================
                FAST FASHION
            ====================================================== */}

            <section className="relative bg-[#f2f2ef] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

                {/* Background Shape */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-40
                        top-20
                        h-[450px]
                        w-[450px]
                        rounded-full
                        bg-orange-500/10
                        blur-3xl
                    "
                />

                <div className="relative mx-auto max-w-7xl">

                    <motion.div
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
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="
                            flex
                            flex-col
                            justify-between
                            gap-8
                            md:flex-row
                            md:items-end
                        "
                    >

                        <div>

                            <p
                                className="
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.3em]
                                    text-orange-500
                                "
                            >
                                Latest Trends
                            </p>

                            <h2
                                className="
                                    mt-3
                                    text-5xl
                                    font-semibold
                                    leading-[0.9]
                                    tracking-[-0.07em]
                                    sm:text-6xl
                                    lg:text-7xl
                                "
                            >
                                Fast
                                <span className="text-black/25">
                                    {" "}Fashion.
                                </span>
                            </h2>

                        </div>

                        <p
                            className="
                                max-w-md
                                text-sm
                                leading-7
                                text-black/60
                                sm:text-base
                            "
                        >
                            Discover the latest styles loved by Bharat —
                            fresh, trendy and perfect for every occasion.
                        </p>

                    </motion.div>


                    {/* Fashion Cards */}

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

                        {fastFashion.map((item, index) => (

                            <motion.div
                                key={item.title}
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
                                    amount: 0.1,
                                }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.07,
                                }}
                                whileHover={{
                                    y: -7,
                                }}
                                className="
                                    group
                                    relative
                                    min-h-[260px]
                                    overflow-hidden
                                    rounded-[26px]
                                    bg-black
                                    p-6
                                    text-white
                                    transition-shadow
                                    duration-300
                                    hover:shadow-2xl
                                "
                            >

                                {/* 👉 BACKGROUND IMAGE SLOT — apni image yaha item.image me dein */}

                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="
                                            absolute
                                            inset-0
                                            h-full
                                            w-full
                                            object-cover
                                        "
                                    />
                                )}

                                {/* Dark overlay so text stays readable over the image */}

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-black/50
                                    "
                                />

                                {/* Orange circle */}

                                <div
                                    className="
                                        absolute
                                        -right-14
                                        -top-14
                                        h-40
                                        w-40
                                        rounded-full
                                        bg-orange-500/10
                                        transition-transform
                                        duration-500
                                        group-hover:scale-150
                                    "
                                />

                                <div className="relative flex h-full flex-col justify-between">

                                    <div className="flex items-start justify-between">

                                        <span
                                            className="
                                                flex
                                                h-9
                                                w-9
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-white/10
                                                text-[9px]
                                                font-bold
                                                text-white/40
                                            "
                                        >
                                            {item.number}
                                        </span>

                                        <ArrowUpRight
                                            size={19}
                                            className="
                                                text-orange-500
                                                transition-transform
                                                duration-300
                                                group-hover:translate-x-1
                                                group-hover:-translate-y-1
                                            "
                                        />

                                    </div>

                                    <div className="mt-20">

                                        <h3
                                            className="
                                                text-xl
                                                font-semibold
                                                tracking-[-0.04em]
                                            "
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-2
                                                text-xs
                                                leading-5
                                                text-white/45
                                            "
                                        >
                                            {item.subtitle}
                                        </p>

                                    </div>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>


            {/* =====================================================
                ONE CLICK SHOPPING
            ====================================================== */}

            <section className="bg-black px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">

                <div className="mx-auto max-w-7xl">

                    <motion.div
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
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                    >

                        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">

                            <div>

                                <p
                                    className="
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.3em]
                                        text-orange-500
                                    "
                                >
                                    Shop Smart
                                </p>

                                <h2
                                    className="
                                        mt-3
                                        text-5xl
                                        font-semibold
                                        leading-[0.9]
                                        tracking-[-0.07em]
                                        sm:text-6xl
                                    "
                                >
                                    One Click
                                    <span className="text-orange-600">
                                        {" "}Shopping.
                                    </span>
                                </h2>

                            </div>

                            <p
                                className="
                                    max-w-md
                                    text-sm
                                    leading-7
                                    text-white/45
                                    sm:text-base
                                "
                            >
                                Trendy fashion that doesn't burn a hole
                                in your pocket.
                            </p>

                        </div>

                    </motion.div>


                    {/* Deals */}

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

                        {shoppingDeals.map((deal, index) => (

                            <motion.div
                                key={deal.tag}
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
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.06,
                                }}
                                whileHover={{
                                    y: -6,
                                }}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[24px]
                                    border
                                    border-white/10
                                    bg-white/[0.04]
                                    p-6
                                    transition-all
                                    duration-300
                                    hover:border-orange-500/50
                                    hover:bg-white/[0.07]
                                "
                            >

                                {/* 👉 BACKGROUND IMAGE SLOT — apni image yaha deal.image me dein */}

                                {deal.image && (
                                    <img
                                        src={deal.image}
                                        alt={deal.tag}
                                        className="
                                            absolute
                                            inset-0
                                            h-full
                                            w-full
                                            object-cover
                                        "
                                    />
                                )}

                                {/* Dark overlay so text stays readable over the image */}

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-black/55
                                    "
                                />

                                <div className="relative">

                                    <div className="flex items-center justify-between">

                                        <span
                                            className="
                                                text-[9px]
                                                font-bold
                                                tracking-[0.18em]
                                                text-orange-500
                                            "
                                        >
                                            {deal.tag}
                                        </span>

                                        <ShoppingBag
                                            size={17}
                                            className="text-white/30"
                                        />

                                    </div>

                                    <h3
                                        className="
                                            mt-12
                                            text-2xl
                                            font-semibold
                                            tracking-[-0.05em]
                                        "
                                    >
                                        {deal.price}
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            min-h-[40px]
                                            text-xs
                                            leading-5
                                            text-white/40
                                        "
                                    >
                                        {deal.items}
                                    </p>

                                    <button
                                        type="button"
                                        className="
                                            mt-6
                                            flex
                                            items-center
                                            gap-2
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.15em]
                                            text-white
                                        "
                                    >
                                        Shop Now

                                        <ArrowUpRight
                                            size={14}
                                            className="
                                                text-orange-500
                                                transition-transform
                                                duration-300
                                                group-hover:translate-x-1
                                                group-hover:-translate-y-1
                                            "
                                        />
                                    </button>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>


            {/* =====================================================
                WHY BHARAT TREND
            ====================================================== */}

            <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

                <div className="mx-auto max-w-7xl">

                    <motion.div
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
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                    >

                        <p
                            className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.3em]
                                text-orange-500
                            "
                        >
                            Our Promise
                        </p>

                        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

                            <h2
                                className="
                                    text-5xl
                                    font-semibold
                                    leading-[0.9]
                                    tracking-[-0.07em]
                                    sm:text-6xl
                                    lg:text-7xl
                                "
                            >
                                Why Bharat
                                <span className="text-orange-500">
                                    {" "}Trend?
                                </span>
                            </h2>

                            <p
                                className="
                                    max-w-md
                                    text-sm
                                    leading-7
                                    text-black/55
                                    sm:text-base
                                "
                            >
                                Fashion for Every Bharatiya — Trend for
                                everyone.
                            </p>

                        </div>

                    </motion.div>


                    {/* Promise Cards */}

                    <div className="mt-14 grid gap-4 lg:grid-cols-4">

                        {promises.map((item, index) => {

                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
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
                                        amount: 0.15,
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.07,
                                    }}
                                    whileHover={{
                                        y: -6,
                                    }}
                                    className="
                                        group
                                        rounded-[25px]
                                        border
                                        border-black/10
                                        bg-[#f5f5f2]
                                        p-6
                                        transition-all
                                        duration-300
                                        hover:border-orange-500/40
                                        hover:shadow-xl
                                    "
                                >

                                    <div className="flex items-center justify-between">

                                        <div
                                            className="
                                                flex
                                                h-11
                                                w-11
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-black
                                                text-white
                                                transition-colors
                                                duration-300
                                                group-hover:bg-orange-500
                                                group-hover:text-black
                                            "
                                        >
                                            <Icon size={19} />
                                        </div>

                                        <span className="text-[9px] font-bold text-black/25">
                                            0{index + 1}
                                        </span>

                                    </div>

                                    <div className="mt-9">

                                        <p
                                            className="
                                                text-4xl
                                                font-semibold
                                                tracking-[-0.06em]
                                            "
                                        >
                                            {item.number}
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-[9px]
                                                font-bold
                                                uppercase
                                                tracking-[0.15em]
                                                text-orange-500
                                            "
                                        >
                                            {item.smallText}
                                        </p>

                                    </div>

                                    <h3
                                        className="
                                            mt-7
                                            text-lg
                                            font-semibold
                                            tracking-[-0.03em]
                                        "
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-3
                                            text-xs
                                            leading-6
                                            text-black/55
                                        "
                                    >
                                        {item.description}
                                    </p>

                                </motion.div>
                            );
                        })}

                    </div>


                    {/* Brand Stats */}

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
                            mt-5
                            grid
                            grid-cols-2
                            overflow-hidden
                            rounded-[24px]
                            bg-black
                            text-white
                            sm:grid-cols-4
                        "
                    >

                        <div className="border-b border-white/10 px-6 py-7 sm:border-b-0 sm:border-r">

                            <p className="text-3xl font-semibold">
                                10M+
                            </p>

                            <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/35">
                                Happy Customers
                            </p>

                        </div>

                        <div className="border-b border-white/10 px-6 py-7 sm:border-b-0 sm:border-r">

                            <p className="text-3xl font-semibold">
                                4.8/5
                            </p>

                            <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/35">
                                Average Rating
                            </p>

                        </div>

                        <div className="border-r border-white/10 px-6 py-7">

                            <p className="text-3xl font-semibold">
                                100%
                            </p>

                            <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/35">
                                Authentic Products
                            </p>

                        </div>

                        <div className="px-6 py-7">

                            <p className="text-3xl font-semibold text-orange-500">
                                2026
                            </p>

                            <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/35">
                                Trusted Brand
                            </p>

                        </div>

                    </motion.div>

                </div>
            </section>


            {/* =====================================================
                HAPPY CUSTOMERS
            ====================================================== */}

            <section className="bg-[#f2f2ef] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

                <div className="mx-auto max-w-7xl">

                    <motion.div
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
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                    >

                        <p
                            className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.3em]
                                text-orange-500
                            "
                        >
                            Customer Stories
                        </p>

                        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                            <h2
                                className="
                                    text-5xl
                                    font-semibold
                                    leading-[0.9]
                                    tracking-[-0.07em]
                                    sm:text-6xl
                                "
                            >
                                Happy
                                <span className="text-orange-600">
                                    {" "}Customers.
                                </span>
                            </h2>

                            <p
                                className="
                                    max-w-md
                                    text-sm
                                    leading-7
                                    text-black/55
                                "
                            >
                                Real stories from real families across
                                Bharat.
                            </p>

                        </div>

                    </motion.div>


                    {/* Testimonials */}

                    <div className="mt-12 grid gap-5 lg:grid-cols-3">

                        {customers.map((customer, index) => (

                            <motion.div
                                key={customer.name}
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
                                }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.08,
                                }}
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-[27px]
                                    bg-white
                                    p-7
                                    shadow-[0_15px_50px_rgba(0,0,0,0.05)]
                                "
                            >

                                {/* Rating */}

                                <div className="flex items-center gap-1">

                                    {[1, 2, 3, 4, 5].map((star) => (

                                        <Star
                                            key={star}
                                            size={14}
                                            fill={
                                                star <=
                                                    Math.round(
                                                        Number(customer.rating)
                                                    )
                                                    ? "currentColor"
                                                    : "none"
                                            }
                                            className="text-orange-500"
                                        />

                                    ))}

                                    <span className="ml-2 text-xs font-semibold">
                                        {customer.rating}
                                    </span>

                                </div>


                                {/* Review */}

                                <p
                                    className="
                                        mt-8
                                        min-h-[125px]
                                        text-base
                                        leading-7
                                        text-black/70
                                    "
                                >
                                    “{customer.review}”
                                </p>


                                {/* Customer */}

                                <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-5">

                                    {/* Image Placeholder */}

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            overflow-hidden
                                            rounded-full
                                            bg-black
                                            text-xs
                                            font-bold
                                            text-white
                                        "
                                    >
                                        {customer.image ? (
                                            <img
                                                src={customer.image}
                                                alt={customer.name}
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
                                        ) : (
                                            customer.name.charAt(0)
                                        )}
                                    </div>

                                    <div>

                                        <p className="text-sm font-semibold">
                                            {customer.name}
                                        </p>

                                        <p className="mt-0.5 text-[10px] text-black/40">
                                            {customer.location}
                                        </p>

                                    </div>

                                </div>

                            </motion.div>

                        ))}

                    </div>


                    {/* Reviews CTA */}

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
                        }}
                        className="mt-8 flex justify-center"
                    >

                        <button
                            type="button"
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-full
                                bg-black
                                px-7
                                py-3.5
                                text-xs
                                font-semibold
                                text-white
                                transition-all
                                duration-300
                                hover:bg-orange-500
                                hover:text-black
                            "
                        >
                            Read More Reviews

                            <ArrowUpRight size={15} />

                        </button>

                    </motion.div>

                </div>
            </section>


            {/* =====================================================
                FINAL CTA
            ====================================================== */}

            <section className="bg-black px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">

                <div className="mx-auto max-w-7xl">

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
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="
                            flex
                            flex-col
                            items-start
                            justify-between
                            gap-8
                            md:flex-row
                            md:items-end
                        "
                    >

                        <div>

                            <p
                                className="
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.3em]
                                    text-orange-500
                                "
                            >
                                Bharat Trend
                            </p>

                            <h2
                                className="
                                    mt-4
                                    max-w-3xl
                                    text-4xl
                                    font-semibold
                                    leading-[0.95]
                                    tracking-[-0.06em]
                                    sm:text-5xl
                                    lg:text-6xl
                                "
                            >
                                Trend for everyone.
                                <span className="block text-white/25">
                                    Made for Bharat.
                                </span>
                            </h2>

                        </div>

                        <div
                            className="
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-full
                                bg-orange-500
                                text-black
                            "
                        >
                            <ArrowUpRight size={23} />

                        </div>

                    </motion.div>

                </div>
            </section>

        </main>
    );
};

export default HomeExtraSections;