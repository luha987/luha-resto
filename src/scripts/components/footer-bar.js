class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <div class="copyright">
          <h2>Copyright &#169 2021 - RestaurantCatlou</h2>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
