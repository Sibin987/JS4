let person = {
    name: 'Sunil',
    lname: 'Varghese',

    
    get fullName(){
        return `${person.name}    ${person.lname}`
    },

    set fullName(name1){
        let parts = name1.split(" ");
        this.name = parts[0];
        this.lname = parts[1];

        return `${this.name} ${this.lname}`
    }

}

person.fullName = "Mani SUnil"
console.log(person.fullName);