import SellerSidebar from "@/components/seller/seller-sidebar";
import NewestProducts from "@/components/seller/newest-products";
import SellerMarkets from "@/components/seller/seller-markets";

export default function Home() {
	return (
		<div className="relative">
			<div className="fixed inset-0 h-[480px] -z-20 w-full">
				<div
					className="w-full h-full absolute bg-top bg-cover bg-no-repeat"
					style={{
						background:
							'linear-gradient(rgba(17, 24, 39, 0) 20%, rgb(17, 24, 39) 100%), url("https://img.gamemarket.gg/static/assets/illustrations/ic-image-astronut.svg")',
					}}></div>
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
