/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../src/scripts/utils/like-button';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-data';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
