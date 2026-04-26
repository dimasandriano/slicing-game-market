import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";

const jetbrainsMonoJetbrainsMono = JetBrains_Mono({
	subsets: [
		"cyrillic",
		"cyrillic-ext",
		"greek",
		"latin",
		"latin-ext",
		"vietnamese",
	],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-jetbrains-mono",
});

const interInter = Inter({
	subsets: [
		"cyrillic",
		"cyrillic-ext",
		"greek",
		"greek-ext",
		"latin",
		"latin-ext",
		"vietnamese",
	],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-inter",
});

const plusJakartaSansPlusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["cyrillic-ext", "latin", "latin-ext", "vietnamese"],
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
	title: "GameNews Profile | GameMarket.gg User",
	description:
		"View GameNews's public profile on GameMarket.gg. See listings, reviews, and activity across supported digital game markets.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn(
				"h-full",
				"antialiased",
				"dark",
				plusJakartaSansPlusJakartaSans.variable,
				interInter.variable,
				jetbrainsMonoJetbrainsMono.variable,
			)}>
			<body className="bg-background">
				<Navbar />
				<main className="min-h-screen flex flex-col">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
