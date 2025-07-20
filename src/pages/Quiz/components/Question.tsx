import React, { useState } from "react";
import { useShellScore } from "./ShellScoreContext";

type Answer = {
    id: string;
    answer: string;
    value: string;
};

type QuestionProps = {
    question: string;
    answers: Answer[];
    explanation?: string;
};

function parsePercent(val: string): number | null {
    if (val === "ignore") return null;
    const match = val.match(/([+-]?\d+)%/);
    if (!match) return null;
    return parseInt(match[1], 10);
}

export default function Question({
    question,
    answers,
    explanation,
}: QuestionProps) {
    const { addPercent } = useShellScore();
    const [selected, setSelected] = useState<string | null>(null);

    const [prevPercent, setPrevPercent] = useState<number | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setSelected(val);
        const answer = answers.find((a) => a.id === val);
        if (!answer) return;
        const percent = parsePercent(answer.value);

        if (prevPercent !== null) {
            addPercent(-prevPercent);
        }
        if (percent !== null) {
            addPercent(percent);
            setPrevPercent(percent);
        } else {
            setPrevPercent(null);
        }
    };

    return (
        <div className="mb-6 p-4 border rounded bg-som-bg">
            <div className="font-semibold mb-2">{question}</div>
            <div className="flex flex-col gap-1">
                {answers.map((a) => (
                    <label key={a.id} className="flex items-center gap-2">
                        <input
                            type="radio"
                            name={question}
                            value={a.id}
                            checked={selected === a.id}
                            onChange={handleChange}
                        />
                        {a.answer}{" "}
                        <span className="text-xs text-som-text/70">
                            {a.value}
                        </span>
                    </label>
                ))}
            </div>
            {explanation && (
                <div className="text-xs text-som-text/60 mt-1">
                    {explanation}
                </div>
            )}
        </div>
    );
}
