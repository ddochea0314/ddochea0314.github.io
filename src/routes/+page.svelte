<script lang="ts">
	import type { Post } from '$lib';

	export let data: { posts: Post[] }; // +page.ts load 함수 결과값
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ul>
	{#each data.posts as item}
		<li>
			<a href={item.path}>
				<div>
					<h1>{item.title}</h1>
					<p>{item.date}</p>
				</div>
			</a>
		</li>
	{/each}
</ul>
