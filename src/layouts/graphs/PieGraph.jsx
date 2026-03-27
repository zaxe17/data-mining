import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieGraph = () => {
    const chartRef = useRef(null);
    const instanceRef = useRef(null);

    const data = [
        { label: "Condominium", value: 38, color: "#2B6B5A" },
        { label: "Apartment",   value: 28, color: "#06B6D4" },
        { label: "Townhouse",   value: 18, color: "#F59E0B" },
        { label: "House",       value: 16, color: "#34D399" },
    ];

    useEffect(() => {
        if (instanceRef.current) instanceRef.current.destroy();

        instanceRef.current = new Chart(chartRef.current, {
            type: "pie",
            data: {
                labels: data.map((d) => d.label),
                datasets: [{
                    data: data.map((d) => d.value),
                    backgroundColor: data.map((d) => d.color),
                    borderWidth: 0,
                    hoverOffset: 6,
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (ctx) => ` ${ctx.parsed}%`,
                        },
                    },
                },
            },
        });

        return () => instanceRef.current?.destroy();
    }, []);

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            {/* PIE */}
            <div style={{ position: "relative", width: "160px", height: "160px", flexShrink: 0 }}>
                <canvas ref={chartRef} />
            </div>

            {/* LEGEND */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
                {data.map((d) => (
                    <div key={d.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px dotted #E5E7EB", paddingBottom: "8px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: d.color, flexShrink: 0 }} />
                            <span style={{ fontSize: "14px", color: "#374151" }}>{d.label}</span>
                        </div>
                        <span style={{ fontSize: "14px", fontWeight: "600", color: "#111827" }}>{d.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PieGraph;