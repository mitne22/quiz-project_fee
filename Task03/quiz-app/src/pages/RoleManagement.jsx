// src/pages/RoleManagement.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function RoleManagement() {
    // filters / pagination state
    const [searchRoleName, setSearchRoleName] = useState("");
    const [activeOnly, setActiveOnly] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // mock roles (from your HTML rows)
    const [roles] = useState([
        { id: 1, name: "Admin", description: "Full Access", status: "Yes" },
        { id: 2, name: "Editor", description: "Editable", status: "Yes" },
        { id: 3, name: "User", description: "Customer", status: "Yes" }
    ]);

    // add-role form state
    const [roleName, setRoleName] = useState("");
    const [roleDesc, setRoleDesc] = useState("");
    const [newRoleActive, setNewRoleActive] = useState(true);

    // handlers (mock)
    const handleSearch = () => {
        console.log("search filters:", { searchRoleName, activeOnly });
        alert("Search clicked (mock)");
    };

    const handleClear = () => {
        setSearchRoleName("");
        setActiveOnly(false);
    };

    const handleSaveRole = () => {
        console.log("save role (mock)", { roleName, roleDesc, newRoleActive });
        alert("Save role (implement API)");
        setRoleName("");
        setRoleDesc("");
        setNewRoleActive(true);
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
                    {/* Panel: Filters / Role Management */}
                    <div className="border border-gray-300 rounded-lg bg-white">
                        <div className="font-semibold p-4 border-b border-gray-300">Role Management</div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start border-b border-gray-300 p-4">
                            <div className="space-y-1 flex flex-col">
                                <label htmlFor="search-rolename" className="font-semibold">Name</label>
                                <input
                                    id="search-rolename"
                                    value={searchRoleName}
                                    onChange={(e) => setSearchRoleName(e.target.value)}
                                    placeholder="Enter role name to search"
                                    className="h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white w-full"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-semibold" htmlFor="status-active">Status</label>
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
                            <button
                                className="inline-flex items-center gap-2 bg-sky-500 text-white border border-sky-500 rounded h-9 px-3"
                            >
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

                    {/* Panel: Role List */}
                    <div className="border border-gray-300 rounded-lg bg-white">
                        <div className="font-semibold p-4 border-b border-gray-300">Role List</div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-200 text-left">
                                        <th className="p-3 font-semibold">Name</th>
                                        <th className="p-3 font-semibold">Description</th>
                                        <th className="p-3 font-semibold">Status</th>
                                        <th className="p-3 font-semibold">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {roles.map((r) => (
                                        <tr key={r.id} className="odd:bg-white even:bg-gray-100 hover:bg-[#eef5ff]">
                                            <td className="p-3">{r.name}</td>
                                            <td className="p-3">{r.description}</td>
                                            <td className="p-3">{r.status}</td>
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

                        {/* Pagination row */}
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

                    {/* Panel: Add Role */}
                    <div className="border border-gray-300 rounded-lg bg-white">
                        <div className="font-semibold p-4 border-b border-gray-300">Add Role</div>

                        <div className="flex flex-wrap gap-4 p-4">
                            <div className="flex-1 min-w-[300px]">
                                <label className="block mb-1 font-semibold" htmlFor="role-name">Name</label>
                                <input
                                    id="role-name"
                                    value={roleName}
                                    onChange={(e) => setRoleName(e.target.value)}
                                    placeholder="Enter role name"
                                    className="w-full h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white"
                                />
                            </div>

                            <div className="flex-1 min-w-[300px]">
                                <label className="block mb-1 font-semibold" htmlFor="role-desc">Description</label>
                                <input
                                    id="role-desc"
                                    value={roleDesc}
                                    onChange={(e) => setRoleDesc(e.target.value)}
                                    placeholder="Enter description"
                                    className="w-full h-9 px-3 border border-gray-300 rounded-lg outline-none bg-white"
                                />
                            </div>

                            <div className="w-full">
                                <div className="flex flex-col gap-2">
                                    <label className="font-semibold" htmlFor="status2-active">Status</label>
                                    <label className="inline-flex items-center gap-2" htmlFor="status2-active">
                                        <input
                                            type="checkbox"
                                            id="status2-active"
                                            checked={newRoleActive}
                                            onChange={() => setNewRoleActive((s) => !s)}
                                            className="w-[25px] h-[25px] border border-gray-300 rounded"
                                        />
                                        Active
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 p-4">
                            <button
                                onClick={() => { setRoleName(""); setRoleDesc(""); setNewRoleActive(true); }}
                                className="inline-flex items-center gap-2 bg-white text-black border border-gray-300 rounded h-9 px-3"
                            >
                                <img src="src/assets/images/path.png" className="w-4 h-4" alt="cancel" /> Cancel
                            </button>
                            <button
                                onClick={handleSaveRole}
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
