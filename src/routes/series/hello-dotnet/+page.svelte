<script lang="ts">
    export let data;

	const siteName = '또치의 손수 만든 삽질 보관함';
    $: title = `Hello .NET - ${siteName}`;
    $: url = 'https://ddochea0314.github.io/series/hello-dotnet';
    $: description = 'Hello .NET 시리즈는 .NET 8를 기반으로 C# 개발 해보는 시리즈입니다.';
	$: type = 'website';
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
	<meta property="og:article:author" content="ddochea" />
	<meta name="by" content="ddochea" />
	<link rel="canonical" href={url} />
	<title>{title}</title>
	{@html `<script type="application/ld+json">${JSON.stringify(ldjson)}</script>`}
</svelte:head>
<main>
    <div class="container mx-auto">
        <div class="hero">
            <div class="hero-content text-center">
                <h1 class="text-5xl font-bold py-4">개요</h1>
            </div>
        </div>
        {#each data.posts as post}
        <a href="./{post.path}" class="card m-4 p-4 shadow bg-base-100">
            <h2>{post.title}</h2>
            <p>{post.date}</p>
        </a>
        {/each}
    </div>
</main>