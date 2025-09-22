// src/pages/UserManagement.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function UserManagement() {
    // filters / pagination state
    const [searchUsername, setSearchUsername] = useState("");
    const [activeOnly, setActiveOnly] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // mock users (from your HTML)
    const [users] = useState([
        { id: 1, firstName: "Admin", lastName: "User", email: "admin@domain.com", username: "admin", phone: "+84987654321", status: "Yes" },
        { id: 2, firstName: "Editor", lastName: "User", email: "editor@domain.com", username: "editor", phone: "+84987654321", status: "Yes" },
        { id: 3, firstName: "Cong", lastName: "Dinh", email: "congdinh@domain.com", username: "congdinh", phone: "+84987654321", status: "Yes" },
        { id: 4, firstName: "Van", lastName: "Nguyen", email: "vannguyen@domain.com", username: "vannguyen", phone: "+84987654321", status: "Yes" }
    ]);

    // add-user form state
    const [fn, setFn] = useState("");
    const [ln, setLn] = useState("");
    const [email, setEmail] = useState("");
    const [uname, setUname] = useState("");
    const [pw, setPw] = useState("");
    const [cpw, setCpw] = useState("");
    const [dob, setDob] = useState("");
    const [phone, setPhone] = useState("");
    const [newUserActive, setNewUserActive] = useState(true);

    // handlers (mock)
    const handleSearch = () => {
        console.log("search filters:", { searchUsername, activeOnly });
        alert("Search clicked (mock)");
    };

    const handleClear = () => {
        setSearchUsername("");
        setActiveOnly(false);
    };

    const handleSaveUser = () => {
        console.log("save user (mock)", { fn, ln, email, uname, pw, cpw, dob, phone, newUserActive });
        alert("Save user (implement API)");
        setFn(""); setLn(""); setEmail(""); setUname(""); setPw(""); setCpw(""); setDob(""); setPhone(""); setNewUserActive(true);
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
                    {/* Panel: Filters + buttons */}
                    <div className="border border-gray-300 rounded-lg bg-white">
                        <div className="font-semibold p-4 border-b border-gray-300">User Management</div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start border-b border-gray-300 p-4">
                            <div className="space-y-1 flex flex-col">
                                <label htmlFor="search-username" className="font-semibold">Name</label>
                                <input
                                    id="search-username"
                                    value={searchUsername}
                                    onChange={(e) => setSearchUsername(e.target.value)}
                                    placeholder="Enter username to search"
                                    className="h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white w-full"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold" htmlFor="status">Status</label>
                                <label className="inline-flex items-center gap-2" htmlFor="status-active">
                                    <input
                                        type="checkbox"
                                        id="status-active"
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

                    {/* Panel: List */}
                    <div className="border border-gray-300 rounded-lg bg-white">
                        <div className="font-semibold p-4 border-b border-gray-300">User List</div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-200 text-left">
                                        <th className="p-3 font-semibold">First Name</th>
                                        <th className="p-3 font-semibold">Last Name</th>
                                        <th className="p-3 font-semibold">Email</th>
                                        <th className="p-3 font-semibold">User Name</th>
                                        <th className="p-3 font-semibold">Phone Number</th>
                                        <th className="p-3 font-semibold">Status</th>
                                        <th className="p-3 font-semibold">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((u) => (
                                        <tr key={u.id} className="odd:bg-white even:bg-gray-100 hover:bg-[#eef5ff]">
                                            <td className="p-3">{u.firstName}</td>
                                            <td className="p-3">{u.lastName}</td>
                                            <td className="p-3">{u.email}</td>
                                            <td className="p-3">{u.username}</td>
                                            <td className="p-3">{u.phone}</td>
                                            <td className="p-3">{u.status}</td>
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
                            <div>1-10 of 32</div>
                        </div>
                    </div>

                    {/* Panel: Add User */}
                    <div className="border border-gray-300 rounded-lg bg-white">
                        <div className="font-semibold p-4 border-b border-gray-300">Add User</div>

                        <div className="flex flex-wrap gap-4 p-4">
                            <div className="flex gap-4 w-full min-w-[300px]">
                                <div className="flex-1">
                                    <label className="block mb-1 font-semibold" htmlFor="fn">First Name</label>
                                    <input
                                        id="fn"
                                        value={fn}
                                        onChange={(e) => setFn(e.target.value)}
                                        className="w-full h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block mb-1 font-semibold" htmlFor="ln">Last Name</label>
                                    <input
                                        id="ln"
                                        value={ln}
                                        onChange={(e) => setLn(e.target.value)}
                                        className="w-full h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 w-full min-w-[300px]">
                                <div className="flex-1 min-w-[300px]">
                                    <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="flex-1 min-w-[300px]">
                                    <label className="block mb-1 font-semibold" htmlFor="uname">User Name</label>
                                    <input
                                        id="uname"
                                        value={uname}
                                        onChange={(e) => setUname(e.target.value)}
                                        className="w-full h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white"
                                        placeholder="Enter your user name"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 w-full min-w-[300px]">
                                <div className="flex-1 min-w-[300px]">
                                    <label className="block mb-1 font-semibold" htmlFor="pw">Password</label>
                                    <input
                                        id="pw"
                                        type="password"
                                        value={pw}
                                        onChange={(e) => setPw(e.target.value)}
                                        className="w-full h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white"
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <div className="flex-1 min-w-[300px]">
                                    <label className="block mb-1 font-semibold" htmlFor="cpw">Confirm Password</label>
                                    <input
                                        id="cpw"
                                        type="password"
                                        value={cpw}
                                        onChange={(e) => setCpw(e.target.value)}
                                        className="w-full h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white"
                                        placeholder="Confirm your password"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 w-full min-w-[300px]">
                                <div className="flex-1 min-w-[300px]">
                                    <label className="block mb-1 font-semibold" htmlFor="dob">Date of Birth</label>
                                    <input
                                        id="dob"
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                        className="w-full h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white"
                                        placeholder="Enter your date of birth"
                                    />
                                </div>
                                <div className="flex-1 min-w-[300px]">
                                    <label className="block mb-1 font-semibold" htmlFor="phone">Phone Number</label>
                                    <input
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="flex flex-col gap-2">
                                    <label className="font-semibold" htmlFor="status2">Status</label>
                                    <label className="inline-flex items-center gap-2" htmlFor="status-active2">
                                        <input
                                            id="status-active2"
                                            type="checkbox"
                                            checked={newUserActive}
                                            onChange={() => setNewUserActive((s) => !s)}
                                            className="w-[25px] h-[25px] border border-gray-300 rounded"
                                        />
                                        Active
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 p-4">
                            <button
                                onClick={() => { setFn(""); setLn(""); setEmail(""); setUname(""); setPw(""); setCpw(""); setDob(""); setPhone(""); setNewUserActive(true); }}
                                className="inline-flex items-center gap-2 bg-white text-black border border-gray-300 rounded h-9 px-3"
                            >
                                <img src="src/assets/images/path.png" className="w-4 h-4" alt="cancel" /> Cancel
                            </button>
                            <button
                                onClick={handleSaveUser}
                                className="inline-flex items-center gap-2 bg-sky-500 text-white border border-sky-500 rounded h-9 px-3"
                            >
                                <img src="src/assets/images/floppy-disk-regular.png" className="w-4 h-4" alt="save" /> Save
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
