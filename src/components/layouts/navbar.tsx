"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
	Bell,
	ChevronDown,
	MessageCircleMore,
	ShoppingCart,
} from "lucide-react";
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
} from "@/components/ui/combobox";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const games = [
	"Genshin Impact",
	"Honkai Star Rail",
	"Arena Breakout",
	"One Piece Bounty Rush",
	"Epic Seven",
	"Arknights: Endfield",
	"Wuthering Waves",
	"Bleach: Brave Souls",
	"Valorant",
	"Path of Exile",
];

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 bg-[radial-gradient(27.22%_77.17%_at_48.72%_50%,#363B9F_0%,#1F2937_100%)]">
			<div className="mx-auto max-w-[1440px]">
				<div className="py-3 px-6 flex items-center justify-between gap-6">
					<div className="w-full">
						<Link href="/">
							<Image src="/logo.svg" alt="GameMarket" width={55} height={40} />
						</Link>
					</div>
					<div className="w-full">
						<div className="flex-1 max-w-[420px]">
							<Combobox items={games}>
								<ComboboxInput
									placeholder="Browse 1,700+ games..."
									className="bg-neutral-900/80 border-neutral-700 text-white h-10 dark:bg-background"
								/>
								<ComboboxContent>
									<ComboboxEmpty>No games found.</ComboboxEmpty>
									<ComboboxList>
										{(item) => (
											<ComboboxItem key={item} value={item}>
												{item}
											</ComboboxItem>
										)}
									</ComboboxList>
								</ComboboxContent>
							</Combobox>
						</div>
					</div>
					<div className="w-full">
						<div className="flex items-center justify-end gap-4">
							<div className="flex items-center gap-3">
								<Button variant="ghost" className="relative">
									<ShoppingCart />
									<Badge variant="destructive" className="absolute -top-1 -right-1">
										10
									</Badge>
								</Button>
								<Button variant="ghost" className="relative">
									<Bell />
									<Badge variant="destructive" className="absolute -top-1 -right-1">
										99
									</Badge>
								</Button>
								<Button variant="ghost" className="relative">
									<MessageCircleMore />
									<Badge variant="destructive" className="absolute -top-1 -right-1">
										99
									</Badge>
								</Button>
							</div>
							<Button variant="outline" className="p-2 gap-1">
								<Image src="/images/coin.png" alt="coin" width={20} height={20} />
								$99,999.00
							</Button>
							<Button variant="ghost" className="px-0">
								<Avatar>
									<AvatarImage src="/images/profile.jpg" />
									<AvatarFallback>GM</AvatarFallback>
								</Avatar>
								<ChevronDown className="size-3.5" />
							</Button>
							<Button variant="ghost" className="px-0">
								USD
								<ChevronDown className="size-3.5" />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
