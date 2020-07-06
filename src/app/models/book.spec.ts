import {mockedBookList} from '../fixtures/book-list';
import {Book} from './book';

describe('Book', () => {

  it('should create an instance', () => {
    expect(new Book()).toBeTruthy();
  });

  it('should create a book', () => {
    const createdBook = new Book(mockedBookList[0]);
    // testing a string property
    expect(createdBook.name).toEqual('A Game of Thrones');
    // testing an array property
    expect(createdBook.characters.length).toEqual(434);
    expect(createdBook.characters[0]).toEqual('https://anapioficeandfire.com/api/characters/2');
    expect(createdBook.characters[1]).toEqual('https://anapioficeandfire.com/api/characters/12');
  });
});
