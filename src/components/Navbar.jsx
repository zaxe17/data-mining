import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const navLists = [
		{ tab: "Home", route: "/", icon: "f7:house-fill" },
		{ tab: "Checker", route: "/checker", icon: "boxicons:calculator" },
		{ tab: "Map", route: "/map", icon: "uiw:map" },
		{ tab: "Insights", route: "/insights", icon: "si:insights-duotone" },
		{
			tab: "About",
			route: "/about",
			icon: "fluent:people-community-48-filled",
		},
	];

	return (
		<div className="sticky top-0 z-50 flex justify-between items-center w-full bg-[#FFFFFF] py-4 px-6">
			{/* ICON */}
			<Icon icon="f7:house-fill" className="w-10 h-10 text-[#2B6B5A]" />

			{/* NAV LISTS */}
			<ul className="flex gap-1.5">
				{navLists.map((list, i) => (
					<li key={i}>
						<NavLink
							to={list.route}
							className={({ isActive }) =>
								`flex items-center gap-1.5 text-xs p-2 rounded-lg transition-all duration-200 ease-linear ${isActive ? "bg-[#2B6B5A] text-white" : "text-black hover:bg-[#2B6B5A] hover:text-white"}`
							}>
							<Icon icon={list.icon} className="w-5 h-5" />
							{list.tab}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Navbar;
