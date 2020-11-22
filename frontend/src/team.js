class Team{
    constructor(pok1, pok2, pok3, name){
        this._pok1 = pok1;
        this._pok2 = pok2;
        this._pok3 = pok3;
        this.name = name;
    }

    get weaknesses(){
      
    }


    //helpers:

    get weaklist(){
        let array = [];
        let pok_array = [];
        array.push(this._pok1.weakness)
        array.push(this._pok2.weakness)
        array.push(this._pok3.weakness)
        // debugger
        array.forEach((c) => {
            c.forEach((c) =>{
            if(!pok_array.includes(c) && c != "" && pok_array.length < 3) {
                pok_array.push(c)
            }
          })
        })   
        return pok_array
        }
        

    get strengthlist(){
        let array = [];
        let pok_array = [];
        array.push(this._pok1.strength)
        array.push(this._pok2.strength)
        array.push(this._pok3.strength)
        array.forEach((c) => {
            c.forEach((c) =>{
            if(!pok_array.includes(c) && c != "" && pok_array.length < 3) {
                 pok_array.push(c)
            }
            })
        })   
        return pok_array
        }

    get poklist(){
        let array = [];
        array.push(this._pok1.name)
        array.push(this._pok2.name)
        array.push(this._pok3.name)
        return array;
    }

}
