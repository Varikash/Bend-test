import areasData from '../mocks/areas.json';
import thingsData from '../mocks/things.json';
import { ZoneData } from '../types/Zone.types';
import { Thing } from '../types/Thing.types';

export const fetchAreas = (): Promise<ZoneData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(areasData), 1000);
  });
}

export const fetchThings = (): Promise<Thing[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(thingsData), 1000);
  });
}