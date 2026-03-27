import { Icon } from "@iconify/react";
import Input from "./Input";
import Select from "./Select";
import Container from "./Container";

const AffordabilityCalculator = ({ inputFields, selectFields, options }) => {
	return (
		/* CALCULATOR CONTAINER */
		<Container
			icon="boxicons:calculator"
			iconColor="#2563EB"
			headingText="Financial Details"
			button={false}>
			{/* CALCULATOR FORM */}
			<form action="">
				<div className="grid grid-cols-2 gap-5 mt-5">
					{/* INPUT PROPS */}
					{inputFields.map((inputField, i) => (
						<Input
							key={i}
							label={inputField.label}
							type={inputField.type}
						/>
					))}

					{/* SELECT PROPS */}
					{selectFields.map((selectField, i) => (
						<Select
							key={i}
							label={selectField.label}
							value={options}
						/>
					))}
				</div>

				<button
					type="submit"
					className="w-full flex justify-center items-center gap-2 py-3 px-2.5 bg-[#2B6B5A] rounded-md text-base text-white mt-5 transition-all duration-200 ease-linear hover:bg-[#10B981]">
					<Icon icon="lucide:save" className="w-5 h-5 text-white" />
					Calculate Affordability
				</button>
			</form>
		</Container>
	);
};

export default AffordabilityCalculator;
