import Header from "../layouts/Header";
import headerImg from "../assets/map.png";
import ContentHeader from "../layouts/ContentHeader";
import { useLocation } from "react-router-dom";
import Container from "../layouts/Container";
import RangeInput from "../layouts/RangeInput";
import Select from "../layouts/Select";
import PageTitle from "../layouts/PageTitle";

const Map = () => {
	PageTitle("Map");

	const location = useLocation();

	const selectFields = [
		{ label: "Property Type", value: "" },
		{ label: "Distance from City Center", value: "" },
		{ label: "Affordability Status", value: "" },
	];

	const legends = [
		{ label: "Highly Affordable", color: "#22C55E" },
		{ label: "Below Budget", color: "#F59E0B" },
		{ label: "Slightly Above Budget", color: "#9CA3AF" },
	];

	return (
		<div className="bg-[#FFFFFE] w-full">
			<Header
				img={headerImg}
				imgSize={315}
				heading={<>Map & Location Suggestions</>}
				subheading={
					<>
						Explore Metro Manila districts based on your budget and
						preferences.
					</>
				}
			/>

			<div className="pt-10 pb-18.75 px-8">
				<ContentHeader
					headingTitle="Map & Location Suggestions"
					desc="Explore districts in Manila where you can afford housing based on your profile."
					path={location.pathname}
				/>

				{/* CONTAINERS */}
				<div className="flex gap-6 mt-6 items-stretch">
					{/* LEFT CONTAINER */}
					<div
						className="w-1/4 flex flex-col gap-6"
						style={{ height: "740px" }}>
						<div className="shrink-0">
							<Container
								icon="cil:filter"
								iconColor="#2563EB"
								headingText="Filters"
								button={false}>
								<p className="text-sm text-[#334155] font-medium mt-3.75 mb-2">
									Price Range
								</p>

								{/* PRICE RANGE */}
								<RangeInput
									value={15000}
									min={1490}
									max={50000}
								/>

								{/* SELECT FIELDS */}
								<div className="flex flex-col gap-3.75 mt-3.75">
									{selectFields.map((selectField, i) => (
										<Select
											key={i}
											label={selectField.label}
											value={selectField.value}
										/>
									))}
								</div>

								<button className="w-full bg-[#2B6B5A] text-white text-sm py-3 rounded-md mt-6">
									Apply Filters
								</button>
							</Container>
						</div>

						{/* DISTRICTS WRAPPER */}
						<div className="flex-1 min-h-0">
							<Container
								icon="ph:list-bullets"
								iconColor="#2563EB"
								headingText="Suggested Districts"
								button={false}>
								{/* DISTRICT CONTENT */}
								<div className="overflow-y-auto overflow-x-hidden h-full mt-4">
									<div className="flex flex-col gap-2">
										<div className="border border-black/8 bg-white flex justify-between items-center p-3 rounded-md transition-all duration-200 ease-linear hover:border-[#10B981] hover:bg-[#F0FDF4]">
											<div className="leading-0">
												<p className="text-[#0F172A] text-sm font-medium">
													Sampaloc
												</p>
												<span className="text-[#6B7280] text-xs">
													Highly Affordable
												</span>
											</div>
											<span className="text-[#0F172A] text-sm font-semibold">
												₱3.2M
											</span>
										</div>
									</div>
								</div>
							</Container>
						</div>
					</div>

					{/* RIGHT CONTAINER */}
					<div className="w-full flex flex-col gap-6">
						<div className="w-full">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3663.602095603673!2d121.02911458227976!3d14.656680018140756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7c7722bc6f1%3A0xdc87cf9ed19d652e!2sSM%20City%20North%20EDSA!5e1!3m2!1sen!2sph!4v1774013544416!5m2!1sen!2sph"
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								style={{ border: 0, height: `740px` }}
								className="w-full rounded-md"></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Map;
