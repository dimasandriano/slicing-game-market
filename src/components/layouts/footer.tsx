import Image from "next/image";
import Link from "next/link";

const infoLinks = [
	{ label: "FAQ", href: "/faq" },
	{ label: "About", href: "/about" },
	{ label: "News", href: "/news" },
	{ label: "Terms of Service", href: "/terms-of-service" },
	{ label: "Privacy Policy", href: "/privacy-policy" },
];

const quickLinks = [
	{ label: "Submit a Request", href: "/submit-request" },
	{ label: "Bug Bounty Hunter", href: "/bug-bounty-hunter" },
	{ label: "GM Coins Merchants", href: "/gm-coins-merchants" },
	{ label: "support@gamemarket.gg", href: "mailto:support@gamemarket.gg" },
];

export default function Footer() {
	return (
		<footer>
			<div className="mx-auto max-w-[1440px] px-[180px] py-10">
				<div className="flex justify-between gap-16">
					<div className="space-y-3 max-w-[352px]">
						<Image src="/logo.svg" alt="GameMarket" width={55} height={40} />
						<p className="text-sm text-neutral-400 leading-relaxed">
							<span className="font-bold text-white">GameMarket.gg</span> is a
							crypto-powered marketplace to buy and sell game accounts, items,
							services, top-up, and other digital assets.
						</p>
					</div>
					<div className="space-y-3">
						<h4 className="text-sm font-bold text-[#F9FAFB]">Info</h4>
						<ul className="space-y-3">
							{infoLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm text-[#D1D5DB] font-semibold hover:underline">
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="space-y-3">
						<h4 className="text-sm font-bold text-[#F9FAFB]">Quick Links</h4>
						<ul className="space-y-3">
							{quickLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm text-[#D1D5DB] font-semibold hover:underline">
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="space-y-3">
						<h4 className="text-sm font-bold text-white mb-4">Follow us</h4>
						<div className="flex items-center gap-3">
							<Link href="/">
								<Image
									src="/images/sosmed/fb.png"
									alt="Facebook"
									width={20}
									height={20}
								/>
							</Link>
							<Link href="/">
								<Image src="/images/sosmed/x.png" alt="x" width={20} height={20} />
							</Link>
							<Link href="/">
								<Image
									src="/images/sosmed/ig.png"
									alt="Instagram"
									width={20}
									height={20}
								/>
							</Link>
						</div>
						<p className="text-sm text-[#D1D5DB] font-normal">
							© 2026 GameMarket Pte. Ltd.
							<br />
							All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
