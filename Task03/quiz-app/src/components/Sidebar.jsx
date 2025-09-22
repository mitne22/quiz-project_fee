export default function Sidebar() {
    return (
        <aside className="[grid-area:menu] bg-white border border-gray-300 rounded-lg sticky top-4 h-full">
            <h3 className="m-5 text-lg font-semibold">Menu</h3>
            <ul>
                <li className="px-3 py-2 border-t border-gray-300 hover:bg-gray-300 cursor-pointer">Quiz Management</li>
                <li className="px-3 py-2 border-t border-gray-300 bg-gray-200 font-medium">Question Management</li>
                <li className="px-3 py-2 border-t border-gray-300 hover:bg-gray-300 cursor-pointer">User Management</li>
                <li className="px-3 py-2 border-t border-gray-300 hover:bg-gray-300 cursor-pointer">Role Management</li>
            </ul>
        </aside>
    );
}
