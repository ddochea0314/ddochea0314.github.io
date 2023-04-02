<script lang="ts">
	const constTitle = '또치의 손수 만든 삽질 보관함';
	export let title = constTitle;
	export let description =
		'10년 넘게 개발하고도 여전히 인생 뻘짓을 기록하는 놀라운 새끼의 삽질 이력';
	export let tags = ['ddochea', '또치', '삽질', '개발'];
	export let type = 'website';
	export let site_name = '또치의 손수 만든 삽질 보관함';
	export let url = '';

	const getTitle = () => (title === constTitle ? constTitle : `${title} :: ${constTitle}`);
</script>

<svelte:head>
	<meta name="title" content={getTitle()} />
	<meta name="description" content={description} />
	<meta property="og:title" content={getTitle()} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={site_name} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content="https://ddochea0314.github.io/favicon.png" />
	<meta name="keywords" content={tags.join(',')} />
	{#if type === 'website'}
		<meta property="og:article:author" content="ddochea" />
		<meta name="author" content="ddochea" />
	{/if}
	<title>{getTitle()}</title>
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
	{#if title !== constTitle}
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
