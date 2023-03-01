<script lang="ts">
	import type { Post } from '$lib';

	export let data: { posts: Post[] }; // +page.ts load 함수 결과값
</script>
<ul>
	{#each data.posts as item}
		<li class="card m-4 bg-primary text-primary-content">
			<div class="card-body">
				<h2 class="card-title">{item.title}</h2>
				<p>{item.date}</p>
				<p>{item.tag}</p>
				<div class="card-actions justify-end">
				  <a class="btn" href="{item.path}">더보기</a>
				</div>
			  </div>
		</li>
	{/each}
</ul>
