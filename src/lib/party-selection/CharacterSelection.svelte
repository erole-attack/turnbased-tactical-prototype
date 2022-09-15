<script>
	export let role;
	export let character;
	export let selected;
	let checked;
	export let disabled;
	$: checked ? (selected = character) : (selected = null);
</script>

<div class="options">
	<input
		type="checkbox"
		id={role}
		name={role}
		value={character}
		bind:checked
		disabled={disabled && !checked}
	/>
	<label for={role}>{role}</label><br />
</div>

<style>
	.options {
		width: 100%;
	}
</style>
