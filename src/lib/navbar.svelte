<script lang="ts">
    import { NavbarType } from "$lib";
    
    export const type = NavbarType.Home;
    export const title = "또치의 삽질보관함";

	let scrollY = 0;
	let hero: HTMLElement;
    let nav : HTMLElement;
    let navTitle : HTMLElement;
	$: {
		if (hero) {
            if (scrollY > hero.offsetHeight) {
                nav.classList.add("bg-base-100");
                navTitle.classList.remove("hidden");
            } else {
                nav.classList.remove("bg-base-100");
                navTitle.classList.add("hidden");
            }
		}
	}
</script>
<svelte:window bind:scrollY />
<div>
<nav bind:this={nav} class="navbar duration-500 flex fixed top-0 z-50">
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
	<div class="navbar-end">
	</div>
</nav>
<div bind:this={hero} class="hero h-96">
	<div class="hero-content text-center">
		<div>
			<h1 class="text-2xl">
				<p>{title}</p>
			</h1>
			<p>{hero?.offsetHeight}</p>
		</div>
	</div>
</div>
</div>