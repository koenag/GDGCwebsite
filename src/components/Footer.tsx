import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Top grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* About */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">About</h4>
                        <p className="text-gray-700 leading-relaxed">
                            Google Developer Group on Campus at UCSC. We host workshops, projects, socials,
                            and help students grow as developers.
                        </p>

                        {/* Socials */}
                        <div className="mt-6 flex items-center space-x-4">
                            <a
                                href="mailto:contact@gdgc.ucsc.edu"
                                className="text-gray-700 hover:text-google-blue transition-colors"
                                aria-label="Email"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com/gdgc_ucsc"
                                className="text-gray-700 hover:text-google-blue transition-colors"
                                aria-label="Instagram"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z" />
                                </svg>
                            </a>
                            <a
                                href="https://discord.gg/gdgc-ucsc"
                                className="text-gray-700 hover:text-google-blue transition-colors"
                                aria-label="Discord"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.210.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.120.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.210 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.210 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com/company/gdgc-ucsc"
                                className="text-gray-700 hover:text-google-blue transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/events" className="text-gray-700 hover:text-google-blue">Events</Link>
                            </li>
                            <li>
                                <Link href="/sponsors" className="text-gray-700 hover:text-google-blue">Sponsors</Link>
                            </li>
                            <li>
                                <Link href="/resources" className="text-gray-700 hover:text-google-blue">Resources</Link>
                            </li>
                            <li>
                                <Link href="/team" className="text-gray-700 hover:text-google-blue">The Team</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-700 hover:text-google-blue">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Contact</h4>
                        <ul className="space-y-3 text-gray-700">
                            <li>
                                <a href="mailto:contact@gdgc.ucsc.edu" className="hover:text-google-blue">ucsc.dsc@gmail.com</a>
                            </li>
                            <li>University of California, Santa Cruz</li>
                            <li>Santa Cruz, CA</li>
                        </ul>
                    </div>

                    {/* Developed By */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Developed by</h4>
                        <p className="text-gray-700">GDGC Web Team</p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                    <p>Copyright © 2025 UCSC GDGC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
