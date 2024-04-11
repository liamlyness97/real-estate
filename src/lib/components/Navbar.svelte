<script lang="ts">
	let mobileNav = $state(false);
</script>

<div class="flex w-full items-center justify-between px-10 py-10 align-middle">
	<nav class="hidden w-1/3 gap-5 font-bold text-gray-400 md:flex">
		<a href="/" class="text-gray-800">Home</a>
		<a href="/">Buy</a>
		<a href="/">Rent</a>
	</nav>
	<div class="w-full text-center">
		<p class="text-3xl font-light text-prop">
			<span class="font-semibold capitalize text-gray-700">Prop</span>Search
		</p>
	</div>
	<div class="hidden w-1/3 justify-end gap-5 font-bold text-gray-400 md:flex">
		<a href="/">Join With Us</a>
		<a href="/">About us</a>
		<a href="/">Contact</a>
		<a href="/">Login</a>
	</div>
</div>

{#if mobileNav}
	<div class="fixed left-0 top-0 z-50 flex min-h-screen w-full flex-col bg-prop p-10">
		<p class="text-3xl font-light text-white">
			<span class="font-semibold capitalize text-gray-700">Prop</span>Search
		</p>
		<div class="mt-10 flex flex-col justify-between gap-5 [&>a]:text-5xl [&>a]:text-white">
			<a href="/" class="text-gray-800">Home</a>
			<a href="/">Buy</a>
			<a href="/">Rent</a>
			<a href="/">Join With Us</a>
			<a href="/">About us</a>
			<a href="/">Contact</a>
		</div>
		<div class="flex h-full items-end gap-5">
			<button
				class="mt-10 self-start justify-self-end rounded-full bg-white px-10 py-2 text-2xl text-prop"
				>Login</button
			>
			<button
				onclick={() => (mobileNav = !mobileNav)}
				class="mt-10 self-start justify-self-end rounded-full bg-white px-10 py-2 text-2xl text-prop"
				>Close</button
			>
		</div>
	</div>
{/if}
