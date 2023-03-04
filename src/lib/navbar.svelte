<script lang="ts">
	import { NavbarType } from '$lib';

	export const type = NavbarType.Home;
	export let title = '또치의 손수만든 삽질 보관함';
	export let description = '10년 넘는 시간 동안 여전히 인생뻘짓을 기록하는 놀라운 새끼의 삽질 이력';

	let scrollY = 0;
	let hero: HTMLElement;
	let nav: HTMLElement;
	let navTitle: HTMLElement;
	$: {
		if (hero) {
			if (scrollY > hero.offsetHeight) {
				nav.classList.add('bg-base-100');
				navTitle.classList.remove('hidden');
			} else {
				nav.classList.remove('bg-base-100');
				navTitle.classList.add('hidden');
			}
		}
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<svelte:window bind:scrollY />
<div>
	<nav bind:this={nav} class="navbar font-bold duration-300 flex fixed top-0 z-50 drop-shadow">
		<div class="navbar-start">
			<div class="dropdown">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<label tabindex="0" class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/></svg
					>
				</label>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul tabindex="0" class="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64">
					<li><a href="/">Homepage</a></li>
					<li><a href="/">Portfolio</a></li>
					<li><a href="/">About</a></li>
				</ul>
			</div>
		</div>
		<div bind:this={navTitle} class="navbar-center duration-500 hidden">
			<h1 class="text-lg">{title}</h1>
		</div>
		<div class="navbar-end" />
	</nav>
	<div bind:this={hero} class="hero h-96 mb-2">
		<!-- <div class="hero-overlay bg-opacity-60" /> -->
		<div class="hero-content text-center">
			<div class="container">
				<h1 class="text-2xl font-bold">
					<p>{title}</p>
				</h1>
				<p class="mt-4">{description}</p>
			</div>
		</div>
	</div>
</div>

<style>
</style>
