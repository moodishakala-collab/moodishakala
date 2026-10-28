import {
    Heart,
    Users,
    Award,
    Target,
    MapPin,
} from "lucide-react";

import Liza from "../assets/Liza.png";

import member3 from "../assets/member3.png"
import member4 from "../assets/member4.png"

// =====================================================
// HERO
// =====================================================

export const heroData = {
    smallTitle: "Mo Odisha Kala",
    title: "The People Behind",
    highlight: "Mo Odisha Kala",
    description:
        "Meet the people preserving and celebrating Odisha's traditional art, culture and craftsmanship. Discover the vision behind Mo Odisha Kala.",
    journeyLabel: "Our Journey",
    image: "/AboutUsBanner.jpeg",
};

// =====================================================
// STORY
// =====================================================

export const storyData = {
    smallTitle: "Our Story",
    title: "Preserving",
    highlight: "Odisha's Heritage",
    image: "/AboutUs/AboutUs1.jpeg",
    imageLabel: "Our Journey",
    imageTitle: "Odisha's Art → Future",

    description:
        "Mo Odisha Kala is built around a simple vision — to preserve, celebrate and promote Odisha's traditional art and craftsmanship while connecting its rich cultural heritage with today's generation.",

    commitmentTitle: "Our work is guided by a commitment to:",

    commitments: [
        "Preserving Odisha's traditional art and cultural heritage",
        "Supporting local artisans and traditional craft communities",
        "Creating greater awareness of Odisha's rich artistic traditions",
        "Connecting traditional craftsmanship with modern audiences",
        "Building a strong and sustainable ecosystem for Odisha's art",
    ],

    ending:
        "Inspired by Odisha's timeless artistic traditions, Mo Odisha Kala aims to create a meaningful platform where culture, creativity and craftsmanship can continue to thrive.",
};

// =====================================================
// VISION & MISSION
// =====================================================

export const visionMissionData = {
    smallTitle: "Our Purpose",
    title: "Vision &",
    highlight: "Mission",
    description:
        "Our promise to preserve and celebrate Odisha's traditional art and craftsmanship.",

    vision: {
        label: "The Future",
        title: "Our Vision",
        description:
            "To create a future where Odisha's traditional art, culture and craftsmanship are preserved, respected and celebrated across generations.",

        goalsTitle: "Our Goals",

        goals: [
            "Preserve Odisha's traditional art forms",
            "Create opportunities for local artisans",
            "Introduce Odisha's cultural heritage to wider audiences",
            "Encourage younger generations to value traditional art",
        ],
    },

    mission: {
        label: "The Path",
        title: "Our Mission",
        description:
            "To preserve and promote Odisha's traditional art and craftsmanship by supporting artisans, creating awareness and providing meaningful opportunities for traditional art to reach modern audiences.",

        commitmentsTitle: "Our Commitments",

        commitments: [
            "Preserve and promote Odisha's traditional art and craftsmanship",
            "Support local artisans and traditional craft communities",
            "Create greater awareness of Odisha's rich cultural heritage",
            "Build trust through quality, authenticity and transparency",
        ],
    },
};

// =====================================================
// LEADERSHIP
// =====================================================

export const leadershipData = {
    smallTitle: "Our Leadership",
    title: "The People Behind",
    highlight: "Our Vision",
    description:
        "Meet the people dedicated to preserving and celebrating Odisha's traditional art and craftsmanship.",

    founder: {
        name: "Liza Rout",
        role: "Founder & CEO",
        department: "Leadership",
        image: Liza,

        description:
            "A short introduction about the founder — their journey, vision for Mo Odisha Kala, and passion for preserving Odisha's traditional art forms.",

        tags: ["Vision", "Leadership"],

        icon: Heart,
        accent: "#f5a623",

        heading: "Preserving the Soul of Odisha",

        quote:
            "A vision to preserve Odisha's rich artistic heritage and carry its traditions forward for generations.",
    },

    teamTitle: "Our People",
    teamLabel: "Core Team",
    teamDirection: "Meet the team",

    team: [

        {
            name: "Nisi sahoo",
            role: "Co-Founder",
            department: "",
            image:  member3,
            description: "",
            tags: [],
            icon: Award,
            accent: "#2ecc71",
        },

        {
            name: "Gayatree sethi",
            role: "Co-Founder",
            department: "",
            image:  member4,
            description: "",
            tags: [],
            icon: MapPin,
            accent: "#ec4899",
        },
    ],
};

// =====================================================
// PHILOSOPHY
// =====================================================

export const philosophyData = {
    smallTitle: "Our Approach",
    title: "Cultural",
    highlight: "Philosophy",

    description:
        "We don't just preserve art — we celebrate culture, support artisans and keep Odisha's traditions alive.",

    beliefLabel: "Our Belief",

    beliefTitle: "Tradition Should Be",
    beliefHighlight: "For Every Generation",

    beliefDescription:
        "Odisha's traditional art is more than craftsmanship — it is a reflection of history, identity and culture. We believe these traditions should be respected, preserved and experienced by generations to come.",

    beliefTag: "Celebrating Odisha's Heritage",

    cards: [
        {
            title: "Rooted in Odisha",
            description:
                "Celebrating Odisha's rich culture, heritage, traditional art forms and craftsmanship.",
            icon: Heart,
        },

        {
            title: "Preserving Tradition",
            description:
                "Keeping Odisha's traditional artistic practices alive while creating opportunities for future generations.",
            icon: Award,
        },

        {
            title: "Supporting Artisans",
            description:
                "Creating meaningful opportunities for local artisans and craft communities to showcase their work.",
            icon: Target,
        },

        {
            title: "For Every Generation",
            description:
                "Connecting Odisha's traditional art and cultural heritage with today's generation and future audiences.",
            icon: Users,
        },
    ],
};

// =====================================================
// CTA
// =====================================================

export const ctaData = {
    smallTitle: "Mo Odisha Kala",
    title: "Celebrating",
    highlight: "Odisha",

    description:
        "Preserving tradition. Celebrating craftsmanship. Carrying Odisha's heritage forward.",

    buttonText: "Discover Mo Odisha Kala",
};