export const tabData = [
    {
        id: 0,
        snapshots: [
            {
                heading: "Avg. Home Price",
                value: "₱4.2M",
                desc: "Metro Manila median",
                color: "green",
            },
            {
                heading: "Price-to-Income",
                value: "12.4x",
                desc: "vs 8.1x national avg",
            },
            {
                heading: "Affordable Units",
                value: "18%",
                desc: "Of total listings",
            },
            {
                heading: "Monthly Rent",
                value: "₱28K",
                desc: "Studio, BGC",
            },
        ],
    },
    {
        id: 1,
        snapshots: [
            {
                heading: "Top District",
                value: "Makati",
                desc: "Highest avg. value",
                color: "green",
            },
            {
                heading: "Fastest Growing",
                value: "Las Piñas",
                desc: "+11.4% YoY",
            },
            {
                heading: "Most Listings",
                value: "QC",
                desc: "3,842 active units",
            },
            {
                heading: "Avg. Lot Area",
                value: "210 m²",
                desc: "Suburban districts",
            },
        ],
    },
    {
        id: 2,
        snapshots: [
            {
                heading: "Median Income",
                value: "₱42K/mo",
                desc: "Metro Manila HH",
                color: "green",
            },
            {
                heading: "Housing Ratio",
                value: "31%",
                desc: "Of gross income",
            },
            {
                heading: "Income Gap",
                value: "↑ 6.2%",
                desc: "vs property growth",
            },
            {
                heading: "Loan Eligibility",
                value: "₱2.1M",
                desc: "At median income",
            },
        ],
    },
    {
        id: 3,
        snapshots: [
            {
                heading: "Condominiums",
                value: "54%",
                desc: "Dominant type",
                color: "green",
            },
            {
                heading: "Single Family",
                value: "28%",
                desc: "House & lot",
            },
            {
                heading: "Townhouses",
                value: "12%",
                desc: "Mid-density units",
            },
            {
                heading: "Commercial Mix",
                value: "6%",
                desc: "Mixed-use listings",
            },
        ],
    },
];

export const barGraphs = [
    {
        label: "₱2.1M",
        city: "Tondo",
        color: "#F59E0B",
        height: "75",
    },
    {
        label: "₱2.8M",
        city: "Binondo",
        color: "#2B6B5A",
        height: "99",
    },
    {
        label: "₱3.0M",
        city: "Quiapo",
        color: "#06B6D4",
        height: "106",
    },
    {
        label: "₱3.2M",
        city: "Sampaloc",
        color: "#2B6B5A",
        height: "114",
    },
    {
        label: "₱3.9M",
        city: "Malate",
        color: "#06B6D4",
        height: "138",
    },
    {
        label: "₱4.3M",
        city: "Ermita",
        color: "#2B6B5A",
        height: "154",
    },
    {
        label: "₱4.9M",
        city: "Intramuros",
        color: "#06B6D4",
        height: "174",
    },
];

export const districtDatas = [
    { district: "Tondo", price: "₱2.1M", growth: "+3.2%" },
    { district: "Binondo", price: "₱2.8M", growth: "+4.5%" },
    { district: "Sampaloc", price: "₱3.2M", growth: "+6.8%" },
    { district: "Malate", price: "₱3.9M", growth: "+8.6%" },
    { district: "Ermita", price: "₱4.3M", growth: "+8.1%" },
];

export const reportItems = [
    { label: "Income analysis", status: "Included" },
    { label: "Affordability score", status: "Included" },
    { label: "Suggested districts", status: "Included" },
    { label: "Map snapshot", status: "Included" },
];

export const insights = [
    {
        icon: "streamline:graph-arrow-decrease",
        iconColor: "#10B981",
        heading: "Lowest housing prices",
        desc: "Tondo, Paco, and Pandacan consistently show the lowest average for budget-focused households.",
    },
    {
        icon: "streamline:graph-arrow-increase",
        iconColor: "#F59E0B",
        heading: "Highest demand concentration",
        desc: "Average prices across Manila continue to trend upward, with faster growth in central districts than in peripheral, lower-cost neighborhoods.",
    },
    {
        icon: "mingcute:heartbeat-line",
        iconColor: "#10B981",
        heading: "Growth trend summary",
        desc: "Average prices across Manila continue to trend upward, with faster growth in central districts than in peripheral, lower-cost neighborhoods.",
    },
];