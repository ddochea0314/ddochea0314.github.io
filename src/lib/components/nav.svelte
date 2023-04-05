<script lang="ts">
	import Icon from '@iconify/svelte';

	let scrollY = 0;
	let lastScroll = 0;
	let isScrollUp = false;

	let nav: HTMLElement;

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
			}
		}
	}

	function onScroll() {
		isScrollUp = scrollY < lastScroll;
		lastScroll = scrollY;
	}
</script>

<svelte:window on:scroll={onScroll} bind:scrollY />
<div
	class="w-fit fixed bottom-10 left-0 right-0 z-50 mx-auto 
	w-auto text-white text-center rounded-full shadow invisible duration-100"
>
	<nav bind:this={nav} class="w-100 h-100 rounded-full duration-100 m-1">
		<ul class="menu menu-horizontal">
			<li>
				<a href="/" aria-label="home">
					<Icon icon="tabler:home" class="dark:text-white text-black" width="24" height="24" />
				</a>
			</li>
			<li>
				<a href="/portfolio" aria-label="portfolio">
					<Icon icon="tabler:book" class="dark:text-white text-black" width="24" height="24" />
				</a>
			</li>
			<li>
				<a href="/about" aria-label="about">
					<Icon
						icon="tabler:info-circle"
						class="dark:text-white text-black"
						width="24"
						height="24"
					/>
				</a>
			</li>
		</ul>
	</nav>
</div>
