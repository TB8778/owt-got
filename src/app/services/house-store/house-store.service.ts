import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {House} from '../../models/house';
import {queryHelper} from '../helpers/query-helper';

type HouseFilter = {
  name?: string;
  region?: string;
  words?: string;
  hasWords?: boolean;
  hasTitles?: boolean;
  hasSeats?: boolean;
  hasDiedOut?: boolean;
  hasAncestralWeapons?: boolean;
}

@Injectable()
export class HouseStoreService {

  apiBaseUrl = environment.apiBaseUrl;
  apiRelativeUrl = '/houses';

  constructor(private httpClient: HttpClient) {
  }


  retrieveHouseList(houseFilter: HouseFilter = {}): Observable<House[]> {

    return this.httpClient.get(`${this.apiBaseUrl}${this.apiRelativeUrl}${queryHelper(houseFilter)}`)
      .pipe(
        map((houseList: any) => {
          return houseList.map(house => new House(house));
        }),
      );

  }


  retrieveHouse({id}: { id: number }): Observable<House> {

    return this.httpClient.get(`${this.apiBaseUrl}${this.apiRelativeUrl}/${id}`)
      .pipe(
        map(house => new House(house)),
      );

  }


}
