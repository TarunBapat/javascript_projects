/*
arr=["hat"];
function addValue(){
    let x=prompt("enter a value")
    if(CheckValue(arr,x)){
        alert("already exists")
    }
    else{
        arr.push(x);
    }
}



function CheckValue(arr,item){
    exists=false;
    y=arr.indexOf(item);
    if(y===-1)
    {
        exists=false;

    } 
     else
    {
        exists=true;
    }
    return exists;

}

function removeValue(arr){
    x=prompt("enter value to be removed")
    z=x.trim().toLowerCase()
    y=arr.indexOf(z)
    if(CheckValue(arr,z)){
        arr.pop(y)
        console.log("you deleted "+ x+" item")
    }
    else{
        console.log("items are not present")
    }
}

function showItems(list){
    listItem="you have got "

    for(i=0;i<list.length;i++){
        listItem+=list[i]+" "
    }
    console.log(listItem)
}

addValue()
addValue()
addValue()
addValue()
removeValue(arr)
showItems(arr)


let str="Hello how ,are you doing"
let arr=str.split("").reverse().join('')
console.log(arr)
console.log()

function longestWord(text){
    let x=text.split(' ')
    console.log(x);
    long=''
    for(let i=0;i<x.length;i++){
        if(x[i].length>long.length){
            long=x[i]
        }
    }
    console.log(long);
    
    
}



longestWord("hey howw areee youuuu doinggg");






quiz=[
    ["which city is at num 1 currently","indore"],
    ["num 1 cricket team","South Africa"],
    ["num 1 comedy show","kapil show"]

]

console.log(quiz[0][0])
score=0;
for(let i=0;i<quiz.length;i++){
    let x=prompt(quiz[i][0])
    let y=x.toLowerCase()

    if(y===quiz[i][1]){
        alert("correct answer")
        score++;
    
    }
    else{
        alert("Sorry!!!!! correct ans is "+quiz[i][1])
    }


}
z=(score/quiz.length)*100;
alert("you scored "+z.toFixed(2))




setInterval(function(){
alert("hello from function")    
}, 2000);



let arr=[1,2,34,5,6,7,8]
arrray=arr.filter(function(arr){
    if(arr>5){
    return arr>=5
}
})
console.log(arrray)



let arr=['bob','john','sam','   ronny']
arr.forEach(arrTesting)

function arrTesting(name,ind){
    console.log(name.toUpperCase().trim()+" "+ind);
    
}

arr=[0,1,2,3,45,6,7,8,9]
even=arr.map(function(name){
return name*2
})
console.log(even)



let arr=['a','b','c','d','e','a','b']
const x=arr.reduce(function(acc,curr){
    console.log(curr);
    if(acc.indexOf(curr)===-1){
        acc.push(curr)

    }
    return acc
    
},[])

console.log(x);


const fruity=["mango","banana","orange","mango"]
const f=fruity.filter(function(fruit){
    return fruit=="mango"  
}).map(function(fruit){
    return fruit+" is awesome"
})
console.log(fruits);
console.log(f[0]);



let h1=document.getElementById('h1')
h1.style.color='red'

let list =document.querySelectorAll('li')
console.log(list)
list.forEach(function(li){
    console.log(li);
    li.style.color='red'
})

let l=document.getElementById('unordered').children
console.log(l[0])


function addNumber1(){
    var x=document.getElementById('text').value;

    var y=document.getElementById('text1').value;
    document.getElementById('text2').value=Number(x)+Number(y);
}

function addNumber2(){
    var x=document.getElementById('text').value;

    var y=document.getElementById('text1').value;
    document.getElementById('text2').value=Number(x)-Number(y);
}

function addNumber3(){
    var x=document.getElementById('text').value;

    var y=document.getElementById('text1').value;
    document.getElementById('text2').value=Number(x)*Number(y);
}

function addNumber4(){
    var x=document.getElementById('text').value;

    var y=document.getElementById('text1').value;
    document.getElementById('text2').value=Number(x)/Number(y);
}




function month(mo){
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
if(months[mo]){
return months[mo];
}
else

{
throw 'try something else';
}
}
try{
var x=month(15);
console.log(x);
}
catch(err){
console.log("correct the "+err);
}

x=2;
try{
    if(x==2)
    console.log(x);
    else
    throw 'error'
}
catch(err){
    console.log("this is a "+err);
}

function hifi(){
    try{
        console.log('hiiiiiiiiiii');
        throw "error";

    }
    catch(err){
        console.log('byeeeeeeeeeee');
        console.log(err);
        return err;
        
    }
    finally{
        console.log('finally used');
        
        return 'value';
    }

}
var x=hifi();
console.log(x);


function lastCatch()
{
    try{
        console.log("HOOOIIIIIII");
        throw "err"
    }
    catch(err){
        console.log(err);
        throw "another err"
    }
    finally{
        console.log("finally");
        return false;
    }
}

try{
lastCatch()
}
catch(err){
    console.log(err);
    
}


function selectedValue(y){
    
    for(i=0;i<y.options.length;i++){
     if(y.options[i].selected){
        document.getElementById("value").innerHTML= y.options[i].value+" is selected";
     }   
    }

}

var x=document.getElementById('btn');
x.addEventListener('click',function(){
    console.log('hii')
    selectedValue(document.selectForm.musicTypes);
})


var factorial=function(x){
    return x<2?1:x*factorial(x-1);
}
console.log(factorial(4));



function myFunction(x){
x.make='hero',
x.model='new Model'
}

var x={
    make: 'Honda',
     model: 'Accord',
     year: 1998

}

myFunction(x);

console.log(x.make);
console.log(x.model);

function tripleValue(f,a){
var y=[];
    for(i=0;i<a.length;i++){
     y[i]=f(a[i]);

}
return y;

console.log(y);

}
var f=function(x){
    return x*x*x;
}

a=[1,2,4,5,6]

var a=tripleValue(f,a)
console.log(a);



function outside() {
    var x = 5;
    function inside(x) {
      return x * 2;
    }
    return inside;
  }
  
 var y= outside();
console.log(y);



function fun(name){
  anotherFun=function(){
      console.log("world ");
      
  }
  return anotherFun
}

var p=fun('adam');
console.log( p.anotherFun())



function myConcat(x) {
    var result = ''; // initialize list
    var i;
    // iterate through arguments
    for (i = 1; i < arguments.length; i++) {

        
       result += arguments[i] + x;
    }

    return result;
 }

 console.log(myConcat('. ', 'red', 'orange', 'blue')
);



var add=function(a,b){
    if (b=='undefined'?1:b)
    return a*b;
}
console.log( add(5,6));



function arrayValue(a,...args){
    even=args.map(function(b){
        return a*b;
    })
    return even;
}

//console.log(arrayValue(arr));
var arr=arrayValue(1,2,4,5,6);
console.log(arr);



function arrayValue(a,...args){
    return args.map(x=>a*x);

}

console.log( arrayValue(2,2,4,5,6));




var myObj={
    name:"Tom Latham",
    city:function(){
        return this.name;
    },
    venue:{
        name:"what's the venue",
        city:"Los angeles",
        area:function(){
            return name + "area is 200 sqft"
        }
    }
}

console.log(myObj.venue.name);
myObj.venue.country="Australia"
console.log(myObj.venue);


function myVar(name,venue){
    this.name=name;
    this.venue=venue;
    this.info=function(){
    return this.name+" resides in "+this.venue;
}

}

var obj=new myVar("Tom Latham","Los Angeles")
console.log(obj.info());


function changeName(person){
person.name="Tom Latham";

}

changeName(bobSmith);
document.write(bobSmith.name)



function myPlace(name,country){
    this.name=name,
    this.country=country,
    this.venue=function(){
        return this.name+ " lives in "+this.country
    }
}

var obj=new myPlace("adam Zampa","Australia")
console.log(obj.venue());
myPlace.prototype.tourTo="india"
myPlace.prototype.iplTeam=function(){
    return this.name +" belong to  punjab ";
}
console.log(obj.iplTeam());
for(x in obj){
    console.log(x+"       "+obj[x]);
    
}
console.log(obj.haOwnProperty('name'));



Array.prototype.inArray=function(value){
    for(var i=0;i<this.length;i++){
        if (this[i]===value){
            return true;
        }
       
    }
    return false;
}


arr=[1,2,4,5,7]
console.log(arr.inArray(7));



function guessGame(){
    var secretNum=4;
    this.guess=function(num){
        if(num>4){
            return "guess lower"
        }
        else if(num<4){
            return "guess higher"
        }
        else{
            return "you got damm right"
        }

    }
}


var obj=new guessGame()

guessGame.prototype.getGuess=function(){
    return this.secretNum;
}
console.log( obj.getGuess()

);



var getSet={
    firstName: "John",
    lastName : "Doe", 
    get getValue(){
        return this.firstName+ " "+this.lastName;
    },
    set setValue(value){
        var parts=value.toString().split(",");
        this.firstName=parts[0];
        this.lastName=parts[1];

    }
}

getSet.setValue="adam,gilchrist";
console.log(getSet.getValue);





function getSet(){
    this.latitude=0,
    this.longitude=0;

}
Object.__defineGetter__.call(getSet.prototype,'getValue',function(){
    return this.latitude + " "+ this.longitude;
})

Object.__defineSetter__.call(getSet.prototype,'setValue',function(value){
    var parts=value.toString().split(",");
    this.latitude=parts[0];
    this.longitude=parts[1];
})

var obj=new getSet();
obj.setValue="1,2";
console.log(obj.getValue);




function getSet(){
    this.latitude=0,
    this.longitude=0;
}
Object.defineProperty(getSet.prototype,"pointPos",{
    get: function(){
        return this.latitude+"         "+this.longitude
    },
    set: function(value){
        var parts=value.toString().split(",");
        this.latitude=parts[0];
        this.longitude=parts[1];


    }
})

var obj=new getSet();
obj.pointPos="101,104";
console.log(obj.pointPos);






var circle=function(radius){
    this._radius=radius;
}
circle.prototype={
    get radius(){
        return this._radius;
    },
    set radius(radius){
        this._radius=radius;
    }
}


var cir=new circle()
cir.radius=15;
console.log(cir.radius);





//inheritance
var animal=function(){
    this.name="Animal",
    this.toString=function(){
        return "This is a "+this.name;
    }
}


var dog=function(){
    this.name="Dog"  
}
dog.prototype=new animal();
var d=new dog()
console.log(d.name);





function Animal(){
    this.name="giraffe"
}
function Rat(){
    this.rat="Asian Rat"
}

Rat.prototype=Animal()
console.log(Rat.name);
var obj=new Rat()
console.log(obj.rat);




function Vehicle(name){
    this.name=name;
}
Vehicle.prototype={
    drive:function(){
        return this.name+" drives forward"
    },
    stop:function(){
        return this.name +" returns"
    }
}

function Truck(name){
    this.name=name;
}

Truck.prototype=new Vehicle()
Truck.prototype.constructor=Truck
Truck.prototype.drive=function(){
    var driveMsg=Vehicle.prototype.drive.apply(this);
    return driveMsg+=" through a field"
}

var jeep=new Truck("Jeep")
console.log(jeep.stop());
console.log(jeep.drive());





var addVar={
    sum:function(num1,num2){
        return num1+num2;
    }
}

console.log(addVar.sum(2,3));





class Animal{
    constructor(name){
        this.name=name;
    }
    toString(){
        return "animal is "+this.name
    }
}

class Dog extends Animal{
    constructor(name,owner){
    super(name);
    this.owner=owner;
}
}

var obj=new Dog("Lisa")
console.log(obj.toString());




function(x){
    return x*2;                is same as       x=>x*2;
}



class counter{
    constructor(start,wait){
        this.start=start;
        this.wait=wait;
        this.p=createP('');
    console.log(this)
    }

}

count=new counter(100,300)



let x=0
setInterval(x=>{
    console.log(x++)
},200)




function addValue(x,y,callback){
    console.log(x+y);
    callback()
}
function callback(){
    console.log("addition done");
    
}
for(i=0;i<5;i++){
x=prompt("First")
y=prompt("Second")

addValue(Number(x),Number(y),callback)
}

function addValue(x,y,callback){
    console.log(x+y);
    callback()
}

for(i=0;i<5;i++){
x=prompt("First")
y=prompt("Second")

addValue(Number(x),Number(y),function callback(){
    console.log("addition done");
    
})
}


function content(){
this.x=200;
this.y=100;

}

content.prototype.show=function(x,y){
    return this.x+this.y;
}
var obj=new content()
*/
var blur=document.querySelector('h2')

var x=document.querySelector('form').querySelector('input')
x.addEventListener('change',function(e){
    if(x.checked){
        blur.style.display='none'
    }
    else{
        blur.style.display='block'
    }
})

//var search=document.querySelector('form').querySelector('input[type="text"]').value


const s=document.forms['search'].querySelector('input[type="text"]')
console.log(s);
s.addEventListener('keyup',function(e){
    const s1=e.target.value.toLowerCase();
    var searchAll=document.getElementById('searchAll').textContent
    if(searchAll.toLowerCase().indexOf(s1)!=-1){
        window.style.color='red'
    }
    else{
        window.display='none'
    }

})

