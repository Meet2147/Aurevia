import React from "react";
import { Sparkles, Instagram, Twitter, Video } from "lucide-react";
import logo from "../assets/logo.svg";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 sm:py-14 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
                    {/* Logo & Description */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                            <img
                                src={logo}
                                alt="Aurevia Logo"
                                className="w-8 object-contain"
                                onError={(e) => {
                                    e.target.style.display = "none";
                                    e.target.nextSibling.style.display =
                                        "block";
                                }}
                            />
                            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                                Aurevia
                            </span>
                        </div>
                        <p className="text-gray-400 max-w-md leading-relaxed text-sm sm:text-base">
                            Transform your closet into a smart, organized, and
                            inspiring space with AI-powered styling. Your
                            personal fashion assistant that actually gets your
                            style.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="sm:col-span-1">
                        <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                            <li>
                                <a
                                    href="#features"
                                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#showcase"
                                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Showcase
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#testimonials"
                                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Reviews
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm sm:text-base"
                                >
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="sm:col-span-1">
                        <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Cookie Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Get Early Access
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-6 sm:pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                            © 2025 Aurevia. All rights reserved. Made with ✨
                            for Gen Z.
                        </p>

                        <div className="flex items-center space-x-4 sm:space-x-6">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 hover:scale-110 transform"
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 hover:scale-110 transform"
                                aria-label="Follow us on Twitter"
                            >
                                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 hover:scale-110 transform"
                                aria-label="Follow us on TikTok"
                            >
                                <Video className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;