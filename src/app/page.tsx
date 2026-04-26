import SellerSidebar from "@/components/seller/seller-sidebar";
import NewestProducts from "@/components/seller/newest-products";
import SellerMarkets from "@/components/seller/seller-markets";
import Image from "next/image";

export default function Home() {
	return (
		<div className="relative">
			<div className="fixed top-16 h-[480px] -z-20 w-full bg-linear-to-b from-[#131923] to-[#0d1117]">
				<Image
					src="/images/bg.png"
					alt="Hero Background"
					fill
					className="object-none opacity-20"
				/>
				<div className="absolute bottom-0 w-full left-1/2 -translate-x-1/2 bg-linear-to-t from-[#131923] via-[#11182780] to-transparent h-full"></div>
			</div>
			<div className="mx-auto max-w-[1440px] px-44 py-8">
				<div className="flex gap-6">
					<SellerSidebar />
					<div className="flex-1 min-w-0">
						<NewestProducts />
						<SellerMarkets />
					</div>
				</div>
			</div>
		</div>
	);
}
