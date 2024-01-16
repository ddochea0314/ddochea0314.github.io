<script lang="ts">
	import type { PageData } from './$types';

	export let data : PageData;

	const siteName = '또치의 손수 만든 삽질 보관함';
	// const title = `${data.post.title} - ${siteName}`
	// const description = data.post.description;
	// const type = 'article';
	// const url = 'https://ddochea0314.github.io';

	$: title = `${data.post.title} - ${siteName}`
	$: description = data.post.description;
	$: type = 'article';
	$: url = `https://ddochea0314.github.io/series/hello-dotnet/${data.post.path}`;
	$: ldjson = {
			'@context': 'http://schema.org',
			'@type': type,
			headline: title,
			description: description,
			author: {
				'@type': 'Person',
				name: 'ddochea'
			},
			publisher: {
				'@type': 'Organization',
				name: 'ddochea',
				logo: {
					'@type': 'ImageObject',
					url: 'https://ddochea0314.github.io/favicon.ico'
				}
			},
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': url
			},
			image: 'https://ddochea0314.github.io/favicon.ico'
		};
</script>
<svelte:head>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content="https://ddochea0314.github.io/favicon.png" />
	<meta name="keywords" content={data.post.tags.join(',')} />
	<meta property="og:article:author" content="ddochea" />
	<meta name="by" content="ddochea" />
	<title>{title}</title>
	{@html `<script type="application/ld+json">${JSON.stringify(ldjson)}</script>`}
</svelte:head>
<main>
	<div
		class="relative w-full px-6 py-12 bg-base-100 shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28"
	>
		<div class="text-sm breadcrumbs">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/series/hello-dotnet">Hello .NET</a></li>
				<li>{data.post.title}</li>
			</ul>
		</div>
		<article
			class="mx-auto my-8 prose lg:prose-lg rounded-sm prose-img:m-auto prose-img:rounded-lg prose-img:shadow-md prose-img:bg-black"
		>
			<h1>{data.post.title}</h1>
			<svelte:component this={data.post.content} />
			<footer>
				<p>
					Posted on <time datetime={data.post.date}>{data.post.date}</time>
				</p>
			</footer>
			<nav class="flex justify-between">
				{#if data.post.prev}
					<a href={`./${data.post.prev.link}`} rel="prev" class="text-blue-500 hover:text-blue-700">
						← {data.post.prev.title}
					</a>
				{:else}
					<span />
				{/if}
				{#if data.post.next}
					<a href={`./${data.post.next.link}`} rel="next" class="text-blue-500 hover:text-blue-700">
						{data.post.next.title} →
					</a>
				{/if}
			</nav>
		</article>
	</div>
</main>
