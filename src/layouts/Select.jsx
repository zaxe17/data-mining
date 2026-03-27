const Select = ({ label, value }) => {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor="" className="text-sm text-[#334155] font-medium">
				{label}
			</label>
			<select
				name=""
				id=""
				className="w-full py-2.5 px-3 border border-black/8 rounded-md text-sm focus:outline-none">
				<option value="" selected></option>
				{value}
			</select>
		</div>
	);
};

export default Select;
