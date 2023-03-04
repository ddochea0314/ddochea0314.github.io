<script>
	// @ts-nocheck

	import Navbar from '$lib/navbar.svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.title} :: 또치의 손수만든 삽질 보관함</title>
</svelte:head>
<Navbar {...data} />

<section class="container mx-auto">
	<article>
		<h1>{data.title}</h1>
		<p>Published: {data.date}</p>
		<svelte:component this={data.content} />
	</article>
</section>
