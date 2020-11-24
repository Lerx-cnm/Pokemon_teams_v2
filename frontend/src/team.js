class Team{
    constructor(pok1, pok2, pok3, name, id){
        this._pok1 = pok1;
        this._pok2 = pok2;
        this._pok3 = pok3;
        this.name = name;
        this.id = id;
    }

    get weaknesses(){
      
    }


    //helpers:

    get weaklist(){
        let array = [];
        let pok_array = [];
        array.push(this._pok1.weaknesses.split(','))
        array.push(this._pok2.weaknesses.split(','))
        array.push(this._pok3.weaknesses.split(','))
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
        array.push(this._pok1.strengths.split(','))
        array.push(this._pok2.strengths.split(','))
        array.push(this._pok3.strengths.split(','))
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
