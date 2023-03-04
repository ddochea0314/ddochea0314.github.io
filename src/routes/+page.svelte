<script lang="ts">
	// @ts-nocheck
	import type { Post } from '$lib';

	export let data: { posts: Post[] }; // +page.ts load 함수 결과값
</script>

<div class="container pl-2 pr-2 grid gap-4 grid-cols-1 lg:grid-cols-2 ">
	{#each data.posts as post}
		<section class="card bg-primary text-primary-content">
			<div class="card-body">
				<a href={post.path}><h2 class="card-title">{post.title}</h2></a>
				<p>{post.date}</p>
				<p>
					{#each post.tag as tag}
						<span class="badge badge-warning p-4 m-1 gap-2">{tag}</span>
					{/each}
				</p>
				<div class="card-actions justify-end">
					<a class="btn" href={post.path}>더보기</a>
				</div>
			</div>
		</section>
	{/each}
</div>
