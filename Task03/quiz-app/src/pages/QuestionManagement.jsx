// src/pages/QuestionManagement.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function QuestionManagement() {
    // filters
    const [searchName, setSearchName] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [activeOnly, setActiveOnly] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // mock data (replace with API)
    const [questions] = useState([
        { id: 1, content: "Who is the inventor of the airplane?", type: "MultipleChoice", answers: 4, status: "Yes" },
        { id: 2, content: "Who is the inventor of the World Wide Web?", type: "MultipleChoice", answers: 4, status: "Yes" },
        { id: 3, content: "Where is Viet Nam?", type: "MultipleChoice", answers: 4, status: "Yes" },
        { id: 4, content: "What is the capital of France?", type: "SingleChoice", answers: 4, status: "Yes" },
        { id: 5, content: "Who is the inventor of the alternating current?", type: "MultipleChoice", answers: 4, status: "Yes" },
        { id: 6, content: "Where is Australia?", type: "MultipleChoice", answers: 4, status: "Yes" },
        { id: 7, content: "Who is the inventor of the ATM?", type: "MultipleChoice", answers: 4, status: "Yes" },
        { id: 8, content: "Where is France?", type: "MultipleChoice", answers: 4, status: "Yes" },
        { id: 9, content: "Where is the United States?", type: "MultipleChoice", answers: 4, status: "Yes" },
        { id: 10, content: "Who is the inventor of the washing machine?", type: "MultipleChoice", answers: 4, status: "Yes" }
    ]);

    const [answers] = useState([
        { id: 1, content: "Wright brothers", isCorrect: true, status: "Yes" },
        { id: 2, content: "Alexander Graham Bell", isCorrect: false, status: "Yes" },
        { id: 3, content: "Albert Einstein", isCorrect: false, status: "Yes" },
        { id: 4, content: "Charles Babbage", isCorrect: false, status: "Yes" }
    ]);

    // add-question form state (simple)
    const [newQuestionContent, setNewQuestionContent] = useState("");
    const [newQuestionType, setNewQuestionType] = useState("");
    const [newQuestionActive, setNewQuestionActive] = useState(true);

    // add-answer form state (simple)
    const [newAnswerDesc, setNewAnswerDesc] = useState("");
    const [newAnswerCorrect, setNewAnswerCorrect] = useState(false);
    const [newAnswerActive, setNewAnswerActive] = useState(true);

    // handlers (mock)
    const handleSearch = () => {
        console.log("search filters:", { searchName, typeFilter, activeOnly });
        // replace with API call / filtering logic
    };

    const handleClear = () => {
        setSearchName("");
        setTypeFilter("");
        setActiveOnly(false);
    };

    const handleSaveQuestion = () => {
        console.log("save question (mock)", { newQuestionContent, newQuestionType, newQuestionActive });
        alert("Save question (implement API)");
        setNewQuestionContent("");
        setNewQuestionType("");
        setNewQuestionActive(true);
    };

    const handleSaveAnswer = () => {
        console.log("save answer (mock)", { newAnswerDesc, newAnswerCorrect, newAnswerActive });
        alert("Save answer (implement API)");
        setNewAnswerDesc("");
        setNewAnswerCorrect(false);
        setNewAnswerActive(true);
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
                    {/* Filters panel */}
                    <div className="border border-gray-300 rounded-lg bg-white">
                        <div className="font-semibold p-4 border-b border-gray-300">Question Management</div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start border-b border-gray-300 p-4">
                            <div className="space-y-1 flex flex-col">
                                <label htmlFor="q-name" className="font-semibold">Name</label>
                                <input
                                    id="q-name"
                                    value={searchName}
                                    onChange={(e) => setSearchName(e.target.value)}
                                    placeholder="Enter role name to search"
                                    className="h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white w-full"
                                />
                            </div>

                            <div className="space-y-1 flex flex-col">
                                <label htmlFor="q-type" className="font-semibold">Type</label>
                                <select
                                    id="q-type"
                                    value={typeFilter}
                                    onChange={(e) => setTypeFilter(e.target.value)}
                                    className="h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white"
                                >
                                    <option value="">Type</option>
                                    <option value="multiple_choice">Multiple Choice</option>
                                    <option value="true_false">True / False</option>
                                    <option value="short_answer">Short Answer</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 items-start border-b border-gray-300 p-4">
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold" htmlFor="q-active">Status</label>
                                <label className="inline-flex items-center gap-2" htmlFor="q-active">
                                    <input
                                        type="checkbox"
                                        id="q-active"
                                        checked={activeOnly}
                                        onChange={() => setActiveOnly((s) => !s)}
                                        className="w-[25px] h-[25px] border border-gray-300 rounded"
                                    />
                                    Active
                                </label>
                            </div>
                        </div>

                        <div className="p-4 flex items-center justify-between">
                            <button className="inline-flex items-center gap-2 bg-sky-500 text-white border border-sky-500 rounded h-9 px-3">
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
                                    className="inline-flex items-center gap-2 bg-sky-500 text-white border border-sky-500 rounded h-9 px-3"
                                >
                                    <img src="src/assets/images/magnifying-glass-solid.svg.png" className="w-4 h-4" alt="icon" /> Search
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Question List */}
                    <div className="border border-gray-300 rounded-lg bg-white">
                        <div className="font-semibold p-4 border-b border-gray-300">Question List</div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-200 text-left">
                                        <th className="p-3 font-semibold">Content</th>
                                        <th className="p-3 font-semibold">Type</th>
                                        <th className="p-3 font-semibold">Answers</th>
                                        <th className="p-3 font-semibold">Status</th>
                                        <th className="p-3 font-semibold">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {questions.map((q) => (
                                        <tr key={q.id} className="odd:bg-white even:bg-gray-100 hover:bg-[#eef5ff]">
                                            <td className="p-3">{q.content}</td>
                                            <td className="p-3">{q.type}</td>
                                            <td className="p-3">{q.answers}</td>
                                            <td className="p-3">{q.status}</td>
                                            <td className="p-3">
                                                <div className="flex items-center gap-2">
                                                    <button className="p-0 border-0" title="Edit">
                                                        <img src="src/assets/images/pen-to-square-solid.svg.png" className="w-4 h-4" alt="edit" />
                                                    </button>
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
                                <button className="min-w-8 h-8 border border-slate-300 bg-white rounded-full text-sky-500">«</button>
                                <button className="min-w-8 h-8 border border-slate-300 bg-white rounded-full text-sky-500">‹</button>
                                <button className="min-w-8 h-8 border border-sky-500 bg-[#e6f4ff] rounded-full text-sky-500">1</button>
                                <button className="min-w-8 h-8 border border-slate-300 bg-white rounded-full text-sky-500">2</button>
                                <button className="min-w-8 h-8 border border-slate-300 bg-white rounded-full text-sky-500">3</button>
                                <button className="min-w-8 h-8 border border-slate-300 bg-white rounded-full text-sky-500">›</button>
                                <button className="min-w-8 h-8 border border-slate-300 bg-white rounded-full text-sky-500">»</button>
                            </div>

                            <div>1-10 of {questions.length}</div>
                        </div>
                    </div>

                    {/* Add Question */}
                    <div className="border border-gray-300 rounded-lg bg-white">
                        <div className="font-semibold p-4 border-b border-gray-300">Add Question</div>

                        <div className="flex flex-wrap gap-4 p-4">
                            <div className="flex-1 min-w-[300px]">
                                <label className="block mb-1 font-semibold" htmlFor="q-content">Content</label>
                                <textarea
                                    id="q-content"
                                    value={newQuestionContent}
                                    onChange={(e) => setNewQuestionContent(e.target.value)}
                                    placeholder="Enter question content"
                                    className="w-full min-h-[80px] px-3 py-2 border border-gray-300 rounded-lg outline-none bg-white resize-y"
                                />
                            </div>

                            <div className="flex-1 min-w-[300px]">
                                <label className="block mb-1 font-semibold" htmlFor="qtype-add">Question Type</label>
                                <select
                                    id="qtype-add"
                                    value={newQuestionType}
                                    onChange={(e) => setNewQuestionType(e.target.value)}
                                    className="h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white w-full"
                                >
                                    <option value="">Select Question Type</option>
                                    <option value="multiple_choice">Multiple Choice</option>
                                    <option value="true_false">True / False</option>
                                    <option value="short_answer">Short Answer</option>
                                </select>
                            </div>
                        </div>

                        <div className="p-4">
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold" htmlFor="q-add-active">Status</label>
                                <label className="inline-flex items-center gap-2" htmlFor="q-add-active">
                                    <input
                                        type="checkbox"
                                        id="q-add-active"
                                        checked={newQuestionActive}
                                        onChange={() => setNewQuestionActive((s) => !s)}
                                        className="w-[25px] h-[25px] border border-gray-300 rounded"
                                    />
                                    Active
                                </label>
                            </div>
                        </div>

                        <div className="p-4 flex items-center justify-between">
                            <button className="inline-flex items-center gap-2 bg-sky-500 text-white border border-sky-500 rounded h-9 px-3">
                                <img src="src/assets/images/plus-solid.png" className="w-4 h-4" alt="" /> Show Answers
                            </button>
                            <div className="space-x-2">
                                <button
                                    onClick={() => { setNewQuestionContent(""); setNewQuestionType(""); setNewQuestionActive(true); }}
                                    className="inline-flex items-center gap-2 bg-white text-black border border-gray-300 rounded h-9 px-3"
                                >
                                    <img src="src/assets/images/path.png" className="w-4 h-4" alt="icon" /> Clear
                                </button>
                                <button
                                    onClick={handleSaveQuestion}
                                    className="inline-flex items-center gap-2 bg-sky-500 text-white border border-sky-500 rounded h-9 px-3"
                                >
                                    <img src="src/assets/images/floppy-disk-regular.png" className="w-4 h-4" alt="icon" /> Save
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Answer List */}
                    <div className="border border-gray-300 rounded-lg bg-white">
                        <div className="font-semibold p-4 border-b border-gray-300">Answer List</div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-200 text-left">
                                        <th className="p-3 font-semibold">Content</th>
                                        <th className="p-3 font-semibold">Is Correct</th>
                                        <th className="p-3 font-semibold">Status</th>
                                        <th className="p-3 font-semibold">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {answers.map((a) => (
                                        <tr key={a.id} className="odd:bg-white even:bg-gray-100 hover:bg-[#eef5ff]">
                                            <td className="p-3">{a.content}</td>
                                            <td className="p-3">{a.isCorrect ? "True" : "False"}</td>
                                            <td className="p-3">{a.status}</td>
                                            <td className="p-3">
                                                <div className="flex items-center gap-2">
                                                    <button className="p-0 border-0" title="Edit">
                                                        <img src="src/assets/images/pen-to-square-solid.svg.png" className="w-4 h-4" alt="edit" />
                                                    </button>
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
                            <button className="inline-flex items-center gap-2 bg-sky-500 text-white border border-sky-500 rounded h-9 px-3">
                                <img src="src/assets/images/plus-solid.png" className="w-4 h-4" alt="" /> Add
                            </button>
                        </div>
                    </div>

                    {/* Add Answer */}
                    <div className="border border-gray-300 rounded-lg bg-white">
                        <div className="font-semibold p-4 border-b border-gray-300">Add Answer</div>

                        <div className="flex flex-wrap gap-4 p-4">
                            <div className="w-full">
                                <label className="block mb-1 font-semibold" htmlFor="ans-desc">Description</label>
                                <textarea
                                    id="ans-desc"
                                    value={newAnswerDesc}
                                    onChange={(e) => setNewAnswerDesc(e.target.value)}
                                    placeholder="Enter your answer"
                                    className="w-full min-h-[80px] px-3 py-2 border border-gray-300 rounded-lg outline-none bg-white resize-y"
                                />
                            </div>

                            <div className="flex gap-8">
                                <label className="inline-flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="ans-correct"
                                        checked={newAnswerCorrect}
                                        onChange={() => setNewAnswerCorrect((s) => !s)}
                                        className="w-[25px] h-[25px] border border-gray-300 rounded"
                                    />
                                    Is Correct?
                                </label>
                                <label className="inline-flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="ans-active"
                                        checked={newAnswerActive}
                                        onChange={() => setNewAnswerActive((s) => !s)}
                                        className="w-[25px] h-[25px] border border-gray-300 rounded"
                                    />
                                    Active
                                </label>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 p-4">
                            <button
                                onClick={() => { setNewAnswerDesc(""); setNewAnswerCorrect(false); setNewAnswerActive(true); }}
                                className="inline-flex items-center gap-2 bg-white text-black border border-gray-300 rounded h-9 px-3"
                            >
                                <img src="src/assets/images/path.png" className="w-4 h-4" alt="cancel" /> Cancel
                            </button>
                            <button
                                onClick={handleSaveAnswer}
                                className="inline-flex items-center gap-2 bg-sky-500 text-white border border-sky-500 rounded h-9 px-3"
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
