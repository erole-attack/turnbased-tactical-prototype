import { phase } from '$stores/phase.store';

export const changePhase = (newPhase) => {
	phase.set(newPhase);
};
