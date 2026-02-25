"use client";

import { motion } from "framer-motion";
import {
    FileText,
    Cpu,
    Globe,
    Wifi,
    ShieldCheck,
    CreditCard,
    Landmark,
    Wallet,
    Database,
} from "lucide-react";

export default function TrustedSection() {
    const clients = [
        { name: "Utility Forms", icon: FileText, color: "#FF7F50" },
        { name: "Gujarat Infotech", icon: Cpu, color: "#0047AB" },
        { name: "MahaOnline", icon: Globe, color: "#008000" },
        { name: "RailTel", icon: Wifi, color: "#00AEEF" },
        { name: "BECIL", icon: ShieldCheck, color: "#6A5ACD" },
        { name: "Fino PayTech", icon: CreditCard, color: "#8A2BE2" },
        { name: "DBS Bank", icon: Landmark, color: "#FF3333" },
        { name: "Paytm", icon: Wallet, color: "#002E6E" },
        { name: "Datasoft", icon: Database, color: "#20B2AA" },
    ];

    const duplicated = [...clients, ...clients];

    return (
        <section
            id="trusted"
            className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
        >
            {/* Ambient Glow */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6">

                {/* ===== Header ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
                >
                    <p className="text-xs uppercase tracking-[0.35em] text-primary font-semibold mb-4">
                        Trusted By
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
                        Strategic Partnerships Across Sectors
                    </h2>

                    <p className="mt-6 text-slate-500 text-base sm:text-lg">
                        We collaborate with government institutions, financial
                        organizations, and technology partners to deliver
                        large-scale infrastructure excellence.
                    </p>
                </motion.div>

                {/* Edge Fade (Adjusted for mobile) */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

                {/* ===== Marquee ===== */}
                <div className="overflow-hidden w-full">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 32,
                            ease: "linear",
                        }}
                        className="flex w-max gap-10 sm:gap-16 lg:gap-20"
                    >
                        {duplicated.map((client, index) => {
                            const Icon = client.icon;

                            return (
                                <div
                                    key={index}
                                    className="relative group/card flex items-center gap-4 sm:gap-5 
                  min-w-[200px] sm:min-w-[220px] lg:min-w-[240px] 
                  px-5 sm:px-6 lg:px-7 
                  py-4 sm:py-5 
                  rounded-2xl 
                  backdrop-blur-xl bg-white/70 
                  border border-slate-200 
                  shadow-[0_10px_40px_rgba(0,0,0,0.05)] 
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] 
                  transition-all duration-500"
                                >
                                    {/* Hover Glow */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 rounded-2xl transition duration-500"
                                        style={{
                                            background: `radial-gradient(circle at center, ${client.color}20, transparent 70%)`,
                                        }}
                                    />

                                    {/* Icon */}
                                    <div
                                        className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 
                    rounded-xl flex items-center justify-center text-white"
                                        style={{ backgroundColor: client.color }}
                                    >
                                        <Icon size={18} className="sm:hidden" />
                                        <Icon size={20} className="hidden sm:block lg:hidden" />
                                        <Icon size={22} className="hidden lg:block" />
                                    </div>

                                    {/* Name */}
                                    <span
                                        className="relative font-semibold tracking-wide text-xs sm:text-sm transition-all duration-300"
                                        style={{ color: client.color }}
                                    >
                                        {client.name}
                                    </span>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}