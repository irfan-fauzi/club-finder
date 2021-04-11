class AppBar extends HTMLElement {

  constructor(){
    super();
    this._shadowRoot = this.attachShadow({mode: "open"});

  }
  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
      <style>
        *{
          margin: 0;
          padding: 0;
        }
        :host{
          display: block;
          
          width: 100%;
          background-color: magenta;
          color: rgb(223, 212, 212);
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        h2{
          padding: 16px;
        }

      </style>
      <h2>Club Finder by me</h2>
    `
  }
}

customElements.define('app-bar', AppBar);