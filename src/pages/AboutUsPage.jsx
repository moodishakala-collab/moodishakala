import React from "react";
import { motion } from "motion/react";
import {
    ArrowDownRight,
    ArrowRight,
    Award,
    Briefcase,
    Building2,
    Check,
    Globe2,
    Heart,
    MapPin,
    Scale,
    ShoppingBag,
    Target,
    TrendingUp,
    Users,
} from "lucide-react";

const AboutUsPage = () => {
    // =====================================================
    // ANIMATIONS
    // =====================================================

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const fadeLeft = {
        hidden: {
            opacity: 0,
            x: -70,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const fadeRight = {
        hidden: {
            opacity: 0,
            x: 70,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const stagger = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    // =====================================================
    // COMMITMENTS
    // =====================================================

    const commitments = [
        "Provide best value for money in every product",
        "Bring latest global trends with Indian soul",
        "Make fashion accessible to every Indian family",
        "Build trust through quality and transparency",
    ];

    // =====================================================
    // CORE TEAM
    // Each member carries an accent color + icon, mirroring
    // the "step card" language used elsewhere on the site
    // (eyebrow + pill badge + icon tile + checklist).
    // =====================================================

    const team = [
        {
            name: "Pratik Kumar Mittal",
            role: "CFO",
            department: "Finance & Planning",
            image: "/AboutUs/Pratik.jpeg",
            description:
                "Financial strategy, corporate planning, budgeting & compliance.",
            tags: ["Finance", "Planning"],
            icon: TrendingUp,
            accent: "#f5a623",
        },
        {
            name: "Sanjay Mahakud",
            role: "VP Store Planning",
            department: "Projects & Expansion",
            image: "/AboutUs/Sanjay.jpeg",
            description:
                "Retail infrastructure, store expansion & project execution.",
            tags: ["Projects", "Expansion"],
            icon: Building2,
            accent: "#4f8cff",
        },
        {
            name: "Debasmita Das",
            role: "Retail Head",
            department: "Operations & Merchandising",
            image: "/AboutUs/shantilata.jpeg",
            description:
                "Retail operations, customer experience & merchandising.",
            tags: ["Operations", "Merchandising"],
            icon: ShoppingBag,
            accent: "#2ecc71",
        },
        {
            name: "Dilip Kumar Kishan",
            role: "VP Purchase",
            department: "Sourcing & Supply Chain",
            image: "/AboutUs/dilip.jpeg",
            description:
                "Sourcing strategy, vendor partnerships & supply chain.",
            tags: ["Sourcing", "Supply Chain"],
            icon: Briefcase,
            accent: "#ec4899",
        },
        {
            name: "Sangram Behera",
            role: "Property Acquisition Head",
            department: "Acquisition & Real Estate",
            image: "/AboutUs/sangram_bhehera.jpg.jpeg",
            description:
                "Site identification, property acquisition & lease negotiations.",
            tags: ["Acquisition", "Real Estate"],
            icon: MapPin,
            accent: "#f5a623",
        },
        {
            name: "Adit Chhatar",
            role: "Chief Legal Officer (CLO)",
            department: "Legal & Compliance",
            image: "/AboutUs/adit_chhatar.jpg.jpeg",
            description:
                "Legal affairs, corporate compliance & risk management.",
            tags: ["Legal", "Compliance"],
            icon: Scale,
            accent: "#4f8cff",
        },
    ];

    // =====================================================
    // FASHION PHILOSOPHY
    // =====================================================

    const philosophy = [
        {
            title: "Rooted in Bharat",
            description:
                "Our designs celebrate Indian culture, festivals, and everyday life while staying contemporary.",
            icon: Heart,
        },
        {
            title: "Premium Quality",
            description:
                "Best fabrics, perfect stitching, and attention to detail — because you deserve the best.",
            icon: Award,
        },
        {
            title: "Real Value",
            description:
                "Trendy fashion at prices that make sense for middle-class Indian families.",
            icon: Target,
        },
        {
            title: "For Every Family",
            description:
                "Thoughtfully designed collections for Men, Women, Boys & Girls — one brand for the whole family.",
            icon: Users,
        },
    ];

    return (
        <main className="overflow-hidden bg-black text-white">

            {/* =====================================================
                HERO SECTION — BLACK
            ===================================================== */}

            <section className="relative min-h-[78vh] overflow-hidden bg-black">

                {/* BACKGROUND IMAGE */}

                <motion.div
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 1.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                >
                    <img
                        src="/AboutUsBanner.jpeg"
                        alt="Bharat Trend"
                        className="
                            h-full
                            w-full
                            object-cover
                            object-center
                        "
                    />
                </motion.div>


                {/* DARK OVERLAY */}

                <div className="absolute inset-0 bg-black/65" />


                {/* LEFT GRADIENT */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-linear-to-r
                        from-black/5
                        via-black/10
                        to-black/12
                    "
                />


                {/* BOTTOM GRADIENT */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-linear-to-t
                        from-black
                        via-transparent
                        to-black/10
                    "
                />


                {/* HERO CONTENT */}

                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        flex
                        min-h-[78vh]
                        max-w-7xl
                        items-end
                        px-5
                        pb-16
                        pt-36
                        sm:px-8
                        sm:pb-20
                        md:pb-24
                    "
                >

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="w-full"
                    >

                        {/* EST */}

                        <motion.div
                            variants={fadeUp}
                            className="mb-7 flex items-center gap-4"
                        >

                            <span className="h-px w-12 bg-white" />

                            <span
                                className="
                                    text-[11px]
                                    font-medium
                                    uppercase
                                    tracking-[0.35em]
                                    text-white/60
                                "
                            >
                                Est. 2012
                            </span>

                        </motion.div>


                        {/* TITLE */}

                        <motion.h1
                            variants={fadeUp}
                            className="
                                max-w-4xl
                                text-3xl
                                font-black
                                leading-[0.9]
                                tracking-[-0.01em]
                                sm:text-4xl
                                md:text-7xl
                            "
                        >
                            Fashion That

                            <span className="block text-orange-500">
                                Empowers Bharat
                            </span>
                        </motion.h1>


                        {/* BOTTOM CONTENT */}

                        <motion.div
                            variants={fadeUp}
                            className="
                                mt-8
                                flex
                                flex-col
                                gap-6
                                border-t
                                border-white/15
                                pt-6
                                sm:flex-row
                                sm:items-end
                                sm:justify-between
                            "
                        >

                            <p
                                className="
                                    max-w-xl
                                    text-sm
                                    leading-7
                                    text-white
                                    sm:text-base
                                "
                            >
                                A journey of dreams, dedication and value
                                fashion. Discover the story behind Bharat
                                Trend and our vision to transform fashion
                                retail across Bharat.
                            </p>


                            <div className="flex shrink-0 items-center gap-3">

                                <span
                                    className="
                                        text-xs
                                        uppercase
                                        tracking-[0.2em]
                                        text-white/40
                                    "
                                >
                                    Our Journey
                                </span>

                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/20
                                        text-white
                                    "
                                >
                                    <ArrowDownRight size={17} />
                                </div>

                            </div>

                        </motion.div>

                    </motion.div>

                </div>


                {/* BOTTOM FADE */}

                <div
                    className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        h-24
                        bg-linear-to-t
                        from-black
                        to-transparent
                    "
                />

            </section>


            {/* =====================================================
                STORY SECTION — WHITE
            ===================================================== */}

            <section
                className="
                    relative
                    overflow-hidden
                    bg-white
                    px-5
                    py-20
                    text-black
                    sm:px-8
                    md:py-28
                "
            >

                <div
                    className="
                        absolute
                        right-[-150px]
                        top-[-150px]
                        h-[400px]
                        w-[400px]
                        rounded-full
                        bg-black/[0.035]
                        blur-3xl
                    "
                />


                <div className="relative mx-auto max-w-7xl">

                    <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

                        {/* IMAGE */}

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            variants={fadeLeft}
                            className="relative"
                        >

                            <div
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-[36px]
                                    bg-black
                                "
                            >

                                <motion.img
                                    src="/AboutUs/AboutUs1.jpeg"
                                    alt="About Bharat Trend"
                                    whileHover={{
                                        scale: 1.04,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                    }}
                                    className="
                                        h-[500px]
                                        w-full
                                        object-cover
                                        sm:h-[600px]
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-black/70
                                        via-transparent
                                        to-transparent
                                    "
                                />


                                <div
                                    className="
                                        absolute
                                        bottom-6
                                        left-6
                                        rounded-2xl
                                        border
                                        border-white/20
                                        bg-black/80
                                        px-5
                                        py-4
                                        text-white
                                        backdrop-blur-xl
                                    "
                                >

                                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                                        Our Journey
                                    </p>

                                    <p className="mt-1 text-xl font-bold">
                                        1 Store → 500+
                                    </p>

                                </div>

                            </div>


                            <div
                                className="
                                    absolute
                                    -bottom-8
                                    -right-5
                                    hidden
                                    h-28
                                    w-28
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-black
                                    text-center
                                    text-white
                                    shadow-2xl
                                    sm:flex
                                "
                            >

                                <div>

                                    <p className="text-2xl font-black">
                                        2012
                                    </p>

                                    <p className="text-[9px] uppercase tracking-widest text-gray-500">
                                        Established
                                    </p>

                                </div>

                            </div>

                        </motion.div>


                        {/* CONTENT */}

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            variants={fadeRight}
                        >

                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                                Our Story
                            </p>

                            <h2
                                className="
                                    mt-5
                                    text-5xl
                                    font-black
                                    leading-[0.95]
                                    tracking-tight
                                    sm:text-6xl
                                "
                            >
                                Fashion That

                                <span className="block text-orange-500">
                                    Empowers Bharat
                                </span>
                            </h2>


                            <div className="mt-8 h-1 w-16 rounded-full bg-black" />


                            <p className="mt-8 text-base leading-8 text-black/60">
                                BHARAT TREND was born in Odisha in 2026 with
                                a simple vision — to bring affordable fashion,
                                quality products, and a modern shopping
                                experience to every family in Tier-2, Tier-3,
                                and Tier-4 cities.
                            </p>


                            <p className="mt-5 text-base font-semibold text-black/80">
                                The company was established with a mission to
                                offer:
                            </p>


                            <div className="mt-5 space-y-3">

                                {[
                                    "Affordable fashion for Men, Women, and Kids",
                                    "Quality products at value-for-money prices",
                                    "Modern retail stores with a comfortable shopping environment",
                                    "Employment opportunities for local communities",
                                    'A strong "Proudly Made in India" private-label ecosystem',
                                ].map((item, index) => (

                                    <motion.div
                                        key={item}
                                        initial={{
                                            opacity: 0,
                                            x: -15,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            delay: index * 0.06,
                                        }}
                                        className="flex items-start gap-3"
                                    >

                                        <span
                                            className="
                                                mt-1
                                                flex
                                                h-5
                                                w-5
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-black
                                                text-white
                                            "
                                        >
                                            <Check size={11} />
                                        </span>

                                        <p className="text-sm leading-6 text-black/65">
                                            {item}
                                        </p>

                                    </motion.div>

                                ))}

                            </div>


                            <p className="mt-7 text-sm leading-7 text-black/55">
                                Inspired by India's value-fashion retail
                                revolution, BHARAT TREND aims to become
                                Odisha's leading homegrown retail chain by
                                combining local understanding with organized
                                retail excellence.
                            </p>

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                VISION & MISSION — BLACK
            ===================================================== */}

            <section className="bg-black px-5 py-20 sm:px-8 md:py-28">

                <div className="mx-auto max-w-7xl">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                        }}
                        variants={fadeUp}
                    >

                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-600">
                            Our Purpose
                        </p>

                        <h2 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
                            Vision &

                            <span className="text-gray-600">
                                {" "}Mission
                            </span>
                        </h2>

                        <p className="mt-5 max-w-xl text-gray-400">
                            Our promise to every family across Bharat.
                        </p>

                    </motion.div>


                    <div className="mt-14 grid gap-5 lg:grid-cols-2">

                        {/* VISION */}

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                            }}
                            variants={fadeLeft}
                            className="
                                rounded-[32px]
                                border
                                border-white/10
                                bg-white
                                p-8
                                text-black
                                sm:p-10
                            "
                        >

                            <div className="flex items-center justify-between">

                                <div
                                    className="
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-black
                                        text-white
                                    "
                                >
                                    <Target size={25} />
                                </div>

                                <span className="text-xs font-bold uppercase tracking-widest text-black/30">
                                    The Future
                                </span>

                            </div>


                            <h3 className="mt-8 text-3xl text-orange-500">
                                Our Vision
                            </h3>

                            <p className="mt-5 leading-8 text-black/60">
                                To become the most trusted and preferred
                                value-fashion retail brand in Odisha and
                                Eastern India.
                            </p>


                            <div className="mt-9">

                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                                    2026 – 2030 Goal
                                </p>

                                <div className="mt-5 space-y-4">

                                    {[
                                        "Become a household name across every Indian state",
                                        "Empower millions of women to dress with confidence",
                                        "Expand to 500+ stores in underserved cities by 2030",
                                        "Champion sustainable and ethical fashion practices",
                                    ].map((goal, index) => (

                                        <div
                                            key={goal}
                                            className="flex items-start gap-4"
                                        >

                                            <span className="font-black text-black/25">
                                                0{index + 1}
                                            </span>

                                            <p className="text-sm leading-6 text-black/65">
                                                {goal}
                                            </p>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </motion.div>


                        {/* MISSION */}

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                            }}
                            variants={fadeRight}
                            className="
                                rounded-[32px]
                                border
                                border-white/10
                                bg-[#111]
                                p-8
                                sm:p-10
                            "
                        >

                            <div className="flex items-center justify-between">

                                <div
                                    className="
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-white
                                        text-black
                                    "
                                >
                                    <Globe2 size={25} />
                                </div>

                                <span className="text-xs uppercase tracking-widest text-gray-600">
                                    The Path
                                </span>

                            </div>


                            <h3 className="mt-8 text-3xl font-black">
                                Our Mission
                            </h3>

                            <p className="mt-5 leading-8 text-gray-400">
                                To deliver fashion, quality, and value to
                                every family while creating a world-class
                                shopping experience in emerging cities and
                                towns.
                            </p>


                            <div className="mt-9">

                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600">
                                    Our Commitments
                                </p>

                                <div className="mt-5 space-y-4">

                                    {commitments.map((item) => (

                                        <div
                                            key={item}
                                            className="flex items-center gap-3"
                                        >

                                            <span
                                                className="
                                                    flex
                                                    h-7
                                                    w-7
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-white
                                                    text-black
                                                "
                                            >
                                                <Check size={14} />
                                            </span>

                                            <p className="text-sm text-gray-300">
                                                {item}
                                            </p>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                LEADERSHIP — WHITE
            ===================================================== */}

            <section className="bg-white px-5 py-20 text-black sm:px-8 md:py-28">

                <div className="mx-auto max-w-7xl">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                        }}
                        variants={fadeUp}
                    >

                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/35">
                            Our Leadership
                        </p>

                        <h2 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
                            The People Behind

                            <span className="block text-orange-500">
                                Our Vision
                            </span>
                        </h2>

                        <p className="mt-6 max-w-2xl text-black/50">
                            A team of experienced professionals dedicated to
                            transforming Bharat Trend into India's most
                            trusted fashion destination.
                        </p>

                    </motion.div>


                    {/* =================================================
                        MANAGING DIRECTOR
                    ================================================== */}

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={fadeUp}
                        className="
                            relative
                            mt-14
                            overflow-hidden
                            rounded-[38px]
                            bg-black
                            text-white
                        "
                    >

                        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

                            {/* IMAGE */}

                            <div className="relative min-h-[430px] overflow-hidden">

                                <motion.img
                                    src="/AboutUs/Debosmita.jpeg"
                                    alt="Shanti Lata Mahakud"
                                    whileHover={{
                                        scale: 1.04,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                    }}
                                    className="
                                        absolute
                                        inset-0
                                        h-full
                                        w-full
                                        object-cover
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-black
                                        via-black/20
                                        to-transparent
                                    "
                                />


                                <div className="absolute bottom-8 left-8">

                                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                                        Managing Director
                                    </p>

                                    <h3 className="mt-2 text-3xl font-black">
                                        Shanti Lata Mahakud
                                    </h3>

                                </div>

                            </div>


                            {/* CONTENT */}

                            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">

                                <div className="flex items-center gap-3">

                                    <span className="h-px w-10 bg-white/30" />

                                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                                        Leadership
                                    </span>

                                </div>


                                <h3 className="mt-7 text-4xl font-black sm:text-5xl">
                                    Building the

                                    <span className="block text-gray-600">
                                        Future of Bharat Trend
                                    </span>
                                </h3>


                                <p className="mt-7 max-w-xl leading-8 text-gray-400">
                                    Strategic leadership driving company
                                    vision, expansion and long-term growth.
                                    Leading business operations, retail
                                    development and corporate governance with
                                    a strong focus on sustainable success.
                                </p>


                                <div className="mt-8 flex flex-wrap gap-2">

                                    {[
                                        "Strategy",
                                        "Brand",
                                        "Retail",
                                        "Governance",
                                    ].map((tag) => (

                                        <span
                                            key={tag}
                                            className="
                                                rounded-full
                                                border
                                                border-white/10
                                                bg-white/[0.04]
                                                px-4
                                                py-2
                                                text-xs
                                                text-gray-300
                                            "
                                        >
                                            {tag}
                                        </span>

                                    ))}

                                </div>


                                <div
                                    className="
                                        mt-9
                                        border-l-2
                                        border-white
                                        pl-5
                                    "
                                >

                                    <p className="max-w-xl text-lg font-medium italic leading-8 text-gray-200">
                                        “Committed to building Bharat Trend
                                        into one of India’s leading fashion
                                        and lifestyle retail brands.”
                                    </p>

                                </div>

                            </div>

                        </div>

                    </motion.div>


                    {/* =================================================
                        CORE TEAM — "Step card" style
                        (dark card, eyebrow + pill badge, icon tile,
                        title, description, checklist)
                    ================================================== */}

                    <div className="mt-20">

                        <div className="flex items-end justify-between gap-5">

                            <div>

                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/35">
                                    Core Team
                                </p>

                                <h3 className="mt-3 text-4xl font-black sm:text-5xl">
                                    Our People
                                </h3>

                            </div>


                            <div className="hidden items-center gap-2 text-xs uppercase tracking-widest text-black/30 sm:flex">

                                Meet the team

                                <ArrowDownRight size={16} />

                            </div>

                        </div>


                        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                            {team.map((member, index) => {

                                const Icon = member.icon;

                                return (

                                    <motion.div
                                        key={member.name}
                                        initial={{
                                            opacity: 0,
                                            y: 40,
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
                                            delay: index * 0.08,
                                            duration: 0.65,
                                        }}
                                        whileHover={{
                                            y: -8,
                                        }}
                                        className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/10
                    bg-[#111]
                    p-6
                    sm:p-7
                "
                                    >

                                        {/* PHOTO HEADER */}

                                        <div
                                            className="
                        relative
                        -mx-6
                        -mt-6
                        h-[280px]
                        overflow-hidden
                        bg-black
                        sm:-mx-7
                        sm:-mt-7
                        sm:h-[320px]
                    "
                                            style={{
                                                backgroundColor: `${member.accent}22`,
                                            }}
                                        >

                                            <motion.img
                                                src={member.image}
                                                alt={member.name}
                                                initial={{
                                                    scale: 1,
                                                }}
                                                whileHover={{
                                                    scale: 1.06,
                                                }}
                                                transition={{
                                                    duration: 0.7,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                                className="
                            block
                            h-full
                            w-full
                            object-cover
                        "
                                            />

                                            {/* NUMBER BADGE */}

                                            <span
                                                className="
                            absolute
                            right-4
                            top-4
                            z-10
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            text-xs
                            font-bold
                            text-black
                            shadow-lg
                        "
                                                style={{
                                                    backgroundColor: member.accent,
                                                }}
                                            >
                                                0{index + 1}
                                            </span>


                                            {/* ROLE PILL */}

                                            <span
                                                className="
                            absolute
                            left-4
                            top-4
                            z-10
                            rounded-full
                            border
                            px-3
                            py-1.5
                            text-[10px]
                            font-semibold
                            backdrop-blur-md
                        "
                                                style={{
                                                    borderColor: `${member.accent}80`,
                                                    backgroundColor: "rgba(0,0,0,0.65)",
                                                    color: member.accent,
                                                }}
                                            >
                                                {member.role}
                                            </span>

                                        </div>


                                        {/* MEMBER INFO */}

                                        <div className="mt-6">

                                            <p
                                                className="
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.2em]
                            text-gray-500
                        "
                                            >
                                                {member.department}
                                            </p>

                                            <h4
                                                className="
                            mt-1
                            text-xl
                            font-bold
                            leading-tight
                            text-white
                        "
                                            >
                                                {member.name}
                                            </h4>

                                        </div>


                                        {/* ICON CHIP */}

                                        <div className="mt-5 flex items-center gap-2.5">

                                            <div
                                                className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                        "
                                                style={{
                                                    backgroundColor: `${member.accent}1A`,
                                                    color: member.accent,
                                                }}
                                            >
                                                <Icon size={17} />
                                            </div>

                                            <span
                                                className="
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.2em]
                        "
                                                style={{
                                                    color: member.accent,
                                                }}
                                            >
                                                Member 0{index + 1}
                                            </span>

                                        </div>


                                        {/* DESCRIPTION */}

                                        <p className="mt-4 text-sm leading-6 text-gray-400">
                                            {member.description}
                                        </p>


                                        {/* CHECKLIST */}

                                        <div className="mt-5 space-y-2.5 border-t border-white/10 pt-5">

                                            {member.tags.map((tag) => (

                                                <div
                                                    key={tag}
                                                    className="flex items-center gap-2.5"
                                                >

                                                    <span
                                                        className="
                                    flex
                                    h-5
                                    w-5
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                "
                                                        style={{
                                                            backgroundColor: member.accent,
                                                            color: "#000",
                                                        }}
                                                    >
                                                        <Check
                                                            size={11}
                                                            strokeWidth={3}
                                                        />
                                                    </span>

                                                    <span className="text-sm text-gray-300">
                                                        {tag}
                                                    </span>

                                                </div>

                                            ))}

                                        </div>

                                    </motion.div>

                                );

                            })}

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                PHILOSOPHY — BLACK
            ===================================================== */}

            <section className="bg-black px-5 py-20 sm:px-8 md:py-28">

                <div className="mx-auto max-w-7xl">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                        }}
                        variants={fadeUp}
                        className="max-w-3xl"
                    >

                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-600">
                            Our Approach
                        </p>

                        <h2 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
                            Fashion

                            <span className="text-gray-600">
                                {" "}Philosophy
                            </span>
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-400">
                            We don't just make clothes — we create confidence,
                            celebrate culture, and deliver value.
                        </p>

                    </motion.div>


                    {/* BELIEF */}

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                        }}
                        variants={fadeUp}
                        className="
                            mt-14
                            overflow-hidden
                            rounded-[36px]
                            bg-white
                            p-8
                            text-black
                            sm:p-12
                            md:p-16
                        "
                    >

                        <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr]">

                            <div>

                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                                    Our Belief
                                </p>

                                <h3 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                                    Fashion Should Be

                                    <span className="block text-orange-500">
                                        For Everyone
                                    </span>
                                </h3>

                            </div>


                            <div>

                                <p className="leading-8 text-black/60">
                                    Great fashion is not about how expensive
                                    it is, but how confident it makes you
                                    feel. We design clothes that respect
                                    Indian values while embracing modern
                                    trends.
                                </p>


                                <div
                                    className="
                                        mt-7
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        bg-black
                                        px-5
                                        py-2.5
                                        text-sm
                                        font-semibold
                                        text-white
                                    "
                                >
                                    <Heart size={15} />
                                    Trusted by 10M+ Families
                                </div>

                            </div>

                        </div>

                    </motion.div>


                    {/* PHILOSOPHY CARDS */}

                    <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {philosophy.map((item, index) => {

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
                                    }}
                                    transition={{
                                        delay: index * 0.08,
                                    }}
                                    whileHover={{
                                        y: -8,
                                    }}
                                    className="
                                        rounded-[28px]
                                        border
                                        border-white/10
                                        bg-white/[0.04]
                                        p-6
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-white
                                            text-black
                                        "
                                    >
                                        <Icon size={21} />
                                    </div>

                                    <h3 className="mt-7 text-xl font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-gray-400">
                                        {item.description}
                                    </p>

                                </motion.div>

                            );

                        })}

                    </div>

                </div>

            </section>


            {/* =====================================================
                FINAL CTA — WHITE
            ===================================================== */}

            <section className="bg-white px-5 py-20 text-black sm:px-8 md:py-28">

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="
                        mx-auto
                        max-w-7xl
                        rounded-[40px]
                        bg-black
                        px-7
                        py-14
                        text-center
                        text-white
                        sm:px-12
                        sm:py-20
                    "
                >

                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-600">
                        Bharat Trend
                    </p>


                    <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
                        Fashion for Every

                        <span className="text-orange-500">
                            {" "}Bharatiya
                        </span>
                    </h2>


                    <p className="mx-auto mt-5 max-w-xl text-gray-400">
                        Trend for everyone.
                    </p>


                    <motion.button
                        whileHover={{
                            scale: 1.04,
                        }}
                        whileTap={{
                            scale: 0.96,
                        }}
                        className="
                            mt-9
                            inline-flex
                            cursor-pointer
                            items-center
                            gap-2
                            rounded-full
                            bg-white
                            px-7
                            py-3.5
                            text-sm
                            font-bold
                            text-black
                        "
                    >
                        Discover Bharat Trend

                        <ArrowRight size={17} />

                    </motion.button>

                </motion.div>

            </section>

        </main>
    );
};

export default AboutUsPage;