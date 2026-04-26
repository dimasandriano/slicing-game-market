"use client";

import { useState } from "react";
import { Search, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import Image from "next/image";
import MarketPagination from "./market-pagination";

const markets = [
	{
		name: "Path of Exile",
		listings: 32,
		rating: 5,
		reviews: 87,
		icon: "/images/products/exile-2.png",
	},
	{
		name: "Delta Force",
		listings: 20,
		rating: 5,
		reviews: 87,
		icon: "/images/products/delta-force.png",
	},
	{
		name: "Genshin Impact",
		listings: 15,
		rating: 5,
		reviews: 87,
		icon: "/images/products/genshin-impact.png",
	},
	{
		name: "Trove",
		listings: 10,
		rating: 5,
		reviews: 87,
		icon: "/images/products/trove.png",
	},
	{
		name: "Destiny 2",
		listings: 5,
		rating: 5,
		reviews: 87,
		icon: "/images/products/destiny.png",
	},
	{
		name: "Albion Online",
		listings: 28,
		rating: 5,
		reviews: 87,
		icon: "/images/products/albion-online.png",
	},
	{
		name: "Diablo",
		listings: 18,
		rating: 5,
		reviews: 87,
		icon: "/images/products/diablo.png",
	},
	{
		name: "Growtopia",
		listings: 12,
		rating: 5,
		reviews: 87,
		icon: "/images/products/growtopia.png",
	},
	{
		name: "Black Desert Online",
		listings: 8,
		rating: 5,
		reviews: 87,
		icon: "/images/products/black-desert.png",
	},
	{
		name: "Valorant",
		listings: 2,
		rating: 5,
		reviews: 87,
		icon: "/images/products/valorant.png",
	},
];

function StarRating({ rating }: { rating: number }) {
	return (
		<div className="flex gap-0.5">
			{Array.from({ length: 5 }).map((_, i) => (
				<Star
					key={i}
					className={`size-3 ${
						i < rating
							? "fill-[#F59E0B] text-[#F59E0B]"
							: "fill-neutral-600 text-neutral-600"
					}`}
				/>
			))}
		</div>
	);
}

export default function SellerMarkets() {
	const [activeTab, setActiveTab] = useState("markets");

	return (
		<section className="mt-6">
			<Tabs defaultValue="markets" className="mb-3">
				<div className="border-b border-neutral-700">
					<TabsList
						className="bg-transparent border-b border-neutral-700 rounded-none w-fit justify-start gap-0 h-auto p-0"
						variant="line">
						<TabsTrigger
							value="markets"
							onClick={() => setActiveTab("markets")}
							className="rounded-none border-b-2 border-transparent px-4 pb-2.5 pt-1 text-sm font-semibold text-neutral-400 after:bg-linear-to-l after:from-[#00A8E9] after:to-[#5961F3]">
							<p
								className={`${
									activeTab === "markets"
										? "bg-linear-to-l from-[#00A8E9] to-[#5961F3] text-transparent bg-clip-text "
										: ""
								}`}>
								BestSpeed markets
							</p>
						</TabsTrigger>
						<TabsTrigger
							value="reviews"
							onClick={() => setActiveTab("reviews")}
							className="rounded-none border-b-2 border-transparent px-4 pb-2.5 pt-1 text-sm font-semibold text-neutral-400 after:bg-linear-to-l after:from-[#00A8E9] after:to-[#5961F3]">
							<p
								className={`${
									activeTab === "reviews"
										? "bg-linear-to-l from-[#00A8E9] to-[#5961F3] text-transparent bg-clip-text"
										: ""
								}`}>
								Recent reviews
							</p>
						</TabsTrigger>
					</TabsList>
				</div>

				<TabsContent value="markets" className="mt-3 bg-[#1f2937] p-5 rounded-xl">
					<div className="flex items-center justify-between mb-5">
						<h3 className="text-xl font-semibold text-white">BestSpeed markets</h3>
						<InputGroup className="max-w-[234px] border-[#374151]">
							<InputGroupInput
								placeholder="Search markets..."
								className="placeholder:text-sm"
							/>
							<InputGroupAddon align="inline-end">
								<Search />
							</InputGroupAddon>
						</InputGroup>
					</div>
					<div className="grid grid-cols-2 gap-3">
						{markets.map((market) => (
							<div
								key={market.name}
								className="flex justify-between gap-3 rounded-xl bg-[#111827] border border-neutral-700/50 p-3 hover:border-primary transition-colors cursor-pointer group">
								<div className="flex gap-3">
									<div className="size-10 rounded-lg flex items-center justify-center shrink-0">
										<Image
											src={market.icon}
											alt={market.name}
											width={40}
											height={40}
											className="object-cover"
										/>
									</div>
									<div className="flex flex-col justify-between">
										<p className="text-sm font-medium text-white truncate">
											{market.name}
										</p>
										<p className="text-xs text-neutral-400">{market.listings} listings</p>
									</div>
								</div>
								<div className="flex flex-col items-end justify-between">
									<StarRating rating={market.rating} />
									<span className="text-xs text-neutral-400">
										({market.reviews} reviews)
									</span>
								</div>
							</div>
						))}
					</div>
					<MarketPagination />
				</TabsContent>

				<TabsContent value="reviews" className="mt-3">
					<div className="text-center py-12 text-neutral-400">
						<p>No recent reviews to display.</p>
					</div>
				</TabsContent>
			</Tabs>
		</section>
	);
}
