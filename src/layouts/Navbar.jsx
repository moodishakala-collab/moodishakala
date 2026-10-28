import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
    MapPin,
    Menu,
    MessageCircle,
    X,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import ConatctModal from "../components/ConatctModal";

// =====================================================
// NAVIGATION ITEMS
// =====================================================

const NavItems = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About Us",
        path: "/about-us",
    },
    {
        name: "Gallery",
        path: "/gallery",
    },
    {
        name: "Our Crafts",
        path: "/our-crafts",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];


// =====================================================
// NAVBAR COMPONENT
// =====================================================

const Navbar = () => {

    const { pathname } = useLocation();

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const [contactOpen, setContactOpen] = useState(false);


    // =================================================
    // CLOSE MOBILE MENU
    // =================================================

    const handleNavClick = () => {
        setMenuOpen(false);
    };


    // =================================================
    // OPEN CONTACT MODAL
    // =================================================

    const handleContactOpen = () => {
        setMenuOpen(false);
        setContactOpen(true);
    };


    // =================================================
    // CLOSE CONTACT MODAL
    // =================================================

    const handleContactClose = () => {
        setContactOpen(false);
    };


    // =================================================
    // OPEN STORE PAGE
    // =================================================

    const handleStoreOpen = () => {
        setMenuOpen(false);
        navigate("/stores");
    };


    return (
        <>

            {/* =====================================================
                NAVBAR
            ====================================================== */}

            <motion.div
                initial={{
                    y: -60,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.5,
                }}
                className={`
                    fixed
                    top-3
                    left-1/2
                    -translate-x-1/2

                    w-[94%]
                    md:w-[86%]

                    z-50

                    text-white

                    bg-black/90
                    backdrop-blur-xl

                    shadow-[0_15px_50px_rgba(0,0,0,0.7)]

                    transition-all
                    duration-300

                    ${menuOpen
                        ? "rounded-[28px]"
                        : "rounded-full"
                    }
                `}
            >

                <div className="mx-auto max-w-7xl px-4 py-1.5 md:px-8">

                    {/* =================================================
                        MAIN NAVBAR
                    ================================================== */}

                    <div className="flex h-16 items-center justify-between">


                        {/* =================================================
                            LOGO
                        ================================================= */}

                        <Link
                            to="/"
                            onClick={handleNavClick}
                            className="flex items-center"
                        >

                            <motion.img
                                src={Logo}
                                alt="Mo odisha kala"
                                whileHover={{
                                    scale: 1.04,
                                }}
                                transition={{
                                    duration: 0.2,
                                }}
                                className="h-auto w-20 object-contain md:w-15 bg-white rounded-full p-1"
                            />

                        </Link>


                        {/* =================================================
                            DESKTOP NAVIGATION
                        ================================================== */}

                        <div className="hidden items-center gap-5 lg:flex xl:gap-6">

                            {NavItems.map((item) => {

                                const active =
                                    pathname === item.path;

                                return (

                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={`
                                            relative
                                            whitespace-nowrap

                                            text-sm
                                            font-medium
                                            xl:text-[15px]

                                            transition-all
                                            duration-300

                                            ${active
                                                ? "text-white"
                                                : "text-gray-400 hover:text-white"
                                            }
                                        `}
                                    >

                                        {item.name}


                                        {/* ACTIVE UNDERLINE */}

                                        {active && (

                                            <motion.span
                                                layoutId="activeNav"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 350,
                                                    damping: 30,
                                                }}
                                                className="
                                                    absolute
                                                    -bottom-1
                                                    left-0
                                                    right-0

                                                    h-[2px]

                                                    rounded-full
                                                    bg-white
                                                "
                                            />

                                        )}

                                    </Link>

                                );

                            })}

                        </div>


                        {/* =================================================
                            DESKTOP ACTION BUTTONS
                        ================================================== */}

                        <div className="hidden items-center gap-2 lg:flex">


                            {/* <motion.button
                                onClick={handleStoreOpen}
                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                transition={{
                                    duration: 0.2,
                                }}
                                className="
                                    relative

                                    flex
                                    items-center
                                    justify-center
                                    gap-2

                                    rounded-full

                                    bg-orange-500

                                    px-4
                                    py-2.5

                                    text-sm
                                    font-medium
                                    text-black

                                    shadow-xl

                                    transition-colors
                                    duration-300

                                    hover:bg-orange-400

                                    cursor-pointer
                                "
                            >

                                <MapPin
                                    size={17}
                                    strokeWidth={2.3}
                                />

                                <span>
                                    Find Store
                                </span>


                                <motion.span
                                    animate={{
                                        opacity: [1, 0.2, 1],
                                        scale: [1, 0.85, 1],
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="
                                        absolute
                                        right-3
                                        top-2

                                        h-1.5
                                        w-1.5

                                        rounded-full
                                        bg-white
                                    "
                                />

                            </motion.button> */}


                            {/* ENQUIRY */}

                            <motion.button
                                onClick={handleContactOpen}
                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                transition={{
                                    duration: 0.2,
                                }}
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    gap-2

                                    rounded-full

                                    bg-white
                                    px-5
                                    py-2.5

                                    text-sm
                                    font-medium
                                    text-black

                                    shadow-xl

                                    transition-colors
                                    duration-300

                                    hover:bg-gray-100

                                    cursor-pointer
                                "
                            >

                                <MessageCircle size={18} />

                                <span>
                                    Enquiry
                                </span>

                            </motion.button>

                        </div>


                        {/* =================================================
                            MOBILE MENU BUTTON
                        ================================================== */}

                        <motion.button
                            whileTap={{
                                scale: 0.92,
                            }}
                            onClick={() =>
                                setMenuOpen(!menuOpen)
                            }
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center

                                rounded-full

                                bg-white
                                text-black

                                transition-transform
                                duration-300

                                hover:scale-105

                                cursor-pointer

                                lg:hidden
                            "
                            aria-label="Toggle navigation menu"
                        >

                            <AnimatePresence mode="wait">

                                {menuOpen ? (

                                    <motion.div
                                        key="close"
                                        initial={{
                                            rotate: -90,
                                            opacity: 0,
                                            scale: 0.7,
                                        }}
                                        animate={{
                                            rotate: 0,
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        exit={{
                                            rotate: 90,
                                            opacity: 0,
                                            scale: 0.7,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                    >

                                        <X
                                            size={23}
                                            strokeWidth={2.5}
                                        />

                                    </motion.div>

                                ) : (

                                    <motion.div
                                        key="menu"
                                        initial={{
                                            rotate: 90,
                                            opacity: 0,
                                            scale: 0.7,
                                        }}
                                        animate={{
                                            rotate: 0,
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        exit={{
                                            rotate: -90,
                                            opacity: 0,
                                            scale: 0.7,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                    >

                                        <Menu
                                            size={23}
                                            strokeWidth={2.5}
                                        />

                                    </motion.div>

                                )}

                            </AnimatePresence>

                        </motion.button>

                    </div>


                    {/* =================================================
                        MOBILE MENU
                    ================================================== */}

                    <AnimatePresence>

                        {menuOpen && (

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    height: 0,
                                    y: -10,
                                }}
                                animate={{
                                    opacity: 1,
                                    height: "auto",
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    height: 0,
                                    y: -10,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                                className="
                                    overflow-hidden
                                    lg:hidden
                                "
                            >

                                <div className="pb-5 pt-2">


                                    {/* =================================================
                                        DIVIDER
                                    ================================================== */}

                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scaleX: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scaleX: 1,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                        className="
                                            mb-3
                                            h-px
                                            bg-white/10
                                        "
                                    />


                                    {/* =================================================
                                        MOBILE NAVIGATION
                                    ================================================== */}

                                    <div className="flex flex-col gap-1.5">

                                        {NavItems.map(
                                            (item, index) => {

                                                const active =
                                                    pathname ===
                                                    item.path;

                                                return (

                                                    <motion.div
                                                        key={item.name}
                                                        initial={{
                                                            opacity: 0,
                                                            x: -15,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            x: 0,
                                                        }}
                                                        transition={{
                                                            delay:
                                                                index *
                                                                0.04,
                                                            duration: 0.25,
                                                            ease: "easeOut",
                                                        }}
                                                    >

                                                        <Link
                                                            to={item.path}
                                                            onClick={
                                                                handleNavClick
                                                            }
                                                            className={`
                                                                block

                                                                rounded-xl

                                                                px-5
                                                                py-3.5

                                                                text-sm
                                                                font-medium

                                                                transition-all
                                                                duration-300

                                                                ${active
                                                                    ? "bg-white text-black shadow-sm"
                                                                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                                                                }
                                                            `}
                                                        >

                                                            {item.name}

                                                        </Link>

                                                    </motion.div>

                                                );

                                            }
                                        )}

                                    </div>


                                    {/* =================================================
                                        MOBILE ACTION BUTTONS
                                    ================================================== */}

                                    <div className="mt-4 grid grid-cols-2 gap-2">

                                        {/* FIND STORE */}

                                        {/* <motion.button
                                            initial={{
                                                opacity: 0,
                                                y: 10,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                delay: 0.3,
                                                duration: 0.3,
                                            }}
                                            whileHover={{
                                                scale: 1.01,
                                            }}
                                            whileTap={{
                                                scale: 0.98,
                                            }}
                                            onClick={
                                                handleStoreOpen
                                            }
                                            className="
                                                relative

                                                flex
                                                w-full
                                                items-center
                                                justify-center
                                                gap-2

                                                rounded-xl

                                                bg-orange-500

                                                px-3
                                                py-3.5

                                                text-sm
                                                font-semibold
                                                text-black

                                                transition-all
                                                duration-300

                                                hover:bg-orange-400

                                                cursor-pointer
                                            "
                                        >

                                            <MapPin
                                                size={18}
                                                strokeWidth={2.2}
                                            />

                                            <span>
                                                Find Store
                                            </span>



                                            <motion.span
                                                animate={{
                                                    opacity: [
                                                        1,
                                                        0.2,
                                                        1,
                                                    ],
                                                    scale: [
                                                        1,
                                                        0.85,
                                                        1,
                                                    ],
                                                }}
                                                transition={{
                                                    duration: 1.2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                                className="
                                                    absolute
                                                    right-2
                                                    top-2

                                                    h-1.5
                                                    w-1.5

                                                    rounded-full
                                                    bg-white
                                                "
                                            />

                                        </motion.button> */}


                                        {/* ENQUIRY */}

                                        <motion.button
                                            initial={{
                                                opacity: 0,
                                                y: 10,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                delay: 0.35,
                                                duration: 0.3,
                                            }}
                                            whileHover={{
                                                scale: 1.01,
                                            }}
                                            whileTap={{
                                                scale: 0.98,
                                            }}
                                            onClick={
                                                handleContactOpen
                                            }
                                            className="
                                                flex
                                                w-full
                                                items-center
                                                justify-center
                                                gap-2

                                                rounded-xl

                                                bg-white

                                                px-3
                                                py-3.5

                                                text-sm
                                                font-semibold
                                                text-black

                                                transition-all
                                                duration-300

                                                hover:bg-gray-200

                                                cursor-pointer
                                            "
                                        >

                                            <MessageCircle
                                                size={18}
                                            />

                                            <span>
                                                Enquiry
                                            </span>

                                        </motion.button>

                                    </div>

                                </div>

                            </motion.div>

                        )}

                    </AnimatePresence>

                </div>

            </motion.div>


            {/* =====================================================
                CONTACT MODAL
            ====================================================== */}

            <ConatctModal
                open={contactOpen}
                onClose={handleContactClose}
            />

        </>
    );
};

export default Navbar;