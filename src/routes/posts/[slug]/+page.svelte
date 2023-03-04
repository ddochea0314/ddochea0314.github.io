<script>
	// @ts-nocheck

	import Navbar from '$lib/components/navbar.svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.title} :: 또치의 손수만든 삽질 보관함</title>
</svelte:head>
<Navbar {...data} />

<article class="container mx-auto">
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>

<style>
	article {
		min-height: 70vh;
	}
</style>
