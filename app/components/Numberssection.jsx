"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
    const stats = [
        {
            value: 500,
            suffix: "+",
            title: "Skilled Personnel",
            subtitle: "Specialized Technical Staff",
        },
        {
            value: 250,
            suffix: "+",
            title: "Data Experts",
            subtitle: "Verification Specialists",
        },
        {
            value: 1300,
            suffix: "+",
            title: "Aadhaar Workforce",
            subtitle: "State-wide Operators",
        },
    ];

    return (
        <section className="relative py-20 lg:py-28 bg-background-grey overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 text-center relative">

                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            {...stat}
                            showDivider={index !== stats.length - 1}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}

/* ================= SINGLE STAT ================= */

function StatItem({ value, suffix, title, subtitle, showDivider }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative px-6"
        >
            {/* Number (Reduced Size) */}
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight">
                {inView && (
                    <CountUp
                        start={0}
                        end={value}
                        duration={2}
                        separator=","
                    />
                )}
                {suffix}
            </h3>

            {/* Title */}
            <p className="mt-5 text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-primary">
                {title}
            </p>

            {/* Subtitle */}
            <p className="mt-3 text-slate-500 text-sm sm:text-base">
                {subtitle}
            </p>

            {/* Vertical Divider (Desktop Only) */}
            {showDivider && (
                <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-px h-28 bg-slate-300" />
            )}
        </motion.div>
    );
}