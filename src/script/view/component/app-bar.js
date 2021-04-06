class AppBar extends HTMLElement {

  connectedCallback() {

    this.render();
  }

  render() {
    
    this.innerHTML = `
   
      <h2>Club Finder by me</h2>
  
    `
  }

}

customElements.define('app-bar', AppBar);