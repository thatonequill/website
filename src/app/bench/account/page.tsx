// account page for stats

import BenchHeader from "@/components/bench/BenchHeader";
import SavedBuildButton from "@/components/bench/SavedBuildButton";

export default function accountPage() {
	return (
		<div className="min-h-screen bg-background flex flex-col transition-colors duration-300">
			<header className="sticky top-0 z-10 min-w-screen w-full">
				<BenchHeader />
			</header>
			
			<main className="flex flex-col items-center justify-content gap-4 p-4 max-w-4xl mx-auto w-full">
				
				{/* Genshin builds */}
				<h2 className="text-3xl font-black mb-4 mt-4 text-foreground">Genshin Builds</h2>
				<section className="grid grid-cols-3 gap-4">
					<SavedBuildButton
						id="1"
						name="Build 1"
						game="genshin"
						imageUrl="https://qtqwill.dev/images/jdr/CardBackDark.avif"
					/>
					<SavedBuildButton
						id="2"
						name="Build 2"
						game="genshin"
						imageUrl="https://qtqwill.dev/images/jdr/CardBackDark.avif"
					/>
					<SavedBuildButton
						id="3"
						name="Build 3"
						game="genshin"
						imageUrl="https://qtqwill.dev/images/jdr/CardBackDark.avif"
					/>
				</section>

				{/* HSR builds */}
				<h2 className="text-3xl font-black mb-4 mt-4 text-foreground">HSR Builds</h2>

				<section className="grid grid-cols-3 gap-4">
					<SavedBuildButton
						id="1"
						name="Build 1"
						game="hsr"
						imageUrl="https://qtqwill.dev/images/jdr/CardBackDark.avif"
					/>
					<SavedBuildButton
						id="2"
						name="Build 2"
						game="hsr"
						imageUrl="https://qtqwill.dev/images/jdr/CardBackDark.avif"
					/>
					<SavedBuildButton
						id="3"
						name="Build 3"
						game="hsr"
						imageUrl="https://qtqwill.dev/images/jdr/CardBackDark.avif"
					/>
				</section>
				
				{/* ZZZ builds */}
				<h2 className="text-3xl font-black mb-4 mt-4 text-foreground">ZZZ Builds</h2>

				<section className="grid grid-cols-3 gap-4">
					<SavedBuildButton
						id="1"
						name="Build 1"
						game="zzz"
						imageUrl="https://qtqwill.dev/images/jdr/CardBackDark.avif"
					/>
					<SavedBuildButton
						id="2"
						name="Build 2"
						game="zzz"
						imageUrl="https://qtqwill.dev/images/jdr/CardBackDark.avif"
					/>
					<SavedBuildButton
						id="3"
						name="Build 3"
						game="zzz"
						imageUrl="https://qtqwill.dev/images/jdr/CardBackDark.avif"
					/>
				</section>
			</main>

			<footer></footer>
		</div>
	)
}