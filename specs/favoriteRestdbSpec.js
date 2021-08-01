import { itActsAsFavoriteRestaurantModel } from './restocon/favoriteRestCon';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-data';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});