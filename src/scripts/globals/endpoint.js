import CONFIG from './config';

const ENDPOINT = {
  LIST_REST_DATA: `${CONFIG.BASE_URL}/list`,
  IMG_REST_DATA: `${CONFIG.BASE_URL}/images/medium`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  REVIEW_RESTAURANT: `${CONFIG.BASE_URL}/review`,
};

export default ENDPOINT;
