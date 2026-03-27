import { Icon } from "@iconify/react";

const StatCard = ({ icon, iconSize, iconColor = "black", count = "count 12", text = "title" }) => {
	return (
		<div
			className="bg-white rounded-xl w-66.75 h-29.25 flex flex-col justify-center items-center gap-1 transition-all duration-200 ease-linear hover:scale-105 hover:-translate-y-2.25"
			style={{
				boxShadow:
					"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
			}}>
                {/* ICON */}
			<Icon
				icon={icon}
				style={{
					width: `${iconSize}px`,
					height: `${iconSize}px`,
					color: `${iconColor}`,
				}}
			/>
            {/* STATUS COUNT */}
            <p className="text-black text-xl font-medium">{count}</p>
            {/* TEXT */}
            <span className="text-[#A3A3A3] text-sm font-medium">{text}</span>
		</div>
	);
};

export default StatCard;
