import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import QuizIllustration from "../assets/images/quiz.png";
import Avatar from "../assets/images/profile-avatar.png";
import MailIcon from "../assets/images/mail_icon.png";
import PhoneIcon from "../assets/images/phone-solid.png";
import LocationIcon from "../assets/images/location-dot-solid.png";
import John from "../assets/images/John.png";
import Jane from "../assets/images/Jane.png";
import Smith from "../assets/images/Smith.png";

export default function About() {
    const [isAuthed, setIsAuthed] = useState(false); // mock auth state
    const [menuOpen, setMenuOpen] = useState(false);
    const avatarRef = useRef(null);
    const menuRef = useRef(null);

    // đóng menu khi click ngoài
    useEffect(() => {
        function handleClick(e) {
            if (avatarRef.current && avatarRef.current.contains(e.target)) {
                // toggle handled by onClick on avatar
                return;
            }
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return (
        <div className="min-h-full text-[#222] [--card-img-h:50vh]">
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
                        {/* Guest */}
                        {!isAuthed && (
                            <div className="gap-3">
                                <Link to="/login" className="px-4 py-2 rounded hover:bg-gray-100">Login</Link>
                                <Link to="/register" className="px-4 py-2 rounded hover:bg-sky-600">Register</Link>
                            </div>
                        )}

                        {/* Authenticated */}
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
                                    <li><button className="w-full text-left block px-3 py-2 rounded-b-md hover:bg-gray-200" onClick={() => { /* logout logic */ setIsAuthed(false); setMenuOpen(false); }}>Logout</button></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
            </header>

            {/* HERO */}
            <section className="py-12 px-[150px]">
                <div className="grid md:grid-cols-5 gap-6 items-center">
                    <div className="md:col-span-3 space-y-4">
                        <div className="flex items-center gap-3">
                            <img src={Logo} alt="Logo" className="w-10 h-10" />
                            <h1 className="text-3xl md:text-4xl font-bold">Quizzes</h1>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, nunc non laoreet mattis,
                            nunc sapien ultrices sapien, nec tincidunt nunc nunc nec libero.
                        </p>

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
                                    <span>123 Xuan Dinh, Bac Tu Liem, Ha Noi, Viet Nam</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <img src={QuizIllustration} alt="Quiz illustration" className="w-full h-auto block" />
                    </div>
                </div>
            </section>

            {/* QUIZZES / CARDS */}
            <section id="quizzes" className="pb-6 px-[150px]">
                <h1 className="text-center text-2xl font-semibold">QUIZZES</h1>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border-b border-gray-300 pb-6">
                    <article className="text-center bg-white border border-gray-300 rounded-lg overflow-hidden flex flex-col">
                        <img src={John} alt="John" className="w-full h-[var(--card-img-h)] object-cover block" />
                        <div className="p-3">
                            <h3 className="m-0 font-semibold">John Doe</h3>
                            <div className="mt-5">Front End Developer</div>
                        </div>
                    </article>

                    <article className="text-center bg-white border border-gray-300 rounded-lg overflow-hidden flex flex-col">
                        <img src={Jane} alt="Jane" className="w-full h-[var(--card-img-h)] object-cover block" />
                        <div className="p-3">
                            <h3 className="m-0 font-semibold">Jane Doe</h3>
                            <div className="mt-5">Back End Developer</div>
                        </div>
                    </article>

                    <article className="text-center bg-white border border-gray-300 rounded-lg overflow-hidden flex flex-col">
                        <img src={Smith} alt="Smith" className="w-full h-[var(--card-img-h)] object-cover block" />
                        <div className="p-3">
                            <h3 className="m-0 font-semibold">John Smith</h3>
                            <div className="mt-5">Full Stack Developer</div>
                        </div>
                    </article>
                </div>
            </section>

            {/* FOOTER */}
            <footer>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start border-b border-gray-300 px-[150px] pb-6">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3">
                            <img src={Logo} alt="Logo" className="w-[50px] h-[50px]" />
                            <h2 className="text-xl font-semibold">Quizzes</h2>
                        </div>
                        <p className="mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
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
                                <span>123 Xuan Dinh, Bac Tu Liem, Ha Noi, Viet Nam</span>
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
