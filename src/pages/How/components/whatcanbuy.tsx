import { useState, useMemo } from "react";
import shop_items from "@/data/shop_items.json";
import debounce from "lodash.debounce";

interface ShopItem {
    name: string;
    cost: number;
    image: string | null;
    maxQuantity?: number | null;
}

export function WhatCanBuy() {
    const [shells, setShells] = useState(0);
    const [loading, setLoading] = useState(false);
    const [filteredItems, setFilteredItems] = useState<ShopItem[]>([]);

    const handleInputChange = useMemo(
        () =>
            debounce((value) => {
                setShells(Number(value));
            }, 300),
        []
    );

    const calculateItems = () => {
        setLoading(true);
        setTimeout(() => {
            const items = shop_items
                .filter((item) => item.cost <= shells)
                .map((item) => {
                    const maxQuantity = Math.floor(shells / item.cost);
                    return {
                        ...item,
                        maxQuantity: maxQuantity > 0 ? maxQuantity : null,
                    };
                });
            setFilteredItems(items);
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="flex flex-col">
            <input
                type="number"
                placeholder="I have this many shells"
                className="w-1/2 border-dashed border-som-highlight border-2 rounded-sm p-1 mt-2"
                onChange={(e) => handleInputChange(e.target.value)}
            />
            <button
                className="mt-2 bg-som-highlight text-white font-dynapuff py-1 px-3 rounded-lg"
                onClick={calculateItems}
            >
                Show What I Can Buy (LAGGY WAIT)
            </button>
            {loading && <div className="mt-2">Loading...</div>}
            {!loading && filteredItems.length > 0 && (
                <>
                    <span className="mt-2">
                        With <span className="font-bold">{shells}</span> shells
                        you can buy:
                    </span>
                    <ul className="list-disc list-inside mt-2">
                        {filteredItems.map((item) => (
                            <li key={item.name} className="mt-1">
                                {item.name} - {item.cost} shells
                                {item.maxQuantity &&
                                    ` (You can buy ${item.maxQuantity})`}
                            </li>
                        ))}
                    </ul>
                </>
            )}
            <span className="mt-2 text-sm text-som-text/60">
                Note: Some items may not be available at this time, please check with the shop
            </span>
        </div>
    );
}
