<script>
	import { sortPartyByCharacterPlacement } from '$stores/party.service.js';
	import { partyP1 } from '$stores/party.store.js';

	$: characters = sortPartyByCharacterPlacement($partyP1);
</script>

<div class="character">
	{#each characters as character}
		<h4>{character.role}</h4>
	{/each}
</div>

<style>
	.character {
		width: 100%;
	}
</style>
