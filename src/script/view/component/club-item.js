class ClubItem extends HTMLElement{

  set dataClub(data){
    this._dataclubs = data;
    this.render();
  }
  
  render(){

    this.innerHTML = `
    <img class="fan-art-club" src=${this._dataclubs.fanArt} alt="Fan Art">
    <div class="club-info">
      <h2>${this._dataclubs.name}</h2>
      <p>${this._dataclubs.description}</p>
    </div>
    
    `;
  }
}

customElements.define('club-item', ClubItem);