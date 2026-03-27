import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";

const Header = ({
	img,
	imgSize,
	heading = "Heading",
	subheading = "Subheading",
	headingSize = 40,
	subheadingSize = 15,
}) => {
	const path = useLocation();

	return (
		<div
			className="w-full relative bg-cover bg-center flex justify-center items-center before:absolute before:inset-0 before:bg-black/50"
			style={{
				height: `${imgSize}px`,
				backgroundImage: `url(${img})`,
			}}>
			{/* CONTENT */}
			<div className="relative text-center">
				{/* HEADING */}
				<h1
					className="text-[#FFFFFF] font-black leading-10 mb-6"
					style={{ fontSize: `${headingSize}px` }}>
					{heading}
				</h1>

				{/* SUBHEADING */}
				<p
					className="text-[#D6D1D1] font-semibold"
					style={{ fontSize: `${subheadingSize}px` }}>
					{subheading}
				</p>

				{/* BUTTONS */}
				{path.pathname === "/" && (
					<div className="group flex justify-center gap-7.5 text-white text-xs mt-9">
						<button className="flex items-center gap-1 py-2 px-2.5 rounded-lg bg-[#2B6B5A] transition-all duration-200 ease-linear hover:scale-105 group-hover:scale-95">
							<Icon
								icon="boxicons:calculator"
								className="w-5 h-5"
							/>
							Check my Affordability
						</button>
						<button className="flex items-center gap-1 py-2 px-2.5 rounded-lg bg-[#FFFFFF]/24 border border-[#FFFFFF]/60 transition-all duration-200 ease-linear hover:scale-105 group-hover:scale-95">
							<Icon
								icon="si:insights-duotone"
								className="w-5 h-5"
							/>
							View Insights
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
