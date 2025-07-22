import { useState } from "react";

export function TimeCalculator() {
    const [baseShells, setBaseShells] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);

    const handleHours = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = parseInt(e.target.value);
        if (isNaN(val) || val < 0) val = 0;
        setHours(val);

        let min = minutes;
        if (min < 0) min = 0;
        if (min > 59) min = 59;
        let totalHours = val;
        if (min >= 30) totalHours += 1;
        const shells = totalHours;
        setBaseShells(shells);
    };

    const handleMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = parseInt(e.target.value);
        if (isNaN(val) || val < 0) val = 0;
        if (val > 59) val = 59;
        setMinutes(val);
        let totalHours = hours;
        if (val >= 30) totalHours += 1;
        const shells = totalHours;
        setBaseShells(shells);
    };
    return (
        <div>
            <h3 className="mt-4 font-dynapuff text-lg">
                Lazy? Use my wonderfull calculator
            </h3>
            <span>I spent:</span>
            <div className="flex items-center">
                <input
                    type="number"
                    placeholder="Hours"
                    onChange={handleHours}
                    className="w-1/2 border-dashed border-som-highlight border-2 rounded-sm p-1 mt-2"
                />
                <span className="text-sm text-som-text/60 mx-5 mt-1">and</span>
                <input
                    type="number"
                    placeholder="Minutes"
                    onChange={handleMinutes}
                    className="w-1/2 border-dashed border-som-highlight border-2 rounded-sm p-1 mt-2"
                />
            </div>
            <span className="mt-2">on my wonderful project!</span>
            <br />
            <span className="mt-10 font-dynapuff text-lg">
                You will get{" "}
                <span className="font-bold">{baseShells}</span> shells minimum and up to{" "}
                <span className="font-bold">{baseShells*30}</span> shells maximum!
            </span>
            <br />
            <span className="test-xs text-som-text/60">
                Minimum is per one vote and maximum is per 30 votes. You won't reach 30x multiplier probably, it's very hard
            </span>
        </div>
    );
}
