<script lang="ts">
</script>

<form action="" class="mt-10 flex items-end gap-5">
	<div class="w-full md:w-1/4">
		<label for="location">Location</label><br />
		<input class="w-full rounded-2xl bg-gray-200 p-2" type="text" placeholder="Enter Location" />
	</div>
	<div class="w-full md:w-1/4">
		<label for="min">Min Price p/m</label><br />
		<select name="min" class="w-full rounded-2xl bg-gray-200 p-2">
			<option value="500">£500</option>
			<option value="100000">£550</option>
			<option value="150000">£600</option>
			<option value="200000">£650</option>
			<option value="250000">£700</option>
		</select>
	</div>
	<div class="w-full md:w-1/4">
		<label for="max">Max Price p/m</label><br />
		<select name="max" class="w-full rounded-2xl bg-gray-200 p-2">
			<option value="550">£550</option>
			<option value="600">£600</option>
			<option value="650">£650</option>
			<option value="700">£700</option>
			<option value="750">£750</option>
			<option value="800">£800</option>
		</select>
	</div>
	<button class="bg-prop h-fit w-full rounded-2xl p-2 font-semibold text-white md:w-1/4"
		>Search</button
	>
</form>
