import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ScatterGraph = () => {
	const chartRef = useRef(null);
	const instanceRef = useRef(null);

	useEffect(() => {
		if (instanceRef.current) instanceRef.current.destroy();

		instanceRef.current = new Chart(chartRef.current, {
			type: "scatter",
			data: {
				datasets: [
					{
						data: [
							{ x: 1, y: 1 },
							{ x: 2, y: 2 },
							{ x: 3, y: 3 },
							{ x: 4, y: 4 },
							{ x: 5, y: 5 },
						],
						backgroundColor: "#2B6B5A",
						pointRadius: 10,
						pointHoverRadius: 12,
					},
					{
						data: [
							{ x: 1.5, y: 1.5 },
							{ x: 2.5, y: 2.5 },
							{ x: 3.5, y: 3.5 },
							{ x: 4.5, y: 4.5 },
							{ x: 5.5, y: 5.5 },
						],
						backgroundColor: "#06B6D4",
						pointRadius: 10,
						pointHoverRadius: 12,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: { display: false },
					tooltip: { enabled: false },
				},
				scales: {
					x: {
						display: false,
						min: 0,
						max: 7,
					},
					y: {
						display: false,
						min: 0,
						max: 7,
					},
				},
			},
		});

		return () => instanceRef.current?.destroy();
	}, []);

	return (
		<div>
			{/* CHART */}
			<div
				style={{
					position: "relative",
					width: "100%",
					height: "220px",
					border: "1px solid #E5E7EB",
					borderRadius: "12px",
					padding: "8px",
				}}>
				<canvas ref={chartRef} />
			</div>

			{/* LABELS */}
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: "8px",
					paddingInline: "4px",
				}}>
				<span style={{ fontSize: "12px", color: "#9CA3AF" }}>
					Lower monthly income
				</span>
				<span style={{ fontSize: "12px", color: "#9CA3AF" }}>
					Higher affordable property value
				</span>
			</div>
		</div>
	);
};

export default ScatterGraph;
