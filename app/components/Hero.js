"use client";

import { motion } from "framer-motion";
import { Clock3, Users, BadgeCheck } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden text-white"
        >
            {/* ===== Background Image ===== */}
            <div className="absolute inset-0">
                <img
                    src="/images/background.png"
                    alt="Corporate Building"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
            </div>

            {/* ===== Content Container ===== */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* ================= LEFT CONTENT ================= */}
                    <div>

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mt-6 lg:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[11px] font-semibold tracking-widest uppercase mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            Established 2017
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight"
                        >
                            Delivering{" "}
                            <span className="text-blue-300">Excellence</span>{" "}
                            in Infrastructure
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="mt-6 text-base sm:text-lg text-blue-100/80 max-w-lg"
                        >
                            Maharashtra's trusted partner for high-precision Aadhaar,
                            Banking, and Technology infrastructure deployments.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            className="mt-8 flex flex-col sm:flex-row gap-4"
                        >
                            <Link
                                href="/services"
                                className="bg-white text-primary px-6 py-3 rounded-xl font-semibold shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                            >
                                Explore Services
                            </Link>

                            <Link
                                href="/contact"
                                className="border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all text-center"
                            >
                                Partner With Us
                            </Link>
                        </motion.div>

                        {/* ===== MOBILE STATS (No Cards) ===== */}
                        <div className="mt-12 grid grid-cols-3 gap-4 text-center lg:hidden">
                            <MobileStat value="8+" label="Years" />
                            <MobileStat value="1200+" label="Workforce" />
                            <MobileStat value="1000+" label="Deployments" />
                        </div>

                    </div>

                    {/* ================= DESKTOP STAT CARDS ================= */}
                    <div className="hidden lg:grid sm:grid-cols-2 gap-6">

                        <StatCard
                            icon={<Clock3 size={28} />}
                            value="8+ Years"
                            label="Industry Experience"
                            delay={0.2}
                        />

                        <StatCard
                            icon={<Users size={28} />}
                            value="1,200+"
                            label="Expert Workforce"
                            delay={0.4}
                        />

                        <StatCard
                            icon={<BadgeCheck size={28} />}
                            value="1,000+"
                            label="Successful Deployments"
                            delay={0.6}
                            full
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ================= DESKTOP CARD ================= */

function StatCard({ icon, value, label, delay, full }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            whileHover={{ y: -6 }}
            className={`bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-premium ${full ? "sm:col-span-2" : ""
                }`}
        >
            <div className="text-blue-300 mb-4">{icon}</div>
            <h3 className="text-2xl font-bold">{value}</h3>
            <p className="text-xs uppercase tracking-widest text-blue-200 mt-2">
                {label}
            </p>
        </motion.div>
    );
}

/* ================= MOBILE SIMPLE STAT ================= */

function MobileStat({ value, label }) {
    return (
        <div>
            <h3 className="text-xl font-bold">{value}</h3>
            <p className="text-[10px] uppercase tracking-widest text-blue-200 mt-1">
                {label}
            </p>
        </div>
    );
}