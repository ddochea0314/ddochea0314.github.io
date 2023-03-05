<script>
	// @ts-nocheck

	import Navbar from '$lib/components/navbar.svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.title} :: 또치의 손수만든 삽질 보관함</title>
</svelte:head>
<Navbar {...data} />
<main class="p-2">
	<article class="container mx-auto prose">
		<p>Published: {data.date}</p>
		<svelte:component this={data.content} />
	</article>
</main>

<style>
	article {
		min-height: 70vh;
	}
</style>
