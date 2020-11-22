class Pokemon{
    constructor(name, type, dex_num){
        this.name = name;
        this.type = type;
        this.dex_num = dex_num;
        this.weaknesses()
        this.strengths()
    }

    weaknesses(){
        let array = [];
        fetch(`http://localhost:3000/weakness/${this.type}`)
        .then(response => response.json())
        .then(json => {
            array.push(json.weak1);
            array.push(json.weak2);
            this.weakness = array;
        })
    }

    strengths(){
        let array =[];
        fetch(`http://localhost:3000/strength/${this.type}`)
        .then(response => response.json())
        .then(json =>{
            array.push(json.stre1)
            array.push(json.stre2)
            this.strength =array;
        })
    }
}

