export default class Character {
	constructor(role, hitpoints, initiative, iconPath, position) {
		this.role = role;
		this.hitpoints = hitpoints;
		this.initiative = initiative;
		this.iconPath = iconPath;
		this.position = position;
	}
	get icon() {
		return (p5) => p5.loadImage(this.iconPath);
	}
}
