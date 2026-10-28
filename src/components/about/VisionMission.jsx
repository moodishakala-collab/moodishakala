import { motion } from "motion/react";
import { Check, Globe2, Target } from "lucide-react";

import { visionMissionData } from "../../data/aboutUsData";

const VisionMission = () => {

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

    return (
        <section className="bg-black px-5 py-10 sm:px-8 sm:py-12 md:py-14">

            <div className="mx-auto max-w-7xl">

                {/* HEADER */}

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >

                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-600">
                        {visionMissionData.smallTitle}
                    </p>

                    <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                        {visionMissionData.title}

                        <span className="text-gray-600">
                            {" "}{visionMissionData.highlight}
                        </span>
                    </h2>

                    <p className="mt-3 max-w-xl text-sm text-gray-400">
                        {visionMissionData.description}
                    </p>

                </motion.div>

                {/* CARDS */}

                <div className="mt-8 grid gap-4 lg:grid-cols-2">

                    {/* VISION */}

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeLeft}
                        className="rounded-[26px] border border-white/10 bg-white p-6 text-black sm:p-7"
                    >

                        <div className="flex items-center justify-between">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white">
                                <Target size={21} />
                            </div>

                            <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">
                                {visionMissionData.vision.label}
                            </span>

                        </div>

                        <h3 className="mt-5 text-2xl font-bold text-orange-500">
                            {visionMissionData.vision.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-black/60">
                            {visionMissionData.vision.description}
                        </p>

                        <div className="mt-6">

                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/35">
                                {visionMissionData.vision.goalsTitle}
                            </p>

                            <div className="mt-3 space-y-2.5">

                                {visionMissionData.vision.goals.map(
                                    (goal, index) => (
                                        <div
                                            key={goal}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="text-sm font-black text-black/25">
                                                0{index + 1}
                                            </span>

                                            <p className="text-xs leading-5 text-black/65">
                                                {goal}
                                            </p>
                                        </div>
                                    )
                                )}

                            </div>

                        </div>

                    </motion.div>

                    {/* MISSION */}

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeRight}
                        className="rounded-[26px] border border-white/10 bg-[#111] p-6 sm:p-7"
                    >

                        <div className="flex items-center justify-between">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-black">
                                <Globe2 size={21} />
                            </div>

                            <span className="text-[10px] uppercase tracking-widest text-gray-600">
                                {visionMissionData.mission.label}
                            </span>

                        </div>

                        <h3 className="mt-5 text-2xl font-black">
                            {visionMissionData.mission.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-400">
                            {visionMissionData.mission.description}
                        </p>

                        <div className="mt-6">

                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
                                {visionMissionData.mission.commitmentsTitle}
                            </p>

                            <div className="mt-3 space-y-2.5">

                                {visionMissionData.mission.commitments.map(
                                    (item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3"
                                        >

                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-black">
                                                <Check size={12} />
                                            </span>

                                            <p className="text-xs leading-5 text-gray-300">
                                                {item}
                                            </p>

                                        </div>
                                    )
                                )}

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
};

export default VisionMission;