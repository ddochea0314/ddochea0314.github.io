<script>
	// @ts-nocheck

	import Header from '$lib/components/header.svelte';
	export let data;
</script>

<Header title={`${data.title}`} description={data.description} tags={data.tags} />
<main class="container">
	<section class="bg-base-100 rounded-box p-4 md:m-16 m-1">
		<article class="prose mx-auto pt-12 pb-12">
			<svelte:component this={data.content} />
			<span>Published: {data.date}</span>
		</article>
	</section>
</main>
