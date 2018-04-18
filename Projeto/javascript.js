function valida_cpf(cpf){
	var dig1 = 0;
	var dig2 = 0;
	var tmn = cpf.length;
	var i = 0;
	tmn -= 2;
	while(tmn>0 && tmn<=9){
		dig1+=(parseInt(cpf[i])*(tmn+1));
		tmn -= 1;
		i+=1;
	}
	dig1=(dig1*10)%11;

	tmn = cpf.length;
	tmn -= 1;
	i = 0;
	while(tmn>0 && tmn<=10){
		dig2+=(parseInt(cpf[i])*(tmn+1));
		tmn -= 1;
		i+=1;
	}
	dig2=(dig2*10)%11;
	if(dig1 == parseInt(cpf[9]) && dig2 == parseInt(cpf[10])){
		return true;
	}else{
		return false;
	}
}

function cadastrar_aluno(){
	var obrigatorio1 = document.getElementById("login").value;
	var obrigatorio2 = document.getElementById("nome").value;
	var obrigatorio3 = document.getElementById("email").value;
	var obrigatorio4 = document.getElementById("nascimento").value;
	var obrigatorio5 = document.getElementById("cpf").value;
	var obrigatorio6 = document.getElementById("senha").value;
	var obrigatorio7 = document.getElementById("confsenha").value;
	var vSenha = document.getElementById("senha").value;
	var vConfsenha = document.getElementById("confsenha").value;
	
	var validacao = document.getElementById("senha");
	var regex = /(?=.*[0-9])(?=.*[a-z])/;

	if(obrigatorio1 == "" || obrigatorio2 == "" || obrigatorio3 == "" || obrigatorio4 == "" || obrigatorio5 == "" || obrigatorio6 == "" || obrigatorio7 == "" || vSenha == "" || confsenha == ""){
		alert("Preencha todos os campos!");
	}else if(valida_cpf(obrigatorio5) == false){
        alert("CPF inválido!");
	}else if(!regex.exec(validacao.value)){
		alert("A senha deve conter no mínimo 1 número e 1 letra!");
		return regex.test(str);
    }else{
		alert("Cadastrado com sucesso!");
	}
}

/*
document.getElementById("formulario").onsubmit=function(event){
var obrigatorio1 = document.getElementById("login");
var obrigatorio2 = document.getElementById("nome");
var obrigatorio3 = document.getElementById("email");
var obrigatorio4 = document.getElementById("nascimento");
var obrigatorio5 = document.getElementById("obrigatorio5");
var obrigatorio6 = document.getElementById("senha");
var obrigatorio7 = document.getElementById("confsenha");
var vSenha = document.getElementById("senha");
var vConfsenha = document.getElementById("confsenha");

var validacao = document.getElementById("senha");
var regex = /(?=.*[0-9])(?=.*[a-z])/;


if (obrigatorio1.value == ""){
        alert("Campo obrigatório não preenchido.");
return false;
}
    if (obrigatorio2.value == ""){
        alert("Campo obrigatório não preenchido.");
return false;
}
if (obrigatorio3.value == ""){
        alert("Campo obrigatório não preenchido.");
return false;
}
if (obrigatorio4.value == ""){
        alert("Campo obrigatório não preenchido.");
return false;
}
if (obrigatorio5.value == ""){
        alert("Campo obrigatório não preenchido.");
	return false;
}
if(obrigatorio5.length != 10){
	alert("Campo obrigatorio5 não preenchido corretamente");
	return false;
}
if (obrigatorio6.value == ""){
        alert("Campo obrigatório não preenchido.");
return false;
}
if (obrigatorio7.value == ""){
        alert("Campo obrigatório não preenchido.");
return false;
}
if (senha.value != confsenha.value) {
alert("As senhas não correspondem!");
        return false;
    } 
if(!regex.exec(validacao.value)){
alert("A senha deve conter no mínimo 1 número e 1 letra!");
return regex.test(str);
}
};
*/