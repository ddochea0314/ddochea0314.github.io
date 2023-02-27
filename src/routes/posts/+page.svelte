<script lang="ts">
	import type { Post } from '$lib';

	export let data: { posts: Post[] }; // +page.ts load 함수 결과값
</script>

{#each data.posts as item}
	<div>{item.title}</div>
{/each}
