class searchBar extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  set clickEvent(event){
    this._clickedEvent = event; 
    this.render();
   // console.log(event)
  }

  get value(){
    return this.querySelector('#searchElement').value
   
  }

  render(){

    this.innerHTML = `
    <div id="search-container" class="search-container">
      <input placeholder="Search football club" id="searchElement" type="search">
      <button id="searchButtonElement"
      type="submit">Search saya</button>
    </div>`;

    // event click
    this.querySelector('#searchButtonElement').addEventListener('click', this._clickedEvent)
  }
}

customElements.define('search-bar', searchBar)