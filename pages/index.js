import { Wrapper } from '@/components/layout/Wrapper.jsx'
import { useState } from "react"
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

const articles = [
	{
		name: 'bird2 101'
	},
	{
		name: 'bird2: advanced filtering'
	},
	{
		name: 'Intro to Pathvector: declarative routing platform'
	},
	{
		name: 'testign'
	},
	{
		name: 'spider man'
	},
	{
		name: 'lee stubbs c/o path network inc'
	},
	{
		name: 'harbour exchange square'
	}
]

export default function Home() {
	const [query, setQuery] = useState('');
	const [isFocused, setIsFocused] = useState(false);

	const filteredResults =
		query === ''
		? articles
		: articles.filter((article) =>
			article.name
				.toLowerCase()
				.replace(/\s+/g, '')
				.includes(query.toLowerCase().replace(/\s+/g, ''))
			);

	return (
		<Wrapper>
			<div className="h-[32rem] bg-gray-100/[75%] flex items-center">
				<div className="max-w-5xl mx-auto px-6">
					<div className="text-center">
						<h1 className="text-5xl text-blue-600 font-bold">Welcome to bgp.guide!</h1>
						<p className="text-lg font-semibold text-gray-800 mt-6">Search guides to help with your entry into the world of global networking.</p>
					</div>
					<div className="pt-8 relative">
						<input value={query} onChange={(e) => setQuery(e.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} type="search" className="block w-full rounded-lg p-4 text-sm font-medium border border-gray-200/[75%] focus:outline-none focus:border-blue-600 transition duration-150" placeholder="E.g. bird bgp communities" />
						<div className={`${isFocused ? 'block focus-within:block' : 'hidden hover:block focus-within:block'} w-full bg-white rounded-lg border border-gray-200/[75%] mt-4 absolute flex flex-col gap-2 p-2 max-h-[16rem] overflow-y-auto white-bg-scrollkit z-[20]`}>
							{(filteredResults.length > 0) ? filteredResults.map((result, i) => (
								<a key={i} href="#" className="p-2 text-sm hover:bg-gray-50 rounded-lg flex gap-4 items-center">
									<span>{result.name}</span>
									<div className="flex flex-grow justify-end">
										<ChevronRightIcon className="h-3 w-3 text-gray-500" />
									</div>
								</a>
							)) : <div className="py-4 text-center">
								<p className="text-xs text-gray-500">Sorry! We couldn't find any results for that search term!</p>
								<a href="#" className="text-xs text-sky-500 underline hover:opacity-80 mt-3">Maybe you'd like to contribute?</a>
							</div>}
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="bg-white p-4 rounded-lg border border-gray-200/[75%] -mt-[5.5rem] grid grid-cols-1 md:grid-cols-5 gap-4">
					<div className="md:col-span-1 flex items-center px-2 pt-2 md:p-2">
						<a href="#" className="text-sky-500 md:text-sm flex gap-1 items-center hover:opacity-80">
							Configuration guides
							<ArrowRightIcon className="h-4 w-4 mt-[1px]" />
						</a>
					</div>
					<div className="md:col-span-4 flex flex-nowrap gap-4 overflow-x-auto white-bg-scrollkit">
						<Article
							authorImgs={[
								'https://avatars.githubusercontent.com/u/8601173?v=4',
								'https://avatars.githubusercontent.com/u/47786934?v=4'
							]}
							title="bird2: The basics"
							excerpt="How to configure bird2 for a BGP session and filter properly."
						/>
						<Article
							authorImgs={[
								'https://avatars.githubusercontent.com/u/8601173?v=4',
							]}
							title="bird2: The basics"
							excerpt="How to configure bird2 for a BGP session and filter properly."
						/>
						<Article
							authorImgs={[
								'https://avatars.githubusercontent.com/u/47786934?v=4'
							]}
							title="bird2: The basics"
							excerpt="How to configure bird2 for a BGP session and filter properly."
						/>
						<Article
							authorImgs={[
								'https://avatars.githubusercontent.com/u/8601173?v=4',
								'https://avatars.githubusercontent.com/u/47786934?v=4'
							]}
							title="bird2: The basics"
							excerpt="How to configure bird2 for a BGP session and filter properly."
						/>
					</div>
				</div>
				<div className="bg-white p-4 rounded-lg border border-gray-200/[75%] grid grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
					<div className="col-span-1 flex items-center px-2 pt-2 md:p-2">
						<a href="#" className="text-sky-500 md:text-sm flex gap-1 items-center hover:opacity-80">
							Resources
							<ArrowRightIcon className="h-4 w-4 mt-[1px]" />
						</a>
					</div>
					<div className="col-span-4 flex flex-nowrap gap-4 overflow-x-auto white-bg-scrollkit">
						<Article
							authorImgs={[
								'https://avatars.githubusercontent.com/u/8601173?v=4',
								'https://avatars.githubusercontent.com/u/47786934?v=4'
							]}
							title="bgp.guide IRRd server"
							excerpt="How to configure bird2 for a BGP session and filter properly."
						/>
						<Article
							authorImgs={[
								'https://cdn.discordapp.com/avatars/453919882812063754/5166b058c8d64ee2f483dd2ec00ce247.webp?size=80',
							]}
							title="bgp.guide RTR server"
							excerpt="How to configure bird2 for a BGP session and filter properly."
						/>
						<Article
							authorImgs={[
								'https://avatars.githubusercontent.com/u/47786934?v=4'
							]}
							title="Where to find BGP providers"
							excerpt="How to configure bird2 for a BGP session and filter properly."
						/>
						<Article
							authorImgs={[
								'https://avatars.githubusercontent.com/u/8601173?v=4',
								'https://avatars.githubusercontent.com/u/47786934?v=4',
								'https://cdn.discordapp.com/avatars/453919882812063754/5166b058c8d64ee2f483dd2ec00ce247.webp?size=80'
							]}
							title="ASN registration"
							excerpt="How to configure bird2 for a BGP session and filter properly."
						/>
					</div>
				</div>
				<div className="bg-white p-4 rounded-lg border border-gray-200/[75%] grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
					<div className="col-span-1 flex items-center px-2 pt-2 md:p-2">
						<a href="#" className="text-sky-500 md:text-sm flex gap-1 items-center hover:opacity-80">
							Documentation
							<ArrowRightIcon className="h-4 w-4 mt-[1px]" />
						</a>
					</div>
					<div className="col-span-4 flex flex-nowrap gap-4 overflow-x-auto white-bg-scrollkit">
						<Article
							authorImgs={[
								'https://cdn.discordapp.com/avatars/200554012871753728/87a0f879af139fe2ac513b68ada091ff.webp?size=128',
								'https://avatars.githubusercontent.com/u/8601173?v=4',
								'https://avatars.githubusercontent.com/u/47786934?v=4'
							]}
							title="bird2 rewritten docs"
							excerpt="How to configure bird2 for a BGP session and filter properly."
						/>
						<Article
							authorImgs={[
								'https://avatars.githubusercontent.com/u/8601173?v=4',
							]}
							title="Pathvector explained"
							excerpt="How to configure bird2 for a BGP session and filter properly."
						/>
						<Article
							authorImgs={[
								'https://avatars.githubusercontent.com/u/5139165?v=4'
							]}
							title="FRRouting archive"
							excerpt="How to configure bird2 for a BGP session and filter properly."
						/>
						<Article
							authorImgs={[
								'https://cdn.discordapp.com/avatars/205865753688145920/4b6787fcb607b9bc12e7b88b423ec2b4.webp?size=128',
							]}
							title="quagga archive"
							excerpt="How to configure bird2 for a BGP session and filter properly."
						/>
						<Article
							authorImgs={[
								'https://cdn.discordapp.com/avatars/205865753688145920/4b6787fcb607b9bc12e7b88b423ec2b4.webp?size=128',
							]}
							title="quagga archive"
							excerpt="How to configure bird2 for a BGP session and filter properly."
						/>
					</div>
				</div>
			</div>
			<div className="container pt-16">
				<p className="text-lg font-semibold">Sponsors</p>
				<div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between items-center pt-6">
					<a href="https://ifog.ch/" target="_blank" rel="noreferrer"><img src="/vendor/logos/ifog.png" className="h-10" /></a>
					<a href="https://pdxnet.co.uk/" target="_blank" rel="noreferrer"><img src="/vendor/logos/pdx.svg" className="h-10" /></a>
					<a href="https://accuristechnologies.ca/" target="_blank" rel="noreferrer"><img src="/vendor/logos/accuris.svg" className="h-10" /></a>
					<a href="https://kttcarrier.sj.ax/" target="_blank" rel="noreferrer"><img src="/vendor/logos/ktt.svg" className="h-8" /></a>
					<a href="https://github.com/sponsors/bgpguide" target="_blank" rel="noreferrer" className="text-xs font-medium text-sky-500 hover:opacity-80 flex items-center gap-1">
						This could be you!
						<ChevronRightIcon className="h-3 w-3" />
					</a>
				</div>
			</div>
			<div className="container pt-16">
				<p className="text-lg font-semibold">News</p>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6">
					<a href="#" className="bg-white rounded-lg p-4 border border-gray-200/[75%] group">
						<p className="text-sm font-medium text-gray-800">Website release!</p>
						<p className="text-xs text-gray-700 mt-1">The bgp.guide website is now finally released and is ready for visitor traffic! Read up on the process of getting it out in this short news post...</p>
						<p className="text-sm text-sky-500 font-medium flex gap-1 items-center mt-2">
							Read more
							<ChevronRightIcon className="h-3 w-3 group-hover:translate-x-[1px] transition duration-150" />
						</p>
					</a>
					<div className="bg-white rounded-lg p-4 border border-gray-200/[75%] flex items-center justify-center">
						<a href="#" className="text-sm text-sky-500 font-medium flex gap-1 items-center group">
							Read all
							<ChevronRightIcon className="h-3 w-3 group-hover:translate-x-[1px] transition duration-150" />
						</a>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export function Article({authorImgs, title, excerpt, link}) {
	return (
		<a href="#" className="p-4 rounded-lg border border-gray-200/[75%] group w-[75%] md:w-[25%] flex-shrink-0">
			<div className="flex gap-1.5 items-center">
				{authorImgs.map((img, i) => (
					<img src={img} key={i} className="h-5 w-5 rounded-full" />
				))}
			</div>
			<div className="pt-2">
				<p className="text-sm font-medium text-gray-800">{title}</p>
				<p className="text-xs text-gray-700 mt-1">{excerpt}</p>
			</div>
			<div className="pt-2">
				<p className="text-xs text-sky-500 font-medium flex gap-1 items-center">
					Read it
					<ChevronRightIcon className="h-3 w-3 group-hover:translate-x-[1px] transition duration-150" />
				</p>
			</div>
		</a>
	)
}