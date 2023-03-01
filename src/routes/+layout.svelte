<script lang="ts">
	import '../app.css';

	let isOpen = false;
</script>

<svelte:head>
	<title>Test Page</title>
</svelte:head>
<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" bind:checked={isOpen} />
	<div class="drawer-content">
	  <!-- Page content here -->
	  <div class="navbar bg-base-100">
		<div class="flex-none">
		  <button class="btn btn-square btn-ghost" on:click={() => { isOpen = !isOpen }}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
		  </button>
		</div>
		<div class="flex-1">
			<a class="btn btn-ghost normal-case text-xl" href="/">Home</a>
		</div>
		<!-- <div class="flex-none">
		  <button class="btn btn-square btn-ghost">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
		  </button>
		</div> -->
	  </div>
	  <div class="container mx-auto">
		<slot />
	  </div>
	</div> 
	<div class="drawer-side">
	  <label for="my-drawer" class="drawer-overlay"></label> 
	  <ul class="menu p-4 w-80 bg-base-100 text-base-content">
		<!-- Sidebar content here -->
		<li><a>Sidebar Item 1</a></li>
		<li><a>Sidebar Item 2</a></li>
	  </ul>
	</div>
  </div>