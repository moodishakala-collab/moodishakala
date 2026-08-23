import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Phone } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const FloatingContactButton = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Contact page par button nahi dikhega
    if (
        location.pathname === "/contact" ||
        location.pathname === "/contact-us"
    ) {
        return null;
    }

    const handleContact = () => {
        navigate("/contact");
    };

    return (
        <motion.button
            onClick={handleContact}
            initial={{
                opacity: 0,
                scale: 0.7,
                y: 30,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                y: 0,
            }}
            whileHover={{
                scale: 1.05,
            }}
            whileTap={{
                scale: 0.94,
            }}
            transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="
                fixed
                bottom-16
                right-4
                z-[9998]

                group

                flex
                items-center
                justify-center
                gap-2

                rounded-full

                bg-orange-500
                text-white

                shadow-[0_15px_40px_rgba(0,0,0,0.25)]

                border
                border-white/10

                transition-all
                duration-300

                hover:bg-white
                hover:text-black

                sm:bottom-7
                sm:right-7

                sm:px-5
                sm:py-3.5

                cursor-pointer
            "
            aria-label="Contact Us"
        >

            {/* =================================================
                PHONE ICON
            ================================================= */}

            <span
                className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center

                    rounded-full

                    bg-white
                    text-black

                    transition-all
                    duration-300

                    group-hover:bg-black
                    group-hover:text-white

                    sm:h-8
                    sm:w-8
                "
            >
                <Phone
                    size={18}
                    className="
                        sm:hidden
                    "
                />

                <Phone
                    size={15}
                    className="
                        hidden
                        sm:block
                    "
                />
            </span>


            {/* =================================================
                TEXT
                Desktop only
            ================================================= */}

            <span
                className="
                    hidden
                    text-sm
                    font-semibold
                    tracking-wide

                    sm:block
                "
            >
                Contact Us
            </span>


            {/* =================================================
                ARROW
                Desktop only
            ================================================= */}

            <ArrowUpRight
                size={16}
                className="
                    hidden

                    transition-transform
                    duration-300

                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5

                    sm:block
                "
            />

        </motion.button>
    );
};

export default FloatingContactButton;