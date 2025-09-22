"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Mobile-first promotional modal for the Cornucopia club fair.
 * - Shows once per session (sessionStorage)
 * - Accessible semantics with keyboard support
 * - Designed to feel native on mobile, graceful on desktop
 */
export default function CornocopiaModal() {
    const sessionFlagKey = "gdgc:cornucopia:promo:seen";
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        try {
            const hasSeen = typeof window !== "undefined" && sessionStorage.getItem(sessionFlagKey) === "1";
            const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : undefined;
            const forceOpen = params?.get("promo") === "cornucopia";
            if (!hasSeen || forceOpen) {
                setIsOpen(true);
            }
        } catch {
            setIsOpen(true);
        }
    }, []);

    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };
        window.addEventListener("keydown", onKeyDown);
        dialogRef.current?.focus();
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen]);

    function handleClose() {
        try {
            sessionStorage.setItem(sessionFlagKey, "1");
        } catch { }
        setIsOpen(false);
    }

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4"
            aria-labelledby="cornucopia-title"
            aria-describedby="cornucopia-desc"
            aria-modal="true"
            role="dialog"
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

            <div
                ref={dialogRef}
                tabIndex={-1}
                className="relative w-full sm:max-w-md sm:w-auto m-0 sm:m-0 rounded-t-3xl sm:rounded-3xl border-4 border-black shadow-2xl focus:outline-none"
            >
                <div className="rounded-t-[1.25rem] sm:rounded-[1.25rem] bg-gradient-to-br from-google-yellow via-google-red to-google-blue p-[3px]">
                    <div className="rounded-t-[1.1rem] sm:rounded-[1.1rem] bg-white">
                        <div className="relative overflow-hidden">
                            <div className="pointer-events-none absolute -top-10 -left-10 w-28 h-28 bg-google-red/30 rounded-full blur-2xl" />
                            <div className="pointer-events-none absolute -bottom-10 -right-10 w-32 h-32 bg-google-blue/30 rounded-full blur-2xl" />

                            <div className="px-5 pt-5 pb-4 sm:px-6 sm:pt-6 sm:pb-5">
                                <div className="flex items-start gap-3">
                                    <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white shadow-md">
                                        <svg
                                            viewBox="0 0 20 20"
                                            width="20"
                                            height="20"
                                            role="img"
                                            aria-label="Google logo"
                                        >
                                            <circle cx="6" cy="6" r="3" fill="#EA4335" />
                                            <circle cx="14" cy="6" r="3" fill="#FBBC05" />
                                            <circle cx="6" cy="14" r="3" fill="#34A853" />
                                            <circle cx="14" cy="14" r="3" fill="#4285F4" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h2 id="cornucopia-title" className="text-2xl sm:text-3xl font-extrabold font-manrope leading-dark text-black">
                                            Cornucopia Club Fair
                                        </h2>
                                        <p id="cornucopia-desc" className="mt-1 text-sm sm:text-base text-neutral-700 font-manrope">
                                            Come meet GDGC at the campus club fair! Stop by our booth to learn about workshops, projects, and socials.
                                        </p>
                                    </div>
                                    <button onClick={handleClose} aria-label="Close" className="-mr-1 -mt-1 rounded-full p-2 text-black hover:text-google-blue focus:outline-none focus:ring-2 focus:ring-black">
                                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 6L6 18" />
                                            <path d="M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                                    <Button asChild className="w-full h-12 text-base font-manrope font-semibold border-2 border-black bg-white hover:bg-white/90 text-black">
                                        <Link href="/events">See details</Link>
                                    </Button>
                                    <Button onClick={handleClose} variant="ghost" className="w-full h-12 text-base font-manrope font-semibold border-2 border-black bg-white hover:bg-gray-50 text-black">
                                        Not now
                                    </Button>
                                </div>

                                <p className="mt-3 text-center text-xs text-neutral-500 font-manrope">This notice will not show again this session.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
