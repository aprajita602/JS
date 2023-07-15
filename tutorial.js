let name="Aprajita"; // string
console.log(name);
const age=45; //number
console.log(age);
let isApproved= true;
console.log(isApproved);
let name2;
let selectedoption=null;
name=9;
console.log(name);

let person={
    fname:"Aprajita",
    age:27
};

console.log(person);

person.fname="Mamoon";
console.log(person);
console.log(person.fname);
person.lname="Roshangar";
console.log(person);

var arr1=["ap",true,1,"do"];
console.log(arr1[2]);
for(i=0; i <arr1.length ; i++){
    console.log(arr1.length);
}

function func1(){
    console.log("Greetings !!!");
}
func1();

function func2(fname, lname){
    console.log("Greetings !!!" + ' ' + fname + ' ' + lname);
}

func2('Aprajita','Raj');

function square(number){
    return number*number;
}
console.log(square(12));

var array_num = [1,0,7,6,3];
var reversed_array = [];
 
for(i = array_num.length-1 ; i >= 0; i--){
    reversed_array.push(array_num[i]);
}
console.log("Reversed Array: ");
console.log(reversed_array);

var n=10;
do{
console.log(' ' +n)
n++ ;
}

while(n<= 20);
var a=10;

if( a % 2 ==0){
    console.log("a is an even number");
}

else{
    console.log("a is an odd number");
}

var b=20;
if( a % 2 !=0){
    console.log("a is an odd number");
}

else{
    console.log("a is an even number");
}

function myFunction(a, b,c) {

    if(a > b && a >= c) {
        console.log("a is largest");
    }
    else if (b > a && b >= c) {
        console.log("b is largest");
    }
    else {
        console.log("c is largest");
    }
    
    }
     
    myFunction(4,6,9);
    
    function myFunction1(a, b,c) {

        if(a > b || a >= c) {
            console.log("a is largest");
        }
        else if (b > a || b >= c) {
            console.log("b is largest");
        }
        else {
            console.log("c is largest");
        }
        
        }
         
        myFunction1(4,6,9);

        
