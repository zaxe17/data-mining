import Header from "../layouts/Header";
import headerImg from "../assets/insights.png";
import ContentHeader from "../layouts/ContentHeader";
import { useLocation } from "react-router-dom";
import Cards from "../layouts/Cards";
import Container from "../layouts/Container";
import Bars from "../layouts/graphs/Bars";
import LineGraph from "../layouts/graphs/LineGraph";
import ScatterGraph from "../layouts/graphs/ScatterGraph";
import PieGraph from "../layouts/graphs/PieGraph";
import { Icon } from "@iconify/react";
import PageTitle from "../layouts/PageTitle";

const Insights = () => {
	PageTitle("Insights");

	const location = useLocation();

	const snapshots = [
		{
			heading: "Lowest average entry price",
			value: "₱2.1M",
			desc: "Tondo remains most affordable",
			color: "green",
		},
		{
			heading: "Highest buyer demand",
			value: "Sampaloc",
			desc: "Driven by schools, transit, and condo supply",
			color: "",
		},
		{
			heading: "Fastest 12-month price growth",
			value: "+8.6%",
			desc: "Malate and Ermita continue to rise fastest",
			color: "",
		},
		{
			heading: "Median affordable income band",
			value: "₱48k+",
			desc: "Typical threshold for central condo districts",
			color: "",
		},
	];

	const barGraphs = [
		{
			label: "₱2.1M",
			city: "Tondo",
			color: "#F59E0B",
			height: "75",
		},
		{
			label: "₱2.8M",
			city: "Binondo",
			color: "#2B6B5A",
			height: "99",
		},
		{
			label: "₱3.0M",
			city: "Quiapo",
			color: "#06B6D4",
			height: "106",
		},
		{
			label: "₱3.2M",
			city: "Sampaloc",
			color: "#2B6B5A",
			height: "114",
		},
		{
			label: "₱3.9M",
			city: "Malate",
			color: "#06B6D4",
			height: "138",
		},
		{
			label: "₱4.3M",
			city: "Ermita",
			color: "#2B6B5A",
			height: "154",
		},
		{
			label: "₱4.9M",
			city: "Intramuros",
			color: "#06B6D4",
			height: "174",
		},
	];

	const districtDatas = [
		{ district: "Tondo", price: "₱2.1M", growth: "+3.2%" },
		{ district: "Binondo", price: "₱2.8M", growth: "+4.5%" },
		{ district: "Sampaloc", price: "₱3.2M", growth: "+6.8%" },
		{ district: "Malate", price: "₱3.9M", growth: "+8.6%" },
		{ district: "Ermita", price: "₱4.3M", growth: "+8.1%" },
	];

	const reportItems = [
		{ label: "Income analysis", status: "Included" },
		{ label: "Affordability score", status: "Included" },
		{ label: "Suggested districts", status: "Included" },
		{ label: "Map snapshot", status: "Included" },
	];

	const insights = [
		{
			icon: "streamline:graph-arrow-decrease",
			iconColor: "#10B981",
			heading: "Lowest housing prices",
			desc: "Tondo, Paco, and Pandacan consistently show the lowest average for budget-focused households.",
		},
		{
			icon: "streamline:graph-arrow-increase",
			iconColor: "#F59E0B",
			heading: "Highest demand concentration",
			desc: "Average prices across Manila continue to trend upward, with faster growth in central districts than in peripheral, lower-cost neighborhoods.",
		},
		{
			icon: "mingcute:heartbeat-line",
			iconColor: "#10B981",
			heading: "Growth trend summary",
			desc: "Average prices across Manila continue to trend upward, with faster growth in central districts than in peripheral, lower-cost neighborhoods.",
		},
	];

	const keyInsight = (icon, iconColor, heading, desc) => {
		return (
			<div className="bg-[#F1F5F9] rounded-md p-3.5 flex items-start gap-3">
				<Icon
					icon={icon}
					className="w-6 h-6"
					style={{ color: `${iconColor}` }}
				/>
				<div className="flex flex-col">
					<h3 className="text-[#0F1724] text-sm font-semibold">
						{heading}
					</h3>
					<p className="text-[#6B7280] text-xs">{desc}</p>
				</div>
			</div>
		);
	};

	return (
		<div className="bg-[#FFFFFE] w-full">
			<Header
				img={headerImg}
				imgSize={315}
				heading={<>Data Insights</>}
				subheading={
					<>
						Exploratory data analysis of Manila's housing market and
						<br />
						income patterns.
					</>
				}
			/>

			<div className="pt-11.25 pb-18.75 px-30">
				<ContentHeader
					headingTitle="EDA / Data Insights"
					desc={
						<>
							Explore Manila housing prices, affordability
							patterns, and district-level demand using visual
							summaries
							<br />
							designed to support housing decisions.
						</>
					}
					path={location.pathname}
				/>

				{/* CONTENTS */}
				<div className="mt-6">
					<div className="flex flex-col gap-6">
						{/* BUTTON TABS */}
						<div className="flex gap-2.5">
							<button className="py-2 px-3.5 rounded-xl border border-black/8 text-[#0F1724] text-xs font-medium transition-all duration-200 ease-linear hover:bg-[#2B6B5A] hover:text-white">
								Affordability Snapshot
							</button>
							<button className="py-2 px-3.5 rounded-xl border border-black/8 text-[#0F1724] text-xs font-medium transition-all duration-200 ease-linear hover:bg-[#2B6B5A] hover:text-white">
								District Analytics
							</button>
							<button className="py-2 px-3.5 rounded-xl border border-black/8 text-[#0F1724] text-xs font-medium transition-all duration-200 ease-linear hover:bg-[#2B6B5A] hover:text-white">
								Income Comparison
							</button>
							<button className="py-2 px-3.5 rounded-xl border border-black/8 text-[#0F1724] text-xs font-medium transition-all duration-200 ease-linear hover:bg-[#2B6B5A] hover:text-white">
								Property Mix
							</button>
						</div>

						{/* RESULTS */}
						<div className="flex items-center gap-4">
							{snapshots.map((snapshot, i) => (
								<Cards
									key={i}
									heading={snapshot.heading}
									content={snapshot.value}
									text={snapshot.desc}
									colorTheme={snapshot.color}
								/>
							))}
						</div>
					</div>

					<div className="flex mt-6 gap-5">
						{/* LEFT CONTENT */}
						<div className="flex flex-col gap-5 w-2/3">
							{/* BAR GRAPH */}
							<Container
								icon="mingcute:chart-vertical-line"
								iconColor="#2B6B5A"
								headingText="Average housing price by district"
								button={false}>
								<p className="text-xs text-[#6B7280] mb-4.5">
									Comparing average asking prices across key
									Manila districts.
								</p>

								{/* GRAPH */}
								<div className="flex gap-2.5">
									{barGraphs.map((barGraph, i) => (
										<Bars
											key={i}
											label={barGraph.label}
											city={barGraph.city}
											color={barGraph.color}
											height={barGraph.height}
										/>
									))}
								</div>

								{/* NOTE */}
								<p className="bg-[#F1F5F9] text-xs rounded-md py-3 px-3.5 mt-4.5">
									Insight: Tondo and Binondo offer the lowest
									average housing prices, while heritage and
									bay- adjacent districts like Intramuros and
									Ermita command the highest pricing.
								</p>
							</Container>

							{/* LINE GRAPH */}
							<Container
								icon="fa7-solid:chart-line"
								iconColor="#2B6B5A"
								headingText="Housing price trends over time"
								button={false}>
								<p className="text-xs text-[#6B7280] mb-4.5">
									Median district price index from 2020 to
									2025.
								</p>

								{/* GRAPH */}
								<LineGraph />

								{/* NOTE */}
								<p className="bg-[#F1F5F9] text-xs rounded-md py-3 px-3.5 mt-4.5">
									Insight: Prime central districts are rising
									faster than the city average, with notable
									price acceleration after 2023 due to renewed
									investor demand and transportation
									improvements.
								</p>
							</Container>

							{/* SCATTER GRAPH */}
							<Container
								icon="tabler:zoom-scan"
								iconColor="#2B6B5A"
								headingText="Income vs housing affordability"
								button={false}>
								<p className="text-xs text-[#6B7280] mb-4.5">
									Affordability clusters based on income and
									estimated purchasable property value.
								</p>

								{/* GRAPH */}
								<ScatterGraph />

								{/* NOTE */}
								<p className="bg-[#F1F5F9] text-xs rounded-md py-3 px-3.5 mt-4.5">
									Insight: Households in the ₱45k–₱65k range
									unlock the broadest set of affordable condo
									and apartment options, while detached house
									affordability remains concentrated in
									higher-income clusters.
								</p>
							</Container>
						</div>

						{/* RIGHT CONTENT */}
						<div className="flex flex-col gap-5 w-1/2">
							{/* PIE GRAPH */}
							<Container
								icon="lsicon:pie-one-outline"
								iconColor="#2B6B5A"
								headingText="Property type distribution"
								button={false}>
								<p className="text-xs text-[#6B7280] mb-4.5">
									Share of listings and analyzed records by
									property type.
								</p>

								{/* GRAPH */}
								<PieGraph />

								{/* NOTE */}
								<p className="bg-[#F1F5F9] text-xs rounded-md py-3 px-3.5 mt-4.5">
									Insight: Condominiums make up the largest
									share of listings in Manila, reflecting
									strong urban demand and better affordability
									for first-time buyers compared with houses
									in central districts.
								</p>
							</Container>

							{/* KEY INSIGHT */}
							<Container
								icon="octicon:light-bulb-16"
								iconColor="#2B6B5A"
								headingText="Key insights"
								button={false}>
								<p className="text-xs text-[#6B7280] mb-4.5">
									Short takeaways from the latest data
									exploration.
								</p>

								{/* INSIGHTS CONTAINER */}
								<div className="flex flex-col gap-3">
									{insights.map((insight, i) => (
										<div key={i}>
											{keyInsight(
												insight.icon,
												insight.iconColor,
												insight.heading,
												insight.desc,
											)}
										</div>
									))}
								</div>
							</Container>

							{/* DISTRICT SUMMARY */}
							<Container
								icon="mynaui:filter-solid"
								iconColor="#2B6B5A"
								headingText="District summary"
								button={false}>
								<p className="text-xs text-[#6B7280] mb-4.5">
									Quick comparison of selected districts.
								</p>

								<table className="w-full">
									{/* BODY */}
									<tbody>
										{districtDatas.map(
											(districtData, i) => (
												<tr
													key={i}
													className="border-b border-b-black/8 last:border-0">
													<td className="text-[#0F1724] text-sm font-medium text-left py-2.5">
														{districtData.district}
													</td>
													<td className="text-[#6B7280] text-sm text-right py-2.5">
														{districtData.price}
													</td>
													<td className="text-[#6B7280] text-sm text-right py-2.5">
														{districtData.growth}
													</td>
												</tr>
											),
										)}
									</tbody>
								</table>
							</Container>

							{/* DISTRICT SUMMARY */}
							<Container
								icon="fluent:document-data-32-regular"
								iconColor="#2B6B5A"
								headingText="Exportable report includes"
								button={false}>
								<p className="text-xs text-[#6B7280] mb-4.5">
									Ready for PDF summary and stakeholder
									review.
								</p>

								<div className="bg-[#F1F5F9] rounded-md p-4 flex flex-col gap-3">
									{reportItems.map((reportItem, i) => (
										<div
											key={i}
											className="flex justify-between text-sm">
											<p className="text-[#0F1724]">
												{reportItem.label}
											</p>
											<span className="text-[#0F1724] font-bold">
												{reportItem.status}
											</span>
										</div>
									))}
								</div>

								<button
									type="submit"
									className="w-full flex justify-center items-center gap-2 py-3 px-2.5 bg-[#2B6B5A] rounded-md text-base text-white mt-5 transition-all duration-200 ease-linear hover:bg-[#10B981]">
									<Icon
										icon="fa-solid:file-download"
										className="w-5 h-5 text-white"
									/>
									Generate PDF Report
								</button>
							</Container>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Insights;
