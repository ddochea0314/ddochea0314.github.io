<script lang="ts">
	// @ts-nocheck
	import type { Post } from '$lib';

	export let data: { posts: Post[] }; // +page.ts load 함수 결과값

	let scrollY = 0;
	let hero: HTMLElement;
	$: {
		if (hero) {
			const heroContent = hero.querySelector('.hero-content');
			if (heroContent && scrollY < hero.offsetHeight) {
				heroContent.style.transform = `translateY(${scrollY * 0.5}px)`;
			}
			if (heroContent && scrollY < hero.offsetHeight) {
				heroContent.style.opacity = `${1 - scrollY / hero.offsetHeight}`;
			}
		}
	}
</script>

<svelte:window bind:scrollY />
<div bind:this={hero} class="hero h-96 bg-base-100 ">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl">Hello</h1>
			<p class="text-xl">This is a test page</p>
		</div>
	</div>
</div>
<ul class="container mx-auto">
	{#each data.posts as post}
		<li class="card m-4 bg-primary text-primary-content">
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
		</li>
	{/each}
</ul>
