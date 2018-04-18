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
