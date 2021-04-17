//import { clubs } from './clubs.js';

// class version
class DataSource {

  // async method
  static searchClub(keyword) { 
    return new Promise((resolve, reject) => {

      fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
      .then(res => res.json())
      .then(dataClubs => {
        const arrClubs = dataClubs.teams;
       
        if(keyword.length === 0){
          console.log(reject(`kosong blokk..`))
        }
        const filteredClubs = arrClubs.filter(el => {
          return el.strTeam.toUpperCase().includes(keyword.toUpperCase());
        })
        if (filteredClubs.length) {
          resolve(filteredClubs)
        } 
       
        else {
          reject(`${keyword} tidak ditemukan`)
        }
        
      })
       
    })
    
  }

}


export default DataSource;