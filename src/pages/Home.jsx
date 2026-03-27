import Header from "../layouts/Header";
import headerImg from "../assets/homepage.png";
import StatCard from "../layouts/StatCard";
import TabCard from "../layouts/TabCard";
import PageTitle from "../layouts/PageTitle";
import { Icon } from "@iconify/react";

const Home = () => {
	PageTitle("Home");
	const statusCards = [
		{
			icon: "f7:house-fill",
			count: "₱4.8M",
			text: "Price Increase YoY",
		},
		{
			icon: "si:insights-duotone",
			count: "+6.7%",
			text: "Districts Tracked",
		},
		{
			icon: "uiw:map",
			count: "12",
			text: "Tracked",
		},
		{
			icon: "ic:twotone-insights",
			count: "38%",
			text: "Affordability Gap",
		},
	];

	const tabCards = [
		{
			icon: "boxicons:calculator",
			heading: "Affordability Calculator",
			text: "Input your income and see exactly what you can afford in Metro Manila.",
			route: "/checker",
		},
		{
			icon: "uiw:map",
			heading: "Interactive Map",
			text: "Explore affordable neighborhoods with filters and property details.",
			route: "/map",
		},
		{
			icon: "si:insights-duotone",
			heading: "Data Insights",
			text: "Charts and analysis on housing trends, prices, and income gaps.",
			route: "/insights",
		},
	];
	return (
		<div className="bg-[#FFFFFE] w-full">
			<div className="relative">
				<Header
					img={headerImg}
					imgSize={500}
					heading={
						<>
							Find Your Affordable
							<br />
							Home in Manila
						</>
					}
					subheading={
						<>
							Discover which neighborhoods match your budget.
							Data-driven
							<br />
							insights to make smarter housing decisions in Metro
							Manila.
						</>
					}
					headingSize={48}
				/>

				{/* STATUS CARDS */}
				<div className="w-full absolute bottom-0 translate-y-1/2 flex justify-center items-center gap-11.25">
					{statusCards.map((statCard, i) => (
						<div key={i}>
							<StatCard
								key={i}
								icon={statCard.icon}
								iconSize={23}
								iconColor="#DD7F3C"
								count={statCard.count}
								text={statCard.text}
							/>
						</div>
					))}
				</div>
			</div>

			<div className="w-full mt-30.5 pb-17.75 text-center">
				{/* HEADING */}
				<h1 className="text-2xl font-bold mb-6">
					Everything You Need to Decide
				</h1>
				{/* SUBHEADING */}
				<p className="text-[#B5AFAF] text-sm font-medium">
					From personalized calculations to interactive maps and deep
					data analysis —<br />
					all in one place.
				</p>

				{/* TAB CARDS */}
				<div className="flex justify-center items-center gap-18.25 mt-11">
					{tabCards.map((tabCard, i) => (
						<TabCard
							icon={tabCard.icon}
							iconSize={30}
							iconColor="white"
							heading={tabCard.heading}
							text={tabCard.text}
							route={tabCard.route}
						/>
					))}
				</div>
			</div>

			{/* GET STARTED */}
			<div className="w-full bg-[#2B6B5A] flex flex-col justify-center items-center py-11.75 text-center text-white">
				<h1 className="text-3xl font-bold mb-6">
					Ready to Find Your Home?
				</h1>
				<p className="text-[#D6D1D1] text-base font-semibold mb-5.5">
					Start with our affordability calculator and discover which
					Metro
					<br />
					Manila districts fit your budget.
				</p>
				<button className="flex items-center gap-1.5 bg-[#DD7F3C] rounded-lg text-white text-xs font-bold p-3 transition-all duration-200 ease-linear hover:scale-105">
					Get Started
					<Icon
						icon="pajamas:arrow-up"
						className="mt-0.5 w-2.5 h-2.5 rotate-90"
					/>
				</button>
			</div>
		</div>
	);
};

export default Home;
