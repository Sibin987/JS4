let person = {
    name: 'Sibin',
    lname: 'Varghese',

    // getter
    get fullName(){
        return `${person.name} ${person.fname}`
    },

    set fullName(value){

        console.log(value)

        if(typeof value !== String){
            throw new Error("String nahi hai")
        }

        let parts = value.split(' ');
        this.name = parts[0],
        this.lname = parts[1]
    }

};

try{
    person.fullName = "Sibin Varghese";
}
catch (e) {
    console.log(e)
}


