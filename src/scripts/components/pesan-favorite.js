class FavoriteMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        <h1>Silakan Menambahkan Favorite Anda!!!</h1>
        <p class="fav-page-msg">Data restaurant tidak ditemukan</p>
      </div>
    `;
  }
}

customElements.define('favorite-message', FavoriteMessage);
