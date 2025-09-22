// src/pages/QuizManagement.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function QuizManagement() {
    // filters + pagination
    const [searchName, setSearchName] = useState("");
    const [activeOnly, setActiveOnly] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // mock quiz data (match HTML)
    const [quizzes] = useState([
        {
            id: 1,
            title: "Capitals of Country",
            description: "Test your knowledge of country capitals",
            duration: "15m",
            questions: 7,
            status: "Yes",
            img: "src/assets/images/capitals.png",
        },
        {
            id: 2,
            title: "Inventors and Inventions",
            description: "Test your knowledge of inventors and their inventions",
            duration: "20m",
            questions: 10,
            status: "Yes",
            img: "src/assets/images/capitals2.png",
        },
        {
            id: 3,
            title: "Countries of the World",
            description: "Test your knowledge of countries",
            duration: "15m",
            questions: 10,
            status: "Yes",
            img: "src/assets/images/capitals3.png",
        },
    ]);

    // mock question data (match HTML question list)
    const [questions] = useState([
        { id: 1, content: "Who is the inventor of the airplane?", type: "MultipleChoice", answers: 4, order: 1, status: "Yes" },
        { id: 2, content: "Who is the inventor of the World Wide Web?", type: "MultipleChoice", answers: 4, order: 2, status: "Yes" },
        { id: 3, content: "Where is Viet Nam?", type: "MultipleChoice", answers: 4, order: 3, status: "cell" },
        { id: 4, content: "What is the capital of France?", type: "SingleChoice", answers: 4, order: 4, status: "cell" },
        { id: 5, content: "Who is the inventor of the alternating current?", type: "MultipleChoice", answers: 4, order: 5, status: "cell" },
        { id: 6, content: "Where is Australia?", type: "MultipleChoice", answers: 4, order: 6, status: "cell" },
        { id: 7, content: "Who is the inventor of the ATM?", type: "MultipleChoice", answers: 4, order: 7, status: "cell" },
        { id: 8, content: "Where is France?", type: "MultipleChoice", answers: 4, order: 8, status: "cell" },
        { id: 9, content: "Where is the United States?", type: "MultipleChoice", answers: 4, order: 9, status: "cell" },
        { id: 10, content: "Who is the inventor of the washing machine?", type: "MultipleChoice", answers: 4, order: 10, status: "cell" },
    ]);

    // Add Quiz form state
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [duration, setDuration] = useState("");
    const [thumb, setThumb] = useState("");
    const [newQuizActive, setNewQuizActive] = useState(true);

    // Add Question to quiz row state
    const [qtype, setQtype] = useState("");
    const [qorder, setQorder] = useState("");

    // handlers (mock)
    const handleSearch = () => {
        console.log("search filters:", { searchName, activeOnly });
        alert("Search clicked (mock)");
    };

    const handleClear = () => {
        setSearchName("");
        setActiveOnly(false);
    };

    const handleSaveQuiz = () => {
        console.log("save quiz (mock)", { title, desc, duration, thumb, newQuizActive });
        alert("Save quiz (implement API)");
        setTitle("");
        setDesc("");
        setDuration("");
        setThumb("");
        setNewQuizActive(true);
    };

    const handleAddQuestionRow = () => {
        console.log("add question row (mock)", { qtype, qorder });
        alert("Add question row (mock)");
        setQtype("");
        setQorder("");
    };

    return (
        <div className="min-h-screen text-[#222]">
            <div
                className="grid gap-4 min-h-screen
             [grid-template-areas:'header_header'_'menu_content'_'menu_footer']
             [grid-template-columns:240px_1fr]
             [grid-template-rows:auto_1fr_auto]"
            >
                {/* Header */}
                <Header />

                {/* Sidebar */}
                <Sidebar />

                {/* Content */}
                <section className="[grid-area:content] space-y-4">
                    {/* Panel: Filters */}
                    <div className="border border-gray-300 rounded-lg bg-white shadow-sm">
                        <div className="font-semibold p-4 border-b border-gray-300">Quiz Management</div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start border-b border-gray-300 p-4">
                            <div className="space-y-1 flex flex-col">
                                <label className="font-semibold" htmlFor="search-name">Name</label>
                                <input
                                    id="search-name"
                                    value={searchName}
                                    onChange={(e) => setSearchName(e.target.value)}
                                    placeholder="Enter role name to search"
                                    className="h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white w-full"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold" htmlFor="q-status-active">Status</label>
                                <label className="inline-flex items-center gap-2" htmlFor="q-status-active">
                                    <input
                                        type="checkbox"
                                        id="q-status-active"
                                        checked={activeOnly}
                                        onChange={() => setActiveOnly((s) => !s)}
                                        className="w-[25px] h-[25px] border border-gray-300 rounded"
                                    />
                                    Active
                                </label>
                            </div>
                        </div>

                        <div className="p-4 flex items-center justify-between">
                            <button className="inline-flex items-center gap-2 bg-[#38b6ff] text-white border border-[#38b6ff] rounded h-9 px-3">
                                <img src="src/assets/images/plus-solid.png" className="w-4 h-4" alt="" /> Create
                            </button>
                            <div className="space-x-2">
                                <button
                                    onClick={handleClear}
                                    className="inline-flex items-center gap-2 bg-white text-black border border-gray-300 rounded h-9 px-3"
                                >
                                    <img src="src/assets/images/path.png" className="w-4 h-4" alt="icon" /> Clear
                                </button>
                                <button
                                    onClick={handleSearch}
                                    className="inline-flex items-center gap-2 bg-[#38b6ff] text-white border border-[#38b6ff] rounded h-9 px-3"
                                >
                                    <img src="src/assets/images/magnifying-glass-solid.svg.png" className="w-4 h-4" alt="icon" /> Search
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Panel: Quiz List */}
                    <div className="border border-gray-300 rounded-lg bg-white shadow-sm">
                        <div className="font-semibold p-4 border-b border-gray-300">Quiz List</div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-200 text-left">
                                        <th className="p-3 font-semibold w-[300px]">Header</th>
                                        <th className="p-3 font-semibold">Description</th>
                                        <th className="p-3 font-semibold w-[120px]">Duration</th>
                                        <th className="p-3 font-semibold w-[120px]">Questions</th>
                                        <th className="p-3 font-semibold w-[120px]">Status</th>
                                        <th className="p-3 font-semibold w-[120px]">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {quizzes.map((q) => (
                                        <tr key={q.id} className="odd:bg-white even:bg-gray-100 hover:bg-[#eef5ff]">
                                            <td className="p-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-16 h-12 rounded-md overflow-hidden border border-gray-200 bg-gray-100 flex-shrink-0">
                                                        <img src={q.img} className="w-full h-full object-cover" alt="" />
                                                    </div>
                                                    <div className="font-semibold text-black">{q.title}</div>
                                                </div>
                                            </td>
                                            <td className="p-3">{q.description}</td>
                                            <td className="p-3">{q.duration}</td>
                                            <td className="p-3">{q.questions}</td>
                                            <td className="p-3">{q.status}</td>
                                            <td className="p-3">
                                                <div className="flex items-center gap-2">
                                                    <button className="p-0 border-0"><img src="src/assets/images/pen-to-square-solid.svg.png" className="w-4 h-4" alt="edit" /></button>
                                                    <button className="p-0 border-0"><img src="src/assets/images/delete.png" className="w-4 h-4" alt="delete" /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="p-3 flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <span>Items per page:</span>
                                <select
                                    value={itemsPerPage}
                                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                                    className="h-[30px] border border-gray-300 rounded px-2 bg-white"
                                >
                                    <option>10</option>
                                    <option>20</option>
                                    <option>50</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-1">
                                <button className="min-w-9 h-9 border border-[#bcdaf6] bg-white rounded-full text-[#38b6ff]">«</button>
                                <button className="min-w-9 h-9 border border-[#bcdaf6] bg-white rounded-full text-[#38b6ff]">‹</button>
                                <button className="min-w-9 h-9 border border-[#38b6ff] bg-[#eaf5ff] rounded-full text-[#38b6ff]">1</button>
                                <button className="min-w-9 h-9 border border-[#bcdaf6] bg-white rounded-full text-[#38b6ff]">2</button>
                                <button className="min-w-9 h-9 border border-[#bcdaf6] bg-white rounded-full text-[#38b6ff]">3</button>
                                <button className="min-w-9 h-9 border border-[#bcdaf6] bg-white rounded-full text-[#38b6ff]">›</button>
                                <button className="min-w-9 h-9 border border-[#bcdaf6] bg-white rounded-full text-[#38b6ff]">»</button>
                            </div>
                            <div>1-10 of 32</div>
                        </div>
                    </div>

                    {/* Panel: Add Quiz (form) */}
                    <div className="border border-gray-300 rounded-lg bg-white shadow-sm">
                        <div className="font-semibold p-4 border-b border-gray-300">Add Quiz</div>

                        <div className="grid gap-4 p-4 md:grid-cols-2">
                            <div>
                                <label className="block mb-1 font-semibold" htmlFor="title">Title</label>
                                <input
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter quiz title"
                                    className="w-full h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-semibold" htmlFor="desc">Description</label>
                                <textarea
                                    id="desc"
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    placeholder="Enter description"
                                    className="w-full min-h-[80px] px-3 py-2 border border-gray-300 rounded-lg outline-none bg-white resize-y"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-semibold" htmlFor="duration">Duration</label>
                                <input
                                    id="duration"
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                    placeholder="Enter quiz duration"
                                    className="w-full h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-semibold" htmlFor="thumb">Thumbnail URL</label>
                                <input
                                    id="thumb"
                                    value={thumb}
                                    onChange={(e) => setThumb(e.target.value)}
                                    placeholder="Enter quiz thumbnail URL"
                                    className="w-full h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block font-semibold mb-2" htmlFor="q2-status-active">Status</label>
                                <label className="inline-flex items-center gap-2" htmlFor="q2-status-active">
                                    <input
                                        type="checkbox"
                                        id="q2-status-active"
                                        checked={newQuizActive}
                                        onChange={() => setNewQuizActive((s) => !s)}
                                        className="w-[25px] h-[25px] border border-gray-300 rounded"
                                    />
                                    Active
                                </label>
                            </div>
                        </div>

                        <div className="p-4 flex justify-between items-center">
                            <button className="inline-flex items-center gap-2 bg-[#38b6ff] text-white border border-[#38b6ff] rounded h-9 px-3">
                                <img src="src/assets/images/plus-solid.png" className="w-4 h-4" alt="" /> Show Questions
                            </button>

                            <div className="flex justify-end gap-2 p-4">
                                <button
                                    onClick={() => { setTitle(""); setDesc(""); setDuration(""); setThumb(""); setNewQuizActive(true); }}
                                    className="inline-flex items-center gap-2 bg-white text-black border border-gray-300 rounded h-9 px-3"
                                >
                                    <img src="src/assets/images/path.png" className="w-4 h-4" alt="cancel" /> Cancel
                                </button>
                                <button
                                    onClick={handleSaveQuiz}
                                    className="inline-flex items-center gap-2 bg-[#38b6ff] text-white border border-[#38b6ff] rounded h-9 px-3"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Panel: Question List */}
                    <div className="border border-gray-300 rounded-lg bg-white shadow-sm">
                        <div className="font-semibold p-4 border-b border-gray-300">Question List</div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-200 text-left">
                                        <th className="p-3 font-semibold">Content</th>
                                        <th className="p-3 font-semibold w-[150px]">Type</th>
                                        <th className="p-3 font-semibold w-[150px]">Answers</th>
                                        <th className="p-3 font-semibold w-[150px]">Order</th>
                                        <th className="p-3 font-semibold w-[150px]">Status</th>
                                        <th className="p-3 font-semibold w-[150px]">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {questions.map((q) => (
                                        <tr key={q.id} className="odd:bg-white even:bg-gray-100 hover:bg-[#eef5ff]">
                                            <td className="p-3">{q.content}</td>
                                            <td className="p-3">{q.type}</td>
                                            <td className="p-3">{q.answers}</td>
                                            <td className="p-3">{q.order}</td>
                                            <td className="p-3">{q.status}</td>
                                            <td className="p-3">
                                                <div className="flex items-center gap-2">
                                                    <button className="p-0 border-0" title="Delete">
                                                        <img src="src/assets/images/delete.png" className="w-4 h-4" alt="delete" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="p-4 flex justify-end">
                            <button className="inline-flex items-center gap-2 bg-[#38b6ff] text-white border border-[#38b6ff] rounded h-9 px-3">
                                <img src="src/assets/images/plus-solid.png" className="w-4 h-4" alt="" /> Add
                            </button>
                        </div>
                    </div>

                    {/* Panel: Add Quiz (Add Question row) */}
                    <div className="border border-gray-300 rounded-lg bg-white shadow-sm">
                        <div className="font-semibold p-4 border-b border-gray-300">Add Quiz</div>

                        <div className="grid gap-4 p-4 md:grid-cols-2">
                            <div>
                                <label className="block mb-1 font-semibold" htmlFor="qtype">Question</label>
                                <select
                                    id="qtype"
                                    value={qtype}
                                    onChange={(e) => setQtype(e.target.value)}
                                    className="w-full h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white"
                                >
                                    <option value="" disabled>Select Question Type</option>
                                    <option value="multiple_choice">Multiple Choice</option>
                                    <option value="true_false">True / False</option>
                                    <option value="short_answer">Short Answer</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold" htmlFor="qorder">Order</label>
                                <input
                                    id="qorder"
                                    value={qorder}
                                    onChange={(e) => setQorder(e.target.value)}
                                    placeholder="Enter order of question in quiz"
                                    className="w-full h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 p-4">
                            <button
                                onClick={() => { setQtype(""); setQorder(""); }}
                                className="inline-flex items-center gap-2 bg-white text-black border border-gray-300 rounded h-9 px-3"
                            >
                                <img src="/assets/images/path.png" className="w-4 h-4" alt="cancel" /> Cancel
                            </button>
                            <button
                                onClick={handleAddQuestionRow}
                                className="inline-flex items-center gap-2 bg-[#38b6ff] text-white border border-[#38b6ff] rounded h-9 px-3"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}
