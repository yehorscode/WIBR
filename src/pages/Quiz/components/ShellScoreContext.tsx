import React, { createContext, useContext, useState, useCallback } from "react";

// Modifier type for a question
export type Modifier = {
    questionId: string;
    value: number;
    isPercent: boolean;
};

type ShellScoreContextType = {
    shells: number;
    baseShells: number;
    setBaseShells: (n: number) => void;
    modifiers: Modifier[];
    setModifierForQuestion: (questionId: string, value: number, isPercent: boolean) => void;
};

const ShellScoreContext = createContext<ShellScoreContextType | undefined>(
    undefined
);

export function useShellScore() {
    const ctx = useContext(ShellScoreContext);
    if (!ctx)
        throw new Error("useShellScore must be used within ShellScoreProvider");
    return ctx;
}

function applyModifiers(base: number, modifiers: Modifier[]): number {
    // Apply all flat modifiers first
    let result = base;
    for (const mod of modifiers) {
        if (!mod.isPercent) {
            result += mod.value;
        }
    }
    // Then apply all percent modifiers
    for (const mod of modifiers) {
        if (mod.isPercent) {
            result += result * (mod.value / 100);
        }
    }
    return Math.max(0, Math.round(result));
}

export function ShellScoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [baseShells, setBaseShells] = useState(0);
    const [modifiers, setModifiers] = useState<Modifier[]>([]);
    const [shells, setShells] = useState(0);

    // Recalculate shells whenever baseShells or modifiers change
    React.useEffect(() => {
        setShells(applyModifiers(baseShells, modifiers));
    }, [baseShells, modifiers]);

    // Set or replace modifier for a question
    const setModifierForQuestion = useCallback((questionId: string, value: number, isPercent: boolean) => {
        setModifiers((prev) => {
            // Remove any existing modifier for this question
            const filtered = prev.filter((m) => m.questionId !== questionId);
            // If value is 0, just remove
            if (value === 0) return filtered;
            // Otherwise, add new
            return [...filtered, { questionId, value, isPercent }];
        });
    }, []);

    return (
        <ShellScoreContext.Provider
            value={{
                shells,
                baseShells,
                setBaseShells,
                modifiers,
                setModifierForQuestion,
            }}
        >
            {children}
        </ShellScoreContext.Provider>
    );
}
