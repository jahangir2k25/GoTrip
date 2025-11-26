import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 ">
            <div className="container  mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                {/* Contact Us */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                    <p className="text-sm mb-2">Toll Free Customer Care</p>
                    <p className="text-white font-semibold mb-4">+(1) 123 456 7890</p>
                    <p className="text-sm mb-2">Need live support?</p>
                    <p className="text-white font-semibold">hi@gotrip.com</p>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Press</li>
                        <li>Gift Cards</li>
                        <li>Magazine</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Contact</li>
                        <li>Legal Notice</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <li>Sitemap</li>
                    </ul>
                </div>

                {/* Other Services */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Other Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Car hire</li>
                        <li>Activity Finder</li>
                        <li>Tour List</li>
                        <li>Flight Finder</li>
                        <li>Cruise Ticket</li>
                        <li>Holiday Rental</li>
                        <li>Travel Agents</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Get Updates & More</h3>
                    <div className="flex items-center bg-white rounded-lg overflow-hidden">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="px-4 py-3 w-full text-black outline-none text-sm"
                        />
                        <button className="bg-white text-primary font-semibold px-4 text-sm cursor-pointer">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 mt-14 py-6">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

                    <div className='flex gap-10'>
                        <p>© 2022 GoTrip LLC All rights reserved.</p>

                        <div className="flex gap-4">
                            <span>Privacy</span>
                            <span>Terms</span>
                            <span>Site Map</span>
                        </div>
                    </div>


                    <div className="flex items-center gap-4">
                        <span>English (US) &nbsp; $ USD</span>
                        <span>in</span>
                        <span>f</span>
                        <span>t</span>
                        <span>◉</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

