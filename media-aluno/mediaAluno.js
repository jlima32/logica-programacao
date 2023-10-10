// OPERDORES ARTMETICOS: (+ - * /); exponeciação **; % resto da divisão (módulo) se o resultado é "0" é multiplo e.eg. X%Y=o X é multiplo de Y; 

// OPERADOR DE PRECEDENCIA: A ordem  e.g 2+4/2=4 a divisão tem precedencia da sequencia matematica e parentese tb etc

// OPERADOR DE ATRIBUIÇÃO: = (e.g.variavel recebe valor) + = (aquele valor esta sendo atribuido/retribuido em soma ao valor que já estava na variavel) a=2; a+=3 (tem valor 2 e soma 3 entao o valor de a é 5) a=6 (reatribução); - =; *=; /=; %=; **=.

// OPERADORES DE COMPARAÇÂO: == (igual valor); !=(diferente valor);  >; <; >=(maior ou igual); <=(menor ou igual); ===(estritamente igual valor, compara tipo e valor); !==(estritamente diferente, comara valor e tipo) e.g  42="42" verdadeiro; 42==="42" falso;po padrao usa-se o === ou !==;

// OPERADORES LÓGICOS: condições que serao verdadeiras ou falsa (booleano),"E"(&&) "OU" (||) servem para valiar duas ou mais condições OPERADOR LÓGICO && e.g. Condição: a luz está acesa - Condição 2: metro - Resultados: && A luz está acesa (verdadeiro) metro nao esta e greve (verdadeiro) resultados: veraddeiro; condição 1 nao tem energia (falso) tem metro (verdadeiro) resultado also, condição 1: temos energia eletrica e nao tem metro resultado (falso), nao temos energia e nao tem metro resultado: nao tem aula OPRADOR LÓGICO ||, condição 1; tem energia eletrica; condição 2: aula de print verdeira condição 1 ou 2 verdadeiro para o resultado ser verdadeiro, só sera falsa quando as duas consiçoes sera falsas. "Não" (!) inverte os valores (resultados) a lógica, condição 1 verdadeira condição 2 falsa ainda é verdadeiro trocamos o "sinal" de uma das condições.
// variavel endereço de memória = CONST (constante e.g nao aceita *= etc NAO permite que faca retruibuições) para variaveis que nao variam LET (deixa reatribuir) para variaveis que variam VAR (não sera usado, tem escopo global) variavel = nome (identificador), valor, tipo e escopo 

//funções
function mediaAluno() {

    // Lógica de programação
    // Problema: receber 3 notas de um aluno 
    // calcular e apresentar a média e o resultado 
    // se o aluno foi aprovado, reprovado ou ficou de exame
    // >=7 = Aprovado
    // < 7 e >= 5 Exame
    // <5 Reprovado
    // console.log("Inicio do programa");
    // const nota1=8; //estamos inicializando variavel porque estamos atribuido um valor declarando a variaveis
    // let nota1;
    // let nota2;
    // let nota3;


    // const nota1=parseInt(prompt('digite a nota 1:')); //parseint=converter o valor que estiver dentro (parametro) para numero inteiro
    // const nota2=parseInt(prompt('digite a nota 2:'));
    // const nota3=parseInt(prompt('digite a nota 3:'));
    // let media = (nota1 + nota2 + nota3) / 3; 

    //Pegando os daos do formulário
    const nota1 = parseInt(document.getElementById('nota1').value);
    const nota2 = parseInt(document.getElementById('nota2').value);
    const nota3 = parseInt(document.getElementById('nota3').value);

    const media = (nota1 + nota2 + nota3) / 3;
    // console.log("A Media do aluno é: "); + console.log (media) = 
    // console.log ('A nota 1 é:',nota1);  //Concatenação com ,: mantém o tipo da variável
    // console.log ("A nota 2 é:"+ nota2); //Concatenação com +: converte o tipo para String
    // console.log ("A nota 3 é:"+ nota3);

    //cálculo da média
    // document.getElementById('resultado').innerHTML = 'A média do aluno é: ' + media + '<br>';
    // console.log ("A média do aluno é: "+ media);

    // Resultado:
    if( media >= 7){
        // console.log("Aprovado")
        document.getElementById("resultado").innerHTML = `<div class='aprovado'>A média do aluno é: <strong>${media}</strong><p>Aprovado!</p>`;
    }else if(media < 7 && media >= 5){
        // console.log("Exame")
        document.getElementById("resultado").innerHTML = `<div class='exame'>A média do aluno é: <strong>${media}</strong><p>Exame!</p>`;
    }else{
        // console.log("Reprovado")
        document.getElementById("resultado").innerHTML = `<div class='reprovado'>A média do aluno é: <strong>${media}</strong><p>Reprovado!</p>`;
    }

    //DOM
    // const div = document.getElementById("resultado");
    // div.innerHTML +=`${media}`;

}


function validar(){
    let nota1 = document.getElementById("nota1");
    let nota2 = document.getElementById("nota2");
    let nota3 = document.getElementById("nota3");
    if(nota1.value == "") {
        alert("Informe a primeira nota!");
        nota1.focus();
    }else if(nota2.value == "") {
        alert("Informe a segunda nota!");
        nota2.focus();
    }else if(nota3.value == "") {
        alert("Informe a terceira nota!");
        nota3.focus();
    }else{
        mediaAluno();
    }
}

