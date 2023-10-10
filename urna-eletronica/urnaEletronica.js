function urnaEletronica(){
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let brancos = 0;
    let nulos = 0;

    let voto = parseInt(prompt('Digite o número do candidato: '));

    while (voto != 0){
        if(voto == 1){
            candidato1++;
            console.log("Voto computado com sucesso");
        }else if(voto == 2){
            candidato2++;
            console.log("Voto computado com sucesso");
        }else if(voto == 3){
            candidato3++;
            console.log("Voto computado com sucesso");
        }else if(voto == 5){
            brancos++;
            console.log("Voto computado com sucesso");
        }else if(voto == 8){
            nulos++;
            console.log("Voto computado com sucesso");
        }else{
            console.log("número inválido");
        }
        voto = parseInt(prompt('Digite o número do candidato: '))
    }
    
 const total = candidato1 + candidato2 + candidato3 + brancos + nulos;
 const porcentagemCandidato1 = candidato1 / total *100; 
 const porcentagemCandidato2 = candidato2 / total *100; 
 const porcentagemCandidato3 = candidato3 / total *100; 
 const porcentagemBrancos = brancos / total *100; 
 const porcentagemNulos = nulos / total *100; 
 const totalCandidato1Brancos = candidato1 + brancos;
 const porcentagemCandidato1Brancos = (candidato1 + brancos) / total * 100;
 const totalCandidato2Brancos = candidato2 + brancos;
 const porcentagemCandidato2Brancos = (candidato2 + brancos) / total * 100;
 const totalCandidato3Brancos = candidato3 + brancos;
 const porcentagemCandidato3Brancos = (candidato3 + brancos) / total * 100;


 console.log("===========================");
 console.log("Votação Encerrada");
 console.log("===========================");
 console.log("Resultado Final da Votação");
 console.log("===========================");
 console.log(`Total de Votos: ${total}`);
 console.log("===========================");
 console.log(`Votos Candidato 1: ${candidato1} || ${porcentagemCandidato1}%`)
 console.log(`Votos Candidato 2: ${candidato2} || ${porcentagemCandidato2}%`)
 console.log(`Votos Candidato 3: ${candidato3} || ${porcentagemCandidato3}%`)
 console.log(`Votos Brancos: ${brancos} || ${porcentagemBrancos}%`)
 console.log(`Votos Nulos: ${nulos} || ${porcentagemNulos}%`)
 console.log("===========================");

 if(candidato1 > candidato2 && candidato1 > candidato3){
    console.log(`o vencedor foi o candidato 1 com um total de: ${totalCandidato1Brancos} votos e uma porcentagem de: ${porcentagemCandidato1Brancos}% `);
    console.log("===========================");
 }else if(candidato2 > candidato1 && candidato2 > candidato3){
    console.log(`o vencedor foi o candidato 2 com um total de: ${totalCandidato2Brancos} votos e uma porcentagem de: ${porcentagemCandidato2Brancos}%`);
    console.log("===========================");
 }else if(candidato3 > candidato1 && candidato3 > candidato2){
    console.log(`o vencedor foi o candidato 3 com um total de: ${totalCandidato3Brancos} votos e uma porcentagem de: ${porcentagemCandidato3Brancos}%`);
    console.log("===========================");
 }else if(candidato1 == candidato2 || candidato1 == candidato3 || candidato2 == candidato3){
    console.log(`a votação terminou empatada`);
    console.log("===========================");
 }

}