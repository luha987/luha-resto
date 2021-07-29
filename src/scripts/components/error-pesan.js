class ErrorMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        <h1>Ada Kesalahan Jaringan Yaa...</h1>
        <p>Mohon refresh Browser</p>
      </div>
    `;
  }
}

customElements.define('error-message', ErrorMessage);
