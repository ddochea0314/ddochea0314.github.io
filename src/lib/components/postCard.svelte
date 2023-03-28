<script lang="ts">
	import type { Post } from '$lib';
	export let post: Post;
</script>

<article class="card bg-base-100 h-96 shadow">
	<div class="card-body">
		<h2 class="card-title text-md">
			<a href={`/${post.path}`} class="truncate">{post.title}</a>
		</h2>
		<span class="text-sm">{post.date}</span>
		<p class="card-subtitle">
			<span class="text-md line-clamp-4 text-ellipsis overflow-hidden">
				<a href={`/${post.path}`}>{post.description ?? ''}</a>
			</span>
		</p>
		<div class="card-actions">
			{#each post.tags as tag}
				<a
					class="badge badge-warning badge-lg text-md"
					href={`/tags/${tag}`}
					aria-label={`move to tag ${tag} collection`}>{tag}</a
				>
			{/each}
		</div>
	</div>
</article>
