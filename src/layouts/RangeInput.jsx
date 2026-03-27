import { useState } from "react";
import { useLocation } from "react-router-dom";

const RangeInput = ({
	label,
	value: initialValue = 26124,
	min = 0,
	max = 100,
}) => {
	const [value, setValue] = useState(initialValue);
	const location = useLocation();

	return (
		<div className="w-full flex flex-col gap-2">
			<div
				className={`flex items-center text-sm ${location.pathname === "/checker" ? "text-[#0F172A]" : "text-[#6B7280]"}`}>
				{location.pathname === "/checker" ? (
					<p className="font-medium">{label}</p>
				) : (
					<p className="font-medium">+₱{min}</p>
				)}

				<p className="ml-auto font-bold">+₱{value}</p>
			</div>
			<input
				type="range"
				name=""
				id=""
				min={min}
				max={max}
				step="1"
				value={value}
				onChange={(e) => setValue(Number(e.target.value))}
				className="w-full h-1.5 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#1D6B4A]"
				style={{
					background: `linear-gradient(to right, #1D6B4A 0%, #1D6B4A ${(value / max) * 100}%, #D1E8DF ${(value / max) * 100}%, #D1E8DF 100%)`,
				}}
			/>
			{location.pathname === "/map" && (
				<p className="ml-auto text-[#0F172A] text-sm font-medium">
					Up to ₱{initialValue}
				</p>
			)}
		</div>
	);
};

export default RangeInput;
