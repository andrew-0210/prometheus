import localFont from "next/font/local";

const neueHaas = localFont({
	src: [
		{
			path: "./neue-haas-display/nhd-regular.woff2",

			style: "normal",
		},
		{
			path: "./neue-haas-display/nhd-regular_italic.woff2",

			style: "italic",
		},
		{
			path: "./neue-haas-display/nhd-medium.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "./neue-haas-display/nhd-medium_italic.woff2",
			weight: "600",
			style: "italic",
		},
		{
			path: "./neue-haas-display/nhd-bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "./neue-haas-display/nhd-bold_italic.woff2",
			weight: "700",
			style: "italic",
		},
		{
			path: "./neue-haas-display/nhd-black.woff2",
			weight: "800",
			style: "normal",
		},
		{
			path: "./neue-haas-display/nhd-black_italic.woff2",
			weight: "800",
			style: "italic",
		},
	],
	variable: "--font-neue-haas",
});

const inter = localFont({
	src: [
		{
			path: "./inter/inter-variable.woff2",
			style: "normal",
		},
		{
			path: "./inter/inter-variable_italic.woff2",
			style: "italic",
		},
	],
	variable: "--font-inter",
});

export { inter, neueHaas };
