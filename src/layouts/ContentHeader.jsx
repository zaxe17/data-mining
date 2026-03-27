import { Icon } from "@iconify/react";

const ContentHeader = ({ headingTitle, desc, path }) => {
	let buttonLabel, buttonIcon;

	if (path === "/checker") {
		buttonLabel = "Reset Data";
		buttonIcon = "radix-icons:reload";
	} else if (path === "/map") {
		buttonLabel = "Download Map Data";
		buttonIcon = "radix-icons:download";
	} else if (path === "/insights") {
		buttonLabel = "Refresh Data";
		buttonIcon = "radix-icons:reload";
	}

	return (
		<div className="flex justify-between items-start">
			<div className="flex flex-col">
				<h1
					className="text-[#1E293B] text-[28px] font-bold"
					style={{
						textShadow: "0 4px 3px rgba(0, 0, 0, 0.25)",
					}}>
					{headingTitle}
				</h1>
				<p
					className="text-[#6B7280] text-sm"
					style={{
						textShadow: "0 4px 3px rgba(0, 0, 0, 0.25)",
					}}>
					{desc}
				</p>
			</div>

			<div className="flex gap-3">
				<button
					className="text-black text-sm font-medium flex items-center gap-1 bg-white rounded-md py-2 px-4"
					style={{
						boxShadow:
							"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
					}}>
					<Icon icon={buttonIcon} className="w-4 h-4" />
					{buttonLabel}
				</button>

				{path === "/insights" && (
					<button
						className="text-white text-sm font-medium flex items-center gap-1 bg-[#2B6B5A] rounded-md py-2 px-4"
						style={{
							boxShadow:
								"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
						}}>
						<Icon icon="radix-icons:download" className="w-4 h-4" />
						Download Report
					</button>
				)}
			</div>
		</div>
	);
};

export default ContentHeader;
