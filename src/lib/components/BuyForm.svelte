<script lang="ts">
</script>

<form action="" class="mt-10 flex items-end gap-5">
	<div class="w-full md:w-1/4">
		<label for="location">Location</label><br />
		<input class="w-full rounded-2xl bg-gray-200 p-2" type="text" placeholder="Enter Location" />
	</div>
	<div class="w-full md:w-1/4">
		<label for="min">Min Price</label><br />
		<select name="min" class="w-full rounded-2xl bg-gray-200 p-2">
			<option value="50000">£50,000</option>
			<option value="100000">£100,000</option>
			<option value="150000">£150,000</option>
			<option value="200000">£200,000</option>
			<option value="250000">£250,000</option>
		</select>
	</div>
	<div class="w-full md:w-1/4">
		<label for="max">Max Price</label><br />
		<select name="max" class="w-full rounded-2xl bg-gray-200 p-2">
			<option value="100000">£100,000</option>
			<option value="200000">£200,000</option>
			<option value="300000">£300,000</option>
			<option value="400000">£400,000</option>
			<option value="500000">£500,000</option>
			<option value="600000">£600,000</option>
		</select>
	</div>
	<button class="bg-prop h-fit w-full rounded-2xl p-2 font-semibold text-white md:w-1/4"
		>Search</button
	>
</form>
