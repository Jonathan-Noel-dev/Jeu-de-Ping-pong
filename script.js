let start = document.getElementById("commencer");
const musique = new Audio("Jonathan_pong.wav");
let score = document.getElementById("score");
let canvas = document.getElementById("canvas");larg = 800, haut = 600;
let  contexte = canvas.getContext("2d")
let yGsuv = 0;
let dyG = 0,yG = 0;let h = 0;
let raquetG = {xG : 0, yG : 200};
let raquetD = {xD : larg-20, yD : 200};
let ball = {x : larg/2-7.5,y : haut/2-7.5};
let dir = 1,scoreD=0,scoreG = 0,G=0, n = 0,sens=1;c=0;
window.addEventListener("keydown",deplacerG)
function deplacerG(e){
    if(e.key === "S" || e.key === "s"){
        if (raquetG.yG>0){
            raquetG.yG -= 100;
    }
    }

    if(e.key === "W" || e.key === "w"){
        if (raquetG.yG < 500){
            raquetG.yG += 100;
            
    }

    }

    if(e.key === "ArrowUp"){
        if (raquetD.yD>0){
            raquetD.yD -= 100;
        
    }
    }
    
    if(e.key === "ArrowDown"){
        if (raquetD.yD < 500){
            raquetD.yD += 100;
    }

    }
    
}

start.addEventListener("click",commencer);

function commencer(){
    start.style.display = "none";
    musique.loop = true;
    musique.play()
    //initJeu()
    ball.x += 7.5
    setInterval(Draw,16);
    ball.y = Math.floor(Math.random()*haut)+20; 
    setInterval(function(){
        ball.x += 20*dir;
        n = (Math.floor(Math.random()*6)+12)*sens;
        ball.y += n;
        
        if ((ball.x === raquetD.xD) && (raquetD.yD-7.5<=ball.y && ball.y <= raquetD.yD+107.5)){
            c += 1;
            dir = -1;
            if (c % 2 === 0){
                sens = 2*dir;
            }else{
                sens =-2*dir;
                //element = Math.floor(Math.random()*haut);
            }
        
        }if ((ball.x === raquetG.xG) && (raquetG.yG-7.5<=ball.y && ball.y <= raquetG.yG+107.5)){
            c += 1;
            dir = 1;
            if (c % 3 === 0){
                sens = 2*dir;
                
            }else{
                sens = -2*dir;
            }
          
        }
        
       if (ball.y <  0 || ball.y >= haut-20){
        sens = -sens;
       };
     
        if (ball.x <-200 ){
            scoreD += 1;
            ball = {x : larg/2,y : haut/2-7.5};
            dir = -dir;
        }
        if(ball.x > larg + 185){
            scoreG += 1;
            ball = {x : larg/2,y : haut/2-7.5};
            dir = -dir
        }
            
    },68)
}
function Draw(){
    contexte.clearRect(0,0,larg,haut);
    //Les scores 
    for (let j = 0;j<2;j++){
        if (j == 0){
            texte = scoreG;
        }else{
            texte = scoreD;
        }
        contexte.font ="bold 100px Arial";
        contexte.fillStyle = "#ff5252";
        contexte.shadowBlur = 15;
        contexte.shdowColor = "#ff5252"
        contexte.fillText(texte,100+500*j,100);
        contexte.shadowBlur = 0;
    }
   
    //Ligne de séparation
    contexte.beginPath();
    contexte.lineWidth = "3";
    contexte.strokeStyle = "#ddd"
    contexte.moveTo(larg/2,0);
    contexte.lineTo(larg/2,haut);
    contexte.stroke();
    // Création de nôtre ball
    contexte.fillStyle = "#ddd";
    contexte.fillRect(ball.x,ball.y,15,15)

    drawG();
    drawD();
}
//Les raquets
function drawG(){
    contexte.fillStyle = "#ddd";
    contexte.fillRect(raquetG.xG,raquetG.yG,20,100);
}
function drawD(){
    contexte.fillStyle = "#ddd";
    contexte.fillRect(raquetD.xD,raquetD.yD,20,100);
}
