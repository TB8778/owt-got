import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Character} from '../../models/character';
import {queryHelper} from '../helpers/query-helper';

type CharacterFilter = {
  name?: string;
  gender?: string;
  culture?: string;
  born?: string;
  died?: string;
  isAlive?: boolean;
}

@Injectable()
export class CharacterStoreService {

  apiBaseUrl = environment.apiBaseUrl;
  apiRelativeUrl = '/characters';

  constructor(private httpClient: HttpClient) {
  }


  retrieveCharacterList(characterFilter: CharacterFilter = {}): Observable<Character[]> {

    return this.httpClient.get(`${this.apiBaseUrl}${this.apiRelativeUrl}${queryHelper(characterFilter)}`)
      .pipe(
        map((characterList: any) => {
          return characterList.map(character => new Character(character));
        }),
      );

  }


  retrieveCharacter({id}: { id: number }): Observable<Character> {

    return this.httpClient.get(`${this.apiBaseUrl}${this.apiRelativeUrl}/${id}`)
      .pipe(
        map(character => new Character(character)),
      );

  }

  // Returns a simple list of characters names given their full urls from the API
  retrieveCharactersNameFromUrls(characterUrlList: string[]) {

    const obs = (url) => this.httpClient.get(url)
      .pipe(
        map((character: any) => character.name),
      );

    // Wait for all responses
    return forkJoin(characterUrlList.map(url => obs(url)));

  }


}
