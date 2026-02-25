"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function LeadershipSection() {
    const leaders = [
        {
            name: "Mr. Amol Shamrao Bhokre",
            role: "Managing Director",
            description:
                "Architecting the future of Maharashtra's digital and physical infrastructure with over 15 years of leadership and strategic excellence.",
        },
        {
            name: "Mr. Gajanan S. Deshmukh",
            role: "Director of Operations",
            description:
                "Ensuring operational excellence and precision in large-scale manpower and technology integration projects across sectors.",
        },
    ];

    return (
        <section
            id="leadership"
            className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
        >
            {/* Ambient Glow */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

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
                        Executive Leadership
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
                        Visionaries Behind Our Success
                    </h2>
                </motion.div>

                {/* ===== Cards ===== */}
                <div className="grid gap-12 md:grid-cols-2">

                    {leaders.map((leader, index) => (
                        <motion.div
                            key={leader.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -12 }}
                            className="group relative rounded-[30px] bg-white border border-slate-200 shadow-[0_25px_70px_-20px_rgba(0,0,0,0.12)] hover:shadow-[0_40px_90px_-20px_rgba(0,0,0,0.18)] transition-all duration-500 overflow-hidden"
                        >
                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-primary opacity-80" />

                            <div className="p-10 text-center">

                                {/* ===== Avatar Block ===== */}
                                <div className="relative mx-auto mb-8 w-fit">

                                    {/* Soft Halo */}
                                    <div className="absolute inset-0 scale-125 bg-primary/10 rounded-full blur-2xl opacity-60" />

                                    {/* Avatar Frame */}
                                    <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shadow-lg border-4 border-white">
                                        <User size={54} className="text-primary" />
                                    </div>
                                </div>

                                {/* ===== Name ===== */}
                                <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                                    {leader.name}
                                </h3>

                                {/* ===== Role ===== */}
                                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold text-blue-600 mb-6">
                                    {leader.role}
                                </p>

                                {/* Divider */}
                                <div className="w-16 h-[2px] bg-primary/20 mx-auto mb-6" />

                                {/* ===== Description ===== */}
                                <p className="text-slate-600 text-base leading-relaxed max-w-md mx-auto">
                                    {leader.description}
                                </p>

                            </div>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}