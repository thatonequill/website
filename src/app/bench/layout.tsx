import type { Metadata, Viewport } from "next";
// No font imports needed here, as they are handled by the root layout
// and applied as CSS variables to the <html> tag.
// This layout will inherit those variables.

export const viewport: Viewport = {
	themeColor: '#be185d',
};

export const metadata: Metadata = {
	title: "Bench | Builder for Hoyo Games",
	description: "Character Tracker & Builder to allow you to keep track of your builds at a glance!",
	openGraph: {
		title: "Bench | Builder Tracker for Hoyo Games",
		description: "Character Tracker & Builder to allow you to keep track of your builds at a glance!",
		url: "https://qtqwill.dev/bench", 
		siteName: "Bench",
		type: "website",
	},
	icons: {
		icon: [
			{ url: '/bench/favicon.ico' },
			{ url: '/bench/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/bench/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
		],
		apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
	},
	manifest: '/bench/site.webmanifest',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) { // This layout is nested under the root layout, so it inherits the root fonts.
	return ( // No specific font variables are applied directly to the body here, they are inherited from <html>.
		<>
			{/* <Analytics /> */}
			{children}
		</>
			
	);
}
