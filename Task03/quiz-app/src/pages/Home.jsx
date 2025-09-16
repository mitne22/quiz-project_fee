import React from "react";

export default function Home() {
    return (
        <div className="page-home [--card-img-h:30vh] min-h-full">
            {/* HEADER */}
            <header className="border-b border-gray-300">
                <nav className="flex items-center justify-between py-3 px-[150px]">
                    <div className="flex items-center gap-3">
                        <a href="/" className="inline-flex items-center">
                            <img src="src/assets/images/logo.png" alt="Logo" className="w-15 h-14" />
                        </a>
                        <h1 className="text-xl font-semibold">Quizzes</h1>
                    </div>

                    <ul className="flex gap-6 m-0 p-0">
                        <li className="list-none"><a href="/" className="block px-3 py-2 rounded hover:bg-gray-300 hover:text-white">Home</a></li>
                        <li className="list-none"><a href="#quizzes" className="block px-3 py-2 rounded hover:bg-gray-300 hover:text-white">Quizzes</a></li>
                        <li className="list-none"><a href="/about" className="block px-3 py-2 rounded hover:bg-gray-300 hover:text-white">About</a></li>
                        <li className="list-none"><a href="/contact" className="block px-3 py-2 rounded hover:bg-gray-300 hover:text-white">Contact</a></li>
                    </ul>

                    <div className="relative">
                        <div className="gap-3">
                            <a href="/login" className="px-4 py-2 rounded hover:bg-gray-100">Login</a>
                            <a href="/register" className="px-4 py-2 rounded hover:bg-sky-600">Register</a>
                        </div>
                    </div>
                </nav>
            </header>

            {/* HERO */}
            <section className="py-12 px-[150px]">
                <div className="grid md:grid-cols-5 gap-6 items-center">
                    <div className="md:col-span-3">
                        <h1 className="text-3xl md:text-4xl font-bold">Welcome to Quiz App</h1>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, nunc non laoreet mattis,
                            nunc sapien ultrices sapien, nec tincidunt nunc nunc nec libero.
                        </p>
                        <div className="mt-5">
                            <a href="#quizzes" className="inline-block no-underline bg-sky-500 text-white rounded px-5 py-2 hover:bg-sky-600">Take a Quiz</a>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <img src="src/assets/images/quiz.png" alt="Quiz illustration" className="w-full h-auto block" />
                    </div>
                </div>
            </section>

            {/* QUIZZES */}
            <section id="quizzes" className="pb-6 px-[150px]">
                <h1 className="text-center text-2xl font-semibold">QUIZZES</h1>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border-b border-gray-300 pb-6">
                    {[1, 2, 3].map((i) => (
                        <article key={i} className="bg-white border border-gray-300 rounded-lg overflow-hidden flex flex-col">
                            <img src={`src/assets/images/capitals${i === 1 ? "" : i}.png`} alt="Capitals" className="w-full h-[var(--card-img-h)] object-cover block" />
                            <div className="p-3 flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="m-0 font-semibold">Capitals of Country</h3>
                                    <span>15m</span>
                                </div>
                                <div>Test your knowledge of country capitals</div>
                                <button className="mt-auto w-full bg-sky-500 text-white rounded py-2 hover:bg-sky-600">Start</button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start border-b border-gray-300 px-[150px] pb-6">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3">
                            <img src="src/assets/images/logo.png" alt="Logo" className="w-[50px] h-[50px]" />
                            <h2 className="text-xl font-semibold">Quizzes</h2>
                        </div>
                        <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">Menu</h2>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className="text-sky-500 hover:underline">Home</a></li>
                            <li><a href="#" className="text-sky-500 hover:underline">Quizzes</a></li>
                            <li><a href="#" className="text-sky-500 hover:underline">About</a></li>
                            <li><a href="#" className="text-sky-500 hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">Contact</h2>
                        <ul className="mt-2 space-y-2 text-sky-500">
                            <li className="flex items-center gap-2">
                                <img src="src/assets/images/mail_icon.png" alt="mail-icon" className="w-[18px] h-[18px]" />
                                <a href="mailto:congdinh2021@gmail.com" className="hover:underline">congdinh2021@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src="src/assets/images/phone-solid.png" alt="phone-icon" className="w-[18px] h-[18px]" />
                                <a href="tel:+84944551536" className="hover:underline">+84 944 551 536</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src="src/assets/images/location-dot-solid.png" alt="location-icon" className="w-[18px] h-[18px]" />
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
