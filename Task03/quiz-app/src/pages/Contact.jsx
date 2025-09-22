// src/pages/Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// assets (chỉnh đường dẫn nếu cần)
import Logo from "../assets/images/logo.png";
import MailIcon from "../assets/images/mail_icon.png";
import PhoneIcon from "../assets/images/phone-solid.png";
import LocationIcon from "../assets/images/location-dot-solid.png";
import TikTokIcon from "../assets/images/tiktok.png";
import FbIcon from "../assets/images/fb.png";
import YtIcon from "../assets/images/yt.png";
import LinkedInIcon from "../assets/images/linkedin.png";
import Avatar from "../assets/images/profile-avatar.png";

export default function Contact() {
    const [isAuthed, setIsAuthed] = useState(false); // mock auth
    const [menuOpen, setMenuOpen] = useState(false);
    const avatarRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClick(e) {
            if (avatarRef.current && avatarRef.current.contains(e.target)) return;
            if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
        }
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            message: form.message.value.trim(),
        };
        // TODO: gửi data lên API
        console.log("Feedback submitted:", data);
        // reset form
        form.reset();
        alert("Cảm ơn! Phản hồi của bạn đã được gửi.");
    }

    return (
        <div className="min-h-full text-[#222] page-contact">
            {/* HEADER */}
            <header className="border-b border-gray-300">
                <nav className="flex items-center justify-between py-3 px-[150px]">
                    <div className="flex items-center gap-3">
                        <Link to="/" className="inline-flex items-center">
                            <img src={Logo} alt="Logo" className="w-15 h-14" />
                        </Link>
                        <h1 className="text-xl font-semibold">Quizzes</h1>
                    </div>

                    <ul className="flex gap-6 m-0 p-0">
                        <li className="list-none">
                            <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-300 hover:text-white">Home</Link>
                        </li>
                        <li className="list-none">
                            <a href="#quizzes" className="block px-3 py-2 rounded hover:bg-gray-300 hover:text-white">Quizzes</a>
                        </li>
                        <li className="list-none">
                            <Link to="/about" className="block px-3 py-2 rounded hover:bg-gray-300 hover:text-white">About</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/contact" className="block px-3 py-2 rounded hover:bg-gray-300 hover:text-white">Contact</Link>
                        </li>
                    </ul>

                    {/* Profile / Auth */}
                    <div className="relative">
                        {!isAuthed && (
                            <div className="gap-3">
                                <Link to="/login" className="px-4 py-2 rounded hover:bg-gray-100">Login</Link>
                                <Link to="/register" className="px-4 py-2 rounded hover:bg-sky-600">Register</Link>
                            </div>
                        )}

                        {isAuthed && (
                            <div className="inline-flex items-center">
                                <img
                                    src={Avatar}
                                    alt="Avatar"
                                    className="w-12 h-12 rounded-full cursor-pointer"
                                    ref={avatarRef}
                                    onClick={() => setMenuOpen(prev => !prev)}
                                />
                                <ul
                                    ref={menuRef}
                                    className={`absolute right-0 top-full mt-2 w-44 bg-white border border-gray-300 rounded-md shadow transition-opacity ${menuOpen ? "block" : "hidden"}`}
                                >
                                    <li><Link className="block px-3 py-2 rounded-t-md hover:bg-gray-200" to="/profile">Profile</Link></li>
                                    <li><Link className="block px-3 py-2 hover:bg-gray-200" to="/settings">Settings</Link></li>
                                    <li><button className="w-full text-left block px-3 py-2 rounded-b-md hover:bg-gray-200" onClick={() => { setIsAuthed(false); setMenuOpen(false); }}>Logout</button></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
            </header>

            {/* CONTACT */}
            <section id="contact" className="pt-7 pb-12 px-[150px] border-b border-gray-300">
                <h1 className="text-center text-2xl font-semibold">CONTACT</h1>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left: Feedback form */}
                    <article className="bg-white rounded-xl p-5">
                        <h2 className="text-[22px] font-semibold mb-1">Feedback</h2>
                        <p className="text-[#555] mb-4">
                            Please fill out the form below to send us your feedback. We will get back to you as soon as possible.
                        </p>

                        <form onSubmit={handleSubmit} autoComplete="on" noValidate>
                            <div className="mb-3">
                                <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
                                <input id="name" name="name" type="text" placeholder="Enter your name"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none bg-white" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
                                <input id="email" name="email" type="email" placeholder="Enter your email"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none bg-white" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="block mb-1 font-semibold">Message</label>
                                <textarea id="message" name="message" placeholder="Enter your message" rows="6"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none bg-white min-h-[130px] resize-y"
                                    required />
                            </div>

                            <button type="submit"
                                className="mt-2 inline-block rounded-md bg-sky-500 text-white px-5 py-2 hover:bg-sky-600">Send</button>
                        </form>
                    </article>

                    {/* Right: Our Information */}
                    <aside className="bg-white rounded-xl p-5">
                        <h2 className="text-[22px] font-semibold mb-1">Our Information</h2>
                        <p className="text-[#555] mb-4">We are always here to help you. You can contact us through the following ways.</p>

                        <ul className="m-0 p-0 space-y-3 text-sky-500">
                            <li className="flex items-center gap-2">
                                <img src={MailIcon} alt="mail-icon" className="w-[18px] h-[18px]" />
                                <a href="mailto:congdinh2021@gmail.com" className="hover:underline">congdinh2021@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={PhoneIcon} alt="phone-icon" className="w-[18px] h-[18px]" />
                                <a href="tel:+84944551536" className="hover:underline">+84 944 551 536</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={LocationIcon} alt="location-icon" className="w-[18px] h-[18px]" />
                                <span className="text-[#222]">123 Xuan Dinh, Bac Tu Liem, Ha Noi, Viet Nam</span>
                            </li>
                        </ul>

                        <div className="flex gap-2 mt-3">
                            <a href="#" aria-label="TikTok" className="inline-flex items-center"><img src={TikTokIcon} alt="tiktok" className="w-[22px] h-[22px]" /></a>
                            <a href="#" aria-label="Facebook" className="inline-flex items-center"><img src={FbIcon} alt="fb" className="w-[22px] h-[22px]" /></a>
                            <a href="#" aria-label="YouTube" className="inline-flex items-center"><img src={YtIcon} alt="yt" className="w-[22px] h-[22px]" /></a>
                            <a href="#" aria-label="LinkedIn" className="inline-flex items-center"><img src={LinkedInIcon} alt="linkedin" className="w-[22px] h-[22px]" /></a>
                        </div>
                    </aside>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start px-[150px] pb-6">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3">
                            <img src={Logo} alt="Logo" className="w-[50px] h-[50px]" />
                            <h2 className="text-xl font-semibold">Quizzes</h2>
                        </div>
                        <p className="mt-2 text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">Menu</h2>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/" className="text-sky-500 hover:underline">Home</Link></li>
                            <li><a href="#quizzes" className="text-sky-500 hover:underline">Quizzes</a></li>
                            <li><Link to="/about" className="text-sky-500 hover:underline">About</Link></li>
                            <li><Link to="/contact" className="text-sky-500 hover:underline">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">Contact</h2>
                        <ul className="mt-2 space-y-2 text-sky-500">
                            <li className="flex items-center gap-2">
                                <img src={MailIcon} alt="mail-icon" className="w-[18px] h-[18px]" />
                                <a href="mailto:congdinh2021@gmail.com" className="hover:underline">congdinh2021@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={PhoneIcon} alt="phone-icon" className="w-[18px] h-[18px]" />
                                <a href="tel:+84944551536" className="hover:underline">+84 944 551 536</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={LocationIcon} alt="location-icon" className="w-[18px] h-[18px]" />
                                <span className="text-[#222]">123 Xuan Dinh, Bac Tu Liem, Ha Noi, Viet Nam</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="px-[150px]">
                    <p className="text-center py-4">© May 2024 — React JS 19</p>
                </div>
            </footer>
        </div>
    );
}
