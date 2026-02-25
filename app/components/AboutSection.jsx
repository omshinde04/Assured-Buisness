"use client";

import { motion } from "framer-motion";
import { Map, Users2 } from "lucide-react";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative py-20 lg:py-28 bg-background-grey overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                    {/* ================= IMAGE SIDE ================= */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-3xl overflow-hidden shadow-premium group"
                    >
                        <img
                            src="/images/about.jpeg"
                            alt="AB Corporation Headquarters"
                            className="w-full h-[380px] sm:h-[450px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />

                        {/* Location Text */}
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="text-xs tracking-[0.3em] uppercase opacity-80">
                                Corporate Headquarters
                            </p>
                            <h4 className="text-2xl font-bold mt-1">
                                Pune, Maharashtra
                            </h4>
                        </div>
                    </motion.div>

                    {/* ================= CONTENT SIDE ================= */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >

                        {/* Section Tag */}
                        <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
                            About AB Corporation
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-tight tracking-tight">
                            Engineering Trust Through Precision & Performance
                        </h2>

                        {/* Description */}
                        <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed">
                            AB Corporation Pvt. Ltd. stands as a cornerstone in Maharashtra’s
                            essential infrastructure landscape. Since our inception in 2017,
                            we have dedicated ourselves to bridging the gap between high-level
                            technological requirements and skilled execution.
                        </p>

                        {/* Features */}
                        <div className="mt-10 grid sm:grid-cols-2 gap-8">

                            <FeatureCard
                                icon={<Map size={26} />}
                                title="Maharashtra Operations"
                                description="Extensive network covering urban and rural sectors across the state."
                            />

                            <FeatureCard
                                icon={<Users2 size={26} />}
                                title="Skilled Manpower"
                                description="Expertly trained personnel ready for rapid deployment in critical sectors."
                            />

                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ================= FEATURE CARD ================= */

function FeatureCard({ icon, title, description }) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group bg-white rounded-2xl p-6 shadow-sm border border-primary/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
        >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {icon}
            </div>

            <h4 className="font-bold text-primary text-lg">
                {title}
            </h4>

            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}