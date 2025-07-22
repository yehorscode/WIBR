import { Link, Outlet } from "react-router-dom";
import shark from "@/assets/shark.webp";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
export default function Layout() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col min-h-screen text-som-text font-nationalpark font-bold max-w-[1280px] mx-auto px-4 sm:px-0 lg:px-0">
            <nav className="p-4 bg-[#F3DABB] border-white border-b flex justify-between">
                <ul className="flex gap-6">
                    <li className="relative group text-som-text font-nationalpark font-extrabold text-xl">
                        <Link
                            to="/"
                            className="transition-colors block pb-1 z-10"
                        >
                            Home
                        </Link>
                        <div
                            className="flex absolute left-0 top-full w-full h-2 bg-som-highlight rounded-2xl opacity-0 z-0 transition-opacity duration-200 group-hover:opacity-100"
                            style={{ transform: "translateY(-5px)" }}
                        ></div>
                    </li>
                    <li className="relative group text-som-text text-shadow-md font-nationalpark font-extrabold text-xl">
                        <Link
                            to="/quiz"
                            className="transition-colors block pb-1 z-10"
                        >
                            Quiz
                        </Link>
                        <div
                            className="flex absolute left-0 top-full w-full h-2 bg-som-highlight rounded-2xl opacity-0 z-0 transition-opacity duration-200 group-hover:opacity-100"
                            style={{ transform: "translateY(-5px)" }}
                        ></div>
                    </li>
                    <li className="relative group text-som-text font-nationalpark font-extrabold text-xl">
                        <Link
                            to="/how"
                            className="transition-colors block pb-1 z-10"
                        >
                            How does voting work?
                        </Link>
                        <div
                            className="flex absolute left-0 top-full w-full h-2 bg-som-highlight rounded-2xl opacity-0 z-0 transition-opacity duration-200 group-hover:opacity-100"
                            style={{ transform: "translateY(-5px)" }}
                        ></div>
                    </li>
                </ul>
                <div className="flex justify-end">
                    <img
                        src={shark}
                        alt=""
                        className="h-8 rounded-sm hover:shadow-2xl hover:cursor-pointer hover:translate-y-0.5"
                        onClick={() => setOpen(true)}
                    />
                </div>
            </nav>
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Did you know? Im a friendly shark! Vote 4 me!
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            One of the hackclub members mentioned, that in high
                            seas, adding a shark increased their vote rate by
                            30%! So maybe you will vote for me?? Please. Im
                            begging
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>no go away</AlertDialogCancel>
                        <AlertDialogAction>YES, YES I WILL!</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <main className="flex-1 p-10">
                <Outlet />
            </main>
        </div>
    );
}
