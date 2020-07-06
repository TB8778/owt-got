import {mockedHouseList} from '../fixtures/house-lise';
import {House} from './house';

describe('House', () => {
  it('should create an instance', () => {
    expect(new House()).toBeTruthy();
  });

  it('should create a house', () => {
    const newHouse = new House(mockedHouseList[0]);
    expect(newHouse.founded).toEqual('Coming of the Andals');
    expect(newHouse.seats.length).toEqual(2);
    expect(newHouse.seats[0]).toEqual('The Eyrie (summer)');
  });
});
