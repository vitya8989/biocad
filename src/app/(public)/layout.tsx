import type { PropsWithChildren } from 'react';
import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";
import {MainData} from "@/types";
import {getPageData} from "@/api/page";

export default async function Layout({ children }: PropsWithChildren<unknown>) {
	const data: MainData = await getPageData();
	return (
		<div className="wrapper">
			<Header data={data}/>
			<main className="main">
				{ children }
			</main>
			<Footer data={data}/>
		</div>
	)
}
