"use client";
import { Field, FieldLabel } from "@/components/ui/field";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
} from "@/components/ui/pagination";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function MarketPagination() {
	return (
		<div className="flex items-center justify-between gap-4 mt-5">
			<Field orientation="horizontal" className="w-fit">
				<Select defaultValue="10">
					<SelectTrigger
						className="w-[68px] border-[#374151]"
						id="select-rows-per-page">
						<SelectValue className="text-[#6B7280]" />
					</SelectTrigger>
					<SelectContent align="start">
						<SelectGroup>
							<SelectItem value="10">10</SelectItem>
							<SelectItem value="25">25</SelectItem>
							<SelectItem value="50">50</SelectItem>
							<SelectItem value="100">100</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<FieldLabel
					htmlFor="select-rows-per-page"
					className="text-sm font-normal text-[#9CA3AF] gap-0 block">
					Showing 1 of 10 from <span className="font-semibold"> 20 </span>
					Results
				</FieldLabel>
			</Field>
			<Pagination className="mx-0 w-auto">
				<PaginationContent>
					<PaginationItem>
						<Button variant="secondary" className="bg-[#374151] hover:bg-[#374151]">
							01
						</Button>
					</PaginationItem>
					<PaginationItem>
						<Button variant="secondary" className="bg-transparent hover:bg-[#374151]">
							02
						</Button>
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="/" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
}
