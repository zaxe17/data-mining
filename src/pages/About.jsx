import { Icon } from "@iconify/react";
import usePageTitle from "../layouts/usePageTitle";

const About = () => {
	usePageTitle("About");

	const tutorials = [
		{
			icon: "boxicons:calculator",
			title: "Financial Profiling",
			desc: "Input your income, savings, and expenses. Our calculator determines your true purchasing power and maximum manageable mortgage.",
		},
		{
			icon: "boxicons:location",
			title: "Smart Mapping",
			desc: "We cross-reference your budget with real-time property prices across Manila's districts to highlight affordable zones.",
		},
		{
			icon: "mingcute:chart-vertical-line",
			title: "Data Insights",
			desc: "Explore market trends, price distributions, and historical data to make informed decisions about when and where to buy.",
		},
		{
			icon: "basil:document-outline",
			title: "Actionable Reports",
			desc: "Download comprehensive PDFs containing your affordability score, suggested locations, and housing assistance recommendations.",
		},
	];

	const tutBox = (icon, title, desc) => {
		return (
			<div
				className="bg-[#F1F5F9] rounded-xl flex flex-col justify-center items-start gap-2.75 p-9 text-start text-black transition-all duration-200 ease-linear hover:scale-103 hover:-translate-y-1"
				style={{
					boxShadow:
						"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
				}}>
				{/* ICON */}
				<Icon
					icon={icon}
					className="bg-[#2B6B5A] text-white w-10 h-10 p-1.5 rounded-sm"
				/>
				{/* HEADING */}
				<h1 className="text-[#0F1724] text-lg font-semibold">
					{title}
				</h1>
				<p className="text-[#6B7280] text-base">{desc}</p>
			</div>
		);
	};

	return (
		<div className="flex justify-center items-center flex-col gap-8 pt-8 pb-18.75 px-55.75">
			<div className="flex flex-col gap-2.5 text-center">
				<h1 className="text-[#0F1724] text-4xl font-bold">
					About the System
				</h1>
				<p className="text-[#6B7280] text-lg">
					Personalized Housing Affordability and Insights System for
					Manila
				</p>
			</div>

			<div
				className="w-full bg-white p-8 rounded-lg"
				style={{
					boxShadow:
						"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
				}}>
				<div className="flex items-center gap-3 mb-3.75">
					<Icon
						icon="uil:bullseye"
						className="w-6 h-6 text-[#2B6B5A]"
					/>
					<p className="text-[#0F1724] text-2xl font-semibold">
						Our Mission
					</p>
				</div>

				<p className="text-[#6B7280] text-base">
					Finding a home in Metro Manila can be overwhelming,
					especially when trying to balance income, living expenses,
					and fluctuating real estate prices. Our mission is to
					democratize housing data and provide every resident with
					clear, actionable insights into what they can afford and
					where they can live comfortably.
					<br />
					<br />
					We aim to bridge the gap between financial reality and
					housing aspirations by offering personalized recommendations
					and transparent market data.
				</p>
			</div>

			<div className="w-full bg-white p-8">
				<div className="flex items-center gap-3 mb-3.75">
					<Icon
						icon="lucide:settings"
						className="w-6 h-6 text-[#2B6B5A]"
					/>
					<p className="text-[#0F1724] text-2xl font-semibold">
						How It Works
					</p>
				</div>

				<div className="grid grid-cols-2 gap-6">
					{tutorials.map((tutorial, i) => (
						<div key={i}>
							{tutBox(
								tutorial.icon,
								tutorial.title,
								tutorial.desc,
							)}
						</div>
					))}
				</div>
			</div>

			<div
				className="w-full bg-white p-8 rounded-lg"
				style={{
					boxShadow:
						"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
				}}>
				<div className="flex items-center gap-3 mb-3.75">
					<Icon
						icon="uil:bullseye"
						className="w-6 h-6 text-[#2B6B5A]"
					/>
					<p className="text-[#0F1724] text-2xl font-semibold">
						Data Sources
					</p>
				</div>

				<div className="text-[#6B7280] text-base">
					<p className="text-[#6B7280] text-base">
						Our system aggregates data from multiple reliable
						sources to ensure accuracy:
					</p>
					<textarea name="" id="" className="w-full h-31.25 focus:outline-none resize-none"></textarea>
				</div>
			</div>
		</div>
	);
};

export default About;
