import { useState } from "react";
import { getAllQuestions } from "./components/functions";
import { Info } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    ShellScoreProvider,
    useShellScore,
} from "./components/ShellScoreContext";
import Question from "./components/Question";

export default function Quiz() {
    return (
        <ShellScoreProvider>
            <QuizInner />
        </ShellScoreProvider>
    );
}

function QuizInner() {
    const questions = getAllQuestions();
    const { shells, setShells } = useShellScore();
    const [baseShells, setBaseShells] = useState(0);

    const handleBaseShells = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value);
        setBaseShells(isNaN(val) ? 0 : val);
        setShells(isNaN(val) ? 0 : val);
    };
    return (
        <div className="text-center flex flex-col">
            <h1 className="font-dynapuff text-4xl font-bold">
                Let's calculate your shells!
            </h1>
            <span>There are {questions.length} questions</span>
            <div className="mt-10 bg-som-bg p-5 text-left items-center rounded-lg shadow-xl">
                <h3 className="font-medium font-dynapuff">Input questions:</h3>
                <input
                    type="text"
                    placeholder="How many hours did you spend on your project?"
                    onChange={handleBaseShells}
                    className="w-full border-dashed border-som-highlight border-2 rounded-sm p-1 mt-2"
                />
                <span className="text-xs text-som-highlight">
                    {baseShells} shells minimum
                </span>{" "}
                <Tooltip>
                    <TooltipTrigger>
                        <Info
                            className="inline-block ml-1 opacity-60"
                            size={15}
                        />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Base shells are calculated based on your input.</p>
                    </TooltipContent>
                </Tooltip>
                <br />
                <input
                    type="text"
                    placeholder="How many votes do you think you'll have?"
                    className="w-full border-dashed border-som-highlight border-2 rounded-sm p-1 mt-2"
                />
                <span className="text-xs text-som-highlight">Optional</span>
            </div>
            <div className="mt-10">
                <h3 className="font-dynapuff text-2xl">Questions:</h3>
                <span className="text-som-text/80">
                    Answer responsibly! Don't cheat! Good luck
                </span>
                <div className="mt-4">
                    {questions.map((q) => (
                        <Question
                            key={q.id}
                            question={q.question.question}
                            answers={q.question.answers}
                            explanation={q.question.explanation}
                        />
                    ))}
                </div>
                <div className="mt-8 text-xl font-bold">
                    Total shells:{" "}
                    <span className="text-som-highlight">{shells}</span>
                </div>
            </div>
        </div>
    );
}
