import React, { createContext, useContext, useState } from "react";

type ShellScoreContextType = {
    shells: number;
    setShells: (n: number) => void;
    addPercent: (percent: number) => void;
    addShells: (amount: number) => void;
    applyModifier: (value: number, isPercent: boolean) => void;
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

export function ShellScoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [shells, setShells] = useState(100); // Zaczynamy od 100, żeby procenty miały sens

    const addPercent = (percent: number) => {
        console.log(`addPercent: ${percent}%, current shells:`, shells);
        setShells((prev) => {
            const result = Math.round(prev + prev * (percent / 100));
            const final = Math.max(0, result);
            console.log(`Result: ${prev} + ${prev} * (${percent}/100) = ${result}, final: ${final}`);
            return final;
        });
    };

    const addShells = (amount: number) => {
        console.log(`addShells: ${amount}, current shells:`, shells);
        setShells((prev) => {
            const result = Math.max(0, prev + amount);
            console.log(`Result: ${prev} + ${amount} = ${result}`);
            return result;
        });
    };

    const applyModifier = (value: number, isPercent: boolean) => {
        if (value === 0) return;
        if (isPercent) {
            addPercent(value);
        } else {
            addShells(value);
        }
    };

    return (
        <ShellScoreContext.Provider
            value={{
                shells,
                setShells,
                addPercent,
                addShells,
                applyModifier,
            }}
        >
            {children}
        </ShellScoreContext.Provider>
    );
}
