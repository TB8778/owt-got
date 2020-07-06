import {mockedCharacterList} from '../fixtures/character-list';
import {Character} from './character';

describe('Character', () => {
  it('should create an instance', () => {
    expect(new Character()).toBeTruthy();
  });

  it('should create a character', () => {
    const newCharacter = new Character(mockedCharacterList[0]);
    expect(newCharacter.name).toEqual('Tywin Lannister');
    expect(newCharacter.aliases.length).toEqual(3);
    expect(newCharacter.aliases[0]).toEqual('The Lion of Lannister');
  });
});
