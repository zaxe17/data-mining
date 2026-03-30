import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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
			className="w-full relative overflow-hidden flex justify-center items-center before:absolute before:inset-0 before:bg-black/50 before:z-10"
			style={{ height: `${imgSize}px` }}>
			<motion.img
				src={img}
				initial={{ scale: 1.08 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1.5, ease: "easeOut" }}
				className="absolute inset-0 w-full h-full object-cover"
			/>
			{/* CONTENT */}
			<div className="relative text-center z-10">
				{/* HEADING */}
				<motion.h1
					initial={{ y: -10, scale: 1.08, opacity: 0 }}
					animate={{ y: 0, scale: 1, opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
					className="text-[#FFFFFF] font-black leading-10 mb-6"
					style={{ fontSize: `${headingSize}px` }}>
					{heading}
				</motion.h1>

				{/* SUBHEADING */}
				<motion.p
					initial={{ scale: 1.05, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
					className="text-[#D6D1D1] font-semibold"
					style={{ fontSize: `${subheadingSize}px` }}>
					{subheading}
				</motion.p>

				{/* BUTTONS */}
				{path.pathname === "/" && (
					<motion.div
						className="group flex justify-center gap-7.5 text-white text-xs mt-9"
						initial={{ y: 10, scale: 1.05, opacity: 0 }}
						animate={{ y: 0, scale: 1, opacity: 1 }}
						transition={{
							delay: 0.4,
							duration: 0.5,
							ease: "easeOut",
						}}>
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
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default Header;
