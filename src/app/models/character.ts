export class Character {
  url: string;
  name: string;
  gender: string;
  culture: string;
  born: string;
  died: string;
  titles: string[];
  aliases: string[];
  father: string;
  mother: string;
  spouse: string;
  allegiances: string[];
  books: string[];
  povBooks: string[];
  tvSeries: string[];
  playedBy: string[];

  constructor(args?: Partial<Character>) {
    if (args == null) {
      return;
    }
    this.url = args.url || '';
    this.name = args.name || '';
    this.gender = args.gender || '';
    this.culture = args.culture || '';
    this.born = args.born || '';
    this.died = args.died || '';
    this.titles = args.titles || [];
    this.aliases = args.aliases || [];
    this.father = args.father || '';
    this.mother = args.mother || '';
    this.spouse = args.spouse || '';
    this.allegiances = args.allegiances || [];
    this.books = args.books || [];
    this.povBooks = args.povBooks || [];
    this.tvSeries = args.tvSeries || [];
    this.playedBy = args.playedBy || [];
  }
}
