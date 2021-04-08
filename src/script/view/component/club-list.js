import './club-item.js';

class ClubList extends HTMLElement{

  constructor(){
    super();
    this.shadowRoot = this.attachShadow({mode: "open"});
  }

  set dataClub(data){
    this._dataClub = data;
    this.render();
  }

  renderError(message){

    this.shadowRoot.innerHTML = `
    <style>

      .placeholder {
      font-weight: lighter;
      color: rgba(0, 0, 0, 0.5);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    </style>
    <h2 class="placeholder">${message}</h2>`;
    
  }
  
  render(){  
    
    this.shadowRoot.innerHTML = "";
    this._dataClub.forEach(data => {

      const clubElement = document.createElement("club-item");
      clubElement.setAttribute("class", "club");

      clubElement.dataClub = data;
      this.shadowRoot.appendChild(clubElement)

    })
  }

  
}

customElements.define('club-list', ClubList);