import DataSource from '../data/data-source.js';
import '../view/component/search-bar.js';
import '../view/component/club-list.js';

const main = () => {

  // seleksi custom element
  const searchElement = document.querySelector("search-bar");
  // seleksi bukan custom element
  const clubListElement = document.querySelector("club-list");
  
  // aksi ketika tombol search di klik :
  
  const onButtonSearchClicked = async () => {
    try {
       // mengambil data secara async => ke DataSource (proses pencarian data pakai Promise)
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);

    } catch(message){
      fallbackResult(message)
    }
      
  };

  // fungsi ketika DataSOurce menghasilkan data pencarian 
  const renderResult = results => {
    clubListElement.dataClub = results;
  };

  // fungsi ketika promise reject / data pencarian tida ditemukan
  const fallbackResult = message => {
    clubListElement.renderError(message)
  };

  // buttonSearchElement.addEventListener("click", onButtonSearchClicked);

  // di taruh dibawah
  searchElement.clickEvent = onButtonSearchClicked;
  
};

export default main;