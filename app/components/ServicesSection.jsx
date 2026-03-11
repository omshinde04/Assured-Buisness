"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Fingerprint,
    ClipboardCheck,
    HardHat,
    FileText,
    Microscope,
    Server,
    ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
    const [showAll, setShowAll] = useState(false);

    const services = [
        {
            icon: <Fingerprint size={28} />,
            title: "Aadhaar Enrollment & Updates",
            description:
                "Seamless and accurate Aadhaar enrollment and update services utilizing UIDAI-certified operators.",
        },
        {
            icon: <ClipboardCheck size={28} />,
            title: "Data Capturing Support",
            description:
                "Efficient and reliable data capturing solutions for financial and banking applications.",
        },
        {
            icon: <HardHat size={28} />,
            title: "Skilled Manpower & Equipment",
            description:
                "Trained personnel and top-tier equipment ensuring compliant service delivery.",
        },
        {
            icon: <FileText size={28} />,
            title: "Document Digitization",
            description:
                "Converting physical documents into secure digital formats for streamlined management.",
        },
        {
            icon: <Microscope size={28} />,
            title: "AI-Based Soil Testing Device",
            description:
                "Advanced AI-powered soil analysis device delivering accurate nutrient insights for smarter agricultural decisions.",
        },
        {
            icon: <Server size={28} />,
            title: "Infrastructure Deployment & Field Operations",
            description:
                "End-to-end infrastructure setup and technical field operations across sectors.",
        },
    ];

    return (
        <section
            id="services"
            className="relative pt-20 pb-28 lg:pt-28 lg:pb-36 bg-background-grey overflow-hidden"
        >
            {/* Decorative Background */}
            <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6">

                {/* ===== Header ===== */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <p className="text-xs uppercase tracking-[0.35em] text-primary font-semibold mb-4">
                        Our Services
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
                        Comprehensive Service Offerings
                    </h2>

                    <p className="mt-6 text-slate-500 text-base sm:text-lg">
                        Explore our range of services designed to address diverse
                        infrastructure and operational needs.
                    </p>
                </div>

                {/* ===== Grid ===== */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">

                    {services.map((service, index) => {
                        const isHiddenOnMobile = index >= 3 && !showAll;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`h-full ${isHiddenOnMobile ? "hidden sm:block" : ""
                                    }`}
                            >
                                <ServiceCard {...service} />
                            </motion.div>
                        );
                    })}
                </div>

                {/* ===== Mobile Toggle Button ===== */}
                <div className="mt-10 text-center sm:hidden">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="inline-flex items-center gap-2 text-primary font-semibold"
                    >
                        {showAll ? "Show Less" : "View More"}
                        <ArrowRight
                            size={16}
                            className={`transition-transform duration-300 ${showAll ? "rotate-90" : ""
                                }`}
                        />
                    </button>
                </div>

            </div>
        </section>
    );
}

/* ================= EQUAL HEIGHT CARD ================= */

function ServiceCard({ icon, title, description }) {
    return (
        <div className="relative group h-full rounded-[28px] p-[1px] bg-gradient-to-br from-primary/20 via-transparent to-primary/20 transition-all duration-500">
            <div className="relative flex flex-col h-full bg-white rounded-[28px] p-8 lg:p-10 shadow-[0_40px_90px_-20px_rgba(11,31,58,0.15)] overflow-hidden">

                {/* Glow Layer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                    {icon}
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-extrabold text-primary mb-4 leading-snug">
                    {title}
                </h3>

                {/* Description (flex-1 ensures equal height) */}
                <p className="text-slate-600 text-base leading-relaxed flex-1">
                    {description}
                </p>
            </div>
        </div>
    );
}