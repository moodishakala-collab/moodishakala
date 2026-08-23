import React, { useState } from "react";
import { motion } from "motion/react";
import {
    ArrowUpRight,
    Check,
    ChevronDown,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
} from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

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
                {/* Decorative Circles */}

                <div className="pointer-events-none absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full border border-white/[0.07]" />

                <div className="pointer-events-none absolute -bottom-60 -left-48 h-[600px] w-[600px] rounded-full border border-white/[0.07]" />

                <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
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
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {/* Label */}

                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-px w-10 bg-white/50" />

                            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                                Contact Us
                            </span>
                        </div>

                        {/* Heading */}

                        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                            Write
                            <span className="text-orange-500"> to Us</span>
                        </h1>

                        <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                            Have a question, feedback, or simply want to
                            connect? Fill out the form and our team will get
                            back to you within 24 hours.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                CONTACT AREA
            ====================================================== */}

            {/* =====================================================
    CONTACT AREA
====================================================== */}

            <section className="bg-[#f5f5f3] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
                <div className="mx-auto max-w-6xl">

                    <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* =================================================
                FORM
            ================================================== */}

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
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.65,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                    rounded-3xl
                    border
                    border-black/10
                    bg-white
                    p-5
                    shadow-[0_15px_45px_rgba(0,0,0,0.04)]
                    sm:p-6
                    lg:p-7
                "
                        >

                            {/* Header */}

                            <div className="mb-6">

                                <div className="flex items-center gap-2.5">

                                    <span className="h-px w-6 bg-black" />

                                    <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-black/40">
                                        Send a Message
                                    </span>

                                </div>

                                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                                    Let's talk.
                                </h2>

                                <p className="mt-2 max-w-md text-xs leading-5 text-black/45">
                                    Fill out the form and our team will get back to
                                    you within 24 hours.
                                </p>

                            </div>


                            {/* FORM */}

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >

                                {/* Name + Email */}

                                <div className="grid gap-4 sm:grid-cols-2">

                                    {/* Name */}

                                    <div>

                                        <label className="
                                mb-1.5
                                block
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.16em]
                                text-black
                            ">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            required
                                            className="
                                    h-11
                                    w-full
                                    rounded-xl
                                    border
                                    border-black/10
                                    bg-[#f8f8f6]
                                    px-3.5
                                    text-xs
                                    text-black
                                    outline-none
                                    transition-all
                                    duration-300
                                    placeholder:text-black/25
                                    focus:border-black/30
                                    focus:bg-white
                                    focus:shadow-[0_5px_20px_rgba(0,0,0,0.04)]
                                "
                                        />

                                    </div>


                                    {/* Email */}

                                    <div>

                                        <label className="
                                mb-1.5
                                block
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.16em]
                                text-black
                            ">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            required
                                            className="
                                    h-11
                                    w-full
                                    rounded-xl
                                    border
                                    border-black/10
                                    bg-[#f8f8f6]
                                    px-3.5
                                    text-xs
                                    text-black
                                    outline-none
                                    transition-all
                                    duration-300
                                    placeholder:text-black/25
                                    focus:border-black/30
                                    focus:bg-white
                                    focus:shadow-[0_5px_20px_rgba(0,0,0,0.04)]
                                "
                                        />

                                    </div>

                                </div>


                                {/* Phone + Subject */}

                                <div className="grid gap-4 sm:grid-cols-2">

                                    {/* Phone */}

                                    <div>

                                        <label className="
                                mb-1.5
                                block
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.16em]
                                text-black
                            ">
                                            Phone Number
                                        </label>

                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="
                                    h-11
                                    w-full
                                    rounded-xl
                                    border
                                    border-black/10
                                    bg-[#f8f8f6]
                                    px-3.5
                                    text-xs
                                    text-black
                                    outline-none
                                    transition-all
                                    duration-300
                                    placeholder:text-black/25
                                    focus:border-black/30
                                    focus:bg-white
                                    focus:shadow-[0_5px_20px_rgba(0,0,0,0.04)]
                                "
                                        />

                                    </div>


                                    {/* Subject */}

                                    <div>

                                        <label className="
                                mb-1.5
                                block
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.16em]
                                text-black
                            ">
                                            Subject
                                        </label>

                                        <div className="relative">

                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="
                                        h-11
                                        w-full
                                        appearance-none
                                        rounded-xl
                                        border
                                        border-black/10
                                        bg-[#f8f8f6]
                                        px-3.5
                                        pr-9
                                        text-xs
                                        text-black
                                        outline-none
                                        transition-all
                                        duration-300
                                        focus:border-black/30
                                        focus:bg-white
                                    "
                                            >

                                                <option value="">
                                                    Select Subject
                                                </option>

                                                <option value="General Inquiry">
                                                    General Inquiry
                                                </option>

                                                <option value="Product Inquiry">
                                                    Product Inquiry
                                                </option>

                                                <option value="Store Inquiry">
                                                    Store Inquiry
                                                </option>

                                                <option value="Business">
                                                    Business
                                                </option>

                                                <option value="Feedback">
                                                    Feedback
                                                </option>

                                            </select>


                                            <ChevronDown
                                                size={14}
                                                className="
                                        pointer-events-none
                                        absolute
                                        right-3.5
                                        top-1/2
                                        -translate-y-1/2
                                        text-black/35
                                    "
                                            />

                                        </div>

                                    </div>

                                </div>


                                {/* Message */}

                                <div>

                                    <label className="
                            mb-1.5
                            block
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.16em]
                            text-black
                        ">
                                        Your Message
                                    </label>

                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us how we can help..."
                                        rows={4}
                                        required
                                        className="
                                min-h-[105px]
                                w-full
                                resize-none
                                rounded-xl
                                border
                                border-black/10
                                bg-[#f8f8f6]
                                px-3.5
                                py-3
                                text-xs
                                leading-5
                                text-black
                                outline-none
                                transition-all
                                duration-300
                                placeholder:text-black/25
                                focus:border-black/30
                                focus:bg-white
                                focus:shadow-[0_5px_20px_rgba(0,0,0,0.04)]
                            "
                                    />

                                </div>


                                {/* Submit */}

                                <motion.button
                                    type="submit"
                                    whileHover={{
                                        scale: 1.02,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    className="
                            group
                            inline-flex
                            h-11
                            items-center
                            justify-center
                            gap-2.5
                            rounded-full
                            bg-black
                            px-5
                            text-xs
                            font-semibold
                            text-white
                            shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                            transition-all
                            duration-300
                            hover:bg-orange-500
                        "
                                >

                                    {submitted ? (
                                        <>
                                            <Check size={15} />
                                            Message Sent
                                        </>
                                    ) : (
                                        <>
                                            Send Message

                                            <span
                                                className="
                                        flex
                                        h-6
                                        w-6
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white
                                        text-black
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                            >
                                                <Send size={12} />
                                            </span>
                                        </>
                                    )}

                                </motion.button>

                            </form>

                        </motion.div>


                        {/* =================================================
                QUICK CONNECT
            ================================================== */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 25,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.65,
                                delay: 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="flex flex-col gap-4"
                        >

                            {/* Heading */}

                            <div
                                className="
                        rounded-3xl
                        bg-black
                        px-6
                        py-5
                        text-white
                    "
                            >

                                <p className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.22em]
                        text-white/40
                    ">
                                    Quick Connect
                                </p>

                                <div className="mt-1.5 flex items-end justify-between">

                                    <h2 className="
                            text-2xl
                            font-semibold
                            tracking-[-0.04em]
                        ">
                                        Reach Us
                                    </h2>

                                    <div className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            text-white/50
                        ">
                                        <ArrowUpRight size={15} />
                                    </div>

                                </div>

                            </div>


                            {/* Email */}

                            <motion.a
                                href="mailto:[email protected]"
                                whileHover={{
                                    y: -3,
                                }}
                                className="
                        group
                        rounded-[22px]
                        border
                        border-black/10
                        bg-white
                        p-5
                        shadow-[0_8px_30px_rgba(0,0,0,0.025)]
                        transition-shadow
                        duration-300
                        hover:shadow-lg
                    "
                            >

                                <div className="flex items-center justify-between">

                                    <div className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-black
                            text-white
                        ">
                                        <Mail size={17} />
                                    </div>

                                    <ArrowUpRight
                                        size={17}
                                        className="
                                text-black/25
                                transition-transform
                                duration-300
                                group-hover:-translate-y-1
                                group-hover:translate-x-1
                            "
                                    />

                                </div>

                                <p className="
                        mt-4
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-black/35
                    ">
                                    Email
                                </p>

                                <p className="mt-1.5 break-all text-xs font-semibold">
                                    [email protected]
                                </p>

                                <p className="mt-1.5 text-[11px] text-black/40">
                                    We reply within 24 hours
                                </p>

                            </motion.a>


                            {/* WhatsApp */}

                            <motion.a
                                href="https://wa.me/919937028629"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{
                                    y: -3,
                                }}
                                className="
                        group
                        rounded-[22px]
                        border
                        border-black/10
                        bg-white
                        p-5
                        shadow-[0_8px_30px_rgba(0,0,0,0.025)]
                        transition-shadow
                        duration-300
                        hover:shadow-lg
                    "
                            >

                                <div className="flex items-center justify-between">

                                    <div className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-black
                            text-white
                        ">
                                        <MessageCircle size={17} />
                                    </div>

                                    <ArrowUpRight
                                        size={17}
                                        className="
                                text-black/25
                                transition-transform
                                duration-300
                                group-hover:-translate-y-1
                                group-hover:translate-x-1
                            "
                                    />

                                </div>

                                <p className="
                        mt-4
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-black/35
                    ">
                                    WhatsApp
                                </p>

                                <p className="mt-1.5 text-xs font-semibold">
                                    +91 9937028629
                                </p>

                                <p className="mt-1.5 text-[11px] text-black/40">
                                    Instant support
                                </p>

                            </motion.a>


                            {/* Head Office */}

                            <motion.div
                                whileHover={{
                                    y: -3,
                                }}
                                className="
                        rounded-[22px]
                        border
                        border-black/10
                        bg-white
                        p-5
                        shadow-[0_8px_30px_rgba(0,0,0,0.025)]
                        transition-shadow
                        duration-300
                        hover:shadow-lg
                    "
                            >

                                <div className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-black
                        text-white
                    ">
                                    <MapPin size={17} />
                                </div>

                                <p className="
                        mt-4
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-black/35
                    ">
                                    Head Office
                                </p>

                                <p className="
                        mt-1.5
                        text-xs
                        font-semibold
                        leading-5
                    ">
                                    Bonaigarh, Odisha - 770038
                                </p>

                            </motion.div>

                        </motion.div>

                    </div>

                </div>
            </section>

            {/* =====================================================
                FINAL CTA
            ====================================================== */}

            <section className="bg-black px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
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
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="
                            relative
                            overflow-hidden
                            rounded-[32px]
                            border
                            border-white/10
                            bg-[#111]
                            px-6
                            py-14
                            text-center
                            sm:px-10
                            lg:px-20
                            lg:py-20
                        "
                    >
                        {/* Decorative Circle */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                left-1/2
                                top-0
                                h-72
                                w-72
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-full
                                border
                                border-white/5
                            "
                        />

                        <div className="relative">
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                                Bharat Trend
                            </p>

                            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                                We're always happy
                                <span className="block text-white/40">
                                    to hear from you.
                                </span>
                            </h2>

                            <div className="mt-8 flex flex-wrap justify-center gap-3">
                                {/* Email */}

                                <a
                                    href="mailto:[email protected]"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        bg-white
                                        px-6
                                        py-3.5
                                        text-sm
                                        font-semibold
                                        text-black
                                        transition-transform
                                        duration-300
                                        hover:scale-[1.03]
                                    "
                                >
                                    <Mail size={16} />
                                    Email Us
                                </a>

                                {/* Call */}

                                <a
                                    href="tel:+919937028629"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        border
                                        border-white/15
                                        px-6
                                        py-3.5
                                        text-sm
                                        font-semibold
                                        text-white
                                        transition-all
                                        duration-300
                                        hover:bg-white
                                        hover:text-black
                                    "
                                >
                                    <Phone size={16} />
                                    Call Us
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Contact;