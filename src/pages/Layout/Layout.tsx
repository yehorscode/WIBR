import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen text-som-text font-nationalpark font-bold">
            <nav className="p-4 bg-[#F3DABB] border-white border-b">
                <ul className="flex gap-6">
                    <li className="relative group text-som-text font-nationalpark font-extrabold text-xl">
                        <Link to="/" className="transition-colors block pb-1 z-10">
                            Home
                        </Link>
                        <div
                            className="flex absolute left-0 top-full w-full h-2 bg-som-highlight rounded-2xl opacity-0 z-0 transition-opacity duration-200 group-hover:opacity-100"
                            style={{ transform: 'translateY(-5px)' }}
                        ></div>
                    </li>
                </ul>
            </nav>
            <main className="flex-1 p-10">
                <Outlet />
            </main>
        </div>
    );
}
