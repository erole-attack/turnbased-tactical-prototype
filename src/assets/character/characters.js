import Character from './character.class';
import RoundShield from '$images/round-shield.svg';
import Sai from '$images/sai.svg';
import BowArrow from '$images/bow-arrow.svg';
import ShepherdsCrook from '$images/shepherds-crook.svg';
import SwordBrandish from '$images/sword-brandish.svg';
import SkullStaff from '$images/skull-staff.svg';
import Pincers from '$images/pincers.svg';
import BattleAxe from '$images/battle-axe.svg';

export const assassin = new Character('assassin', 3, 1, 'sai');
export const archer = new Character('archer', 4, 2, 'bow-arrow');
export const fighter = new Character('fighter', 6, 3, 'sword-brandish');
export const shepherd = new Character('shepherd', 4, 4, 'shepherds-crook');
export const support = new Character('support', 4, 5, 'skull-staff');
export const engineer = new Character('engineer', 5, 6, 'pincers');
export const brute = new Character('brute', 5, 7, 'battle-axe');
export const tank = new Character('tank', 9, 8, 'round-shield');

export const characters = [assassin, archer, fighter, shepherd, support, engineer, brute, tank];
