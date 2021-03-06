import RestaurantDbSource from '../data/restaurant-data';
import { createFormReviewTemplate } from '../views/templates/template-creator';

const FormReview = {
  async init({ formReviewContainer, id }) {
    this._formReviewContainer = formReviewContainer;
    this._id = id;

    await this._renderForm();
  },

  async _renderForm() {
    this._formReviewContainer.innerHTML = createFormReviewTemplate();

    const btnSubmit = document.querySelector('.btnSubmit');

    btnSubmit.addEventListener('click', async (e) => {
      e.preventDefault();

      const inputName = document.querySelector('.inputName');
      const inputReview = document.querySelector('.inputReview');
      const form = document.querySelector('form');

      const reviewData = {
        id: this._id,
        name: inputName.value,
        review: inputReview.value,
      };

      if (inputName.value === '') {
        alert('Nama tidak boleh kosong!');
      } else if (inputReview.value === '') {
        alert('Review tidak boleh kosong!');
      } else {
        await RestaurantDbSource.reviewRestaurant(reviewData);
        form.reset();
        this._renderReview(reviewData.name, reviewData.review);
      }
    });
  },

  _renderReview(name, review) {
    const reviewContainer = document.querySelector('.review-container');
    const date = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });

    const dataReview = `
      <div class="review-card">
        <span class="material-icons">account_circle</span>
        <p class="review-name">${name}</p>
        <p class="review-date">${date}</p>
        <p class="review-comment">${review}</p>
      </div>
    `;

    reviewContainer.innerHTML += dataReview;
  },
};

export default FormReview;
