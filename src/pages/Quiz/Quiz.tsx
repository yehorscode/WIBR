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
    const { shells, baseShells, setBaseShells } = useShellScore();
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [error] = useState("");
    const [multiplier, setMultiplier] = useState<number | null>(null);
    const [rolled, setRolled] = useState(false);

    const handleHours = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = parseInt(e.target.value);
        if (isNaN(val) || val < 0) val = 0;
        setHours(val);

        let min = minutes;
        if (min < 0) min = 0;
        if (min > 59) min = 59;
        let totalHours = val;
        if (min >= 30) totalHours += 1;
        setBaseShells(totalHours);
    };

    const handleMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = parseInt(e.target.value);
        if (isNaN(val) || val < 0) val = 0;
        if (val > 59) val = 59;
        setMinutes(val);
        let totalHours = hours;
        if (val >= 30) totalHours += 1;
        setBaseShells(totalHours);
    };
    
    function rollMultiplier(): number {
        return Math.round((Math.random() * 0.8 + 1.3) * 10) / 10;
    }
    const handleRoll = () => {
        if (!rolled) {
            setMultiplier(rollMultiplier());
            setRolled(true);
        }
    };

    return (
        <div className="text-center flex flex-col">
            {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
            <h1 className="font-dynapuff text-4xl font-bold">
                Let's calculate your shells!
            </h1>
            <span>There are {questions.length} questions only</span>
            <div className="mt-10 bg-som-bg p-5 text-left items-center rounded-lg shadow-xl">
                <h3 className="font-medium font-dynapuff">Input questions:</h3>
                <div className="flex items-center">
                    <input
                        type="number"
                        placeholder="Hours"
                        onChange={handleHours}
                        className="w-1/2 border-dashed border-som-highlight border-2 rounded-sm p-1 mt-2"
                    />
                    <span className="text-sm text-som-text/60 mx-5 mt-1">
                        and
                    </span>
                    <input
                        type="number"
                        placeholder="Minutes"
                        onChange={handleMinutes}
                        className="w-1/2 border-dashed border-som-highlight border-2 rounded-sm p-1 mt-2"
                    />
                </div>
                <span className="text-xs text-som-highlight">
                    {baseShells} shells minimum
                </span>{" "}
                <Tooltip>
                    <TooltipTrigger>
                        <Info
                            className="inline-block ml-1 opacity-60 text-som-text/60"
                            size={13}
                        />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>
                            Base shells are calculated based on your input. They
                            are rounded up. For example 1 hours 30 minutes
                            rounds up to 2 shells. 1 hour 20 minutes doesn't
                            round up 1 hour 45 minutes rounds up to 2 shells
                            etc.
                        </p>
                    </TooltipContent>
                </Tooltip>
            </div>
            <div className="mt-10">
                <h3 className="font-dynapuff text-2xl">Questions:</h3>
                <span className="text-som-text/80">
                    Answer responsibly! Don't cheat! Good luck <br />
                    YOU CAN'T CHANGE YOUR ANSWERS
                </span>
                <div className="mt-4">
                    {questions.map((q) => (
                        <Question
                            key={q.id}
                            questionId={q.id}
                            question={q.question.question}
                            answers={q.question.answers}
                            explanation={q.question.explanation}
                        />
                    ))}
                </div>
                <div className="mt-8 text-xl font-bold bg-som-bg p-5 rounded">
                    <div className="flex flex-col items-center gap-2">
                        <div>
                            Calculated shells: {" "}
                            <span className="text-som-highlight">{shells}</span>
                        </div>
                        <button
                            className="mt-2 px-4 py-1 bg-som-highlight text-white rounded disabled:opacity-50"
                            onClick={handleRoll}
                            disabled={rolled}
                        >
                            {rolled ? "Multiplier Rolled" : "Roll Multiplier"}
                        </button>
                        {rolled && multiplier && (
                            <div className="mt-2">
                                <span className="text-som-text/80">With multiplier ({multiplier}x): </span>
                                <span className="text-som-highlight">{shells * multiplier}</span>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-sm opacity-70 text-som-text">Includes a randomised multiplier of 1.8 - 2.1</span>
                        <div className="flex items-center">
                            <div className="text-sm text-som-text/60">
                                Not accounting for the quiz you may get a
                                minimum of {baseShells} and maximum of{" "}
                                {baseShells * 30}
                            </div>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Info
                                        className="ml-1 opacity-60 text-som-text/60"
                                        size={13}
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>
                                        Maximum multiplier is 30x for your hours
                                        and 1 hour is one shell
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <span className="text-xs text-som-text/60">
                            This is purely speculative, You may get more or (in
                            most cases) less
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
