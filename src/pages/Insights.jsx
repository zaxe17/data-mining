import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Header from "../layouts/Header";
import headerImg from "../assets/insights.png";
import ContentHeader from "../layouts/ContentHeader";
import Cards from "../layouts/Cards";
import Container from "../layouts/Container";
import Bars from "../layouts/graphs/Bars";
import LineGraph from "../layouts/graphs/LineGraph";
import ScatterGraph from "../layouts/graphs/ScatterGraph";
import PieGraph from "../layouts/graphs/PieGraph";
import usePageTitle from "../layouts/usePageTitle";
import {
	tabData,
	barGraphs,
	districtDatas,
	reportItems,
	insights,
} from "../const";

const Insights = () => {
	usePageTitle("Insights");

	const location = useLocation();

	const [activeTab, setActiveTab] = useState(0);
	const [direction, setDirection] = useState(1);
	const prevTab = useRef(0);

	const handeClick = (i) => {
		if (i === activeTab) return;
		setDirection(i > prevTab.current ? 1 : -1);
		prevTab.current = i;
		setActiveTab(i);
	};

	const variants = {
		enter: (dir) => ({
			x: dir > 0 ? 60 : -60,
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
			transition: { duration: 0.32, ease: [0.32, 0.72, 0, 1] },
		},
		exit: (dir) => ({
			x: dir > 0 ? -60 : 60,
			opacity: 0,
			transition: { duration: 0.22, ease: [0.32, 0.72, 0, 1] },
		}),
	};

	const KeyInsight = (icon, iconColor, heading, desc) => {
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

	const tabsButtonLabels = [
		{ label: "Affordability Snapshot" },
		{ label: "District Analytics" },
		{ label: "Income Comparison" },
		{ label: "Property Mix" },
	];

	const TabsButton = (label, i) => {
		const [isHovered, setIsHovered] = useState(false);
		const isActive = activeTab === i;

		return (
			<button
				onClick={() => handeClick(i)}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				className="py-2 px-3.5 rounded-xl border text-xs font-medium transition-all duration-200 ease-linear"
				style={{
					borderColor:
						isActive || isHovered ? "#2B6B5A" : "rgba(0,0,0,0.08)",
					backgroundColor:
						isActive || isHovered ? "#2B6B5A" : "white",
					color: isActive || isHovered ? "white" : "#0F1724",
				}}>
				{label}
			</button>
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
							{tabsButtonLabels.map((tabsButtonLabel, i) => (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: false }}
									transition={{
										delay: i * 0.2,
										duration: 0.3,
										ease: "easeOut",
									}}
									key={i}>
									{TabsButton(tabsButtonLabel.label, i)}
								</motion.div>
							))}
						</div>

						{/* RESULTS */}
						<AnimatePresence mode="wait" custom={direction}>
							<motion.div
								key={activeTab}
								custom={direction}
								variants={variants}
								initial="enter"
								animate="center"
								exit="exit"
								className="flex items-center gap-4">
								{tabData[activeTab].snapshots.map(
									(snapshot, i) => (
										<motion.div
											key={i}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: false }}
											transition={{
												delay: i * 0.2,
												duration: 0.6,
												ease: "easeOut",
											}}
											className="flex-1">
											<Cards
												heading={snapshot.heading}
												content={snapshot.value}
												text={snapshot.desc}
												colorTheme={snapshot.color}
											/>
										</motion.div>
									),
								)}
							</motion.div>
						</AnimatePresence>
					</div>

					<div className="flex mt-6 gap-5">
						{/* LEFT CONTENT */}
						<div className="flex flex-col gap-5 w-2/3">
							{/* BAR GRAPH */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: false }}
								transition={{
									delay: 0.2,
									duration: 0.3,
									ease: "easeOut",
								}}>
								<Container
									icon="mingcute:chart-vertical-line"
									iconColor="#2B6B5A"
									headingText="Average housing price by district"
									button={false}>
									<p className="text-xs text-[#6B7280] mb-4.5">
										Comparing average asking prices across
										key Manila districts.
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
										Insight: Tondo and Binondo offer the
										lowest average housing prices, while
										heritage and bay- adjacent districts
										like Intramuros and Ermita command the
										highest pricing.
									</p>
								</Container>
							</motion.div>

							{/* LINE GRAPH */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: false }}
								transition={{
									delay: 0.4,
									duration: 0.3,
									ease: "easeOut",
								}}>
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
										Insight: Prime central districts are
										rising faster than the city average,
										with notable price acceleration after
										2023 due to renewed investor demand and
										transportation improvements.
									</p>
								</Container>
							</motion.div>

							{/* SCATTER GRAPH */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: false }}
								transition={{
									delay: 0.4,
									duration: 0.3,
									ease: "easeOut",
								}}>
								<Container
									icon="tabler:zoom-scan"
									iconColor="#2B6B5A"
									headingText="Income vs housing affordability"
									button={false}>
									<p className="text-xs text-[#6B7280] mb-4.5">
										Affordability clusters based on income
										and estimated purchasable property
										value.
									</p>

									{/* GRAPH */}
									<ScatterGraph />

									{/* NOTE */}
									<p className="bg-[#F1F5F9] text-xs rounded-md py-3 px-3.5 mt-4.5">
										Insight: Households in the ₱45k–₱65k
										range unlock the broadest set of
										affordable condo and apartment options,
										while detached house affordability
										remains concentrated in higher-income
										clusters.
									</p>
								</Container>
							</motion.div>
						</div>

						{/* RIGHT CONTENT */}
						<div className="flex flex-col gap-5 w-1/2">
							{/* PIE GRAPH */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: false }}
								transition={{
									delay: 0.3,
									duration: 0.3,
									ease: "easeOut",
								}}>
								<Container
									icon="lsicon:pie-one-outline"
									iconColor="#2B6B5A"
									headingText="Property type distribution"
									button={false}>
									<p className="text-xs text-[#6B7280] mb-4.5">
										Share of listings and analyzed records
										by property type.
									</p>

									{/* GRAPH */}
									<PieGraph />

									{/* NOTE */}
									<p className="bg-[#F1F5F9] text-xs rounded-md py-3 px-3.5 mt-4.5">
										Insight: Condominiums make up the
										largest share of listings in Manila,
										reflecting strong urban demand and
										better affordability for first-time
										buyers compared with houses in central
										districts.
									</p>
								</Container>
							</motion.div>

							{/* KEY INSIGHT */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: false }}
								transition={{
									delay: 0.5,
									duration: 0.3,
									ease: "easeOut",
								}}>
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
												{KeyInsight(
													insight.icon,
													insight.iconColor,
													insight.heading,
													insight.desc,
												)}
											</div>
										))}
									</div>
								</Container>
							</motion.div>

							{/* DISTRICT SUMMARY */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: false }}
								transition={{
									delay: 0.3,
									duration: 0.3,
									ease: "easeOut",
								}}>
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
															{
																districtData.district
															}
														</td>
														<td className="text-[#6B7280] text-sm text-right py-2.5">
															{districtData.price}
														</td>
														<td className="text-[#6B7280] text-sm text-right py-2.5">
															{
																districtData.growth
															}
														</td>
													</tr>
												),
											)}
										</tbody>
									</table>
								</Container>
							</motion.div>

							{/* DOWNLOAD PDF */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: false }}
								transition={{
									delay: 0.5,
									duration: 0.3,
									ease: "easeOut",
								}}>
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
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Insights;
