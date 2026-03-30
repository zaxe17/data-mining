import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import Header from "../layouts/Header";
import headerImg from "../assets/checker.png";
import Maps from "../layouts/Maps";
import AffordabilityCalculator from "../layouts/AffordabilityCalculator";
import Cards from "../layouts/Cards";
import Container from "../layouts/Container";
import ContentHeader from "../layouts/ContentHeader";
import RangeInput from "../layouts/RangeInput";
import usePageTitle from "../layouts/usePageTitle";

const Checker = () => {
	usePageTitle("Checker");

	const location = useLocation();

	/* INPUT FIELDS */
	const inputFields = [
		{ label: "Monthly Income (₱)", type: "number" },
		{ label: "Monthly Expenses (₱)", type: "number" },
		{ label: "Total Savings (₱)", type: "number" },
		{ label: "Current Monthly Debt (₱)", type: "number" },
	];

	/* SELECT FIELDS */
	const selectFields = [
		{ label: "Family Size", value: "" },
		{ label: "Property Type", value: "" },
	];

	/* EXAMPLE OPTIONS IN SELECT FIELDS */
	const options = [];

	/* DISPLAY NUMBER IN VALUES AND OPTIONS */
	for (let i = 1; i <= 10; i++) {
		options.push(
			<option key={i} value={i}>
				{i}
			</option>,
		);
	}

	/* MAP LEGENDS */
	const legends = [
		{ label: "Highly Affordable", color: "#22C55E" },
		{ label: "Below Budget", color: "#F59E0B" },
		{ label: "Slightly Above Budget", color: "#9CA3AF" },
	];

	/* HOUSING ASSISTENCE */
	const recomProgs = [
		{
			icon: "basil:document-outline",
			heading: "Pag-IBIG Housing Loan",
			desc: "Up to ₱6M loan amount with extended payment terms.",
		},
		{
			icon: "lucide:briefcase",
			heading: "Bank Financing",
			desc: "Standard bank loans at 6.5% average interest rate.",
		},
	];

	const houseAssist = (icon, heading, desc, key) => {
		return (
			<div
				key={key}
				className="flex items-center gap-4 w-full py-4.5 px-4 border border-black/8 rounded-md transition-all duration-200 ease-linear hover:scale-103"
				style={{
					boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
				}}>
				<div className="bg-[#EFF6FF] p-2.5 rounded-lg">
					<Icon icon={icon} className="w-5 h-5 text-[#2B6B5A]" />
				</div>
				<div className="">
					<h3 className="text-[#0F172A] text-sm font-semibold">
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
				heading={<>Affordability Calculator</>}
				subheading={
					<>
						Enter your financial details to discover what housing
						options are
						<br />
						within your reach in Metro Manila.
					</>
				}
			/>

			<div className="pt-11.25 pb-18.75 px-30">
				{/* HEADING */}
				<ContentHeader
					headingTitle="Affordability Calculator"
					desc="Analyze your financial details to find suitable housing in
					Manila."
					path={location.pathname}
				/>

				{/* CONTAINERS */}
				<div className="flex gap-6 mt-6">
					{/* LEFT CONTAINER */}
					<div className="w-1/2 flex flex-col gap-6">
						{/* Affordability Calculator */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false }}
							transition={{
								delay: 0.6,
								duration: 0.3,
								ease: "easeOut",
							}}>
							<AffordabilityCalculator
								inputFields={inputFields}
								selectFields={selectFields}
								options={options}
							/>
						</motion.div>

						{/* MAP PROPS */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false }}
							transition={{
								delay: 0.1,
								duration: 0.3,
								ease: "easeOut",
							}}>
							<Maps legends={legends} height={300} />
						</motion.div>
					</div>

					{/* RIGHT CONTAINER */}
					<div className="w-1/2 flex flex-col gap-6">
						{/* CARDS PROPS */}
						<div className="flex items-center gap-6">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: false }}
								transition={{
									delay: 0.7,
									duration: 0.3,
									ease: "easeOut",
								}}
								className="flex-1">
								<Cards
									heading="Max Property Price"
									content="₱ 3.2M"
									text="Affordable Range"
									colorTheme="green"
								/>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: false }}
								transition={{
									delay: 0.8,
									duration: 0.3,
									ease: "easeOut",
								}}
								className="flex-1">
								<Cards
									heading="Est. Monthly Mortgage"
									content="₱ 18,500"
									text="Based on 20-year term"
								/>
							</motion.div>
						</div>

						{/* DESCRIPTION */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false }}
							transition={{
								delay: 0.9,
								duration: 0.3,
								ease: "easeOut",
							}}
							className="w-full bg-[#FFFFFF] rounded-lg p-6 flex items-start gap-4"
							style={{
								boxShadow:
									"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
							}}>
							<Icon
								icon="lets-icons:check-fill"
								className="w-16 h-16 text-[#10B981]"
							/>
							<div className="w-full flex flex-col gap-1">
								<h3 className="text-base text-[#0F172A] font-semibold">
									Good Affordability Standing
								</h3>
								<p className="text-sm text-[#6B7280]">
									You are in the top 30% of Manila residents
									who can afford a Condominium property. Your
									income supports housing in several key
									districts.
								</p>
							</div>
						</motion.div>

						{/* WHAT IF SCENARIO CONTAINER */}
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
								icon="mingcute:settings-2-line"
								iconColor="#2563EB"
								headingText="What-If Scenario"
								button={false}>
								<p className="text-sm text-[#64748B] mt-3 mb-5">
									Adjust variables to see how your
									affordability changes.
								</p>

								<RangeInput
									label="Income Increase"
									value={10000}
									max={60000}
								/>

								<div className="bg-[#2B6B5A] p-4 rounded-md mt-3">
									<p className="text-white text-sm font-bold">
										Outcome: If your income increases to
										₱70,000/month, you could afford premium
										properties in Ermita.
									</p>
								</div>
							</Container>
						</motion.div>

						{/* HOUSING ASSISTANCE */}
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
								icon="mingcute:house-line"
								iconColor="#16A34A"
								headingText="Housing Assistance"
								button={false}>
								<p className="text-sm text-[#64748B] mt-3">
									Recommended programs based on your profile.
								</p>

								<div className="flex flex-col gap-3.5 mt-3">
									{recomProgs.map((recomProg, i) => (
										<div key={i}>
											{houseAssist(
												recomProg.icon,
												recomProg.heading,
												recomProg.desc,
											)}
										</div>
									))}
								</div>
							</Container>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checker;
