import DataSource from '../data/data-source.js';
import '../view/component/search-bar.js';
import '../view/component/club-list.js';

const main = () => {

  const searchElement = document.querySelector("search-bar");
  
  const clubListElement = document.querySelector("#clubList");

  const onButtonSearchClicked = async () => {

    try {
      
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);

    } catch(message){

      fallbackResult(message)
    }
   
      
  };

  const renderResult = results => {
    // clubListElement.innerHTML = "";
    // results.forEach(club => {

    //   const { name, fanArt, description } = club

    //   const clubElement = document.createElement("div");
    //   clubElement.setAttribute("class", "club");

    //   clubElement.innerHTML = `<img class="fan-art-club" src=${fanArt} alt="Fan Art">
    //     <div class="club-info">
    //     <h2>${name}</h2>
    //     <p>${description}</p>
    //     </div>`;
    //   clubListElement.appendChild(clubElement);
    // })
    const clubListContainer = document.querySelector('#clubList');
    const clubList = document.createElement('club-list');
    clubList.dataClub = results;
    clubListContainer.appendChild(clubList);
  };

  const fallbackResult = message => {
    clubListElement.innerHTML = "";
    clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
  };

  // buttonSearchElement.addEventListener("click", onButtonSearchClicked);
  searchElement.clickEvent = onButtonSearchClicked;
  
};

export default main;