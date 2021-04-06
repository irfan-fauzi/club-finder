import { clubs } from './clubs.js';


// class version
class DataSource {
 
  // async method
  static searchClub(keyword) {
   
    return new Promise((resolve, reject) => {

      if(keyword.length === 0){
        console.log(reject(`kosong blokk..`))
      }
      const filteredClubs = clubs.filter(el => {
        return el.name.toUpperCase().includes(keyword.toUpperCase());
      })
      if (filteredClubs.length) {
        resolve(filteredClubs)
      } 
     
      else {
        reject(`${keyword} tidak ditemukan`)
      }
    })

  }

}

export default DataSource;