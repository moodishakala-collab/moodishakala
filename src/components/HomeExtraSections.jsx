
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
import { useNavigate } from "react-router-dom";
import craft4 from "../assets/crafts/craft4.png"
import craft18 from "../assets/crafts/craft18.png"
import image6 from "../assets/crafts/image6.png"
import image4 from "../assets/crafts/image4.png"
import craft3 from "../assets/crafts/craft3.png"
import Embrio from "../assets/crafts/Embrio.png"

const HomeExtraSections = () => {

    const craftHighlights = [
        {
            tag: "HANDCRAFTED",
            price: "Mandala Art",
            items: "Intricate handmade mandala designs created with patience and creativity.",
            image: craft4,
        },
        {
            tag: "CREATIVE",
            price: "Resin Art",
            items: "Unique resin creations made with colours, textures and artistic details.",
            image: image6,
        },
        {
            tag: "ARTWORK",
            price: "Paintings",
            items: "Beautiful handmade paintings created to bring art and imagination to life.",
            image: image4,
        },
        {
            tag: "PERSONALISED",
            price: "Photo Frames",
            items: "Personalised frames designed to turn your favourite memories into keepsakes.",
            image: craft3,
        },
        {
            tag: "CUSTOMISED",
            price: "Customised Items",
            items: "Unique handmade products created specially according to your ideas and occasions.",
            image: craft18,
        },
        {
            tag: "HANDCRAFTED",
            price: "Embroidery",
            items: "Detailed handmade embroidery featuring creative patterns and delicate stitching.",
            image: Embrio,
        },
    ];

    const promises = [
        {
            icon: MapPin,
            number: "6+",
            suffix: "",
            title: "Craft Categories",
            description:
                "Explore handmade creations ranging from mandala and resin art to paintings, embroidery and personalised crafts.",
            smallText: "CRAFT FORMS",
        },
        {
            icon: ShieldCheck,
            number: "100%",
            suffix: "",
            title: "Handcrafted",
            description:
                "Every creation is made with care, creativity and attention to detail to give each piece its own character.",
            smallText: "HANDMADE",
        },
        {
            icon: TrendingUp,
            number: "1000+",
            suffix: "",
            title: "Creative Designs",
            description:
                "Discover artistic creations made for home decor, gifting, celebrations, memories and special occasions.",
            smallText: "CREATIVE ART",
        },
        {
            icon: RefreshCcw,
            number: "∞",
            suffix: "",
            title: "Custom Ideas",
            description:
                "Bring your ideas to life with personalised designs and customised handmade pieces created especially for you.",
            smallText: "PERSONALISED",
        },
    ];

    const customers = [
        {
            rating: "5.0",
            review:
                "The customised artwork was beautiful and exactly matched the idea I had in mind. The attention to detail was amazing.",
            name: "Priya Sharma",
            location: "Bhubaneswar, Odisha",
            image: "/customer/priya.jpg",
        },
        {
            rating: "4.5",
            review:
                "I loved the resin art and personalised frame. Everything felt thoughtfully handmade and made the perfect gift.",
            name: "Rahul Verma",
            location: "Cuttack, Odisha",
            image: "/customer/rahul.jpg",
        },
        {
            rating: "5.0",
            review:
                "A beautiful collection of handmade crafts. The customisation made the artwork feel much more personal and special.",
            name: "Anjali Patel",
            location: "Puri, Odisha",
            image: "/customer/anjali.jpg",
        },
    ];
    const navigate= useNavigate()
    return (
        <main className="w-full overflow-hidden bg-white text-black">

            {/* =====================================================
                EXPLORE OUR CRAFTS
            ====================================================== */}

            <section className="bg-black px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-18">

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
                                    Explore Our Crafts
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
                                    Art &amp;
                                    <span className="text-orange-600">
                                        {" "}Crafts.
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
                                Explore beautiful handmade creations made with
                                creativity, care and a personal touch.
                            </p>

                        </div>

                    </motion.div>


                    {/* Craft Highlights */}

                    <div
                        className="mt-12 flex gap-4 overflow-x-auto scrollbar-hide">
                        {craftHighlights.map((deal, index) => (

                            <motion.div
                                key={deal.tag + index}
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
                flex-shrink-0
                w-[280px]
                h-[240px]
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

                                {deal.image && (
                                    <img
                                        src={deal.image}
                                        alt={deal.price}
                                        className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                    "
                                    />
                                )}

                                {/* Dark overlay */}

                                <div
                                    className="
                    absolute
                    inset-0
                    bg-black/45
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
                        mt-10
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
                        text-white/50
                    "
                                    >
                                        {deal.items}
                                    </p>

                                    <button
                                        type="button"
                                        className="
                        mt-5
                        flex
                        items-center
                        gap-2
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-white
                    "
                   onClick={()=>navigate("/our-crafts")}

                                    >
                                        Explore

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
                OUR PROMISE
            ====================================================== */}

            <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-16">

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
                                Made With
                                <span className="text-blue-600">
                                    {" "}Creativity.
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
                                Creating handmade art, personalised gifts and
                                unique crafts that make every moment special.
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


                    {/* Craft Stats */}

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
                                6+
                            </p>

                            <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/35">
                                Craft Categories
                            </p>

                        </div>

                        <div className="border-b border-white/10 px-6 py-7 sm:border-b-0 sm:border-r">

                            <p className="text-3xl font-semibold">
                                100+
                            </p>

                            <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/35">
                                Handmade Designs
                            </p>

                        </div>

                        <div className="border-r border-white/10 px-6 py-7">

                            <p className="text-3xl font-semibold">
                                1000+
                            </p>

                            <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/35">
                                Custom Creations
                            </p>

                        </div>

                        <div className="px-6 py-7">

                            <p className="text-3xl font-semibold text-orange-500">
                                ∞
                            </p>

                            <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/35">
                                Creative Possibilities
                            </p>

                        </div>

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
                CUSTOMER STORIES
            ====================================================== */}

            <section className="bg-[#f2f2ef] px-5 py-20 sm:px-8 lg:px-10 lg:py-10">

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
                                Stories
                                <span className="text-orange-600">
                                    {" "}of Craft.
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
                                Discover how handmade art and personalised
                                creations become meaningful memories.
                            </p>

                        </div>

                    </motion.div>


                    {/* Customer Stories */}

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


                                {/* Story */}

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


                                {/* Person */}

                                <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-5">

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


                    {/* Stories CTA */}

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
                            Explore Gallery

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
                                Handmade With Love
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
                                Your idea.
                                <span className="block text-white/25">
                                    Your art. Your story.
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

            <hr className="text-white" />

        </main>
    );
};

export default HomeExtraSections;