export type Position = 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';

export function positionPriority(position: Position): number {
	switch (position) {
		case 'Goalkeeper':
			return 1;
		case 'Defender':
			return 2;
		case 'Midfielder':
			return 3;
		case 'Forward':
			return 4;
	}
}