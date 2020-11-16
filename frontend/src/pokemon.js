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

        let strengthash = { 
            "Normal": [],
            "Fire": ["Grass", "Ice", "Bug"],
            "Water": ["Fire", "Ground", "Rock"],
            "Electric": ["Water", "Flying"],
            "Grass": ["Water", "Ground", "Rock"],
            "Ice": ["Grass", "Rock", "Flying"],
            "Fighting": ["Normal", "Ice", "Dark"],
            "Poison": ["Grass"],
            "Ground": ["Fire", "Electricity", "Poison"],
            "Flying": ["Grass", "Fighting", "Bug"],
            "Psychic": ["Fighting", "Poison"],
            "Bug": ["Grass", "Psychic"],
            "Rock": ["Fire", "Ice", "Flying"],
            "Ghost": ["Psychic", "Ghost"],
            "Dark": ["Psychic", "Ghost"],
            "Dragon": ["Dragon"]
        }
        let strengths = strengthash[`${this.type}`];
        return strengths;

    }
}

