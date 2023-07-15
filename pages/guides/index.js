import { Wrapper } from "@/components/layout/Wrapper.jsx";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Guides() {
	return (
		<Wrapper>
			<div className="h-[24rem] bg-gray-100/[75%] flex items-center">
				<div className="container">
					<div>
						<h1 className="text-5xl text-blue-600 font-bold">Guides</h1>
						<p className="text-lg font-semibold text-gray-800 mt-6">Step-by-step content for achieving all things BGP.</p>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="-mt-[5.5rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
							'https://avatars.githubusercontent.com/u/47786934?v=4'
						]}
						title="bird2: The basics"
						excerpt="How to configure bird2 for a BGP session and filter properly."
					/>
				</div>
			</div>
		</Wrapper>
	)
}

export function Article({authorImgs, title, excerpt, link}) {
	return (
		<a href="#" className="bg-white p-4 rounded-lg border border-gray-200/[75%] group">
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