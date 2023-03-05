<script>
	// @ts-nocheck

	import Header from '$lib/components/header.svelte';
	export let data;
</script>

<Header title={`${data.title}`} description={data.description} />
<main class="container p-2">
	<article class="mx-auto prose">
		<p>Published: {data.date}</p>
		<svelte:component this={data.content} />
	</article>
</main>
