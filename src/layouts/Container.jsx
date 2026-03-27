import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";

const Container = ({
	icon,
	iconColor,
	headingText,
	button = false,
	children,
}) => {
	const location = useLocation();

	return (
		<div
			className={`w-full ${location.pathname === "/map" ? "h-full" : ""} bg-white rounded-lg p-6 flex flex-col`}
			style={{
				boxShadow:
					"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
			}}>
			{/* HEADING */}
			<div className="w-full flex items-center gap-2">
				<Icon
					icon={icon}
					className="w-5 h-5"
					style={{ color: `${iconColor}` }}
				/>
				<h3 className="text-[#1E293B] text-base font-semibold">
					{headingText}
				</h3>
				{button && (
					<button className="text-[#0F172A] text-sm rounded-sm border border-black/8 py-1.5 px-3 ml-auto">
						View Full Map
					</button>
				)}
			</div>

			{children}
		</div>
	);
};

export default Container;
