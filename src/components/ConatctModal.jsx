'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
    Mail,
    User,
    Phone,
    X,
    Send,
    CircleDashed,
    ChevronDown,
} from 'lucide-react'

import logo from "../assets/logo.jpeg"

const ConatctModal = ({ open, onClose }) => {
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })

    // =========================
    // HANDLE INPUT CHANGE
    // =========================
    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    // =========================
    // HANDLE SUBMIT
    // FRONTEND ONLY
    // =========================
    const handleSubmit = (e) => {
        e.preventDefault()

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            setSubmitted(true)

            setFormData({
                fullName: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            })
        }, 800)
    }

    // =========================
    // HANDLE CLOSE
    // =========================
    const handleClose = () => {
        setSubmitted(false)
        setLoading(false)

        setFormData({
            fullName: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        })

        onClose()
    }

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* ================================================
                        BACKDROP
                    ================================================= */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={handleClose}
                        className="
                            fixed
                            inset-0
                            z-[90]
                            bg-black/80
                            backdrop-blur-md
                        "
                    />

                    {/* ================================================
                        MODAL WRAPPER
                    ================================================= */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.94,
                            y: 40,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.94,
                            y: 40,
                        }}
                        transition={{
                            duration: 0.35,
                            ease: 'easeOut',
                        }}
                        className="
                            fixed
                            inset-0
                            z-[100]
                            flex
                            items-center
                            justify-center
                            px-4
                            py-6
                        "
                    >
                        {/* ================================================
                            MODAL
                        ================================================= */}
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="
                                relative
                                w-full
                                max-w-2xl
                                max-h-[92vh]
                                overflow-y-auto
                                scrollbar-hide
                                scroll-smooth
                                rounded-3xl
                                bg-white
                                border
                                border-black/10
                                shadow-[0_40px_100px_rgba(0,0,0,0.35)]
                                p-6
                                sm:p-8
                                text-black
                            "
                        >

                            {/* ============================================
                                CLOSE BUTTON
                            ============================================= */}
                            <motion.button
                                whileHover={{
                                    rotate: 90,
                                    scale: 1.08,
                                }}
                                whileTap={{
                                    scale: 0.9,
                                }}
                                transition={{
                                    duration: 0.2,
                                }}
                                onClick={handleClose}
                                aria-label="Close contact modal"
                                className="
                                    absolute
                                    right-4
                                    top-4
                                    z-20
                                    w-9
                                    h-9
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    text-gray-500
                                    hover:text-black
                                    hover:bg-gray-100
                                    transition
                                    cursor-pointer
                                "
                            >
                                <X size={20} />
                            </motion.button>

                            {/* ============================================
                                HEADER
                            ============================================= */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 15,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.1,
                                    duration: 0.3,
                                }}
                                className="
                                    text-center
                                    mb-7
                                    pr-8
                                    pl-8
                                "
                            >

                                {/* ========================================
                                    LOGO
                                ========================================= */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0.7,
                                        y: -15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.12,
                                        duration: 0.5,
                                        type: 'spring',
                                        stiffness: 180,
                                        damping: 14,
                                    }}
                                    className="
                                        mx-auto
                                        
                                        flex
                                        items-center
                                        justify-center
                                        w-20
                                        h-20
                                        sm:w-28
                                        sm:h-28
                                    "
                                >
                                    <motion.img
                                        src = {logo} 
                                        alt="Logo"
                                        whileHover={{
                                            scale: 1.05,
                                        }}
                                        transition={{
                                            duration: 0.25,
                                        }}
                                        className="
                                            w-full
                                            h-full
                                            object-contain
                                        "
                                    />
                                </motion.div>

                                {/* TITLE */}
                                <motion.h1
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.2,
                                    }}
                                    className="
                                        text-2xl
                                        sm:text-3xl
                                        font-extrabold
                                        tracking-tight
                                    "
                                >
                                    Enquiry
                                </motion.h1>

                                {/* DESCRIPTION */}
                                <motion.p
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.25,
                                    }}
                                    className="
                                        mt-2
                                        text-sm
                                        text-gray-500
                                        leading-relaxed
                                    "
                                >
                                    We'd love to hear from you. Send us a
                                    message and we'll get back to you soon.
                                </motion.p>

                            </motion.div>

                            {/* ================================================
                                CONTENT
                            ================================================= */}
                            <AnimatePresence mode="wait">

                                {!submitted ? (

                                    /* ========================================
                                        FORM
                                    ========================================= */
                                    <motion.form
                                        key="contact-form"
                                        initial={{
                                            opacity: 0,
                                            y: 15,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -15,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >

                                        {/* ====================================
                                            NAME + EMAIL
                                        ===================================== */}
                                        <div
                                            className="
                                                grid
                                                grid-cols-1
                                                sm:grid-cols-2
                                                gap-4
                                            "
                                        >

                                            {/* NAME */}
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    x: -15,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay: 0.15,
                                                }}
                                            >
                                                <label
                                                    className="
                                                        block
                                                        text-sm
                                                        font-semibold
                                                        mb-2
                                                    "
                                                >
                                                    Full Name
                                                </label>

                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-3
                                                        border
                                                        border-black/15
                                                        rounded-xl
                                                        px-4
                                                        py-3
                                                        focus-within:border-black
                                                        focus-within:ring-2
                                                        focus-within:ring-black/5
                                                        transition
                                                    "
                                                >
                                                    <User
                                                        size={18}
                                                        className="
                                                            text-gray-400
                                                            shrink-0
                                                        "
                                                    />

                                                    <input
                                                        type="text"
                                                        name="fullName"
                                                        value={
                                                            formData.fullName
                                                        }
                                                        onChange={
                                                            handleChange
                                                        }
                                                        placeholder="Enter your name"
                                                        required
                                                        className="
                                                            w-full
                                                            bg-transparent
                                                            outline-none
                                                            text-sm
                                                            placeholder:text-gray-400
                                                        "
                                                    />
                                                </div>
                                            </motion.div>

                                            {/* EMAIL */}
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    x: 15,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay: 0.2,
                                                }}
                                            >
                                                <label
                                                    className="
                                                        block
                                                        text-sm
                                                        font-semibold
                                                        mb-2
                                                    "
                                                >
                                                    Email Address
                                                </label>

                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-3
                                                        border
                                                        border-black/15
                                                        rounded-xl
                                                        px-4
                                                        py-3
                                                        focus-within:border-black
                                                        focus-within:ring-2
                                                        focus-within:ring-black/5
                                                        transition
                                                    "
                                                >
                                                    <Mail
                                                        size={18}
                                                        className="
                                                            text-gray-400
                                                            shrink-0
                                                        "
                                                    />

                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={
                                                            formData.email
                                                        }
                                                        onChange={
                                                            handleChange
                                                        }
                                                        placeholder="you@example.com"
                                                        required
                                                        className="
                                                            w-full
                                                            bg-transparent
                                                            outline-none
                                                            text-sm
                                                            placeholder:text-gray-400
                                                        "
                                                    />
                                                </div>
                                            </motion.div>

                                        </div>

                                        {/* ====================================
                                            PHONE + SUBJECT
                                        ===================================== */}
                                        <div
                                            className="
                                                grid
                                                grid-cols-1
                                                sm:grid-cols-2
                                                gap-4
                                            "
                                        >

                                            {/* PHONE */}
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    x: -15,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay: 0.25,
                                                }}
                                            >
                                                <label
                                                    className="
                                                        block
                                                        text-sm
                                                        font-semibold
                                                        mb-2
                                                    "
                                                >
                                                    Phone Number
                                                </label>

                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-3
                                                        border
                                                        border-black/15
                                                        rounded-xl
                                                        px-4
                                                        py-3
                                                        focus-within:border-black
                                                        focus-within:ring-2
                                                        focus-within:ring-black/5
                                                        transition
                                                    "
                                                >
                                                    <Phone
                                                        size={18}
                                                        className="
                                                            text-gray-400
                                                            shrink-0
                                                        "
                                                    />

                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={
                                                            formData.phone
                                                        }
                                                        onChange={
                                                            handleChange
                                                        }
                                                        placeholder="+91 98765 43210"
                                                        className="
                                                            w-full
                                                            bg-transparent
                                                            outline-none
                                                            text-sm
                                                            placeholder:text-gray-400
                                                        "
                                                    />
                                                </div>
                                            </motion.div>

                                            {/* SUBJECT */}
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    x: 15,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay: 0.3,
                                                }}
                                            >
                                                <label
                                                    className="
                                                        block
                                                        text-sm
                                                        font-semibold
                                                        mb-2
                                                    "
                                                >
                                                    Subject
                                                </label>

                                                <div
                                                    className="
                                                        relative
                                                        flex
                                                        items-center
                                                        border
                                                        border-black/15
                                                        rounded-xl
                                                        px-4
                                                        py-3
                                                        focus-within:border-black
                                                        focus-within:ring-2
                                                        focus-within:ring-black/5
                                                        transition
                                                    "
                                                >
                                                    <select
                                                        name="subject"
                                                        value={
                                                            formData.subject
                                                        }
                                                        onChange={
                                                            handleChange
                                                        }
                                                        required
                                                        className="
                                                            appearance-none
                                                            w-full
                                                            bg-transparent
                                                            outline-none
                                                            text-sm
                                                            pr-8
                                                            cursor-pointer
                                                            text-gray-700
                                                        "
                                                    >
                                                        <option
                                                            value=""
                                                            disabled
                                                        >
                                                            Select a topic
                                                        </option>

                                                        <option value="General Inquiry">
                                                            General Inquiry
                                                        </option>

                                                        <option value="Store Feedback">
                                                            Store Feedback
                                                        </option>

                                                        <option value="Product Complaint">
                                                            Product Complaint
                                                        </option>

                                                        <option value="Business Partnership">
                                                            Business Partnership
                                                        </option>

                                                        <option value="Career Opportunity">
                                                            Career Opportunity
                                                        </option>
                                                    </select>

                                                    <ChevronDown
                                                        size={18}
                                                        className="
                                                            absolute
                                                            right-4
                                                            pointer-events-none
                                                            text-gray-400
                                                        "
                                                    />
                                                </div>
                                            </motion.div>

                                        </div>

                                        {/* ====================================
                                            MESSAGE
                                        ===================================== */}
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: 15,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                delay: 0.35,
                                            }}
                                        >
                                            <label
                                                className="
                                                    block
                                                    text-sm
                                                    font-semibold
                                                    mb-2
                                                "
                                            >
                                                Your Message
                                            </label>

                                            <div
                                                className="
                                                    border
                                                    border-black/15
                                                    rounded-xl
                                                    px-4
                                                    focus-within:border-black
                                                    focus-within:ring-2
                                                    focus-within:ring-black/5
                                                    transition
                                                "
                                            >
                                                <textarea
                                                    name="message"
                                                    value={
                                                        formData.message
                                                    }
                                                    onChange={
                                                        handleChange
                                                    }
                                                    placeholder="Write your message here..."
                                                    rows={5}
                                                    required
                                                    className="
                                                        w-full
                                                        bg-transparent
                                                        outline-none
                                                        text-sm
                                                        resize-none
                                                        placeholder:text-gray-400
                                                    "
                                                />
                                            </div>
                                        </motion.div>

                                        {/* ====================================
                                            SUBMIT
                                        ===================================== */}
                                        <motion.button
                                            initial={{
                                                opacity: 0,
                                                y: 15,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                delay: 0.4,
                                            }}
                                            whileHover={{
                                                scale: 1.01,
                                            }}
                                            whileTap={{
                                                scale: 0.98,
                                            }}
                                            disabled={loading}
                                            type="submit"
                                            className="
                                                w-full
                                                h-12
                                                rounded-xl
                                                bg-black
                                                text-white
                                                font-semibold
                                                flex
                                                items-center
                                                justify-center
                                                gap-2
                                                hover:bg-gray-900
                                                disabled:opacity-70
                                                disabled:cursor-not-allowed
                                                transition
                                                cursor-pointer
                                            "
                                        >
                                            {loading ? (
                                                <>
                                                    <CircleDashed
                                                        size={18}
                                                        className="
                                                            animate-spin
                                                        "
                                                    />

                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={18} />

                                                    Send Message
                                                </>
                                            )}
                                        </motion.button>

                                    </motion.form>

                                ) : (

                                    /* ========================================
                                        SUCCESS
                                    ========================================= */
                                    <motion.div
                                        key="success"
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
                                        exit={{
                                            opacity: 0,
                                            scale: 0.9,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: 'easeOut',
                                        }}
                                        className="
                                            py-10
                                            text-center
                                        "
                                    >
                                        <motion.div
                                            initial={{
                                                scale: 0,
                                                rotate: -20,
                                            }}
                                            animate={{
                                                scale: 1,
                                                rotate: 0,
                                            }}
                                            transition={{
                                                delay: 0.15,
                                                type: 'spring',
                                                stiffness: 180,
                                                damping: 12,
                                            }}
                                            className="
                                                mx-auto
                                                w-16
                                                h-16
                                                rounded-full
                                                bg-black
                                                text-white
                                                flex
                                                items-center
                                                justify-center
                                                mb-5
                                            "
                                        >
                                            <Send size={25} />
                                        </motion.div>

                                        <h2
                                            className="
                                                text-2xl
                                                font-bold
                                            "
                                        >
                                            Message Ready!
                                        </h2>

                                        <p
                                            className="
                                                mt-2
                                                text-sm
                                                text-gray-500
                                            "
                                        >
                                            Your message has been prepared
                                            successfully.
                                        </p>

                                        <motion.button
                                            whileHover={{
                                                scale: 1.02,
                                            }}
                                            whileTap={{
                                                scale: 0.98,
                                            }}
                                            onClick={handleClose}
                                            className="
                                                mt-7
                                                px-6
                                                h-11
                                                rounded-xl
                                                bg-black
                                                text-white
                                                text-sm
                                                font-semibold
                                                hover:bg-gray-900
                                                transition
                                                cursor-pointer
                                            "
                                        >
                                            Close
                                        </motion.button>
                                    </motion.div>
                                )}

                            </AnimatePresence>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default ConatctModal