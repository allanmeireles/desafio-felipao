// desafio da DIO 

const entrada = require('prompt-sync')({sigint: true});

let nameHero;
let quantidadeXp; 


nameHero = entrada("Digite o nome do seu Herói: "); 

quantidadeXp = entrada("Digite a sua quantidade de XP: "); 

// estruturas condicionais  

if(quantidadeXp <= 1.000){
    let  classeHero = "ferro";
    console.log("Heroi de nome: " + nameHero + " está no nível: " + classeHero); 
} else if(quantidadeXp>=1.001 && quantidadeXp <= 2.000){
    let classeHero = "bronze";
    console.log("Heroi de nome: " + nameHero + " está no nível:" + classeHero); 
} else if(quantidadeXp>=2.001 && quantidadeXp <= 5.000){
    let  classeHero = "prata"; 
    console.log("Heroi de nome: " + nameHero + " está no nível: " + classeHero);
} else if(quantidadeXp>=6.001 && quantidadeXp <= 7.000){
    let   classeHero = 'ouro'; 
    console.log("Heroi de nome: " + nameHero + " está no nível: " + classeHero);
} else if(quantidadeXp>=7.001 && quantidadeXp <= 8.000){
    let  classeHero = "platina"; 
    console.log("Heroi de nome: " + nameHero + " está no nível: " + classeHero);
} else if(quantidadeXp>=8.001 && quantidadeXp <=9.000){
    let classeHero = "ascendete"; 
    console.log("Heroi de nome: " + nameHero + " está no nível: " + classeHero);
} else if(quantidadeXp>= 9.001 && quantidadeXp <= 10.000){
    let classeHero = "imortal"; 
    console.log("Heroi de nome: " + nameHero + " está no nível: " + classeHero);
} else if(quantidadeXp>=10.001){
   let  classeHero = "radiante"; 
    console.log("Heroi de nome: " + nameHero + " está no nível: " + classeHero);
}

