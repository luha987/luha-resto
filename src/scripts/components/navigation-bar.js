class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="head-container">
        <div class="logo">
          <a href="#/home">Restaurant<br><span>Catalouge</span></a>
        </div>

        <button id="menu" class="menu-siap" aria-label="click to show navbar">☰</button>

        <nav id="drawer">
          <ul class="nav-list">
            <li class="nav-item"><a href="#/home">Home</a></li>
            <li class="nav-item"><a href="#/favorite">Favorite</a></li>
            <li class="nav-item"><a href="https://github.com/luha987" target="_blank" rel="noreferrer">About</a></li>
          </ul>
        </nav>
      </div>
    `;
  }
}

customElements.define('navigation-bar', NavigationBar);
