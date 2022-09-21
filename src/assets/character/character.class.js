export default class Character {
	constructor(role, hitpoints, initiative, iconPath) {
		this.role = role;
		this.hitpoints = hitpoints;
		this.initiative = initiative;
		this.iconPath = iconPath;
		this.position;
		this.player;
	}
	get icon() {
		return (p5) => p5.loadImage(`src/static/images/${this.iconPath}-p${this.player}.svg`);
	}
}
