import Image from "next/image";
import { MessageCircleMore, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
	{ name: "Badge 1", image: "/images/badges/badge-1.png" },
	{ name: "Badge 2", image: "/images/badges/badge-2.png" },
	{ name: "Badge 3", image: "/images/badges/badge-3.png" },
];

export default function SellerSidebar() {
	return (
		<aside className="w-[280px] shrink-0">
			<div className="rounded-xl bg-[#1F2937] border border-[#374151] p-6">
				<div className="flex flex-col items-center">
					<div className="relative">
						<div className="size-[100px] rounded-full overflow-hidden">
							<Image
								src="/images/seller-avatar.jpg"
								alt="BestSpeed"
								width={100}
								height={100}
								className="object-cover"
							/>
						</div>
						<span className="absolute bottom-1 right-2 size-4 rounded-full bg-green-500 border-2 border-neutral-800" />
					</div>
					<h2 className="mt-3 text-2xl font-bold text-white">BestSpeed</h2>
					<div className="mt-1 flex items-center gap-0.5">
						<Star className="size-4 fill-[#F59E0B] text-[#F59E0B]" />
						<span className="text-sm font-medium text-[#FBBF24]">4.9</span>
						<span className="text-xs text-neutral-400">(200 reviews)</span>
					</div>
					<p className="mt-1 text-xs font-normal text-neutral-400">
						Member since 2025
					</p>
					<div className="mx-auto w-[136px] mt-4">
						<Button
							variant="ghost"
							className="w-full gap-2 border-[#5961F3]  text-white"
							style={{
								background:
									"linear-gradient(276.98deg, rgba(0, 168, 233, 0.2) 0%, rgba(89, 97, 243, 0.2) 100%)",
							}}>
							<MessageCircleMore className="size-4" />
							Chat seller
						</Button>
					</div>
				</div>
				<div className="mt-6">
					<h3 className="text-xl font-semibold text-white">About</h3>
					<p className="mt-3 space-y-3 text-sm text-neutral-300 leading-relaxed font-normal">
						⚡ BestSpeed - Fast & Trusted Game Boosting Services <br /> 🟢 Available
						24/7 <br />
						🚀 Delivery Time: Usually within 1-15 minutes after your order is received
						(mostly instant!) <br />
						<br /> Got any questions about our services? Need a custom order, special
						request, or something else? <br />
						<br />
						💬 Just message us — we&apos;re always ready to help. <br />
						<br />
						BestSpeed is trusted by thousands of gamers worldwide for speed,
						reliability, and excellent customer service. Let us handle the grind while
						you enjoy the game.
					</p>
				</div>
				<div className="mt-6">
					<div className="flex items-center justify-between">
						<h3 className="text-xl font-semibold text-white">Badge</h3>
						<button className="text-xs font-normal text-[#00A8E9] underline">
							See all badges
						</button>
					</div>
					<div className="mt-3 flex items-center gap-3">
						{badges.map((badge, i) => (
							<div key={i}>
								<Image src={badge.image} alt={badge.name} width={63} height={63} />
							</div>
						))}
					</div>
				</div>
			</div>
		</aside>
	);
}
