document.getElementById("formulario").onsubmit=function(event){
    var obrigatorio1 = document.getElementById("login");
var obrigatorio2 = document.getElementById("nome");
var obrigatorio3 = document.getElementById("email");
var obrigatorio4 = document.getElementById("nascimento");
var obrigatorio5 = document.getElementById("cpf");
var obrigatorio6 = document.getElementById("senha");
var obrigatorio7 = document.getElementById("confsenha");
var vSenha = document.getElementById("senha");
var vConfsenha = document.getElementById("confsenha");

var validacao = document.getElementById("senha");
var regex = /(?=.*[0-9])(?=.*[a-z])/;

var result_cpf = function(cpf){
	var dig1 = 0;
	var dig2 = 0;
	if (cpf.length == 11){
		var tmn = cpf.length;
		tmn = tmn - 2;
		var i = 0;
		while(tmn>0 && tmn<=9){
			dig1 += (parseInt(cpf[i])*(tmn+1));
			tmn -= 1;
			i+=1;
		}
		dig1 = (dig1*10)%11;
	
	  tmn = cpf.length;
	  tmn -= 1
	  i = 0
	  while(tmn>0 && tmn<=10){
	    dig2 += (parseInt(cpf[i])*(tmn+1));
	    tmn -= 1;
	    i+=1;
	  }
	  dig2 = (dig2*10)%11
		if (dig1 == parseInt(cpf[9]) && dig2 == parseInt(cpf[10])){
		  return true;
		}else{
      return false;
		}
	}else{
	  return false;
	}
}

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
}else{
	if(result_cpf(obrigatorio5) == true){
		return true;
	}else{
		return false;
	}
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
{
input type="submit" value="Enviar"
}
    