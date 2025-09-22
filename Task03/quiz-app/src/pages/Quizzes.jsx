// src/pages/Quizzes.jsx
import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Quizzes() {
    const [code, setCode] = useState("");
    const [quizzes] = useState([
        {
            id: 1,
            title: "Capitals of Country",
            description: "Test your knowledge of country capitals",
            duration: "15m",
            img: "src/assets/images/capitals.png",
        },
        {
            id: 2,
            title: "Capitals of Country",
            description: "Test your knowledge of country capitals",
            duration: "15m",
            img: "src/assets/images/capitals2.png",
        },
        {
            id: 3,
            title: "Capitals of Country",
            description: "Test your knowledge of country capitals",
            duration: "15m",
            img: "src/assets/images/capitals3.png",
        },
    ]);

    // avatar menu toggle (replaces the inline script)
    const [menuOpen, setMenuOpen] = useState(false);
    const avatarRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        function onDocClick(e) {
            if (avatarRef.current && avatarRef.current.contains(e.target)) {
                setMenuOpen((s) => !s);
            } else if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("click", onDocClick);
        return () => document.removeEventListener("click", onDocClick);
    }, []);

    const handleTakeQuizByCode = (e) => {
        e.preventDefault();
        if (!code.trim()) {
            alert("Please enter a quiz code.");
            return;
        }
        // TODO: implement real navigation / API
        alert(`Navigate to quiz with code: ${code}`);
        setCode("");
    };

    const handleStart = (quiz) => {
        // TODO: replace with navigation to quiz page
        alert(`Start quiz: ${quiz.title} (id: ${quiz.id})`);
    };

    return (
        <div className="min-h-full text-[#222] [--card-img-h:30vh]">
            {/* Header - using shared component (keeps its own layout) */}
            <Header />

            {/* TAKE A QUIZ */}
            <section className="px-[150px] py-10">
                <h2 className="text-center text-2xl font-semibold">Take a Quiz</h2>
                <form onSubmit={handleTakeQuizByCode} className="mt-5">
                    <div className="w-full flex border border-gray-300 rounded-md overflow-hidden bg-white">
                        <input
                            id="quiz-code"
                            name="code"
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="Enter quiz code to take a quiz"
                            className="flex-1 px-3 py-2 text-base outline-none min-w-0"
                        />
                        <button
                            type="submit"
                            className="px-5 py-2 text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600"
                        >
                            Take Quiz
                        </button>
                    </div>
                </form>
            </section>

            {/* QUIZZES GRID */}
            <section id="quizzes" className="pb-6 px-[150px]">
                <h1 className="text-center text-2xl font-semibold">QUIZZES</h1>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border-b border-gray-300 pb-6">
                    {quizzes.map((q) => (
                        <article
                            key={q.id}
                            className="bg-white border border-gray-300 rounded-lg overflow-hidden flex flex-col"
                        >
                            <img
                                src={q.img}
                                alt={q.title}
                                className="w-full h-[var(--card-img-h)] object-cover block"
                            />
                            <div className="p-3 flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="m-0 font-semibold">{q.title}</h3>
                                    <span>{q.duration}</span>
                                </div>
                                <div>{q.description}</div>
                                <button
                                    onClick={() => handleStart(q)}
                                    className="mt-auto w-full bg-sky-500 text-white rounded py-2 hover:bg-sky-600"
                                >
                                    Start
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Footer - using shared component */}
            <Footer />
        </div>
    );
}
