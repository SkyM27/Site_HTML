const constfunct = (nume) => console.log("Hello again!," + nume);
/*function nume(){

} same thing*/
//constfunct("Laborator");

/*const constfunct = () => {
    console.log("Hello agian!,
    console.log("Laborator!")};
constfunct();*/

/*const functii = {
    print: function afisare(nume){
        console.log(nume);
    },
    printLambda: (nume) => console.log(nume)
}

functii.print('Laborator');
functii.printLambda('Laborator');*/

var list = [1, 2, 3, 4, 5]
const sum = () =>{
    let total = 0;
    for (let i = 0; i < list.length; i++){
        total += list[i];
    }
    return total;
}
//sau
/*var list = [1, 2, 3, 4, 5]
const sum = (list) => {
    var i = 0;
    for(var j of list){
        i+=j
    }
    return i;
}*/

/*const min = () => {
    return Math.min(...list)
}

const max = () => {
    return Math.max(...list)
}

var list = [8, 2, 4, 6, 10], [1, 2, 3, 4, 5];
const functii = [sum, min, max];

list.forEach((element) => {
    for(var f of functii){
        console.log(f(element));
    }
});*/
// console.log(sum());
// console.log(min());
// console.log(max());

var data = new Date()
console.log(data)
console.log(data.getUTCDate())
console.log(data.getMonth())
console.log(data.getFullYear())