import { Wrapper } from '@/components/layout/Wrapper.jsx'
import { useState } from "react"
import { ChevronRightIcon } from "@heroicons/react/24/solid"

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
			)

	console.log(filteredResults);

	return (
		<Wrapper>
			<div className="h-[28rem] pt-6 bg-gray-100/[75%] flex items-center">
				<div className="max-w-5xl mx-auto px-8">
					<div className="text-center">
						<h1 className="text-5xl text-blue-600 font-bold">Welcome to bgp.guide!</h1>
						<p className="text-lg font-semibold text-gray-800 mt-6">Search guides to help with your entry into the world of global networking.</p>
					</div>
					<div className="pt-8 relative">
						<input value={query} onChange={(e) => setQuery(e.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} type="search" className="block w-full rounded-lg p-4 text-sm font-medium border border-gray-200/[75%] focus:outline-none focus:border-blue-600 transition duration-150" placeholder="E.g. bird bgp communities" />
						{isFocused && <div className="block w-full bg-white rounded-lg border border-gray-200/[75%] mt-4 absolute flex flex-col gap-2 p-2 max-h-[16rem] overflow-y-auto white-bg-scrollkit">
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
						</div>}
					</div>
				</div>
			</div>
			<div className="h-[96rem]"></div>
		</Wrapper>
	)
}
