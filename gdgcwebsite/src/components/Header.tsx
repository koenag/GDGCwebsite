"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEventsOpen, setIsEventsOpen] = useState(false);

    const navItems = [
        { name: "Events", href: "/events", hasDropdown: true },
        { name: "Sponsors", href: "/sponsors" },
        { name: "Resources", href: "/resources" },
        { name: "The Team", href: "/team" },
        { name: "Contact Us", href: "/contact" },
    ];

    const eventSubItems = [
        { name: "Projects", href: "/events?type=projects" },
        { name: "Instruction", href: "/events?type=instruction" },
        { name: "Socials", href: "/events?type=socials" },
    ];

    return (
        <header className="w-full bg-white border-b-2 border-gray-200 relative z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <div className="flex items-center space-x-2">
                            {/* Google G logo */}
                            <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
                                <svg viewBox="0 0 24 24" className="w-full h-full">
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center justify-between ml-5 w-full">
                        <div className="flex space-x-8">
                            {navItems.slice(0, 4).map((item) => (
                                <div key={item.name} className="relative group">
                                    {item.hasDropdown ? (
                                        <>
                                            <Link
                                                href={item.href}
                                                className="flex items-center text-black hover:text-google-blue transition-colors duration-200 font-manrope text-lg font-medium"
                                            >
                                                {item.name}
                                                <svg className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                                                </svg>
                                            </Link>
                                            <div className="absolute left-0 top-full hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-lg min-w-[12rem] py-2 z-50">
                                                {eventSubItems.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        href={sub.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-google-blue"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="flex items-center text-black hover:text-google-blue transition-colors duration-200 font-manrope text-lg font-medium"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="relative group">
                                <Link href={navItems[4].href} className="flex items-center text-black hover:text-google-blue transition-colors duration-200 font-manrope text-lg font-medium">
                                    {navItems[4].name}
                                </Link>
                            </div>
                        </div>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-black hover:text-google-blue focus:outline-none"
                        aria-label="Toggle navigation menu"
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                            {/* Events with collapsible submenu */}
                            <button
                                onClick={() => setIsEventsOpen((v) => !v)}
                                className="w-full flex items-center justify-between px-3 py-2 text-black hover:text-google-blue hover:bg-gray-50 rounded-md font-manrope text-base font-medium"
                                aria-expanded={isEventsOpen}
                                aria-controls="mobile-events-submenu"
                            >
                                <span>Events</span>
                                <svg
                                    className={`ml-2 h-4 w-4 transform transition-transform ${isEventsOpen ? "rotate-180" : "rotate-0"}`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {isEventsOpen && (
                                <div id="mobile-events-submenu" className="pl-6 space-y-1">
                                    {eventSubItems.map((sub) => (
                                        <Link
                                            key={sub.name}
                                            href={sub.href}
                                            className="block px-3 py-2 text-black hover:text-google-blue hover:bg-gray-50 rounded-md font-manrope text-base"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {/* Other items */}
                            {navItems.slice(1).map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 text-black hover:text-google-blue hover:bg-gray-50 rounded-md font-manrope text-base font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
