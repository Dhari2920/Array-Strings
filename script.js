//toDateString
var a = new Date();//date object
console.log(a.toDateString());//Thu jul 27 2023

//getDate()
var b = new Date();//date object
console.log(b.getDate());//27

//getFullYear()
var c = new Date();//date obj
console.log(c.getFullYear());//2023

//getMonth()
var d = new Date();//date obj
console.log(d.getMonth());//6
var e = new Date();
console.log(e.getDay());
console.log(e.getHours());
console.log(e.getMinutes());
console.log(e.getSeconds());
console.log(e.getMilliseconds());
console.log(e.getTime());
//************************************************************// 
//Array

//toString
var Array = [1,2,3];
console.log(Array.toString());

//push =>Last
var a = ["a","b","c"]
console.log(a.push("z"));//["a","b","c",z"]

//unshift =>First
var a = ["a","b","c"]
console.log(a.unshift("x"));//["x","a","b","c","z"]

//Includes
var a = [1,2,3,"abc"];
console.log(a.includes(2));//true
console.log(a.includes(6));//false

//splice(index,toindex,e1)
var a = ["a","b","c","d"]
console.log(a.splice(1,3,"x"));//1-3 remove,add x =>b,c,d
console.log(a);//a,x

var a = [11,22,33,44]
console.log(a.splice(2,4));//33,44

//Reverse
var a = [1,2,3,4];
console.log(a.reverse());//4,3,2,1

var a =["a","b","dhari"]
console.log(a.reverse());
