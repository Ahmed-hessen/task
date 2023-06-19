


    //  1-first proplem 

function check (variable){
    if (isNaN(variable)){
        return "it is not a number";
    }else {
        return "it is a anumber ";
    }
}
console.log(check("15"));

        // 2-second proplem 

function compare (num1,num2){

    if (num1 > num2){
        return num1 ;
    }else if ( num1 < num2 ) {
        return num2 ; 
    }else {
        return "the two numbers are equal "
    }
}
console.log (compare(10,10));
 
        // 3- third proplem 

function evenNumbers(num){
    let array = [];
    for(i=0 ; i <= num.length ; i++){
        if ( num[i] % 2 === 0 ){
            array.push(num[i]);
        }
    }return array
}
console.log(evenNumbers([1,2,3,4,5,6,7,8,9]));

        // 4-fourth proplem 

function dates (){
    x = new Date();
        return x
}
console.log(dates());

        // 5- fifth proplem
function date (){
        let d = new Date();
        let datestring = d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getFullYear() ;
        return datestring ;
}

console.log(date());


