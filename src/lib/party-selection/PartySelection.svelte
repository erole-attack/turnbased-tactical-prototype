<script>
	import CharacterSelection from '$lib/party-selection/CharacterSelection.svelte';
	import { characters } from '$assets/character/characters';
	import { confirmParty } from '$stores/party.service.js';
	import { player } from '$stores/player.store.js';

	let selected = [];
	let selectedCharacters = [];
	let partyIsFull = false;
	$: selectedCharacters = selected.filter((value) => value);
	$: selectedCharacters.length >= 4 ? (partyIsFull = true) : (partyIsFull = false);
</script>

<div class="options">
	{#each characters as character, i}
		<CharacterSelection
			role={character.role}
			{character}
			bind:selected={selected[i]}
			bind:disabled={partyIsFull}
		/>
	{/each}
</div>

<button disabled={!partyIsFull} on:click={confirmParty($player, selectedCharacters)}
	>Start game</button
>

<style>
	.options {
		width: 100%;
	}
</style>
