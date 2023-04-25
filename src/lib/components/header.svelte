<script lang="ts">
	const defaultTitle = '또치의 손수 만든 삽질 보관함';
	export let title = defaultTitle;
	export let description =
		'10년 넘게 개발하고도 여전히 인생 뻘짓을 기록하는 놀라운 새끼의 삽질 이력';
	export let tags = ['ddochea', '또치', '삽질', '개발'];
	export let type = 'website';
	export let siteName = '또치의 손수 만든 삽질 보관함';
	export let url = '';

	$: finalTitle = title == defaultTitle ? title : `${title} | ${defaultTitle}`;

	let ldjson = {};
	if (type == 'article') {
		ldjson = {
			'@context': 'http://schema.org',
			'@type': 'Article',
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
	} else {
		ldjson = {
			'@context': 'http://schema.org',
			'@type': 'WebSite',
			name: '또치의 손수 만든 삽질 보관함',
			url: 'https://ddochea0314.github.io'
			// 'potentialAction': {
			// 	'@type': 'SearchAction',
			// 	'target': 'https://ddochea0314.github.io/search?q={search_term_string}',
			// 	'query-input': 'required name=search_term_string'
			// } // 검색기능이 없으므로 주석처리
		};
	}
</script>

<svelte:head>
	<meta name="title" content={finalTitle} />
	<meta name="description" content={description} />
	<meta property="og:title" content={finalTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content="https://ddochea0314.github.io/favicon.png" />
	<meta name="keywords" content={tags.join(',')} />
	{#if type === 'website'}
		<meta name="author" content="ddochea" />
	{:else if type === 'article'}
		<meta property="og:article:author" content="ddochea" />
		<meta name="by" content="ddochea" />
	{/if}
	<title>{finalTitle}</title>
</svelte:head>
<header class="mb-8 pb-2">
	<div class="hero h-60">
		<div class="hero-content text-center mt-4">
			<div class="container">
				<header class="text-xl sm:text-2xl md:text-3xl font-bold">
					<p class="line-clamp-4">{title}</p>
				</header>
				<p class="text-xs md:text-sm mt-4 line-clamp-3 lg:line-clamp-4">{description}</p>
			</div>
		</div>
	</div>
	{#if type === 'article'}
		<div class="mb-4 mx-auto w-auto text-center">
			{#each tags as tag}
				<a
					class="badge badge-warning badge-lg text-sm m-0.5 mt-1 mb-1"
					href={`/tags/${tag}`}
					aria-label={`move to tag ${tag} collection`}>{tag}</a
				>
			{/each}
		</div>
	{/if}
</header>
