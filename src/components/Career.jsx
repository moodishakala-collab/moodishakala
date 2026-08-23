import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
    ArrowDownRight,
    ArrowUpRight,
    BriefcaseBusiness,
    Check,
    ChevronDown,
    Clock3,
    Heart,
    MapPin,
    Send,
    Users,
    X,
    Zap,
} from "lucide-react";

const Career = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const jobs = [
        {
            title: "Store Manager",
            department: "Retail Operations",
            location: "Odisha",
            type: "Full Time",
            experience: "3+ Years",
            description:
                "Lead store operations, manage teams and create an excellent customer shopping experience.",
        },
        {
            title: "Fashion Merchandiser",
            department: "Merchandising",
            location: "Bhubaneswar",
            type: "Full Time",
            experience: "2+ Years",
            description:
                "Plan and develop fashion collections based on customer preferences, trends and market demand.",
        },
        {
            title: "Purchase Executive",
            department: "Purchase",
            location: "Bhubaneswar",
            type: "Full Time",
            experience: "1–3 Years",
            description:
                "Manage vendor relationships, sourcing and purchase activities across our growing retail network.",
        },
        {
            title: "Sales Executive",
            department: "Retail",
            location: "Odisha",
            type: "Full Time",
            experience: "0–2 Years",
            description:
                "Help customers discover the right products while delivering a warm and memorable shopping experience.",
        },
        {
            title: "Graphic Designer",
            department: "Creative",
            location: "Bhubaneswar",
            type: "Full Time",
            experience: "1–3 Years",
            description:
                "Create engaging visual content for campaigns, digital platforms, stores and brand communication.",
        },
        {
            title: "Digital Marketing Executive",
            department: "Marketing",
            location: "Bhubaneswar",
            type: "Full Time",
            experience: "1–3 Years",
            description:
                "Plan and execute digital campaigns to grow the Bharat Trend brand across online channels.",
        },
    ];

    const benefits = [
        {
            icon: Users,
            title: "Great People",
            description:
                "Work with passionate people who believe in building something meaningful.",
        },
        {
            icon: Zap,
            title: "Growth",
            description:
                "Learn, take ownership and grow with one of India's emerging retail brands.",
        },
        {
            icon: Heart,
            title: "People First",
            description:
                "We value respect, collaboration and an environment where everyone can contribute.",
        },
        {
            icon: BriefcaseBusiness,
            title: "Real Impact",
            description:
                "Your work directly contributes to our stores, customers and growing communities.",
        },
    ];

    const values = [
        "Customer First",
        "Think Big",
        "Stay Curious",
        "Own Your Work",
        "Respect Everyone",
        "Grow Together",
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
        }, 3500);
    };

    return (
        <main className="min-h-screen bg-white text-black">

            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative overflow-hidden bg-black text-white">
                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-40
                        -top-40
                        h-[550px]
                        w-[550px]
                        rounded-full
                        border
                        border-white/[0.05]
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
                        border-orange-500/10
                    "
                />

                <div
                    className="
                        relative
                        mx-auto
                        max-w-6xl
                        px-5
                        pb-16
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
                            lg:grid-cols-[1.25fr_0.75fr]
                        "
                    >
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
                                        rounded-full
                                        bg-orange-500
                                        px-4
                                        py-2
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-[0.2em]
                                    "
                                >
                                    Careers
                                </span>

                                <span className="h-px w-10 bg-white/20" />
                            </div>

                            <h1
                                className="
                                    text-6xl
                                    font-semibold
                                    leading-[0.88]
                                    tracking-[-0.075em]
                                    sm:text-7xl
                                    lg:text-[96px]
                                "
                            >
                                Build Your
                                <span className="block text-orange-500">
                                    Future.
                                </span>
                            </h1>

                            <p
                                className="
                                    mt-7
                                    max-w-xl
                                    text-sm
                                    leading-7
                                    text-white/45
                                    sm:text-base
                                "
                            >
                                Join Bharat Trend and help us
                                transform the way India shops
                                for fashion. Bring your ideas,
                                energy and ambition to a growing
                                team.
                            </p>

                            <a
                                href="#openings"
                                className="
                                    mt-8
                                    inline-flex
                                    h-12
                                    items-center
                                    gap-3
                                    rounded-full
                                    bg-white
                                    px-6
                                    text-xs
                                    font-semibold
                                    text-black
                                    transition-all
                                    duration-300
                                    hover:scale-[1.03]
                                "
                            >
                                Explore Opportunities

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
                                    <ArrowDownRight size={13} />
                                </span>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.15,
                            }}
                            className="flex justify-start lg:justify-end"
                        >
                            <div
                                className="
                                    relative
                                    h-64
                                    w-64
                                    rounded-[40px]
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    p-5
                                "
                            >
                                <div
                                    className="
                                        flex
                                        h-full
                                        flex-col
                                        justify-between
                                        rounded-[28px]
                                        border
                                        border-orange-500/20
                                        bg-orange-500
                                        p-6
                                        text-black
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-black
                                            text-white
                                        "
                                    >
                                        <Users size={19} />
                                    </div>

                                    <div>
                                        <p
                                            className="
                                                text-5xl
                                                font-semibold
                                                tracking-[-0.07em]
                                            "
                                        >
                                            01
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-[10px]
                                                font-bold
                                                uppercase
                                                tracking-[0.18em]
                                                text-black/50
                                            "
                                        >
                                            Growing Together
                                        </p>
                                    </div>

                                    <p
                                        className="
                                            text-xs
                                            font-semibold
                                            leading-5
                                        "
                                    >
                                        One team.
                                        <br />
                                        One vision.
                                        <br />
                                        Bigger possibilities.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                INTRO
            ====================================================== */}

            <section
                className="
                    bg-white
                    px-5
                    py-16
                    sm:px-8
                    lg:px-10
                    lg:py-24
                "
            >
                <div
                    className="
                        mx-auto
                        grid
                        max-w-6xl
                        gap-10
                        lg:grid-cols-[0.75fr_1.25fr]
                    "
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -25,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                    >
                        <p
                            className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-orange-500
                            "
                        >
                            Why Bharat Trend
                        </p>

                        <h2
                            className="
                                mt-4
                                text-4xl
                                font-semibold
                                leading-[0.95]
                                tracking-[-0.06em]
                                sm:text-5xl
                            "
                        >
                            More than
                            <span className="block text-black/30">
                                just a job.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
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
                        }}
                    >
                        <p
                            className="
                                text-lg
                                leading-8
                                text-black/65
                                sm:text-xl
                            "
                        >
                            At Bharat Trend, we're building
                            something bigger than a fashion
                            retailer. We're creating a brand
                            that understands Bharat, celebrates
                            its people and makes great fashion
                            accessible to everyone.
                        </p>

                        <p
                            className="
                                mt-6
                                text-sm
                                leading-7
                                text-black/40
                            "
                        >
                            Whether you're working in retail,
                            technology, merchandising, finance,
                            marketing or operations, you'll have
                            the opportunity to make a real impact
                            as we grow.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                OPEN POSITIONS
            ====================================================== */}

            <section
                id="openings"
                className="
                    bg-[#f3f3f0]
                    px-5
                    py-16
                    sm:px-8
                    lg:px-10
                    lg:py-24
                "
            >
                <div className="mx-auto max-w-6xl">
                    <div
                        className="
                            mb-10
                            flex
                            flex-col
                            justify-between
                            gap-5
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
                                Opportunities
                            </p>

                            <h2
                                className="
                                    mt-3
                                    text-4xl
                                    font-semibold
                                    tracking-[-0.06em]
                                    sm:text-5xl
                                "
                            >
                                Open Positions
                            </h2>
                        </div>

                        <p
                            className="
                                max-w-sm
                                text-xs
                                leading-6
                                text-black/40
                                sm:text-sm
                            "
                        >
                            Find a role where your skills,
                            ideas and ambition can make a
                            difference.
                        </p>
                    </div>

                    <div className="space-y-3">
                        {jobs.map((job, index) => (
                            <motion.button
                                key={job.title}
                                type="button"
                                initial={{
                                    opacity: 0,
                                    y: 18,
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
                                    duration: 0.5,
                                    delay: index * 0.05,
                                }}
                                onClick={() =>
                                    setSelectedJob(job)
                                }
                                className="
                                    group
                                    grid
                                    w-full
                                    items-center
                                    gap-5
                                    rounded-[22px]
                                    border
                                    border-black/[0.06]
                                    bg-white
                                    p-5
                                    text-left
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]
                                    sm:grid-cols-[1.2fr_0.8fr_auto]
                                    sm:p-6
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-start
                                        gap-4
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-black
                                            text-white
                                            transition-colors
                                            duration-300
                                            group-hover:bg-orange-500
                                        "
                                    >
                                        <BriefcaseBusiness
                                            size={18}
                                        />
                                    </div>

                                    <div>
                                        <p
                                            className="
                                                text-[9px]
                                                font-bold
                                                uppercase
                                                tracking-[0.17em]
                                                text-black/35
                                            "
                                        >
                                            {job.department}
                                        </p>

                                        <h3
                                            className="
                                                mt-1
                                                text-lg
                                                font-semibold
                                                tracking-[-0.035em]
                                                sm:text-xl
                                            "
                                        >
                                            {job.title}
                                        </h3>
                                    </div>
                                </div>

                                <div
                                    className="
                                        flex
                                        flex-wrap
                                        gap-2
                                    "
                                >
                                    <span
                                        className="
                                            inline-flex
                                            items-center
                                            gap-1.5
                                            rounded-full
                                            bg-[#f3f3f0]
                                            px-3
                                            py-2
                                            text-[9px]
                                            font-semibold
                                            text-black/50
                                        "
                                    >
                                        <MapPin size={12} />
                                        {job.location}
                                    </span>

                                    <span
                                        className="
                                            inline-flex
                                            items-center
                                            gap-1.5
                                            rounded-full
                                            bg-[#f3f3f0]
                                            px-3
                                            py-2
                                            text-[9px]
                                            font-semibold
                                            text-black/50
                                        "
                                    >
                                        <Clock3 size={12} />
                                        {job.experience}
                                    </span>
                                </div>

                                <span
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        self-start
                                        rounded-full
                                        bg-black
                                        text-white
                                        transition-all
                                        duration-300
                                        group-hover:bg-orange-500
                                        group-hover:-rotate-45
                                        sm:self-center
                                    "
                                >
                                    <ArrowUpRight size={16} />
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
                BENEFITS
            ====================================================== */}

            <section
                className="
                    bg-black
                    px-5
                    py-16
                    text-white
                    sm:px-8
                    lg:px-10
                    lg:py-24
                "
            >
                <div className="mx-auto max-w-6xl">
                    <div
                        className="
                            mb-10
                            max-w-xl
                        "
                    >
                        <p
                            className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-orange-500
                            "
                        >
                            Life at Bharat Trend
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
                            Work with purpose.
                            <span className="block text-white/25">
                                Grow with people.
                            </span>
                        </h2>
                    </div>

                    <div
                        className="
                            grid
                            gap-px
                            overflow-hidden
                            rounded-[26px]
                            border
                            border-white/10
                            bg-white/10
                            sm:grid-cols-2
                            lg:grid-cols-4
                        "
                    >
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;

                            return (
                                <motion.div
                                    key={benefit.title}
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
                                        delay: index * 0.06,
                                    }}
                                    className="
                                        bg-[#0d0d0d]
                                        p-6
                                        sm:p-7
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
                                            bg-orange-500
                                            text-black
                                        "
                                    >
                                        <Icon size={18} />
                                    </div>

                                    <h3
                                        className="
                                            mt-7
                                            text-lg
                                            font-semibold
                                            tracking-[-0.03em]
                                        "
                                    >
                                        {benefit.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-3
                                            text-xs
                                            leading-6
                                            text-white/35
                                        "
                                    >
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =====================================================
                VALUES
            ====================================================== */}

            <section
                className="
                    bg-white
                    px-5
                    py-16
                    sm:px-8
                    lg:px-10
                    lg:py-24
                "
            >
                <div
                    className="
                        mx-auto
                        grid
                        max-w-6xl
                        gap-12
                        lg:grid-cols-[0.8fr_1.2fr]
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
                            Our Culture
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
                            What we
                            <span className="block text-black/25">
                                believe in.
                            </span>
                        </h2>

                        <p
                            className="
                                mt-6
                                max-w-md
                                text-sm
                                leading-7
                                text-black/40
                            "
                        >
                            We believe great companies are
                            built by people who care about their
                            work and the people around them.
                        </p>
                    </div>

                    <div
                        className="
                            grid
                            grid-cols-2
                            gap-3
                        "
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={value}
                                initial={{
                                    opacity: 0,
                                    scale: 0.96,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.05,
                                }}
                                className="
                                    rounded-[20px]
                                    border
                                    border-black/[0.07]
                                    bg-[#f3f3f0]
                                    p-5
                                    sm:p-6
                                "
                            >
                                <div
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-black
                                        text-white
                                    "
                                >
                                    <Check size={14} />
                                </div>

                                <p
                                    className="
                                        mt-6
                                        text-sm
                                        font-semibold
                                        sm:text-base
                                    "
                                >
                                    {value}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
                APPLICATION
            ====================================================== */}

            <section
                className="
                    bg-[#f3f3f0]
                    px-5
                    py-16
                    sm:px-8
                    lg:px-10
                    lg:py-24
                "
            >
                <div
                    className="
                        mx-auto
                        grid
                        max-w-6xl
                        gap-10
                        lg:grid-cols-[0.75fr_1.25fr]
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
                            Start Your Journey
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
                            Don't see
                            <span className="block text-black/25">
                                your role?
                            </span>
                        </h2>

                        <p
                            className="
                                mt-6
                                max-w-md
                                text-sm
                                leading-7
                                text-black/40
                            "
                        >
                            Send us your details anyway. If
                            there's a future opportunity that
                            matches your profile, we'd love to
                            hear from you.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="
                            rounded-[26px]
                            bg-white
                            p-5
                            shadow-[0_12px_40px_rgba(0,0,0,0.05)]
                            sm:p-7
                        "
                    >
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label
                                    className="
                                        mb-2
                                        block
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-[0.15em]
                                        text-black/45
                                    "
                                >
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    className="
                                        h-11
                                        w-full
                                        rounded-xl
                                        border
                                        border-black/10
                                        bg-[#f8f8f6]
                                        px-4
                                        text-xs
                                        outline-none
                                        transition-all
                                        placeholder:text-black/25
                                        focus:border-orange-500
                                        focus:bg-white
                                    "
                                />
                            </div>

                            <div>
                                <label
                                    className="
                                        mb-2
                                        block
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-[0.15em]
                                        text-black/45
                                    "
                                >
                                    Email
                                </label>

                                <input
                                    type="email"
                                    required
                                    placeholder="you@example.com"
                                    className="
                                        h-11
                                        w-full
                                        rounded-xl
                                        border
                                        border-black/10
                                        bg-[#f8f8f6]
                                        px-4
                                        text-xs
                                        outline-none
                                        transition-all
                                        placeholder:text-black/25
                                        focus:border-orange-500
                                        focus:bg-white
                                    "
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label
                                className="
                                    mb-2
                                    block
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.15em]
                                    text-black/45
                                "
                            >
                                Interested In
                            </label>

                            <div className="relative">
                                <select
                                    required
                                    className="
                                        h-11
                                        w-full
                                        appearance-none
                                        rounded-xl
                                        border
                                        border-black/10
                                        bg-[#f8f8f6]
                                        px-4
                                        text-xs
                                        text-black/70
                                        outline-none
                                        focus:border-orange-500
                                        focus:bg-white
                                    "
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select a department
                                    </option>
                                    <option>
                                        Retail Operations
                                    </option>
                                    <option>
                                        Merchandising
                                    </option>
                                    <option>
                                        Purchase
                                    </option>
                                    <option>
                                        Marketing
                                    </option>
                                    <option>
                                        Creative
                                    </option>
                                    <option>
                                        Other
                                    </option>
                                </select>

                                <ChevronDown
                                    size={15}
                                    className="
                                        pointer-events-none
                                        absolute
                                        right-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-black/35
                                    "
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label
                                className="
                                    mb-2
                                    block
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.15em]
                                    text-black/45
                                "
                            >
                                Message
                            </label>

                            <textarea
                                required
                                rows={4}
                                placeholder="Tell us a little about yourself..."
                                className="
                                    min-h-[105px]
                                    w-full
                                    resize-none
                                    rounded-xl
                                    border
                                    border-black/10
                                    bg-[#f8f8f6]
                                    px-4
                                    py-3
                                    text-xs
                                    leading-5
                                    outline-none
                                    transition-all
                                    placeholder:text-black/25
                                    focus:border-orange-500
                                    focus:bg-white
                                "
                            />
                        </div>

                        <button
                            type="submit"
                            className="
                                mt-5
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
                                transition-all
                                duration-300
                                hover:bg-orange-500
                            "
                        >
                            {submitted ? (
                                <>
                                    <Check size={15} />
                                    Application Sent
                                </>
                            ) : (
                                <>
                                    Send Application
                                    <Send size={14} />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </section>

            {/* =====================================================
                FINAL CTA
            ====================================================== */}

            <section className="bg-black px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-20">
                <div className="mx-auto max-w-6xl">
                    <div
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
                                Your Next Chapter
                            </p>

                            <h2
                                className="
                                    mt-3
                                    text-4xl
                                    font-semibold
                                    tracking-[-0.06em]
                                    sm:text-5xl
                                "
                            >
                                Let's build Bharat
                                <span className="text-white/25">
                                    {" "}together.
                                </span>
                            </h2>
                        </div>

                        <a
                            href="#openings"
                            className="
                                inline-flex
                                h-12
                                w-fit
                                items-center
                                gap-3
                                rounded-full
                                bg-white
                                px-6
                                text-xs
                                font-semibold
                                text-black
                                transition-transform
                                duration-300
                                hover:scale-[1.03]
                            "
                        >
                            View Openings

                            <ArrowUpRight size={15} />
                        </a>
                    </div>
                </div>
            </section>

            {/* =====================================================
                JOB MODAL
            ====================================================== */}

            <AnimatePresence>
                {selectedJob && (
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
                            setSelectedJob(null)
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
                                scale: 0.95,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.95,
                                y: 20,
                            }}
                            onClick={(e) =>
                                e.stopPropagation()
                            }
                            className="
                                relative
                                w-full
                                max-w-2xl
                                rounded-[28px]
                                bg-white
                                p-6
                                shadow-2xl
                                sm:p-8
                            "
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    setSelectedJob(null)
                                }
                                className="
                                    absolute
                                    right-4
                                    top-4
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-black
                                    text-white
                                "
                            >
                                <X size={15} />
                            </button>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-orange-500
                                "
                            >
                                <BriefcaseBusiness size={20} />
                            </div>

                            <p
                                className="
                                    mt-6
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.2em]
                                    text-orange-500
                                "
                            >
                                {selectedJob.department}
                            </p>

                            <h2
                                className="
                                    mt-2
                                    text-3xl
                                    font-semibold
                                    tracking-[-0.05em]
                                "
                            >
                                {selectedJob.title}
                            </h2>

                            <div
                                className="
                                    mt-5
                                    flex
                                    flex-wrap
                                    gap-2
                                "
                            >
                                <span
                                    className="
                                        flex
                                        items-center
                                        gap-1.5
                                        rounded-full
                                        bg-[#f3f3f0]
                                        px-3
                                        py-2
                                        text-[9px]
                                        font-semibold
                                    "
                                >
                                    <MapPin size={12} />
                                    {selectedJob.location}
                                </span>

                                <span
                                    className="
                                        rounded-full
                                        bg-[#f3f3f0]
                                        px-3
                                        py-2
                                        text-[9px]
                                        font-semibold
                                    "
                                >
                                    {selectedJob.type}
                                </span>

                                <span
                                    className="
                                        rounded-full
                                        bg-[#f3f3f0]
                                        px-3
                                        py-2
                                        text-[9px]
                                        font-semibold
                                    "
                                >
                                    {selectedJob.experience}
                                </span>
                            </div>

                            <div
                                className="
                                    my-6
                                    border-t
                                    border-black/[0.08]
                                "
                            />

                            <p
                                className="
                                    text-sm
                                    leading-7
                                    text-black/55
                                "
                            >
                                {selectedJob.description}
                            </p>

                            <div className="mt-6">
                                <p
                                    className="
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-[0.18em]
                                        text-black/35
                                    "
                                >
                                    What you'll do
                                </p>

                                <ul className="mt-4 space-y-3">
                                    {[
                                        "Work closely with the team to achieve business goals.",
                                        "Deliver excellent customer and team experiences.",
                                        "Take ownership of your responsibilities.",
                                    ].map((item) => (
                                        <li
                                            key={item}
                                            className="
                                                flex
                                                items-start
                                                gap-3
                                                text-xs
                                                leading-5
                                                text-black/55
                                            "
                                        >
                                            <span
                                                className="
                                                    mt-1
                                                    flex
                                                    h-4
                                                    w-4
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-orange-500
                                                    text-black
                                                "
                                            >
                                                <Check size={9} />
                                            </span>

                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="#application"
                                onClick={() =>
                                    setSelectedJob(null)
                                }
                                className="
                                    mt-7
                                    flex
                                    h-11
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
                                "
                            >
                                Apply For This Position
                                <ArrowUpRight size={14} />
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default Career;