const sum = function(){
    let total = 0;
    for(let value of arguments){
        total+=value;
    }

    return total
}

console.log(sum(3,4,5,6))