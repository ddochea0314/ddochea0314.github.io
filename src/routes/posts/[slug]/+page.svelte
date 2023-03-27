<script>
	// @ts-nocheck

	import Header from '$lib/components/header.svelte';
	export let data;
</script>

<Header title={`${data.title}`} description={data.description} tags={data.tags} />
<main class="container p-2">
	<article class="mx-auto prose">
		<svelte:component this={data.content} />
		<span>Published: {data.date}</span> 
	</article>
</main>
