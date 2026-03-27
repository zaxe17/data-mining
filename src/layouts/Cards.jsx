import { useLocation } from "react-router-dom";

const Cards = ({ heading, content, text, colorTheme = "default" }) => {
	let theme, textColorTheme, textSize, borderRadius;

	if (colorTheme.toLowerCase() === "green") {
		theme = "text-white bg-[#10B981]";
		textColorTheme = "text-[#2B6B5A]";
		borderRadius = "rounded-sm";
		
	} else {
		theme = "text-[#6B7280] bg-none";
		textColorTheme = "text-[#0F172A]";
		borderRadius = "rounded-sm";
	}

	const location = useLocation();

	if(location.pathname === "/insights") {
		textSize = "text-xs";
		borderRadius = "rounded-xl"
	}

	return (
		<div
			className="w-full bg-white rounded-lg p-6 flex flex-col justify-start gap-2"
			style={{
				boxShadow:
					"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
			}}>
			<span className="text-[#6B7280] text-xs">{heading}</span>
			<h1 className={`text-[28px] font-bold ${textColorTheme}`}>
				{content}
			</h1>
			<span className={`w-fit py-1 px-2 ${borderRadius} ${theme} ${textSize}`}>
				{text}
			</span>
		</div>
	);
};

export default Cards;
