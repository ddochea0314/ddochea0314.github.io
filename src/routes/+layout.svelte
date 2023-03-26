<script lang="ts">
	import Icon from '@iconify/svelte';
	import '../app.css';

	const year = new Date(Date.now()).getFullYear();
</script>

<slot />
<footer
	class="footer footer-center p-10 mt-2 bg-base-200 text-base-content rounded relative bottom-0"
>
	<div class="grid grid-flow-col gap-4">
		<a href="/" class="link link-hover">Home</a>
		<a href="/portfolio" class="link link-hover">Portfolio</a>
		<a href="/about" class="link link-hover">About</a>
	</div>
	<div>
		<div class="grid grid-flow-col gap-4">
			<a href="https://github.com/ddochea0314" aria-label="move to ddochea0314's github page"><Icon icon="octicon:mark-github-16" width="24" height="24" /></a>
		</div>
	</div>
	<div>
		<p>Copyright © {year} - All right reserved by ddochea</p>
	</div>
</footer>
