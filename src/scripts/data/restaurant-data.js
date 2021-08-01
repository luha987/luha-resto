import ENDPOINT from '../globals/endpoint';
import CONFIG from '../globals/config';

class RestaurantDbSource {
  static async listRestaurant() {
    const response = await fetch(ENDPOINT.LIST_REST_DATA);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(ENDPOINT.DETAIL_RESTAURANT(id));
    return response.json();
  }

  static async reviewRestaurant(review) {
    const response = await fetch(ENDPOINT.REVIEW_RESTAURANT, {
      method: 'POST',
      headers: {
        'X-Auth-Token': CONFIG.API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });

    return response.json();
  }
}

export default RestaurantDbSource;
