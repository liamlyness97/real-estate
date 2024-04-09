<script>
	import '../app.pcss';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<main class="px-20">
	<Navbar />
	<slot />
</main>
