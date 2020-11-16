class Pokemon{
    constructor(name, type, dex_num){
        this.name = name;
        this.type = type;
        this.dex_num = dex_num;
    }

    get weaknesses(){
        return this.weaklist();
    }

    get strengths(){
        return this.strengthlist();
    }

    //helpers:


    weaklist(){

        let weakhash = {
            "Grass": ["Fire", "Bug", "Flying"],
            "Fire": ["Water", "Ground", "Rock"],
            "Water": ["Electric", "Grass"],
            "Normal": ["Fighting"],
            "Electric": ["Ground"],
            "Ice": ["Fire", "Fighting", "Rock"],
            "Fighting": ["Flying", "Psychic", "Dark"],
            "Poison": ["Ground", "Psychic"],
            "Ground": ["Water", "Grass", "Ice"],
            "Flying": ["Electric", "Ice", "Rock"],
            "Psychic": ["Bug", "Ghost", "Dark"],
            "Bug": ["Fire", "Flying", "Rock"],
            "Rock": ["Water", "Grass", "Fighting"],
            "Ghost": ["Ghost", "Dark"],
            "Dark": ["Fighting", "Bug"],
            "Dragon": ["Ice", "Dragon"]
        }

        let weakness = weakhash[`${this.type}`];

        return weakness;
    }


    strengthlist(){

    }
}

