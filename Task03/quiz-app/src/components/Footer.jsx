export default function Footer() {
    return (
        <footer className="[grid-area:footer] border-t border-gray-300 bg-white px-[150px]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start py-6">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-3">
                        <img src="src/assets/images/logo.png" alt="Logo" className="w-[50px] h-[50px]" />
                        <h2 className="text-xl font-semibold">Quizzes</h2>
                    </div>
                    <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <ul className="mt-2 space-y-2">
                        <li><a href="/" className="text-sky-500 hover:underline">Home</a></li>
                        <li><a href="/#quizzes" className="text-sky-500 hover:underline">Quizzes</a></li>
                        <li><a href="/about" className="text-sky-500 hover:underline">About</a></li>
                        <li><a href="/contact" className="text-sky-500 hover:underline">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">Contact</h2>
                    <ul className="mt-2 space-y-2 text-sky-500">
                        <li>Email: <a href="mailto:congdinh2021@gmail.com">congdinh2021@gmail.com</a></li>
                        <li>Phone: <a href="tel:+84944551356">+84 944 551 356</a></li>
                        <li>Address: 123 Xuan Dinh, Bac Tu Liem, Ha Noi</li>
                    </ul>
                </div>
            </div>
            <p className="text-center py-3 border-t border-gray-300">© May 2024 — React JS 19</p>
        </footer>
    );
}
