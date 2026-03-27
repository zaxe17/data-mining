import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const TabCard = ({
	icon,
	iconSize,
	iconColor = "black",
	heading = "heading",
	text = "text",
	route
}) => {
	return (
		<Link to={route}
			className="bg-white rounded-xl min-w-30 w-92.5 min-h-10 h-35.25 flex flex-col justify-center items-start px-4.25 text-start text-black transition-all duration-200 ease-linear hover:scale-105 hover:-translate-y-2.25"
			style={{
				boxShadow:
					"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
			}}>
			{/* ICON */}
			<Icon
				icon={icon}
				className="bg-[#2B6B5A] p-1.5 rounded-sm mb-3.75"
				style={{
					width: `${iconSize}px`,
					height: `${iconSize}px`,
					color: `${iconColor}`,
				}}
			/>
			{/* HEADING */}
			<h1 className="text-sm font-semibold mb-1">{heading}</h1>
			<p className="text-[#A3A3A3] text-xs font-medium mb-1.5">{text}</p>
			<button className="flex items-center gap-1.5 text-[10px] font-medium">
				Explore
				<Icon
					icon="pajamas:arrow-up"
					className="mt-0.5 w-2.5 h-2.5 text-black rotate-90"
				/>
			</button>
		</Link>
	);
};

export default TabCard;
