<script lang="ts">
	// @ts-nocheck
	import type { Post } from '$lib';
	import { page } from '$app/stores';
	import Header from '$lib/components/header.svelte';
	import PostCard from '$lib/components/postCard.svelte';

	export let data: { posts: Post[] }; // +page.ts load 함수 결과값
</script>

<Header title={`'${$page.params.tag}' tag`} />
<main class="container grid gap-2 p-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
	{#each data.posts as post}
		<PostCard {post} />
	{/each}
</main>
