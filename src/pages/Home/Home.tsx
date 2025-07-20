import shell from "@/assets/shell.png";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

export default function Home() {
    return (
        <div>
            <div className="text-center flex flex-col">
                <h1 className="font-dynapuff text-9xl font-bold">
                    WIBR <img src={shell} alt="" className="inline" />
                </h1>
                <span className="opacity-60 text-4xl">Will I Be Rich?</span>
                <span className="mt-2">
                    That's a great question that I will answer today!
                </span>
            </div>
            <div className="mt-10">
                <h3 className="font-dynapuff text-2xl">
                    Ever asked yourself: "When I ship, how many shells will I
                    get?"
                </h3>
                <span className="mt-2">Well, of course you had</span>
                <h3 className="font-dynapuff text-2xl mt-3">
                    Or: "Is my project ready to ship?"
                </h3>
                <span className="mt-2">I hear you</span>
            </div>
            <div className="flex shadow flex-col w-full bg-som-bg p-5 rounded-lg mt-10">
                <h1 className="font-dynapuff text-4xl font-bold">
                    I am here to answer all of this!
                </h1>
                <div className="ml-auto gap-5 flex items-center">
                    <span className="ml-auto">It's quick! Try!</span>
                    <Button
                        className="ml-auto w-50 h-13"
                        onClick={() => (window.location.href = "/quiz")}
                        variant="default"
                        size="lg"
                    >
                        <Pencil />
                        Take a quiz!
                    </Button>
                </div>
            </div>
        </div>
    );
}
