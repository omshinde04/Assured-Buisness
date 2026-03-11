"use client";

import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {

    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = new FormData(e.target);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (res.ok) {
                setStatus("success");
                e.target.reset();
            } else {
                setStatus("error");
            }

        } catch (error) {
            console.error(error);
            setStatus("error");
        }

        setLoading(false);
    };

    return (
        <section
            id="contact"
            className="relative py-16 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
        >

            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-14"
                >
                    <p className="text-xs uppercase tracking-[0.35em] text-primary font-semibold mb-3">
                        Contact Us
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                        Get in Touch
                    </h2>

                    <p className="mt-4 text-slate-500 text-base">
                        Reach out to our team for partnerships and collaboration opportunities.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >

                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-primary text-base mb-1">
                                    Head Office
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    6, Tejonidhi, Behind Amar Tech Park
                                    <br />
                                    near by Mis Internatinal School
                                    <br />
                                    Balewadi, Pune – 411045,
                                    <br />
                                    Maharashtra, India
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-primary text-base mb-1">
                                    Email Address
                                </h4>
                                <p className="text-slate-600 text-sm">
                                    info@abcorpindia.com
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                            <iframe
                                src="https://www.google.com/maps?q=18.575638,73.765227&z=15&output=embed"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                loading="lazy"
                            ></iframe>
                        </div>

                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.12)] border border-slate-200"
                    >

                        {status === "success" && (
                            <p className="text-green-600 text-sm mb-4">
                                ✅ Message sent successfully!
                            </p>
                        )}

                        {status === "error" && (
                            <p className="text-red-600 text-sm mb-4">
                                ❌ Something went wrong. Please try again.
                            </p>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div>
                                <label className="block text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="John Doe"
                                    className="w-full rounded-lg bg-slate-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="john@company.com"
                                    className="w-full rounded-lg bg-slate-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="How can we help your organization?"
                                    className="w-full rounded-lg bg-slate-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary hover:bg-blue-900 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>

                        </form>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}