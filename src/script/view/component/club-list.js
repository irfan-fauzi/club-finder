import './club-item.js';

class ClubList extends HTMLElement{

  set dataClub(data){
    this._dataClub = data;
    this.render();
  }

  renderError(message){
    this.innerHTML = "";
    this.innerHTML += `
    <h2 class="placeholder">${message}</h2>
    `
  }
  
  render(){  
    
    this.innerHTML = "";
    this._dataClub.forEach(data => {

      const clubElement = document.createElement("club-item");
      clubElement.setAttribute("class", "club");

      clubElement.dataClub = data;
      this.appendChild(clubElement)

    })
  }

  
}

customElements.define('club-list', ClubList);