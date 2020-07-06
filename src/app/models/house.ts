export class House {
  url: string;
  name: string;
  region: string;
  coatOfArms: string;
  words: string;
  titles: string[];
  seats: string[];
  currentLord: string;
  heir: string;
  overlord: string;
  founded: string;
  founder: string;
  diedOut: string;
  ancestralWeapons: string[];
  cadetBranches: string[];
  swornMembers: string[];

  constructor(args?: Partial<House>) {
    if (args == null) {
      return;
    }

    this.url = args.url || '';
    this.name = args.name || '';
    this.region = args.region || '';
    this.coatOfArms = args.coatOfArms || '';
    this.words = args.words || '';
    this.titles = args.titles || [];
    this.seats = args.seats || [];
    this.currentLord = args.currentLord || '';
    this.heir = args.heir || '';
    this.overlord = args.overlord || '';
    this.founded = args.founded || '';
    this.founder = args.founder || '';
    this.diedOut = args.diedOut || '';
    this.ancestralWeapons = args.ancestralWeapons || [];
    this.cadetBranches = args.cadetBranches || [];
    this.swornMembers = args.swornMembers || [];

  }

}
