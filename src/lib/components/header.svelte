<script lang="ts">
	import { NavbarType } from '$lib';

	export const type = NavbarType.Home;

	const constTitle = '또치의 손수 만든 삽질 보관함';
	export let title = constTitle;
	export let description = '10년 넘게 개발하고도 여전히 인생 뻘짓을 기록하는 놀라운 새끼의 삽질 이력';

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
	const getTitle = () => title === constTitle ? constTitle : `${title} :: ${constTitle}`;

</script>
<svelte:head>
	<meta property="og:title" content={getTitle()} />
	<meta property="og:description" content={description} />
	<title>{getTitle()}</title>
</svelte:head>
<svelte:window bind:scrollY />
<header>
	<nav bind:this={nav} class="navbar duration-300 flex fixed top-0 z-50 drop-shadow">
		<div class="navbar-start">
			<div class="dropdown">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<label tabindex="0" class="btn btn-ghost btn-circle bg-base-100">
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
					<li><a href="/portfolio">Portfolio</a></li>
					<li><a href="/about">About</a></li>
				</ul>
			</div>
		</div>
		<div bind:this={navTitle} class="navbar-center duration-500 hidden">
			<h1 class="text-md">{title}</h1>
		</div>
		<div class="navbar-end" />
	</nav>
	<div bind:this={hero} class="hero h-60">
		<!-- <div class="hero-overlay bg-opacity-60" /> -->
		<div class="hero-content text-center mt-4">
			<div class="container">
				<header class="text-xl font-bold">
					<p class="line-clamp-4">{title}</p>
				</header>
				<p class="mt-4 line-clamp-3 lg:line-clamp-4">{description}</p>
			</div>
		</div>
	</div>
</header>
