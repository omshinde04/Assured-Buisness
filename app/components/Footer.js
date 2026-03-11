"use client";

import { Mail, MapPin, Phone, Smartphone, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-primary to-[#0d1f3a] text-white pt-16 pb-8 overflow-hidden">

            {/* Subtle Top Divider */}
            <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

            <div className="max-w-7xl mx-auto px-6">

                {/* ===== Main Grid ===== */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* ===== Company Info ===== */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">AB Corporation</h3>
                        <p className="text-sm text-white/70 leading-relaxed">
                            Delivering scalable digital and physical infrastructure solutions
                            across Maharashtra with operational excellence and strategic leadership.
                        </p>
                    </div>

                    {/* ===== Quick Links ===== */}
                    <div>
                        <h4 className="text-sm uppercase tracking-[0.3em] font-semibold mb-5 text-white/80">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="#home" className="hover:text-blue-300 transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="hover:text-blue-300 transition">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#leadership" className="hover:text-blue-300 transition">
                                    Leadership
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:text-blue-300 transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* ===== Contact Info ===== */}
                    <div>
                        <h4 className="text-sm uppercase tracking-[0.3em] font-semibold mb-5 text-white/80">
                            Contact
                        </h4>

                        <div className="space-y-5 text-sm text-white/70">

                            {/* Address */}
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="mt-1 text-blue-300 flex-shrink-0" />
                                <span>
                                    6, Tejonidhi, Behind Amar Tech Park,
                                    <br />
                                    Balewadi, Pune – 411045,
                                    <br />
                                    Maharashtra, India
                                </span>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-blue-300 flex-shrink-0" />
                                <span>+917219214154</span>
                            </div>

                            {/* Mobile
                            <div className="flex items-center gap-3">
                                <Smartphone size={18} className="text-blue-300 flex-shrink-0" />
                                <span>Mobile:</span>
                            </div> */}

                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-blue-300 flex-shrink-0" />
                                <span>contact@abcorpoindia.com</span>
                            </div>

                        </div>
                    </div>

                    {/* ===== Social ===== */}
                    <div>
                        <h4 className="text-sm uppercase tracking-[0.3em] font-semibold mb-5 text-white/80">
                            Connect
                        </h4>

                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition duration-300"
                            >
                                <Linkedin size={18} />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-400 transition duration-300"
                            >
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* ===== Bottom Section ===== */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">

                    <p>
                        © {new Date().getFullYear()} AB Corporation. All rights reserved.
                    </p>

                    <div className="mt-3 md:mt-0">
                        Designed with precision & excellence.
                    </div>

                </div>

            </div>
        </footer>
    );
}