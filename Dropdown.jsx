import { useState } from "react";

export default function Dropdown({ label, options, onChange }) {
    const [active, setActive] = useState(false);
    const [activeLabel, setActiveLabel] = useState("");

    function handleClick(e) {
        const label = e.target.textContent.trim();

        setActive(false);
        onChange(label);
        setActiveLabel(label);
    }

    return (
        <div className="min-w-44 select-none">
            {active && (
                <div
                    role="aria-hidden"
                    onClick={() => setActive(false)}
                    className="fixed inset-0 bg-transparent"
                ></div>
            )}
            <div
                className="cursor-pointer px-4 py-2 bg-stone-900 hover:bg-stone-700 transition-all duration-200 text-stone-100 rounded-lg flex gap-2 justify-center"
                onClick={() => setActive((p) => !p)}
            >
                <span className="font-light text-stone-400">{label}:</span>
                <span className="font-base capitalize">
                    {activeLabel || "all"}
                </span>
                <span
                    className={`text-sm self-center transition-transform duration-100 ${active ? " rotate-180" : ""}`}
                >
                    ↓
                </span>
            </div>
            <div className="relative">
                {active && (
                    <div
                        className={`py-2 border rounded-lg border-stone-200 absolute top-1 right-0 min-w-full bg-stone-800 text-stone-100 flex cursor-default flex-col`}
                    >
                        {options.map((option, i) => (
                            <div
                                onClick={handleClick}
                                className={`relative text-sm space-x-2 py-2 px-5 hover:bg-stone-700 ${option === activeLabel ? "text-stone-200 font-semibold" : "font-light"}`}
                                key={i}
                            >
                                <span className="absolute right-4">
                                    {option === activeLabel && "✓"}
                                </span>
                                <span className="">{option}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
