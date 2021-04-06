import DataSource from '../data/data-source.js';
import '../view/component/search-bar.js';
import '../view/component/club-list.js';

const main = () => {

  // seleksi custom element
  const searchElement = document.querySelector("search-bar");
  // seleksi bukan custom element
  const clubListElement = document.querySelector("#clubList");
  
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
    // clubListElemen di isi kosong supaya tidak createElement terus menerus
    clubListElement.innerHTML = "";

    // membuat element clubList yang sudah didefinisikan di class ClubList
    const clubList = document.createElement('club-list');
    // class ClubList memanggil method set dataClub yang di inisialisasi dan di isi oleh result (data pencarian)
    clubList.dataClub = results;
    // menaruh element clubList di dalam clubListElement
    clubListElement.appendChild(clubList);
  };

  // fungsi ketika promise reject / data pencarian tida ditemukan
  const fallbackResult = message => {
    clubListElement.innerHTML = "";
    clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
  };

  // buttonSearchElement.addEventListener("click", onButtonSearchClicked);

  // di taruh dibawah
  searchElement.clickEvent = onButtonSearchClicked;
  
};

export default main;