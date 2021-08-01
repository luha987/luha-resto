import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_L, DATABASE_V, OBJECT_DATA_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_L, DATABASE_V, {
  upgrade(database) {
    database.createObjectStore(OBJECT_DATA_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    if (!id) {
      return;
    }

    return (await dbPromise).get(OBJECT_DATA_NAME, id);
  },

  async getAllRestaurant() {
    return (await dbPromise).getAll(OBJECT_DATA_NAME);
  },

  async putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    return (await dbPromise).put(OBJECT_DATA_NAME, restaurant);
  },

  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_DATA_NAME, id);
  },
};

export default FavoriteRestaurantIdb;
