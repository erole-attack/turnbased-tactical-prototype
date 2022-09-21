import { board, gridSideSquares, squareSide } from '$stores/board.store';
import { initiativeOrder } from '$stores/party.store';

export const setBoardToCharacterPlacementMode = () => {
	board.set((p5) => {
		p5.draw = () => {
			for (let x = 1; x <= gridSideSquares; x++) {
				for (let y = 1; y <= gridSideSquares; y++) {
					toBePlacedCharacters().length > 0
						? showCharacterPlacementField(
								p5,
								x,
								y,
								getDefaultTileColor(x, y, 'rgba(60%,100%,60%,1)', 'rgba(90%,100%,90%,1)'),
								getDefaultTileColor(x, y, 'rgba(100%,60%,60%,1)', 'rgba(100%,90%,90%,1)')
						  )
						: p5.fill(getDefaultTileColor(x, y));
					p5.square(squareSide(p5) * x, squareSide(p5) * y, squareSide(p5));
					getCharacterPositions(p5, x, y);
				}
			}
		};
		p5.mousePressed = () => {
			if (isValidPlacementField(p5) && toBePlacedCharacters().length > 0) {
				initiativeOrder.update((party) => {
					party[0].position = {
						x: Math.floor(Math.floor(p5.mouseX) / squareSide(p5)),
						y: Math.floor(Math.floor(p5.mouseY) / squareSide(p5))
					};
					party.push(party.shift());
					return party;
				});
			}
		};
	});
};

export const getDefaultTileColor = (x, y, newDefaultDark, newDefaultLight) => {
	let tint;
	if (x % 2 === 0) {
		y % 2 === 0 ? (tint = newDefaultLight || 255) : (tint = newDefaultDark || 200);
	} else if (x % 2 !== 0) {
		y % 2 === 0 ? (tint = newDefaultDark || 200) : (tint = newDefaultLight || 255);
	}
	return tint;
};

const selectCharacterStartingPosition = (p5, x, y, tileColor) => {
	if (
		p5.mouseX > squareSide(p5) * x &&
		p5.mouseX < squareSide(p5) * x + squareSide(p5) &&
		p5.mouseY > squareSide(p5) * y &&
		p5.mouseY < squareSide(p5) * y + squareSide(p5)
	) {
		getNextToBePlacedCharacterIcon(p5, x, y);
	} else {
		p5.fill(tileColor);
	}
};

const showCharacterPlacementField = (p5, x, y, authorizedColor, disqualifiedColor) => {
	if (y >= gridSideSquares / 2 - 4) {
		p5.fill(disqualifiedColor);
		for (let index = 0; index < y - gridSideSquares / 2 + 5; index++) {
			if (x === gridSideSquares - index) {
				selectCharacterStartingPosition(p5, x, y, authorizedColor);
			}
		}
	} else {
		p5.fill(disqualifiedColor);
	}
};

const isValidPlacementField = (p5) => {
	let isValid = false;
	let characters;
	initiativeOrder.subscribe((party) => {
		characters = party.filter((character) => character.position);
	});
	for (let x = 1; x <= gridSideSquares; x++) {
		for (let y = 1; y <= gridSideSquares; y++) {
			if (y >= gridSideSquares / 2 - 4) {
				for (let index = 0; index < y - gridSideSquares / 2 + 5; index++) {
					if (x === gridSideSquares - index) {
						if (
							p5.mouseX > squareSide(p5) * x &&
							p5.mouseX < squareSide(p5) * x + squareSide(p5) &&
							p5.mouseY > squareSide(p5) * y &&
							p5.mouseY < squareSide(p5) * y + squareSide(p5)
						) {
							isValid = true;
						}
						characters.forEach((character) => {
							if (
								p5.mouseX > squareSide(p5) * character.position.x &&
								p5.mouseX < squareSide(p5) * character.position.x + squareSide(p5) &&
								p5.mouseY > squareSide(p5) * character.position.y &&
								p5.mouseY < squareSide(p5) * character.position.y + squareSide(p5)
							) {
								isValid = false;
							}
						});
					}
				}
			}
		}
	}
	return isValid;
};

const getCharacterPositions = (p5, x, y) => {
	initiativeOrder.subscribe((party) => {
		party.forEach((character) => {
			if (character.position?.x === x && character.position?.y === y) {
				return (
					p5.noFill(),
					p5.image(
						eval(character.role),
						squareSide(p5) * x,
						squareSide(p5) * y,
						squareSide(p5),
						squareSide(p5)
					)
				);
			}
		});
	});
};

const toBePlacedCharacters = () => {
	let characters;
	initiativeOrder.subscribe((party) => {
		characters = party.filter((character) => character.position === undefined);
	});
	return characters;
};

const getNextToBePlacedCharacterIcon = (p5, x, y) => {
	return (
		p5.noFill(),
		p5.image(
			eval(toBePlacedCharacters()[0].role),
			squareSide(p5) * x,
			squareSide(p5) * y,
			squareSide(p5),
			squareSide(p5)
		)
	);
};
