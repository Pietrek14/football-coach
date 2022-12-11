import { Position } from "./position";

export type Formation = '4-4-2' | '4-3-3';

export class FormationLimits {
	defenders: number = 4;
	midfielders: number = 4;
	forwards: number = 2;
}

export function getFormationLimits(formation: Formation): FormationLimits {
	switch (formation) {
		case '4-4-2':
			return {
				defenders: 4,
				midfielders: 4,
				forwards: 2
			};
		case '4-3-3':
			return {
				defenders: 4,
				midfielders: 3,
				forwards: 3
			};
	}
}

export function getFormationLimitForPosition(formation: Formation, position: Position): number {
	const limits = getFormationLimits(formation);
	switch (position) {
		case 'Goalkeeper':
			return 1;
		case 'Defender':
			return limits.defenders;
		case 'Midfielder':
			return limits.midfielders;
		case 'Forward':
			return limits.forwards;
	}
}