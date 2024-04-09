<script lang="ts">
	import heroImg from '$lib/hero.jpg';
	import strapImg from '$lib/strap.jpg';

	let scrollPos: number = $state(0);
</script>

<svelte:window bind:scrollY={scrollPos} />

<div
	class="flex h-[80vh] w-full flex-col items-center justify-center gap-10 rounded-[2.5rem]"
	style={`background: url(${heroImg}) no-repeat top center; background-size: cover; background-attachment: fixed;`}
>
	<p class="text-center text-7xl font-semibold text-white">
		Buy, Sell & Rent<br />Your Dream Property
	</p>
	<div class="w-1/2 rounded-3xl bg-white p-10">Search Box</div>
</div>

<div class="flex w-full justify-between gap-10 p-20">
	<div class="w-1/2">
		<h1 class="text-balance text-7xl font-semibold capitalize">
			Your dream home is only a few clicks away
		</h1>
		<p class="my-10 text-lg">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolore officiis libero ad a id
			voluptatem. Praesentium, earum sed. Porro rem commodi repellat vero consectetur neque sint
			minus iusto rerum, provident ut, exercitationem veritatis assumenda harum eaque libero sed
			tempora?
		</p>
		<a
			href="/"
			class="bg-prop rounded-full px-5 py-3 text-lg font-bold text-white"
			title="Learn More">Learn More</a
		>
	</div>
	<div class="w-[40%] p-10">
		<div class="grid w-full grid-cols-2 gap-10 rounded-3xl bg-gray-100 p-10">
			<p class="text-prop text-5xl font-bold leading-8">
				100+<br /><span class="text-lg font-medium text-gray-500">Property Options</span>
			</p>
			<p class="text-prop text-5xl font-bold leading-8">
				48+<br /><span class="text-lg font-medium text-gray-500">Partners</span>
			</p>
			<p class="text-prop text-5xl font-bold leading-8">
				120+<br /><span class="text-lg font-medium text-gray-500">Investors</span>
			</p>
			<p class="text-prop text-5xl font-bold leading-8">
				200+<br /><span class="text-lg font-medium text-gray-500">Listedings</span>
			</p>
		</div>
	</div>
</div>

<div class="mx-auto my-20 h-0.5 w-[90%] bg-gray-200" />

<div class="w-full px-20 py-10">
	<h2 class="text-center text-7xl font-semibold capitalize">Benefits of Choosing Us</h2>
	<div class="my-20 flex w-full justify-around gap-20">
		<div class="w-1/3">
			<p class="text-prop text-5xl font-bold">01.</p>
			<h3 class="my-5 text-balance text-3xl font-bold">Access to<br />Exclusive Projects</h3>
			<p class="text-balance">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aut illum optio et beatae
				iste, iure, perferendis dolorum voluptas incidunt obcaecati possimus, libero aspernatur.
				Quae magnam numquam voluptatum nam cumque.
			</p>
		</div>
		<div class="w-1/3">
			<p class="text-prop text-5xl font-bold">02.</p>
			<h3 class="my-5 text-balance text-3xl font-bold">Personal Data<br />Privacy is Safe</h3>
			<p class="text-balance">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aut illum optio et beatae
				iste, iure, perferendis dolorum voluptas incidunt obcaecati possimus, libero aspernatur.
				Quae magnam numquam voluptatum nam cumque.
			</p>
		</div>
		<div class="w-1/3">
			<p class="text-prop text-5xl font-bold">03.</p>
			<h3 class="my-5 text-balance text-3xl font-bold">Faster and Easier<br />Transactions</h3>
			<p class="text-balance">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aut illum optio et beatae
				iste, iure, perferendis dolorum voluptas incidunt obcaecati possimus, libero aspernatur.
				Quae magnam numquam voluptatum nam cumque.
			</p>
		</div>
	</div>
</div>

<div class="h-[60vh] w-full">
	<img class="h-full w-full rounded-3xl object-cover" src={strapImg} alt="" />
</div>
