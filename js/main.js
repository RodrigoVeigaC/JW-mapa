var btnSaoJoao = document.querySelector("#btnSaoJoao");
var btnSantaClara = document.querySelector("#btnSantaClara");
var btnMucuri = document.querySelector("#btnMucuri");

var divSaoJoao = document.querySelector("#divSaoJoao");
var divSantaClara = document.querySelector("#divSantaClara");
var divMucuri = document.querySelector("#divMucuri");

btnSaoJoao.addEventListener("click", function(){
	divSaoJoao.style.display = "inline-block";
});

btnSantaClara.addEventListener("click", function(){
	divSantaClara.style.display = "inline-block";
});

btnMucuri.addEventListener("click", function(){
	divMucuri.style.display = "inline-block";
});