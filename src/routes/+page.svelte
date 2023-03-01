<script lang="ts">
	import type { Post } from '$lib';

	export let data: { posts: Post[] }; // +page.ts load 함수 결과값
</script>

<ul>
	{#each data.posts as post}
		<li class="card m-4 bg-primary text-primary-content">
			<div class="card-body">
				<h2 class="card-title">{post.title}</h2>
				<p>{post.date}</p>
				<p>
					{#each post.tag as tag}
						<span class="badge badge-warning gap-2">{tag}</span>
					{/each}
				</p>
				<div class="card-actions justify-end">
					<a class="btn" href={post.path}>더보기</a>
				</div>
			</div>
		</li>
	{/each}
</ul>
