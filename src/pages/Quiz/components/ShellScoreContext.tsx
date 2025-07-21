import React, { createContext, useContext, useState } from "react";

type ShellScoreContextType = {
    shells: number;
    setShells: (n: number) => void;
    addPercent: (percent: number) => void;
    addShells: (amount: number) => void;
    applyModifier: (modifier: string) => void;
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
    const [shells, setShells] = useState(0);

    const addPercent = (percent: number) => {
        setShells((prev) => Math.round(prev + prev * (percent / 100)));
    };

    const addShells = (amount: number) => {
        setShells((prev) => prev + amount);
    };

    const applyModifier = (modifier: string) => {
        if (!modifier || modifier.trim().toLowerCase() === "ignore") return;
        
        // Sprawdź czy to procent (np. "+20%", "-10%")
        const percentMatch = modifier.match(/^([+-]\d+)%$/);
        if (percentMatch) {
            const percent = parseInt(percentMatch[1], 10);
            if (!isNaN(percent)) {
                addPercent(percent);
                return;
            }
        }
        
        // Sprawdź czy to wartość bezwzględna (np. "+30", "-5")
        const absoluteMatch = modifier.match(/^([+-]\d+)$/);
        if (absoluteMatch) {
            const amount = parseInt(absoluteMatch[1], 10);
            if (!isNaN(amount)) {
                addShells(amount);
                return;
            }
        }
    };

    return (
        <ShellScoreContext.Provider value={{ 
            shells, 
            setShells, 
            addPercent,
            addShells,
            applyModifier
        }}>
            {children}
        </ShellScoreContext.Provider>
    );
}
