var sayHi;
console.log(typeof(sayHi));

//var mb = true;
var mb = false;
if(mb){
		sayHi = function(){console.log('Hi');};
} else {
		sayHi = function(){console.log('Yo!');};
}
console.log(typeof(sayHi));
		
sayHi();
		
sayHi = 1;
console.log(typeof(sayHi));


