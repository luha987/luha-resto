class HeroImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero-data">
          <p class="welcome-text">Welcome <span>To</span></p>
          <h1 class="title">Rest<span>Catalog</span></h1>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-image', HeroImage);
