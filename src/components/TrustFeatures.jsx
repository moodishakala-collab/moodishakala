import { motion } from "motion/react";
import {
    BadgeCheck,
    Truck,
    ShieldCheck,
    RefreshCcw,
    Headphones,
} from "lucide-react";

const FEATURES = [
    {
        title: "PREMIUM QUALITY",
        description: "Finest Fabrics",
        icon: BadgeCheck,
    },
    {
        title: "FREE SHIPPING",
        description: "Orders Above ₹999",
        icon: Truck,
    },
    {
        title: "SECURE PAYMENTS",
        description: "100% Safe & Secure",
        icon: ShieldCheck,
    },
    {
        title: "EASY RETURNS",
        description: "Hassle Free Returns",
        icon: RefreshCcw,
    },
    {
        title: "CUSTOMER SUPPORT",
        description: "We're Here To Help",
        icon: Headphones,
    },
];

const TrustFeatures = () => {
    return (
        <section className="relative w-full overflow-hidden bg-white py-6 sm:py-8 ">

            {/* TOP LINE */}
            <div className="absolute left-0 right-0 top-0 h-px bg-black/5" />

            {/* SLIDER */}
            <div className="relative">

                {/* LEFT FADE */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        left-0
                        top-0
                        z-10
                        h-full
                        w-16
                        bg-gradient-to-r
                        from-white
                        to-transparent
                        sm:w-24
                    "
                />

                {/* RIGHT FADE */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        right-0
                        top-0
                        z-10
                        h-full
                        w-16
                        bg-gradient-to-l
                        from-white
                        to-transparent
                        sm:w-24
                    "
                />

                {/* MARQUEE */}
                <motion.div
                    className="
                        flex
                        w-max
                        items-center
                        hover:[animation-play-state:paused]
                    "
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 24,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >

                    {/* FIRST SET */}
                    <div className="flex items-center">

                        {FEATURES.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <motion.div
                                    key={`first-${index}`}
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.5,
                                    }}
                                    className="
                                        flex
                                        min-w-[280px]
                                        items-center
                                        gap-4
                                        border-r
                                        border-black/10
                                        px-7
                                        py-2
                                        sm:min-w-[310px]
                                        sm:px-9
                                        lg:min-w-[360px]
                                    "
                                >

                                    {/* ICON */}
                                    <motion.div
                                        whileHover={{
                                            scale: 1.08,
                                            rotate: 3,
                                        }}
                                        transition={{
                                            duration: 0.25,
                                        }}
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-orange-500/30
                                            bg-orange-500/5
                                            text-black
                                        "
                                    >
                                        <Icon
                                            size={25}
                                            strokeWidth={1.8}
                                        />
                                    </motion.div>

                                    {/* CONTENT */}
                                    <div>

                                        <h3
                                            className="
                                                whitespace-nowrap
                                                text-sm
                                                font-extrabold
                                                tracking-[0.06em]
                                                text-black
                                                sm:text-base
                                            "
                                        >
                                            {feature.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-1
                                                whitespace-nowrap
                                                text-xs
                                                font-medium
                                                text-black/55
                                                sm:text-sm
                                            "
                                        >
                                            {feature.description}
                                        </p>

                                    </div>

                                </motion.div>
                            );
                        })}

                    </div>


                    {/* DUPLICATE SET FOR INFINITE LOOP */}
                    <div className="flex items-center">

                        {FEATURES.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <motion.div
                                    key={`second-${index}`}
                                    className="
                                        flex
                                        min-w-[280px]
                                        items-center
                                        gap-4
                                        border-r
                                        border-black/10
                                        px-7
                                        py-2
                                        sm:min-w-[310px]
                                        sm:px-9
                                        lg:min-w-[360px]
                                    "
                                >

                                    {/* ICON */}
                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-orange-500/30
                                            bg-orange-500/5
                                            text-black
                                        "
                                    >
                                        <Icon
                                            size={25}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    {/* CONTENT */}
                                    <div>

                                        <h3
                                            className="
                                                whitespace-nowrap
                                                text-sm
                                                font-extrabold
                                                tracking-[0.06em]
                                                text-black
                                                sm:text-base
                                            "
                                        >
                                            {feature.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-1
                                                whitespace-nowrap
                                                text-xs
                                                font-medium
                                                text-black/55
                                                sm:text-sm
                                            "
                                        >
                                            {feature.description}
                                        </p>

                                    </div>

                                </motion.div>
                            );
                        })}

                    </div>

                </motion.div>

            </div>

            {/* BOTTOM LINE */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-black/5" />

        </section>
    );
};

export default TrustFeatures;