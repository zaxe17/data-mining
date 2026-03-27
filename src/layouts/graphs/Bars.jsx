const Bars = ({ label, city, color, height }) => {
	return (
		<div className="w-22.75 h-65 flex justify-center items-center flex-col">
			{/* LABEL */}
			<label htmlFor="">{label}</label>

			{/* BAR */}
			<div className="w-full h-full bg-[#F1F5F9] rounded-md p-1.5 flex items-end">
				<div
					className="w-full rounded-sm"
					style={{
						backgroundColor: `${color}`,
						height: `${height}px`,
					}}></div>
			</div>

            <span>{city}</span>
		</div>
	);
};

export default Bars;
