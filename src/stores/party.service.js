import { partyP1, partyP2, initiativeOrder } from '$stores/party.store';
import { changePhase } from '$stores/phase.service';
import { setBoardToCharacterPlacementMode } from '$stores/board.service';

export const confirmParty = (player, characters) => {
	characters.forEach((character) => {
		character.player = player;
	});
	player === 1 && partyP1.set(characters);
	player === 2 && partyP2.set(characters);
	changePhase('character placement');
	setInitiativeOrder(characters);
	setBoardToCharacterPlacementMode();
};

export const sortPartyByCharacterPlacement = (characters) => {
	return characters.sort((a, b) => {
		if (a.initiative > b.initiative) {
			return -1;
		}
		if (a.initiative < b.initiative) {
			return -1;
		}
		return 0;
	});
};

export const setInitiativeOrder = (party) => {
	initiativeOrder.set(
		party.sort((a, b) => {
			if (a.initiative < b.initiative) {
				return -1;
			}
			if (a.initiative > b.initiative) {
				return -1;
			}
			return 0;
		})
	);
};
