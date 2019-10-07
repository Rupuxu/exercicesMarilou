// Exercice 1.1
var nb_1 = 15;
var nb_2 = 2;
var result = nb_1 + nb_2;

function Add() {
	document.getElementById('resultexo1.1').innerHTML = result;
}

// Exercice 1.2
var result2 = nb_1 * nb_2;

function Mult() {
	document.getElementById('resultexo1.2').innerHTML = result2;
}

// Exercice 1.3
var result3 = nb_1 % nb_2 ;

function Mod() {
	document.getElementById('resultexo1.3').innerHTML = result3;
}

// Exercice 1.4
function Soustraction(){
    var Premiere=document.getElementById("ex1_input1").value;
    var Deuxieme=document.getElementById("ex1_input2").value;
    var Resultat=Premiere - Deuxieme;
 
    document.getElementById('resultatexo1.4').innerHTML =Resultat;
}


// Exercice 1.5
function Mult2(){
    var Premiere=document.getElementById("ex1.2_input1").value;
    var Deuxieme=document.getElementById("ex1.2_input2").value;
    var Resultat=Premiere * Deuxieme;
    
    document.getElementById('resultatexo1.5').innerHTML =Resultat;
}

// Exercice 2.1
function Div(){
    var Premiere=document.getElementById("ex2_input1").value;
    var Deuxieme=document.getElementById("ex2_input2").value;
    var Resultat=Premiere / Deuxieme;
    
    document.getElementById('resultatexo2.1').innerHTML =Resultat;
}

// Exercice 2.2
function Add2(){
    var Premiere=document.getElementById("ex2.2_input1").value;
    var Deuxieme=document.getElementById("ex2.2_input2").value;
    var Resultat= eval(Premiere + "+" + Deuxieme);
    
    document.getElementById('resultatexo2.2').innerHTML =Resultat;
}

// Exercice 3
function Mod2 () {
		document.getElementById('resultexo3').innerHTML = result3;
}
window.onload = Mod2;

// Exercice 4.1
var Resultat=0;
document.getElementById('ex4_result').innerHTML =Resultat;

function plusTen() {
	Resultat= eval(Resultat + "+" + 10);
	document.getElementById('ex4_result').innerHTML =Resultat;

}

// Exercice 4.2
function diviseFive () {
	Resultat= eval(Resultat / 5);
	document.getElementById('ex4_result').innerHTML =Resultat;

}

// Exercice 4.3
function multiplyHeight () {
	Resultat= eval(Resultat * 8);
	document.getElementById('ex4_result').innerHTML =Resultat;

}

// Exercice 4.4
function minusTwo () {
	Resultat= eval(Resultat - 2);
	document.getElementById('ex4_result').innerHTML =Resultat;

}

// Exercice 4.5
function combinePlusTenMinusTwo () {
	Resultat= eval(Resultat + "+" + 10 + - 2);
	document.getElementById('ex4_result').innerHTML =Resultat;

}

// Exercice 4.6
function resetExo4 () {
	Resultat= 0;
	document.getElementById('ex4_result').innerHTML =Resultat;

}

// Exercice 5
var nombreRandom = Math.floor(Math.random() * (1000 - 50) + 50);
function Random() {

	document.getElementById('ex5_result').innerHTML =nombreRandom;

}
window.onload = Random;

// Exercice 6 
//function param(x) {
//	var calc=(x /2);
//	alert (calc);
//	document.getElementById('ex6_result').innerHTML =nombreRandom;

//}
//param (10);

// Exercice 7
//function param2(x,y) {
//	var calc=(x - y);
//	alert (calc);
//	document.getElementById('ex7_result').innerHTML =nombreRandom;

//}
//	param2 (10, 3);

// Exercice 8
function param3(x, y, z) {
	var calc=(x /y);
	var Final=(calc/z);
	alert (Final);
	document.getElementById('ex8_result').innerHTML =nombreRandom;
}
param3 (10, 2, 2);

// Exercice 9
function convertToPound() {
	var a=document.getElementById("ex9_input1").value;
	var pound=a *2.205;
    
    document.getElementById('ex9_1_result').innerHTML =pound;

}
function convertToKg() {
	var b=document.getElementById("ex9_input2").value;
	var kilo=b /2.205;
    
    document.getElementById('ex9_2_result').innerHTML =kilo;

}

// Exercice 10
var phrase =" ";

function iterateWords(){
    var m=document.getElementById("ex10_input").value;
    phrase = phrase + m;
    document.getElementById('ex10_result').innerHTML =phrase;
}

function resetWords(){
    phrase = "";
    document.getElementById('ex10_result').innerHTML =phrase;

}

// Exercice 11
   var montant=document.getElementById("ex11_input1").value;

function Montant(){
var montant=document.getElementById("ex11_input1").value;
    document.getElementById('ex11_result1').innerHTML =montant;
}

var cotehasard = Math.floor(Math.random()* (100 - 1) + 1);
function Cote() {

	document.getElementById('ex11_result2').innerHTML =cotehasard;

}
window.onload = Random;

function Final(){
	var montant=document.getElementById("ex11_input1").value;
var cotehasard = Math.floor(Math.random()* (100 - 1) + 1);

var fin = cotehasard * montant;
    document.getElementById('ex11_result3').innerHTML =fin;
}

// Exercice 12
function km(){
	var m=document.getElementById("ex12_input1").value;
    document.getElementById('ex12_result1').innerHTML =m;
}

function temps(){
	var km=document.getElementById("ex12_input1").value;
    trajet = (km/1000).toFixed(0) + "heures"+ (km%1000)*60/1000 + "minutes";
    document.getElementById('ex12_result2').innerHTML =trajet;
}


//Exercice 13

function resize(){
var larg = (window.innerWidth);
var haut = (window.innerHeight);
document.getElementById('ex13_result').innerHTML =larg +"*"+ haut;

}

// Exercice 14
function highlight(){
		var m=document.getElementById("price").value;

}
