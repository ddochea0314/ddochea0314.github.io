<script lang="ts">
	// @ts-nocheck
	import type { Post } from '$lib';
	import Navbar from '$lib/navbar.svelte';

	export let data: { posts: Post[] }; // +page.ts load 함수 결과값
</script>

<Navbar />
<div class="container grid gap-2 pl-2 pr-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
	{#each data.posts as post}
		<section class="card bg-base-300 h-96">
			<div class="card-body">
				<h2 class="card-title text-4xl">
					<a href={post.path} class="truncate">{post.title}</a>
				</h2>
				<p class="card-subtitle">
					<span class="line-clamp-4 text-ellipsis overflow-hidden">{post.description ?? ''}</span>
				</p>
				<div class="card-actions">
					{#each post.tag as tag}
						<span class="badge badge-warning p-1">{tag}</span>
					{/each}
				</div>
			</div>
		</section>
	{/each}
</div>
