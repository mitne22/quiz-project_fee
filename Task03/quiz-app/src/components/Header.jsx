export default function Header() {
    return (
        <header className="[grid-area:header] border-b border-gray-300 px-[150px]">
            <nav className="flex items-center justify-between py-3">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <a href="/" className="inline-flex items-center">
                        <img src="src/assets/images/logo.png" alt="Logo" className="w-[60px] h-14 object-contain" />
                    </a>
                    <h1 className="text-xl font-semibold">Quizzes</h1>
                </div>

                {/* Menu */}
                <ul className="flex gap-6">
                    <li><a href="/" className="px-3 py-2 rounded hover:bg-gray-300 hover:text-white">Home</a></li>
                    <li><a href="/#quizzes" className="px-3 py-2 rounded hover:bg-gray-300 hover:text-white">Quizzes</a></li>
                    <li><a href="/about" className="px-3 py-2 rounded hover:bg-gray-300 hover:text-white">About</a></li>
                    <li><a href="/contact" className="px-3 py-2 rounded hover:bg-gray-300 hover:text-white">Contact</a></li>
                </ul>

                {/* User */}
                <div>
                    <a href="/login" className="px-4 py-2 rounded hover:bg-gray-100">Login</a>
                    <a href="/register" className="px-4 py-2 rounded hover:bg-sky-600">Register</a>
                </div>
            </nav>
        </header>
    );
}
