"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    Building2,
    Home,
    Info,
    Briefcase,
    Phone
} from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navLinks = [
        { name: "Home", id: "home", icon: Home },
        { name: "About", id: "about", icon: Info },
        { name: "Services", id: "services", icon: Briefcase },
    ];

    /* ===== Smooth Scroll ===== */
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const navbarHeight = 80;
        const top =
            element.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        window.scrollTo({
            top,
            behavior: "smooth",
        });

        setIsOpen(false);
    };

    /* ===== Scroll Spy ===== */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);

            const sections = ["home", "about", "services", "contact"];
            const scrollPosition = window.scrollY + 120;

            for (let section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    if (
                        scrollPosition >= el.offsetTop &&
                        scrollPosition < el.offsetTop + el.offsetHeight
                    ) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* ================= NAVBAR ================= */}
            <motion.nav
                initial={{ y: -60 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
                className={clsx(
                    "fixed top-0 w-full z-50 transition-all duration-300",
                    scrolled
                        ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200"
                        : "bg-background-grey"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                    {/* ===== Logo ===== */}
                    <button
                        onClick={() => scrollToSection("home")}
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition">
                            <Building2 size={20} />
                        </div>
                        <span className="text-xl font-semibold text-primary tracking-tight">
                            AB Corporation
                        </span>
                    </button>

                    {/* ===== Desktop Nav ===== */}
                    <div className="hidden lg:flex items-center gap-10 relative">

                        {navLinks.map((link) => {
                            const Icon = link.icon;

                            return (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={clsx(
                                        "relative flex items-center gap-2 text-sm font-semibold transition-all duration-300",
                                        activeSection === link.id
                                            ? "text-primary"
                                            : "text-slate-500 hover:text-primary"
                                    )}
                                >
                                    <Icon size={16} />
                                    {link.name}

                                    {/* Animated underline */}
                                    <span
                                        className={clsx(
                                            "absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300",
                                            activeSection === link.id ? "w-full" : "w-0"
                                        )}
                                    />
                                </button>
                            );
                        })}

                        {/* Contact Button */}
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
                        >
                            <Phone size={16} />
                            Contact
                        </button>

                    </div>

                    {/* ===== Mobile Toggle ===== */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-primary"
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={26} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={26} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </motion.nav>

            {/* ================= MOBILE MENU ================= */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-20 inset-x-0 bg-white shadow-xl border-t border-slate-200 lg:hidden z-40"
                    >
                        <div className="flex flex-col px-6 py-8 space-y-6">

                            {navLinks.map((link) => {
                                const Icon = link.icon;

                                return (
                                    <button
                                        key={link.id}
                                        onClick={() => scrollToSection(link.id)}
                                        className={clsx(
                                            "flex items-center gap-3 text-base font-semibold transition",
                                            activeSection === link.id
                                                ? "text-primary"
                                                : "text-slate-600"
                                        )}
                                    >
                                        <Icon size={18} />
                                        {link.name}
                                    </button>
                                );
                            })}

                            <button
                                onClick={() => scrollToSection("contact")}
                                className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold shadow-md mt-4"
                            >
                                <Phone size={18} />
                                Contact
                            </button>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}