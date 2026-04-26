"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	useCarousel,
} from "@/components/ui/carousel";

const products = [
	{
		id: 1,
		game: "Honkai Star Rail",
		gameIcon: "/images/products/genshin-icon.png",
		time: "5 minutes ago",
		title:
			"Asia [TL70] 8 Limited (AcheronE1 +sign, RuanMeiE1, Tribbie+Sign,Bothill+Sign, BSwan+ Sign,Aventurine) |Take Email|CHECK SS (HSR1354)",
		type: "Limited",
		deliveryMethod: "In Chat",
		server: "Standart",
		price: "$49.99",
		image: "/images/products/genshin.png",
	},
	{
		id: 2,
		game: "Path of Exile",
		gameIcon: "/images/products/exile-icon.png",
		time: "5 minutes ago",
		title: "AR 55 Diluc + Wolf's Gravestone + Venti + 5 Star Weapons...",
		type: "Starter",
		deliveryMethod: "In Chat",
		server: "America",
		price: "$5.99",
		image: "/images/products/exile.png",
	},
];

function CarouselGradients() {
	const { canScrollPrev, canScrollNext } = useCarousel();

	return (
		<>
			<div
				className={`absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-linear-to-r from-[#0d1117] to-transparent transition-opacity duration-300 ${
					canScrollPrev ? "opacity-100" : "opacity-0"
				}`}
			/>
			<div
				className={`absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-linear-to-l from-[#0d1117] to-transparent transition-opacity duration-300 ${
					canScrollNext ? "opacity-100" : "opacity-0"
				}`}
			/>
		</>
	);
}

function CarouselNavButtons() {
	const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

	return (
		<div className="flex items-center gap-2">
			<button
				onClick={scrollPrev}
				disabled={!canScrollPrev}
				className="size-8 rounded-full border-2 border-[#787FF6] flex items-center justify-center  hover:text-white  transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
				<ArrowLeft className="size-4" />
			</button>
			<button
				onClick={scrollNext}
				disabled={!canScrollNext}
				className="size-8 rounded-full border-2 border-[#787FF6] flex items-center justify-center  hover:text-white  transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
				<ArrowRight className="size-4" />
			</button>
		</div>
	);
}

function CarouselHeader() {
	return (
		<div className="flex items-center justify-between mb-4">
			<h2 className="text-xl font-bold text-white">Newest products</h2>
			<CarouselNavButtons />
		</div>
	);
}

export default function NewestProducts() {
	return (
		<section>
			<Carousel
				opts={{
					align: "start",
					dragFree: true,
				}}
				className="w-full">
				<CarouselHeader />
				<div className="relative">
					<CarouselGradients />
					<CarouselContent className="-ml-4">
						{products.map((product) => (
							<CarouselItem key={product.id} className="pl-4 basis-auto">
								<div className="w-[530px] min-h-[254px] rounded-xl border border-[#374151] cursor-pointer p-3 gap-3 flex flex-col bg-linear-to-br from-[#1F2937] via-[#1F2937] to-[#293665]">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<div className="size-5 rounded-full overflow-hidden flex items-center justify-center">
												<Image
													src={product.gameIcon}
													alt={product.game}
													width={20}
													height={20}
													className="object-none"
												/>
											</div>
											<span className="text-sm font-medium text-white">
												{product.game}
											</span>
										</div>
										<span className="text-xs text-neutral-400">{product.time}</span>
									</div>
									<div className="flex gap-3">
										<div className="relative w-[200px] aspect-square shrink-0 rounded-3xl overflow-hidden">
											<Image
												src={product.image}
												alt={product.title}
												fill
												className="object-cover"
											/>
											<div className="absolute bottom-0 w-full left-1/2 -translate-x-1/2 bg-linear-to-t from-[#131923] via-[#11182780] to-transparent p-2">
												<div className="flex items-center justify-center gap-1.5">
													<div className="rounded-full overflow-hidden">
														<Image
															src="/images/seller-avatar.jpg"
															alt="BestSpeed"
															width={20}
															height={20}
															className="object-cover"
														/>
													</div>
													<span className="text-xs font-semibold leading-3.5 text-white">
														BestSpeed
													</span>
													<Star className="size-2.5 fill-[#F59E0B] text-[#F59E0B]" />
													<span className="text-[10px]">
														<span className="text-[#FBBF24]">4.9</span> (200)
													</span>
												</div>
											</div>
										</div>
										<div className="flex-1 flex flex-col gap-3">
											<p className="text-sm text-neutral-200 font-semibold line-clamp-3 leading-snug">
												{product.title}
											</p>
											<button className="text-[10px] font-medium underline self-start">
												Show description
											</button>
											<div className="border border-[#4B5563]" />
											<div className="flex items-center justify-between">
												<div className="w-full">
													<p className="text-[8px] text-neutral-300">Type</p>
													<p className="text-[10px] text-neutral-200 flex items-center gap-0.5">
														<span className="text-neutral-200">...</span> &gt; {product.type}
													</p>
												</div>
												<div className="w-full">
													<p className="text-[8px] text-neutral-300">Delivery method</p>
													<p className="text-[10px] text-neutral-200">
														{product.deliveryMethod}
													</p>
												</div>
												<div className="w-full">
													<p className="text-[8px] text-neutral-300">Server</p>
													<p className="text-[10px] text-neutral-200">{product.server}</p>
												</div>
											</div>
											<div className="rounded-lg bg-neutral-900/80 p-3">
												<span className="text-xl font-semibold text-[#FCD34D]">
													{product.price}
												</span>
											</div>
										</div>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</div>
			</Carousel>
		</section>
	);
}
