<script lang="ts">
	import '../app.css';

	const year = new Date().getFullYear();
	let el: HTMLElement | null = null;
	let y = 0;
</script>

<svelte:head>
	<title>Test Page</title>
</svelte:head>
<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div bind:this={el} on:scroll={() => (y = el?.scrollTop ?? 0)} class="drawer-content">
		<!-- Navbar -->
		<div class="navbar sticky bg-base-100 drop-shadow-x1 top-0 z-50 ">
			<div class="navbar-start">
				<label for="my-drawer-3" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
			</div>
			<div class="navbar-center">
				<a class="btn btn-ghost normal-case text-xl" href="/">Home {y}</a>
			</div>
			<div class="navbar-end" />
		</div>
		<!-- Page content here -->
		<div class="container mx-auto">
			<slot />
		</div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-base-100 ">
			<!-- Sidebar content here -->
			side
		</ul>
	</div>
</div>
