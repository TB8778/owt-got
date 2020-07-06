import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Character} from '../../models/character';
import {queryHelper} from '../helpers/query-helper';

@Injectable()
export class CharacterStoreService {

  apiBaseUrl = environment.apiBaseUrl;
  apiRelativeUrl = '/characters';

  constructor(private httpClient: HttpClient) {
  }


  retrieveCharacterList({name, gender, culture, born, died, isAlive}: {
    name?: string, gender?: string, culture?: string, born?: string, died?: string, isAlive?: boolean
  } = {}): Observable<Character[]> {

    const params = {
      name,
      gender,
      culture,
      born,
      died,
      isAlive,
    };

    return this.httpClient.get(`${this.apiBaseUrl}${this.apiRelativeUrl}${queryHelper(params)}`)
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


}
