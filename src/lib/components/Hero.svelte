<script lang="ts">
	import heroImg from '$lib/hero.jpg';
	import BuyForm from './BuyForm.svelte';
	import RentForm from './RentForm.svelte';

	let selected = $state('Buy');

	function changeSelection(selection: string) {
		selected = selection;
	}
</script>

<div
	class="flex h-[80vh] w-full flex-col items-center justify-center gap-16 rounded-[2.5rem]"
	style={`background: url(${heroImg}) no-repeat top center; background-size: cover; background-attachment: fixed;`}
>
	<p class="text-center text-7xl font-semibold text-white">
		Buy, Sell & Rent<br />Your Dream Property
	</p>
	<div class="w-1/2 rounded-3xl bg-white p-10">
		<div class="flex w-full gap-x-10">
			<button
				class:text-prop={selected === 'Buy'}
				class:border-prop={selected === 'Buy'}
				class="hover:text-prop hover:border-prop w-1/2 border-b-4 border-white py-2 text-lg font-extrabold text-gray-500 duration-200 ease-in-out"
				onclick={() => changeSelection('Buy')}>Buy</button
			>
			<button
				class:text-prop={selected === 'Rent'}
				class:border-prop={selected === 'Rent'}
				class="hover:text-prop hover:border-prop w-1/2 border-b-4 border-white py-2 text-lg font-extrabold text-gray-500 duration-200 ease-in-out"
				onclick={() => changeSelection('Rent')}>Rent</button
			>
		</div>
		{#if selected === 'Buy'}
			<BuyForm />
		{/if}
		{#if selected === 'Rent'}
			<RentForm />
		{/if}
	</div>
</div>
