const matrizTabuleiro = [[0, 0, 0, 0, 0, 6, 7, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 5, 0, 0, 8, 0, 10, 11, 0],
                        [1, 0, 0, 4, 0, 0, 0, 0, 9, 0, 0, 12],
                        [0, 2, 3, 0, 0, 19, 18, 0, 0, 0, 0, 13],
                        [0, 0, 0, 0, 20, 0, 0, 17, 0, 0, 14, 0],
                        [0, 0, 22, 21, 0, 0, 0, 0, 16, 15, 0, 0],
                        [0, 23, 0, 0, 0, 0, 0, 0, 0, 34, 35, 0],
                        [24, 0, 0, 0, 29, 30, 0, 0, 33, 0, 0, 36],
                        [25, 0, 0, 28, 0, 0, 31, 32, 0, 0, 0, 0],
                        [0, 26, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
const matrixPositionY = [['calc(0.4*(100vh/10))','calc(0.6*(100vh/10))'],
                        ['calc(1.4*(100vh/10))','calc(1.6*(100vh/10))'],
                        ['calc(2.4*(100vh/10))','calc(2.6*(100vh/10))'],
                        ['calc(3.4*(100vh/10))','calc(3.6*(100vh/10))'],
                        ['calc(4.4*(100vh/10))','calc(4.6*(100vh/10))'],
                        ['calc(5.4*(100vh/10))','calc(5.6*(100vh/10))'],
                        ['calc(6.4*(100vh/10))','calc(6.6*(100vh/10))'],
                        ['calc(7.4*(100vh/10))','calc(7.6*(100vh/10))'],
                        ['calc(8.4*(100vh/10))','calc(8.6*(100vh/10))'],
                        ['calc(9.4*(100vh/10))','calc(9.6*(100vh/10))']]

const matrixPositionX = [['calc(0.3*(100vw/12))','calc(0.5*(100vw/12))'],
                        ['calc(1.3*(100vw/12))','calc(1.5*(100vw/12))'],
                        ['calc(2.3*(100vw/12))','calc(2.5*(100vw/12))'],
                        ['calc(3.3*(100vw/12))','calc(3.5*(100vw/12))'],
                        ['calc(4.3*(100vw/12))','calc(4.5*(100vw/12))'],
                        ['calc(5.3*(100vw/12))','calc(5.5*(100vw/12))'],
                        ['calc(6.3*(100vw/12))','calc(6.5*(100vw/12))'],
                        ['calc(7.3*(100vw/12))','calc(7.5*(100vw/12))'],
                        ['calc(8.3*(100vw/12))','calc(8.5*(100vw/12))'],
                        ['calc(9.3*(100vw/12))','calc(9.5*(100vw/12))'],
                        ['calc(10.3*(100vw/12))','calc(10.5*(100vw/12))'],
                        ['calc(11.3*(100vw/12))','calc(11.5*(100vw/12))']]
const textsFogo = ['Beije lentamente o perscoço de seu parceiro(a) passando a mão pelo corpo',
                        'Encontre o ponto G de seu parceiro(a)',
                        'Vende seus olhos e deixe seu parceiro(a) fazer o que quiser',
                        'Beba um shot na parte do corpo do seu parceiro(a) de sua preferência',
                        'Desenhe 4 corações pelo seu corpo e deixe seu parceiro(a) encontre',
                        'Masturbe o seu parceiro(a) durante 1 minuto',
                        'Beije seu parceiro(a) na boca, enquanto se esfrega contra ele',
                        'Passe um cubo de gelo no corpo do seu parceiro(a)',
                        'Masturbe-se olhando para o seu parceiro(a)',
                        'Beije os peitos do seu parceiro(a)',
                        'Passe a mão pelas partes íntimas do seu parceiro, enquanto beija o restante do corpo',
                        'Chupe um cubo de gelo e faça sexo oral no seu parceiro(a)',
                        'Escolha algo para o seu parceiro(a) fazer com você',
                        'Realize um fetiche do seu parceiro(a)',
                        'Faça um beijo grego no seu parceiro(a)',
                        'Vende o seu parceiro(a) e dance em seu colo',
                        'Demonstre que você sabe qual a posição sexual favorita do seu parceiro(a)',
                        'Lamba o seu parceiro(a) abaixo da cintura',
                        'Vá ao banheiro e mande uma foto sexual ao seu parceiro(a)',
                        'Peça para o seu parceiro tirar sua roupa íntima sem usar as mãos',
                        'Mostre ao seu parceiro(a) um vídeo pornô que você gosta',
                        'Desperte o tesão no seu parceiro(a) lhe fazendo uma massagem relaxante com beijos provocantes'
                    ]
const textsCoracao = ['Fale algo que você quer hoje no ouvido de seu parceiro(a)',
                        'Baije seu parceiro(a) como se fosse a primeira vez',
                        'Sussure algo bem sexy no ouvido de seu parceiro(a)',
                        'Declare o que sente pelo seu parceiro(a)',
                        'Faça uma massagem na parte do corpo do seu parceiro(a) de sua preferência',
                        'Coloque uma música que os dois gostem para criar um clima romântico',
                        'Dance para o seu parceiro(a) como achar melhor',
                        'Beba uma dose',
                        'Beba uma dose',
                        'Beba uma dose',
                        'Beba uma dose',
                        'Beba uma dose',
                        'Beba uma dose',
                        'Beba uma dose',
                        'Beije seu parceiro(a) no canto da boca',
                        'Faça carinho no seu parceiro(a) usando as pontas do dedo',
                        'Beije o seu parceiro(a) devagar',
                        'Beije o seu parceiro(a) enquanto chupa uma balinha',
                        'Faça um cafuné no seu parceiro(a)',
                        'Simule o seu olhar mais sexo para o seu parceiro(a)',
                        'Beba uma dose para cada ex seu',
                        'Diga algo proibido que você já fez',
                        'Tire a roupa e deixe o seu parceiro(a) fazer um desenho seu',
                        'Vende o seu parceiro e deixe ele adivinhar que parte ele está tocando',
                        'Colocar uma música lenta e dançe no colo do seu parceiro(a)',
                        'Chupe o dedo do seu parceiro de forma sexual',
                        'Faça uma massagem nos pés do seu parceiro(a)',
                        'Faça um carinho no seu parceio(a) sem usar as mãos',
                        'Provoque o seu parceiro(a) por 1 minuto sem usar as mãos'
                    ]

const getRandomInt = (max, anterior = -1, anteriorIguais = 0) => {
    valor = Math.floor(Math.random() * max);
    if(anteriorIguais > 2 && valor==anterior){
        getRandomInt(max,valor,anteriorIguais+1);
    }
    return valor;
}
const gerarTabuleiro = (e)=>{
    tabuleiro = document.getElementById("tabuleiro")
    tabela = document.createElement("table");
    anterior = -1;
    anteriorIguais = 0;
    for (i=0; i < 10; i++){
        tr = document.createElement("tr");
        for (j=0; j < 12; j++){
            td = document.createElement("td");
            if(matrizTabuleiro[i][j] > 0){
                div = document.createElement("div");
                div.id = 'casa'+matrizTabuleiro[i][j];

                img = document.createElement("img");                
                valor = getRandomInt(4, anterior, anteriorIguais)
                switch(valor){
                    case 0:
                        div.classList.add("strip");
                        img.src = "../public/strip.png";
                        break;
                    case 1:
                        div.classList.add("coracaoTabuleiro");
                        img.src = "../public/coracaoTabuleiro.png";
                        break;
                    case 2:
                        div.classList.add("fogoTabuleiro");
                        img.src = "../public/fogoTabuleiro.png";
                        break;
                    case 3:
                        div.classList.add("dadoTabuleiroImg");
                        img.src = "../public/dadoTabuleiro.png";
                        break;
                }
                anterior = valor;
                if(valor == anterior){
                    anteriorIguais += 1;
                }
                
                div.appendChild(img);
                td.appendChild(div);
            }
            tr.appendChild(td)
        }
        tabela.appendChild(tr)
    }
    tabuleiro.appendChild(tabela)

}

var player1Position = 0;
var player2Position = 0;
var playerVez = 1;
var fim = false;

const alertarVezAparecer = ()=>{
    alertaVez = document.getElementById("alerta-vez");
    if(playerVez == 1){
        alertaVez.innerHTML="É a vez do Player 1"
    } else if (playerVez == 2){
        alertaVez.innerHTML="É a vez do Player 2"
    }
    alertaVez.parentElement.style.display = "flex";
}

const alertarVezSumir = ()=>{
    alertaVez = document.getElementById("alerta-vez");
    alertaVez.parentElement.style.display = "none";
}

const verificarPosition = () =>{
    for (i=0; i < 10; i++){
        if(playerVez == 1){
            valor = matrizTabuleiro[i].indexOf(player1Position)
        } else if(playerVez == 2){
            valor = matrizTabuleiro[i].indexOf(player2Position)
        }
        if(valor != -1){
            break;
        }
    }
    return [i,valor]
}

const rolarDadosAmor = () => {
    const dadoParte = document.querySelector('.dado-parte');
    const dadoAcao = document.querySelector('.dado-acao');

    dadoAcao.style.animation = 'none';
    dadoParte.style.animation = 'none';
    
    valorAcao = getRandomInt(6)
    valorParte = getRandomInt(6)
    
    dadoAcao.style.animation = 'rolling 4s';
    dadoParte.style.animation = 'rolling 4s';

    setTimeout(() => {
        switch (valorAcao) {
            case 0:
                dadoAcao.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 5:
                dadoAcao.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;

            case 1:
                dadoAcao.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 4:
                dadoAcao.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;

            case 2:
                dadoAcao.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 3:
                dadoParte.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;

            default:
                break;
        }

        switch (valorParte) {
            case 0:
                dadoParte.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 5:
                dadoParte.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;

            case 1:
                dadoParte.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 4:
                dadoParte.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;

            case 2:
                dadoParte.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 3:
                dadoParte.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;

            default:
                break;
        }
        dadoAcao.style.animation = 'none';
        dadoParte.style.animation = 'none';
    }, 4050);
    
}
var usadosFogo = []
var usadosCoracao = []

const verificarFuncionalidadePosition = () =>{
    casas = document.getElementsByClassName('casas');
    if(playerVez == 1){
        position = player1Position
    } else if(playerVez == 2){
        position = player2Position
    } 

    id='casa'+position
    const casa = document.getElementById(id);
    const card = document.getElementById("card");
    const beijando = document.getElementById('beijando');
    const sexo = document.getElementById('sexo');
    const fogo = document.getElementById('fogo');
    
    if(casa.classList.contains('coracaoTabuleiro')){
        do{
            valor = getRandomInt(textsCoracao.length)
        }while(usadosCoracao.indexOf(valor) != -1)

        usadosCoracao.push(valor)
        document.querySelector('.text-heart').innerHTML = textsCoracao[valor]
        
        setTimeout(()=>{
            beijando.style.display="flex";
            sexo.style.display="none";
            fogo.style.display="none";
            document.getElementById('modal-card').style.display = "flex"
        }, 1000);
        setTimeout(()=>{
            card.classList.toggle("flip")
        }, 2000);        
    } else if(casa.classList.contains('fogoTabuleiro')){
        do{
            valor = getRandomInt(textsFogo.length)
        }while(usadosCoracao.indexOf(valor) != -1)

        usadosCoracao.push(valor)
        document.querySelector('.text-heart').innerHTML = textsFogo[valor]

        setTimeout(()=>{
            beijando.style.display="none";
            sexo.style.display="flex";
            fogo.style.display="flex";
            document.getElementById('modal-card').style.display = "flex"
        }, 1000);
        setTimeout(()=>{
            card.classList.toggle("flip")
        }, 2000);        
    } else if(casa.classList.contains('strip')){
        setTimeout(()=>{
            document.getElementById('modal-strip').style.display = "flex"
        }, 1000);
    } else if(casa.classList.contains('dadoTabuleiroImg')){
        setTimeout(()=>{
            document.getElementById('modal-dados').style.display = "flex"
            rolarDadosAmor()
        }, 1000);
    }

}

const mudarPosition = ()=>{
    valor = verificarPosition()

    if(playerVez == 1){
        player1 = document.getElementById("player1");
        
        player1.style.left= matrixPositionX[valor[1]][0]
        if(player1.style.transform == 'rotateX(180deg)' || player1.style.transform =='rotate(-45deg) translateX(-30px)'){
            player1.style.transform ='rotate(45deg)'
        }
        if(valor[0] == 0){
            player1.style.top = matrixPositionY[valor[0]][0]
            player1.style.transform='rotateX(180deg)'
        } else if (valor[0] != 0){
            player1.style.top= matrixPositionY[valor[0]-1][0]
        }

        if(valor[1] == 11){
            player1.style.transform='rotate(-45deg) translateX(-30px)'
        }
    } else if(playerVez == 2){
        player2 = document.getElementById("player2");
        
        player2.style.left= matrixPositionX[valor[1]][1]
        if(player2.style.transform == 'rotateX(180deg)' || player2.style.transform =='rotate(-45deg) translateX(-30px)'){
            player2.style.transform ='rotate(45deg)'
        }
        if(valor[0] == 0){
            player2.style.top= matrixPositionY[valor[0]][1]
            player2.style.transform='rotateX(180deg)'
        } else if(valor[0] != 0){
            player2.style.top= matrixPositionY[valor[0]-1][1]
        }

        if(valor[1] == 11){
            player2.style.transform='rotate(-45deg) translateX(-30px)'
        }
    }
    verificarFuncionalidadePosition();
}

const rolldado = () => {
    alertarVezSumir();
    const dado = document.querySelector('.dadoTabuleiro');
    dado.style.animation = 'none';
    valor = getRandomInt(6)
    dado.style.animation = 'rolling 4s';

    setTimeout(() => {

        switch (valor) {
            case 0:
                dado.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 5:
                dado.style.transform = 'rotateX(180deg) rotateY(0deg)';
                valor = 0;
                break;

            case 1:
                dado.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 4:
                dado.style.transform = 'rotateX(90deg) rotateY(0deg)';
                valor = 1;
                break;

            case 2:
                dado.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 3:
                dado.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                valor = 2;
                break;

            default:
                break;
        }
        if(document.getElementById("player1").querySelector("img") && document.getElementById("player2").querySelector("img") && !fim){
            if(playerVez == 1){
                player1Position = player1Position+(valor+1)
                if(player1Position > 36){
                    
                    img = document.createElement("img")
                    img.classList.add("ganhador")
                    img.src = "../public/coroa.png"

                    player1 = document.getElementById("player1");
                    player1.style.transform = "rotate(45deg)"
                    player1.style.top = "calc(6.9*(100vh/10))"
                    player1.style.left = "calc(9.8*(100vw/12))"

                    player1.appendChild(img)

                    ganhou = document.getElementById("modal-exit-ganhou")
                    ganhou.getElementsByTagName('h1').innerHTML='Player 1 Ganhou o Jogo'                    
                    fim = true
                }else{
                    mudarPosition()
                    playerVez = 2;
                }
            } else if(playerVez == 2){
                player2Position = player2Position+(valor+1)
                if(player2Position > 36){
                    img = document.createElement("img")
                    img.classList.add("ganhador")
                    img.src = "../public/coroa.png"

                    player2 = document.getElementById("player2");
                    player2.style.transform = "rotate(45deg)"
                    player2.style.top = "calc(6.9*(100vh/10))"
                    player2.style.left = "calc(9.8*(100vw/12))"

                    player2.appendChild(img)

                    ganhou = document.getElementById("modal-exit-ganhou")
                    ganhou.getElementsByTagName('h1')[0].innerHTML='Player 2 Ganhou o Jogo'                    
                    fim = true
                }else{
                    mudarPosition()
                    playerVez = 1;
                }
            }
        }
        dado.style.animation = 'none';            
        setTimeout(()=>{
            ganhou.style.display = "flex"
        }, 1700);
    }, 4050);
}

var colorPlayer1=0;
var colorPlayer2=0;

const dadoContent = document.querySelector(".dadoTabuleiro-content");
dadoContent.addEventListener("click", ()=>{
    rolldado()
});

const card = document.getElementById('modal-card');
card.addEventListener("click", (e)=>{
    card.style.display = "none";
    cardItem = document.getElementById('card')
    cardItem.classList.toggle("flip")
    alertarVezAparecer();
})

const stripCard = document.getElementById('modal-strip');
stripCard.addEventListener("click", (e)=>{
    stripCard.style.display = "none";
    alertarVezAparecer();
})

const dadoCard = document.getElementById('modal-dados');
dadoCard.addEventListener("click", (e)=>{
    dadoCard.style.display = "none";
    alertarVezAparecer();
})



const liColorPlayer1 = document.getElementById("player1-colors").getElementsByTagName("li");
for (i = 0; i<liColorPlayer1.length; i++) {
    liColorPlayer1[i].addEventListener("click", (e)=>{
        anterior = document.getElementById("player1-colors").querySelector(".select-color")
        if(anterior){
            anterior.classList.remove("select-color");
        }
        e.currentTarget.classList.add("select-color");
    })    
}

const liColorPlayer2 = document.getElementById("player2-colors").getElementsByTagName("li");
for (i = 0; i<liColorPlayer2.length; i++) {
    liColorPlayer2[i].addEventListener("click", (e)=>{
        anterior = document.getElementById("player2-colors").querySelector(".select-color")
        if(anterior){
            anterior.classList.remove("select-color");
        }
        e.currentTarget.classList.add("select-color");
    })    
}

document.getElementById("inicio-player-button").addEventListener("click", ()=>{
    for(i = 0; i<liColorPlayer1.length; i++){
        if(liColorPlayer1[i].classList.contains("select-color")){
            colorPlayer1 = i+1
        }
        if(liColorPlayer2[i].classList.contains("select-color")){
            colorPlayer2 = i+1
        }
    }
    alerta = document.getElementById("alet-inicio-player")
    if(colorPlayer1 == 0 || colorPlayer2 == 0){
        alerta.innerHTML ="Selecione os jogadores"
        alerta.style.display = "flex";
    } else if (colorPlayer1 == colorPlayer2){
        alerta.innerHTML ="Escolha cores distintas"
        alerta.style.display = "flex";
    } else{
        alerta.style.display = "none";
        document.querySelector(".inicio-player-section").style.display = "none";
        player1 = document.getElementById("player1") 
        img = document.createElement("img")
        switch(colorPlayer1){
            case 1:
                img.src= "../public/playerColor1.svg"
                break;
            case 2:
                img.src= "../public/playerColor2.svg"
                break;
            case 3:
                img.src= "../public/playerColor3.svg"
                break;
            case 4:
                img.src= "../public/playerColor4.svg"
                break;
            case 5:
                img.src= "../public/playerColor5.svg"
                break;
        }
        player1.appendChild(img)

        player2 = document.getElementById("player2") 
        img = document.createElement("img")
        switch(colorPlayer2){
            case 1:
                img.src= "../public/playerColor1.svg"
                break;
            case 2:
                img.src= "../public/playerColor2.svg"
                break;
            case 3:
                img.src= "../public/playerColor3.svg"
                break;
            case 4:
                img.src= "../public/playerColor4.svg"
                break;
            case 5:
                img.src= "../public/playerColor5.svg"
                break;
        }
        player2.appendChild(img)
        alertarVezAparecer()
    }
})


document.onkeydown = (e) => {
    e = (e || window.Event);
    if (e.key == 'Escape') {
        document.getElementById('modal-exit').style.display = "flex";
    }
};

document.getElementById('cancela-saida-button').addEventListener("click", (e)=>{
    document.getElementById('modal-exit').style.display = "none";
})

document.getElementById('sair-button').addEventListener("click", (e)=>{
    window.close()
})

document.getElementById('sair-button-ganhou').addEventListener("click", (e)=>{
    window.close()
})

gerarTabuleiro();