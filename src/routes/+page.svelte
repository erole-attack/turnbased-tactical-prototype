<script>
	import { phase } from '$stores/phase.store';
	import Board from '$lib/board/Board.svelte';
	import PartySelection from '$lib/party-selection/PartySelection.svelte';
	import CharacterPlacement from '$lib/character-placement/CharacterPlacement.svelte';
</script>

<div class="game">
	<Board />
	<div class="panel-right">
		{#if $phase === 'character selection'}
			<PartySelection />
		{:else if $phase === 'character placement'}
			<CharacterPlacement />
		{/if}
	</div>
</div>

<style>
	.game {
		display: flex;
		flex-direction: row;
		height: 100vh;
		width: 100vw;
	}

	.panel-right {
		height: 100%;
		width: 100%;
		padding: var(--scale-medium);
	}
</style>
