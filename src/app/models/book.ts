export class Book {
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  mediaType: string;
  released: Date;
  characters: string[];
  povCharacters: string[];

  constructor(args?: Partial<Book>) {
    if (args == null) {
      return;
    }
    this.url = args.url || '';
    this.name = args.name || '';
    this.isbn = args.isbn || '';
    this.authors = args.authors || [];
    this.numberOfPages = args.numberOfPages || 0;
    this.publisher = args.publisher || '';
    this.country = args.country || '';
    this.mediaType = args.mediaType || '';
    this.released = args.released && new Date(args.released) || null;
    this.characters = args.characters || [];
    this.povCharacters = args.povCharacters || [];
  }
}
