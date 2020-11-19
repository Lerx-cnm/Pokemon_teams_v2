class Pokemon{
    constructor(name, type, dex_num){
        this.name = name;
        this.type = type;
        this.dex_num = dex_num;
    }

    get weaknesses(){
        let array = [];
        fetch(`http://localhost:3000/weakness/${this.type}`)
        .then(response => response.json())
        .then(json => {
            array.push(json.weak1);
            array.push(json.weak2);
            document.getElementById(this.dex_num).innerHTML += "   =>   " + array
        })
    }

    get strengths(){
        return this.strengthlist();
    }
}

