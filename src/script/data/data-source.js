import { clubs } from './clubs.js';


// class version
class DataSource {
 
  // async method
  static searchClub(keyword) {
    return new Promise((resolve, reject) => {
      const filteredClubs = clubs.filter(el => {
        return el.name.toUpperCase().includes(keyword.toUpperCase());
      })
      if (filteredClubs.length) {
        resolve(filteredClubs)
      } else {
        reject(`${keyword} tidak ditemukan`)
      }
    })

  }

}

export default DataSource;