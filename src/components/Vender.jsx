import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
    ArrowUpRight,
    Building2,
    Check,
    ChevronDown,
    FileUp,
    Package,
    X,
} from "lucide-react";

const Vender = () => {
    const [activeForm, setActiveForm] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const [landlordData, setLandlordData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        postalAddress: "",
        city: "",
        state: "",
        pinCode: "",
        landlordType: "",
        developerName: "",
        siteAddress: "",
        length: "",
        width: "",
        carpetArea: "",
        rate: "",
        floorType: "",
        file: null,
    });

    const [vendorData, setVendorData] = useState({
        companyName: "",
        businessType: "",
        address: "",
        city: "",
        state: "",
        pinCode: "",
        contactPerson: "",
        email: "",
        mobile: "",
        product: "",
        website: "",
        file: null,
    });

    const landlordChange = (e) => {
        const { name, value, files } = e.target;

        setLandlordData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const vendorChange = (e) => {
        const { name, value, files } = e.target;

        setVendorData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleLandlordSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
            setActiveForm(null);
        }, 2500);
    };

    const handleVendorSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
            setActiveForm(null);
        }, 2500);
    };

    const closeModal = () => {
        setActiveForm(null);
        setSubmitted(false);
    };

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

                {/* Orange Glow */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        -bottom-48
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
                        max-w-6xl
                        px-5
                        pb-20
                        pt-32
                        sm:px-8
                        lg:px-10
                        lg:pb-28
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
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="max-w-4xl"
                    >
                        <div className="mb-7 flex items-center gap-3">
                            <span
                                className="
                                    rounded-full
                                    bg-orange-500
                                    px-4
                                    py-2
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.2em]
                                    text-black
                                "
                            >
                                Partner With Us
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
                                lg:text-[92px]
                            "
                        >
                            Grow With
                            <span className="block text-orange-500">
                                Bharat Trend.
                            </span>
                        </h1>

                        <p
                            className="
                                mt-7
                                max-w-2xl
                                text-sm
                                font-medium
                                leading-7
                                text-white/70
                                sm:text-base
                            "
                        >
                            Whether you own a prime commercial property
                            or supply quality fashion products, partner
                            with Bharat Trend and become part of our
                            growing retail journey.
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
                            duration: 0.7,
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
                                01
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[10px]
                                    font-medium
                                    uppercase
                                    tracking-[0.15em]
                                    text-white/50
                                "
                            >
                                Showroom
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
                                02
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[10px]
                                    font-medium
                                    uppercase
                                    tracking-[0.15em]
                                    text-white/50
                                "
                            >
                                Partnership
                            </p>
                        </div>

                        <div className="px-5 py-5">
                            <p className="text-2xl font-semibold text-orange-500">
                                ∞
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[10px]
                                    font-medium
                                    uppercase
                                    tracking-[0.15em]
                                    text-white/50
                                "
                            >
                                Opportunity
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                INTRO
            ====================================================== */}

            <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
                <div className="mx-auto max-w-6xl">

                    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

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
                                Partner With Bharat Trend
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
                                Two ways
                                <span className="block text-black/35">
                                    to partner.
                                </span>
                            </h2>
                        </div>

                        <div>
                            <p
                                className="
                                    max-w-2xl
                                    text-lg
                                    font-medium
                                    leading-8
                                    text-black/75
                                "
                            >
                                Bharat Trend is expanding its retail
                                presence and supply network. We are
                                looking for the right property partners
                                and reliable fashion suppliers to grow
                                together.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* =====================================================
                TWO PARTNER OPTIONS
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
                <div className="mx-auto max-w-6xl">

                    <div className="grid gap-5 lg:grid-cols-2">

                        {/* =================================================
                            LANDLORD CARD
                        ================================================= */}

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
                            whileHover={{
                                y: -5,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-[30px]
                                bg-black
                                p-7
                                text-white
                                sm:p-9
                            "
                        >
                            <div
                                className="
                                    absolute
                                    -right-20
                                    -top-20
                                    h-60
                                    w-60
                                    rounded-full
                                    bg-orange-500/10
                                    blur-3xl
                                "
                            />

                            <div className="relative">

                                <div className="flex items-start justify-between">

                                    <div
                                        className="
                                            flex
                                            h-14
                                            w-14
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-orange-500
                                            text-black
                                        "
                                    >
                                        <Building2 size={24} />
                                    </div>

                                    <span
                                        className="
                                            rounded-full
                                            border
                                            border-white/10
                                            px-3
                                            py-1.5
                                            text-[9px]
                                            font-bold
                                            uppercase
                                            tracking-[0.15em]
                                            text-white/60
                                        "
                                    >
                                        Property
                                    </span>

                                </div>

                                <p
                                    className="
                                        mt-10
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.2em]
                                        text-orange-500
                                    "
                                >
                                    Available Showroom Space
                                </p>

                                <h3
                                    className="
                                        mt-3
                                        max-w-md
                                        text-3xl
                                        font-semibold
                                        leading-tight
                                        tracking-[-0.05em]
                                        sm:text-4xl
                                    "
                                >
                                    Have a prime commercial property?
                                </h3>

                                <p
                                    className="
                                        mt-5
                                        max-w-lg
                                        text-sm
                                        font-medium
                                        leading-7
                                        text-white/70
                                    "
                                >
                                    Transform your valuable real estate
                                    into a thriving Bharat Trend retail
                                    destination.
                                </p>

                                <div className="mt-7 space-y-3">

                                    {[
                                        "Prime high-street locations",
                                        "Popular shopping malls",
                                        "Spacious & accessible properties",
                                        "Long-term partnership opportunity",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                text-sm
                                                font-medium
                                                text-white/80
                                            "
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
                                                    bg-white/10
                                                "
                                            >
                                                <Check size={11} />
                                            </span>

                                            {item}
                                        </div>
                                    ))}

                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveForm("landlord")
                                    }
                                    className="
                                        mt-9
                                        flex
                                        h-12
                                        w-full
                                        items-center
                                        justify-center
                                        gap-3
                                        rounded-full
                                        bg-white
                                        text-sm
                                        font-semibold
                                        text-black
                                        transition-all
                                        duration-300
                                        hover:bg-orange-500
                                    "
                                >
                                    Register Your Property

                                    <ArrowUpRight size={16} />
                                </button>

                            </div>
                        </motion.div>

                        {/* =================================================
                            VENDOR CARD
                        ================================================= */}

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
                            transition={{
                                duration: 0.5,
                                delay: 0.1,
                            }}
                            whileHover={{
                                y: -5,
                            }}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-[30px]
                                bg-white
                                p-7
                                shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                                sm:p-9
                            "
                        >
                            <div
                                className="
                                    absolute
                                    -right-20
                                    -top-20
                                    h-60
                                    w-60
                                    rounded-full
                                    bg-orange-500/10
                                    blur-3xl
                                "
                            />

                            <div className="relative">

                                <div className="flex items-start justify-between">

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
                                        <Package size={24} />
                                    </div>

                                    <span
                                        className="
                                            rounded-full
                                            bg-black
                                            px-3
                                            py-1.5
                                            text-[9px]
                                            font-bold
                                            uppercase
                                            tracking-[0.15em]
                                            text-white
                                        "
                                    >
                                        Supply
                                    </span>

                                </div>

                                <p
                                    className="
                                        mt-10
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.2em]
                                        text-orange-500
                                    "
                                >
                                    Vendor Registration
                                </p>

                                <h3
                                    className="
                                        mt-3
                                        max-w-md
                                        text-3xl
                                        font-semibold
                                        leading-tight
                                        tracking-[-0.05em]
                                        sm:text-4xl
                                    "
                                >
                                    Manufacture or supply fashion?
                                </h3>

                                <p
                                    className="
                                        mt-5
                                        max-w-lg
                                        text-sm
                                        font-medium
                                        leading-7
                                        text-black/70
                                    "
                                >
                                    Become an official Bharat Trend
                                    supply partner and connect with
                                    our growing retail network.
                                </p>

                                <div className="mt-7 space-y-3">

                                    {[
                                        "Garments manufacturers",
                                        "Wholesalers & distributors",
                                        "Footwear suppliers",
                                        "Fashion accessories suppliers",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                text-sm
                                                font-medium
                                                text-black/75
                                            "
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
                                                    bg-orange-500
                                                "
                                            >
                                                <Check size={11} />
                                            </span>

                                            {item}
                                        </div>
                                    ))}

                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveForm("vendor")
                                    }
                                    className="
                                        mt-9
                                        flex
                                        h-12
                                        w-full
                                        items-center
                                        justify-center
                                        gap-3
                                        rounded-full
                                        bg-black
                                        text-sm
                                        font-semibold
                                        text-white
                                        transition-all
                                        duration-300
                                        hover:bg-orange-500
                                        hover:text-black
                                    "
                                >
                                    Become a Supply Partner

                                    <ArrowUpRight size={16} />
                                </button>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* =====================================================
                BOTTOM CTA
            ====================================================== */}

            <section
                className="
                    bg-black
                    px-5
                    py-16
                    text-white
                    sm:px-8
                    lg:px-10
                    lg:py-20
                "
            >
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
                                Let's Grow Together
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
                                Your property.
                                <span className="text-white/55">
                                    {" "}Your products.
                                </span>

                                <span className="block">
                                    Our journey.
                                </span>
                            </h2>

                        </div>

                        <ArrowUpRight
                            size={45}
                            strokeWidth={1}
                            className="text-orange-500"
                        />

                    </div>

                </div>
            </section>

            {/* =====================================================
                FORM MODAL
            ====================================================== */}

            <AnimatePresence>
                {activeForm && (
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
                        onClick={closeModal}
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
                            transition={{
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            onClick={(e) =>
                                e.stopPropagation()
                            }
                            className="
                                relative
                                max-h-[92vh]
                                w-full
                                max-w-3xl
                                overflow-y-auto
                                rounded-[28px]
                                bg-white
                                p-5
                                shadow-2xl
                                sm:p-7
                            "
                        >

                            {/* CLOSE */}

                            <button
                                type="button"
                                onClick={closeModal}
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
                                    bg-black
                                    text-white
                                    transition-all
                                    duration-300
                                    hover:bg-orange-500
                                    hover:text-black
                                "
                            >
                                <X size={15} />
                            </button>

                            {/* FORM HEADER */}

                            <div className="pr-12">

                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-orange-500
                                    "
                                >
                                    {activeForm === "landlord" ? (
                                        <Building2 size={20} />
                                    ) : (
                                        <Package size={20} />
                                    )}
                                </div>

                                <p
                                    className="
                                        mt-5
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.2em]
                                        text-orange-500
                                    "
                                >
                                    {activeForm === "landlord"
                                        ? "Landlord Registration"
                                        : "Vendor Registration"}
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        text-3xl
                                        font-semibold
                                        tracking-[-0.05em]
                                        text-black
                                    "
                                >
                                    {activeForm === "landlord"
                                        ? "Register Your Property"
                                        : "Become a Supply Partner"}
                                </h2>

                                <p
                                    className="
                                        mt-2
                                        text-sm
                                        font-medium
                                        leading-6
                                        text-black/65
                                    "
                                >
                                    {activeForm === "landlord"
                                        ? "Share your property details with the Bharat Trend expansion team."
                                        : "Tell us about your business and the products you want to supply."}
                                </p>

                            </div>

                            {/* =================================================
                                LANDLORD FORM
                            ================================================= */}

                            {activeForm === "landlord" && (
                                <form
                                    onSubmit={handleLandlordSubmit}
                                    className="mt-7"
                                >

                                    <div className="grid gap-4 sm:grid-cols-2">

                                        <Input
                                            label="Full Name *"
                                            name="fullName"
                                            value={landlordData.fullName}
                                            onChange={landlordChange}
                                            required
                                            placeholder="Enter full name"
                                        />

                                        <Input
                                            label="Email Id *"
                                            name="email"
                                            type="email"
                                            value={landlordData.email}
                                            onChange={landlordChange}
                                            required
                                            placeholder="you@example.com"
                                        />

                                        <Input
                                            label="Mobile No *"
                                            name="mobile"
                                            value={landlordData.mobile}
                                            onChange={landlordChange}
                                            required
                                            placeholder="+91 XXXXX XXXXX"
                                        />

                                        <Input
                                            label="Pin Code"
                                            name="pinCode"
                                            value={landlordData.pinCode}
                                            onChange={landlordChange}
                                            placeholder="Enter pin code"
                                        />

                                    </div>

                                    <div className="mt-4">

                                        <Textarea
                                            label="Postal Address"
                                            name="postalAddress"
                                            value={landlordData.postalAddress}
                                            onChange={landlordChange}
                                            placeholder="Enter postal address"
                                        />

                                    </div>

                                    <div className="mt-4 grid gap-4 sm:grid-cols-2">

                                        <Input
                                            label="City"
                                            name="city"
                                            value={landlordData.city}
                                            onChange={landlordChange}
                                            placeholder="City"
                                        />

                                        <Input
                                            label="State"
                                            name="state"
                                            value={landlordData.state}
                                            onChange={landlordChange}
                                            placeholder="State"
                                        />

                                    </div>

                                    <div className="mt-4 grid gap-4 sm:grid-cols-2">

                                        <Select
                                            label="Landlord Type"
                                            name="landlordType"
                                            value={landlordData.landlordType}
                                            onChange={landlordChange}
                                            options={[
                                                "Owner",
                                                "Developer",
                                                "Broker",
                                                "Other",
                                            ]}
                                        />

                                        <Input
                                            label="Developer Name"
                                            name="developerName"
                                            value={landlordData.developerName}
                                            onChange={landlordChange}
                                            placeholder="Developer name"
                                        />

                                    </div>

                                    <div className="mt-4">

                                        <Textarea
                                            label="Site Address"
                                            name="siteAddress"
                                            value={landlordData.siteAddress}
                                            onChange={landlordChange}
                                            placeholder="Enter property site address"
                                        />

                                    </div>

                                    <div className="mt-4 grid gap-4 sm:grid-cols-3">

                                        <Input
                                            label="Length"
                                            name="length"
                                            value={landlordData.length}
                                            onChange={landlordChange}
                                            placeholder="Length"
                                        />

                                        <Input
                                            label="Width"
                                            name="width"
                                            value={landlordData.width}
                                            onChange={landlordChange}
                                            placeholder="Width"
                                        />

                                        <Input
                                            label="Carpet Area"
                                            name="carpetArea"
                                            value={landlordData.carpetArea}
                                            onChange={landlordChange}
                                            placeholder="Sq. Ft."
                                        />

                                    </div>

                                    <div className="mt-4 grid gap-4 sm:grid-cols-2">

                                        <Input
                                            label="Per Square Feet Rate"
                                            name="rate"
                                            value={landlordData.rate}
                                            onChange={landlordChange}
                                            placeholder="₹ per sq. ft."
                                        />

                                        <Select
                                            label="Floor Type"
                                            name="floorType"
                                            value={landlordData.floorType}
                                            onChange={landlordChange}
                                            options={[
                                                "Ground Floor",
                                                "First Floor",
                                                "Second Floor",
                                                "Other",
                                            ]}
                                        />

                                    </div>

                                    <FileInput
                                        label="Upload File"
                                        name="file"
                                        onChange={landlordChange}
                                        file={landlordData.file}
                                    />

                                    <SubmitButton
                                        submitted={submitted}
                                        text="Submit Property"
                                    />

                                </form>
                            )}

                            {/* =================================================
                                VENDOR FORM
                            ================================================= */}

                            {activeForm === "vendor" && (
                                <form
                                    onSubmit={handleVendorSubmit}
                                    className="mt-7"
                                >

                                    <div className="grid gap-4 sm:grid-cols-2">

                                        <Input
                                            label="Company Name"
                                            name="companyName"
                                            value={vendorData.companyName}
                                            onChange={vendorChange}
                                            placeholder="Company name"
                                        />

                                        <Select
                                            label="Business Type"
                                            name="businessType"
                                            value={vendorData.businessType}
                                            onChange={vendorChange}
                                            options={[
                                                "Manufacturer",
                                                "Wholesaler",
                                                "Distributor",
                                                "Retailer",
                                                "Other",
                                            ]}
                                        />

                                    </div>

                                    <div className="mt-4">

                                        <Textarea
                                            label="Address"
                                            name="address"
                                            value={vendorData.address}
                                            onChange={vendorChange}
                                            placeholder="Business address"
                                        />

                                    </div>

                                    <div className="mt-4 grid gap-4 sm:grid-cols-3">

                                        <Input
                                            label="City"
                                            name="city"
                                            value={vendorData.city}
                                            onChange={vendorChange}
                                            placeholder="City"
                                        />

                                        <Input
                                            label="State"
                                            name="state"
                                            value={vendorData.state}
                                            onChange={vendorChange}
                                            placeholder="State"
                                        />

                                        <Input
                                            label="Pin Code"
                                            name="pinCode"
                                            value={vendorData.pinCode}
                                            onChange={vendorChange}
                                            placeholder="Pin code"
                                        />

                                    </div>

                                    <div className="mt-4 grid gap-4 sm:grid-cols-2">

                                        <Input
                                            label="Contact Person *"
                                            name="contactPerson"
                                            value={vendorData.contactPerson}
                                            onChange={vendorChange}
                                            required
                                            placeholder="Contact person"
                                        />

                                        <Input
                                            label="Email Id *"
                                            name="email"
                                            type="email"
                                            value={vendorData.email}
                                            onChange={vendorChange}
                                            required
                                            placeholder="you@example.com"
                                        />

                                        <Input
                                            label="Mobile No *"
                                            name="mobile"
                                            value={vendorData.mobile}
                                            onChange={vendorChange}
                                            required
                                            placeholder="+91 XXXXX XXXXX"
                                        />

                                        <Input
                                            label="Website Address"
                                            name="website"
                                            value={vendorData.website}
                                            onChange={vendorChange}
                                            placeholder="https://"
                                        />

                                    </div>

                                    <div className="mt-4">

                                        <Input
                                            label="Product You Want To Supply"
                                            name="product"
                                            value={vendorData.product}
                                            onChange={vendorChange}
                                            placeholder="Garments, footwear, accessories..."
                                        />

                                    </div>

                                    <FileInput
                                        label="Upload File"
                                        name="file"
                                        onChange={vendorChange}
                                        file={vendorData.file}
                                    />

                                    <SubmitButton
                                        submitted={submitted}
                                        text="Submit Vendor Registration"
                                    />

                                </form>
                            )}

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </main>
    );
};


/* =====================================================
   INPUT COMPONENT
===================================================== */

const Input = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    required = false,
    placeholder,
}) => {
    return (
        <div>

            <label
                className="
                    mb-2
                    block
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-black/75
                "
            >
                {label}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-black/15
                    bg-[#f8f8f6]
                    px-4
                    text-sm
                    font-medium
                    text-black
                    outline-none
                    transition-all
                    placeholder:text-black/40
                    focus:border-orange-500
                    focus:bg-white
                    focus:ring-2
                    focus:ring-orange-500/10
                "
            />

        </div>
    );
};


/* =====================================================
   TEXTAREA
===================================================== */

const Textarea = ({
    label,
    name,
    value,
    onChange,
    placeholder,
}) => {
    return (
        <div>

            <label
                className="
                    mb-2
                    block
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-black/75
                "
            >
                {label}
            </label>

            <textarea
                name={name}
                value={value}
                onChange={onChange}
                rows={3}
                placeholder={placeholder}
                className="
                    min-h-[85px]
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-black/15
                    bg-[#f8f8f6]
                    px-4
                    py-3
                    text-sm
                    font-medium
                    leading-5
                    text-black
                    outline-none
                    transition-all
                    placeholder:text-black/40
                    focus:border-orange-500
                    focus:bg-white
                    focus:ring-2
                    focus:ring-orange-500/10
                "
            />

        </div>
    );
};


/* =====================================================
   SELECT
===================================================== */

const Select = ({
    label,
    name,
    value,
    onChange,
    options,
}) => {
    return (
        <div>

            <label
                className="
                    mb-2
                    block
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-black/75
                "
            >
                {label}
            </label>

            <div className="relative">

                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="
                        h-11
                        w-full
                        appearance-none
                        rounded-xl
                        border
                        border-black/15
                        bg-[#f8f8f6]
                        px-4
                        text-sm
                        font-medium
                        text-black
                        outline-none
                        focus:border-orange-500
                        focus:bg-white
                        focus:ring-2
                        focus:ring-orange-500/10
                    "
                >

                    <option value="">
                        Select
                    </option>

                    {options.map((option) => (
                        <option
                            key={option}
                            value={option}
                        >
                            {option}
                        </option>
                    ))}

                </select>

                <ChevronDown
                    size={15}
                    className="
                        pointer-events-none
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-black/50
                    "
                />

            </div>
        </div>
    );
};


/* =====================================================
   FILE INPUT
===================================================== */

const FileInput = ({
    label,
    name,
    onChange,
    file,
}) => {
    return (
        <div className="mt-4">

            <label
                className="
                    mb-2
                    block
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-black/75
                "
            >
                {label}
            </label>

            <label
                className="
                    flex
                    min-h-14
                    cursor-pointer
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-dashed
                    border-black/20
                    bg-[#f8f8f6]
                    px-4
                    transition-all
                    hover:border-orange-500
                    hover:bg-orange-50/30
                "
            >

                <span
                    className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-black
                        text-white
                    "
                >
                    <FileUp size={15} />
                </span>

                <span className="min-w-0">

                    <span
                        className="
                            block
                            truncate
                            text-sm
                            font-medium
                            text-black/75
                        "
                    >
                        {file
                            ? file.name
                            : "Choose a file"}
                    </span>

                    <span
                        className="
                            mt-0.5
                            block
                            text-[10px]
                            font-medium
                            text-black/45
                        "
                    >
                        Upload document / image
                    </span>

                </span>

                <input
                    type="file"
                    name={name}
                    onChange={onChange}
                    className="hidden"
                />

            </label>
        </div>
    );
};


/* =====================================================
   SUBMIT BUTTON
===================================================== */

const SubmitButton = ({
    submitted,
    text,
}) => {
    return (
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
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-orange-500
                hover:text-black
            "
        >

            {submitted ? (
                <>
                    <Check size={15} />
                    Submitted Successfully
                </>
            ) : (
                <>
                    {text}
                    <ArrowUpRight size={15} />
                </>
            )}

        </button>
    );
};

export default Vender;