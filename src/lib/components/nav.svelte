<script lang="ts">
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let scrollY = 0;
	let lastScroll = 0;
	let isScrollUp = false;

	let nav: HTMLElement;
	let proseTitles: NodeListOf<HTMLElement>;
	let isProseTitleVisible = false;

	onMount(() => {
		proseTitles = document.querySelectorAll(
			'.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6'
		);
	});

	$: {
		if (nav && scrollY > 0) {
			if (isScrollUp) {
				// invisible, bg-primary 같이 적용해야 duration 적용됨
				nav.parentElement?.classList.remove('invisible');
				nav.parentElement?.classList.add('bg-gradient-to-r', 'from-primary', 'to-secondary');
				nav.classList.remove('invisible');
				nav.classList.add('bg-base-100');
			} else {
				nav.parentElement?.classList.add('invisible');
				nav.parentElement?.classList.remove('bg-gradient-to-r', 'from-primary', 'to-secondary');
				nav.classList.add('invisible');
				nav.classList.remove('bg-base-100');
				isProseTitleVisible = false;
			}
		}
	}

	function onScroll() {
		isScrollUp = scrollY < lastScroll;
		lastScroll = scrollY;
	}

	async function copyUrl() {
		const url = `${$page.url.origin}/${$page.url.pathname}`;
		await navigator.clipboard.writeText(url);
		alert('URL 주소가 복사되었습니다.');
	}
</script>

<svelte:window on:scroll={onScroll} bind:scrollY />
<div class="fixed bottom-10 left-0 right-0 z-10">
	{#if proseTitles && isProseTitleVisible}
		<ul class="w-fit max-h-48 overflow-y-auto relative mx-auto mb-2">
			{#each proseTitles as title}
				<li class="mt-1">
					<a
						class="w-full btn btn-outline btn-sm bg-base-100"
						href={`#${title.id}`}
						on:click={() => {
							isProseTitleVisible = false;
						}}>{title.innerText}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
	<div class="w-fit p-1 mx-auto text-white text-center rounded-full shadow invisible duration-100">
		<nav bind:this={nav} class="rounded-full duration-100">
			<ul class="menu menu-horizontal">
				<li>
					<a href="/" aria-label="home">
						<Icon icon="tabler:home" class="dark:text-white text-black" width="24" height="24" />
					</a>
				</li>
				<li>
					<button
						aria-label="table of contents"
						on:click={() => (isProseTitleVisible = !isProseTitleVisible)}
					>
						<Icon icon="tabler:menu-2" class="dark:text-white text-black" width="24" height="24" />
					</button>
				</li>
				<li>
					<button aria-label="table of contents" on:click={async () => await copyUrl()}>
						<Icon icon="tabler:share" class="dark:text-white text-black" width="24" height="24" />
					</button>
				</li>
			</ul>
		</nav>
	</div>
</div>
