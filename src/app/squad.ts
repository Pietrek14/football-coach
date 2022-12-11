import { Formation } from "./formation";
import { Player } from "./player";

export class Squad {
	name: string = "New squad";
	formation: Formation = '4-4-2';
	main: Player[] = [];
	reserve: Player[] = [];
}