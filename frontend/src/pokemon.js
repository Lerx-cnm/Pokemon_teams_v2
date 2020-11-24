class Pokemon{
    constructor(name, type, dex_num, weaknesses, strengths){
        this.name = name;
        this.type = type;
        this.dex_num = dex_num;
        this.weaknesses = weaknesses;
        this.strengths = strengths;
        Pokemon.all.push(this);
    }
    static all = []
}


