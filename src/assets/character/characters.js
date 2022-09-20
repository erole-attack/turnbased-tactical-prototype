import Character from './character.class';
import RoundShield from '$images/round-shield.svg';
import Sai from '$images/sai.svg';
import BowArrow from '$images/bow-arrow.svg';
import ShepherdsCrook from '$images/shepherds-crook.svg';
import SwordBrandish from '$images/sword-brandish.svg';
import SkullStaff from '$images/skull-staff.svg';
import Pincers from '$images/pincers.svg';
import BattleAxe from '$images/battle-axe.svg';

export const assassin = new Character('assassin', 3, 1, Sai);
export const archer = new Character('archer', 4, 2, BowArrow);
export const fighter = new Character('fighter', 6, 3, SwordBrandish);
export const shepherd = new Character('shepherd', 4, 4, ShepherdsCrook);
export const support = new Character('support', 4, 5, SkullStaff);
export const engineer = new Character('engineer', 5, 6, Pincers);
export const brute = new Character('brute', 5, 7, BattleAxe);
export const tank = new Character('tank', 9, 8, RoundShield);

export const characters = [assassin, archer, fighter, shepherd, support, engineer, brute, tank];
