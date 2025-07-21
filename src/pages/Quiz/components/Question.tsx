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


// Parsuje string typu '+30%', '-20', '+15', 'ignore' na liczbę i flagę procentu
function parseValue(val: string): { value: number; isPercent: boolean } | null {
    if (!val || val === "ignore") return null;
    const match = val.match(/^([+-]?\d+)(%)?$/);
    if (!match) return null;
    return {
        value: Number(match[1]),
        isPercent: !!match[2],
    };
}

export default function Question({
    question,
    answers,
    explanation,
}: QuestionProps) {

    const { applyModifier } = useShellScore();
    const [selected, setSelected] = useState<string | null>(null);

    // Po zaznaczeniu odpowiedzi nie można już zmienić wyboru
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (selected !== null) return; // zablokuj zmianę po pierwszym wyborze

        const val = e.target.value;
        setSelected(val);

        const answer = answers.find((a) => a.id === val);
        if (!answer) return;

        const parsed = parseValue(answer.value);
        if (parsed) {
            console.log(`Applying: ${parsed.value}${parsed.isPercent ? '%' : ''}`);
            applyModifier(parsed.value, parsed.isPercent);
        }

        // lastValue już niepotrzebne
    };

    return (
        <div className="mb-6 p-4 border rounded-md bg-som-bg shadow-md">
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
                            disabled={selected !== null} // blokuje po wyborze
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
