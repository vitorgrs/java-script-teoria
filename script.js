// comando alert
//alert("ola");
//criação de uma variavel
var mensagem = "Olá Mundo"
//alert(mensagem);
//operadores matematicos
var b= 2;
var a =5;
var operacao= a +b;
var multiplicacao = a*b;
//alert(operacao);
//alert(multiplicacao);
//estruturas de condição
/*if (b%2 ==1){
	alert("numero é impar");}
else {alert("numero é par");}
//estruturas de repetições
var i = 0;
while(i<2){
	alert(i);
	++i;
}
for(var j=2;j<5;++j){
	alert(j);
}
//tipos de dados
var numero = 5;
var decimal= 5.5;
var texto= "ola mundo";
var lista= ["laranja", "maçâ", "banana"];
//mostrar todos elemento da lista 1 por 1
for(i in lista){
	alert(lista[i]);
}
//exibir mensagme no console do navegador
console.log("mensagem oculta")
// funções
function soma(a,b) {
	console.log(a+b);

}
soma(2,2);
function subtração(a,b) {
	return a-b;
}
var s = subtração(5,3);
console.log(s);
console.log(subtração(2,1));
*///eventos
function mensagem1(nome){
	alert("Ei não clique em mim "+nome);
}
function mensagem2(nome){
	alert("Ei volte a clicar mim "+nome);
}
function mensagem3(nome){
	alert("Ei não passe o mouse sobre mim "+nome);
}
function valida(){
	var nome = document.getElementById('nome');

	if (nome.value == ""){
		alert("Campo nome não pode estar em branco.");
	}
	else {
		alert("Nenhum problema foi detectado. Seu formulário pode ser enviado com sucesso.");
	}
}