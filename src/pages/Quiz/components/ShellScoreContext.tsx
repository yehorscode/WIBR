import React, { createContext, useContext, useState } from "react";

type ShellScoreContextType = {
    shells: number;
    setShells: (n: number) => void;
    addPercent: (percent: number) => void;
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
    return (
        <ShellScoreContext.Provider value={{ shells, setShells, addPercent }}>
            {children}
        </ShellScoreContext.Provider>
    );
}
