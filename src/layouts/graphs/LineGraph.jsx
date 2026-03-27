import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineGraph = () => {
	const chartRef = useRef(null);
	const instanceRef = useRef(null);

	useEffect(() => {
		if (instanceRef.current) instanceRef.current.destroy();

		instanceRef.current = new Chart(chartRef.current, {
			type: "line",
			data: {
				labels: [2020, 2021, 2022, 2023, 2024, 2025],
				datasets: [
					{
						data: [2.1, 2.4, 2.9, 3.5, 4.2, 4.6],
						borderColor: "#2B6B5A",
						backgroundColor: "transparent",
						pointBackgroundColor: "#2B6B5A",
						pointRadius: 5,
						pointHoverRadius: 7,
						tension: 0.4,
						borderWidth: 2.5,
					},
					{
						data: [1.8, 2.2, 2.7, 3.1, 3.7, 4.1],
						borderColor: "#06B6D4",
						backgroundColor: "transparent",
						pointBackgroundColor: "#06B6D4",
						pointRadius: 5,
						pointHoverRadius: 7,
						tension: 0.4,
						borderWidth: 2.5,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: { display: false },
					tooltip: { enabled: true },
				},
				scales: {
					x: {
						grid: { display: false },
						border: { display: false },
						ticks: {
							color: "#9CA3AF",
							font: { size: 12 },
							autoSkip: false,
							maxRotation: 0,
						},
					},
					y: {
						display: false,
						grid: { display: false },
					},
				},
			},
		});

		return () => instanceRef.current?.destroy();
	}, []);

	return (
		<div style={{ position: "relative", width: "100%", height: "238px" }}>
			<canvas ref={chartRef} />
		</div>
	);
};

export default LineGraph;
