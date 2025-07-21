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

// Funkcja odwracająca modyfikator (np. "+20%" -> "-20%", "+30" -> "-30")
function getReverseModifier(modifier: string): string {
    if (!modifier || modifier === "ignore") return "ignore";
    
    if (modifier.startsWith("+")) {
        return modifier.replace("+", "-");
    } else if (modifier.startsWith("-")) {
        return modifier.replace("-", "+");
    }
    
    return modifier;
}

export default function Question({
    question,
    answers,
    explanation,
}: QuestionProps) {
    const { applyModifier } = useShellScore();
    const [selected, setSelected] = useState<string | null>(null);
    const [lastValue, setLastValue] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        
        // Jeśli zmieniono odpowiedź, cofnij poprzedni efekt
        if (selected !== null && lastValue !== null && lastValue !== "ignore") {
            applyModifier(getReverseModifier(lastValue));
        }
        
        setSelected(val);
        
        const answer = answers.find((a) => a.id === val);
        if (!answer) return;
        
        // Zastosuj nową wartość
        applyModifier(answer.value);
        
        // Zapisz wartość, by móc ją zresetować przy zmianie odpowiedzi
        setLastValue(answer.value);
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
