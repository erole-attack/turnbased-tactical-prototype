import { partyP1, partyP2 } from '$stores/party.store';
import { changePhase } from '$stores/phase.service';

export const confirmParty = (player, characters) => {
	player === 1 && partyP1.set(characters);
	player === 2 && partyP2.set(characters);
	changePhase('character placement');
};
