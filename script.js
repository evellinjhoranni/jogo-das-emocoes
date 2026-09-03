let nomeJogador = "";
let animalEscolhido = "";
let respostas = [];


function comecarJogo() {
    document.body.innerHTML = `
        <h1>Vamos começar! 👋</h1>

        <h2>Como você gostaria de ser chamado(a)?</h2>

        <input type="text" id="nome" placeholder="Digite seu nome ou apelido">

        <br><br>

        <button onclick="verificarNome()">Continuar</button>
    `;
}


function verificarNome() {
    const nome = document.getElementById("nome").value;

    if (nome.trim() !== "") {
        nomeJogador = nome;
        escolherAnimal();
    }
}


function escolherAnimal() {
    document.body.innerHTML = `
        <h1>Escolha seu companheiro 🐾</h1>

        <p>Escolha um animalzinho para acompanhar você durante o jogo!</p>

        <div class="emocoes">
            <button onclick="selecionarAnimal(this)">🐱<br>Gato</button>
            <button onclick="selecionarAnimal(this)">🐶<br>Cachorro</button>
            <button onclick="selecionarAnimal(this)">🦊<br>Raposa</button>
            <button onclick="selecionarAnimal(this)">🐢<br>Tartaruga</button>
            <button onclick="selecionarAnimal(this)">🐼<br>Panda</button>
            <button onclick="selecionarAnimal(this)">🐧<br>Pinguim</button>
        </div>

        <br>

        <button onclick="continuarJogo()">Continuar</button>
    `;
}


function selecionarAnimal(botao) {
    const botoes = document.querySelectorAll(".emocoes button");

    botoes.forEach(function(item) {
        item.style.border = "";
    });

    botao.style.border = "3px solid blue";
    animalEscolhido = botao.innerText;
}


function continuarJogo() {
    if (animalEscolhido !== "") {
        document.body.innerHTML = `
            <h1>Ótima escolha!</h1>

            <p>Você escolheu: ${animalEscolhido}</p>

            <p>Agora o jogo vai começar.</p>

            <button onclick="primeiraQuestao()">Começar o jogo</button>
        `;
    }
}


function selecionarEmocao(botao) {
    if (botao.style.border === "3px solid blue") {
        botao.style.border = "";
    } else {
        botao.style.border = "3px solid blue";
    }
}


function salvarRespostas() {
    const botoes = document.querySelectorAll(".emocoes button");

    botoes.forEach(function(botao) {
        if (botao.style.border === "3px solid blue") {
            respostas.push(botao.innerText);
        }
    });
}


function verificarEmocoes(proximaQuestao) {
    const botoes = document.querySelectorAll(".emocoes button");
    let selecionouEmocao = false;

    botoes.forEach(function(botao) {
        if (botao.style.border === "3px solid blue") {
            selecionouEmocao = true;
        }
    });

    if (selecionouEmocao) {
        salvarRespostas();
        proximaQuestao();
    }
}


function primeiraQuestao() {
    document.body.innerHTML = `
        <h1>${nomeJogador}, como você se sente quando o assunto é ENEM?</h1>

        <p>Escolha uma ou mais emoções que representem como você se sente:</p>

        <div class="emocoes">
            <button onclick="selecionarEmocao(this)">Ansioso(a)</button>
            <button onclick="selecionarEmocao(this)">Nervoso(a)</button>
            <button onclick="selecionarEmocao(this)">Com medo</button>
            <button onclick="selecionarEmocao(this)">Confiante</button>
            <button onclick="selecionarEmocao(this)">Animado(a)</button>
            <button onclick="selecionarEmocao(this)">Calmo(a)</button>
            <button onclick="selecionarEmocao(this)">Pressionado(a)</button>
            <button onclick="selecionarEmocao(this)">Indiferente</button>
        </div>

        <p>Quer detalhar como se sente? Escreva aqui:</p>

        <textarea placeholder="Escreva aqui..."></textarea>

        <br><br>

        <button onclick="verificarEmocoes(segundaQuestao)">Continuar</button>
    `;
}


function segundaQuestao() {
    document.body.innerHTML = `
        <h1>${nomeJogador}, como você se sente em relação ao seu futuro?</h1>

        <p>Escolha uma ou mais emoções que representem como você se sente:</p>

        <div class="emocoes">
            <button onclick="selecionarEmocao(this)">Esperançoso(a)</button>
            <button onclick="selecionarEmocao(this)">Ansioso(a)</button>
            <button onclick="selecionarEmocao(this)">Com medo</button>
            <button onclick="selecionarEmocao(this)">Confiante</button>
            <button onclick="selecionarEmocao(this)">Animado(a)</button>
            <button onclick="selecionarEmocao(this)">Inseguro(a)</button>
            <button onclick="selecionarEmocao(this)">Confuso(a)</button>
            <button onclick="selecionarEmocao(this)">Tranquilo(a)</button>
        </div>

        <p>Quer detalhar como se sente? Escreva aqui:</p>

        <textarea placeholder="Escreva aqui..."></textarea>

        <br><br>

        <button onclick="verificarEmocoes(terceiraQuestao)">Continuar</button>
    `;
}


function terceiraQuestao() {
    document.body.innerHTML = `
        <h1>${nomeJogador}, como você se sente quando está sozinho(a)?</h1>

        <p>Escolha uma ou mais emoções que representem como você se sente:</p>

        <div class="emocoes">
            <button onclick="selecionarEmocao(this)">Tranquilo(a)</button>
            <button onclick="selecionarEmocao(this)">Em paz</button>
            <button onclick="selecionarEmocao(this)">Feliz</button>
            <button onclick="selecionarEmocao(this)">Entediado(a)</button>
            <button onclick="selecionarEmocao(this)">Triste</button>
            <button onclick="selecionarEmocao(this)">Ansioso(a)</button>
            <button onclick="selecionarEmocao(this)">Solitário(a)</button>
            <button onclick="selecionarEmocao(this)">Aliviado(a)</button>
        </div>

        <p>Quer detalhar como se sente? Escreva aqui:</p>

        <textarea placeholder="Escreva aqui..."></textarea>

        <br><br>

        <button onclick="verificarEmocoes(quartaQuestao)">Continuar</button>
    `;
}


function quartaQuestao() {
    document.body.innerHTML = `
        <h1>${nomeJogador}, como você se sente em relação às notícias atuais nas redes sociais?</h1>

        <p>Escolha uma ou mais emoções que representem como você se sente:</p>

        <div class="emocoes">
            <button onclick="selecionarEmocao(this)">Informado(a)</button>
            <button onclick="selecionarEmocao(this)">Curioso(a)</button>
            <button onclick="selecionarEmocao(this)">Interessado(a)</button>
            <button onclick="selecionarEmocao(this)">Surpreso(a)</button>
            <button onclick="selecionarEmocao(this)">Preocupado(a)</button>
            <button onclick="selecionarEmocao(this)">Ansioso(a)</button>
            <button onclick="selecionarEmocao(this)">Confuso(a)</button>
            <button onclick="selecionarEmocao(this)">Indiferente</button>
        </div>

        <p>Quer detalhar como se sente? Escreva aqui:</p>

        <textarea placeholder="Escreva aqui..."></textarea>

        <br><br>

        <button onclick="verificarEmocoes(quintaQuestao)">Continuar</button>
    `;
}


function quintaQuestao() {
    document.body.innerHTML = `
        <h1>${nomeJogador}, como você se sente em relação à escola?</h1>

        <p>Escolha uma ou mais emoções que representem como você se sente:</p>

        <div class="emocoes">
            <button onclick="selecionarEmocao(this)">Feliz</button>
            <button onclick="selecionarEmocao(this)">Motivado(a)</button>
            <button onclick="selecionarEmocao(this)">Tranquilo(a)</button>
            <button onclick="selecionarEmocao(this)">Cansado(a)</button>
            <button onclick="selecionarEmocao(this)">Ansioso(a)</button>
            <button onclick="selecionarEmocao(this)">Preocupado(a)</button>
            <button onclick="selecionarEmocao(this)">Desmotivado(a)</button>
            <button onclick="selecionarEmocao(this)">Pressionado(a)</button>
        </div>

        <p>Quer detalhar como se sente? Escreva aqui:</p>

        <textarea placeholder="Escreva aqui..."></textarea>

        <br><br>

        <button onclick="verificarEmocoes(sextaQuestao)">Continuar</button>
    `;
}


function sextaQuestao() {
    document.body.innerHTML = `
        <h1>${nomeJogador}, como você se sente em relação a si mesmo(a)?</h1>

        <p>Escolha uma ou mais emoções que representem como você se sente:</p>

        <div class="emocoes">
            <button onclick="selecionarEmocao(this)">Feliz</button>
            <button onclick="selecionarEmocao(this)">Confiante</button>
            <button onclick="selecionarEmocao(this)">Orgulhoso(a)</button>
            <button onclick="selecionarEmocao(this)">Tranquilo(a)</button>
            <button onclick="selecionarEmocao(this)">Inseguro(a)</button>
            <button onclick="selecionarEmocao(this)">Confuso(a)</button>
            <button onclick="selecionarEmocao(this)">Insatisfeito(a)</button>
            <button onclick="selecionarEmocao(this)">Triste</button>
        </div>

        <p>Quer detalhar como se sente? Escreva aqui:</p>

        <textarea placeholder="Escreva aqui..."></textarea>

        <br><br>

        <button onclick="finalizarJogo()">Ver resultado</button>
    `;
}


function finalizarJogo() {
    const botoes = document.querySelectorAll(".emocoes button");
    let selecionouEmocao = false;

    botoes.forEach(function(botao) {
        if (botao.style.border === "3px solid blue") {
            selecionouEmocao = true;
        }
    });

    if (!selecionouEmocao) {
        return;
    }

    salvarRespostas();

    let contagem = {};

    respostas.forEach(function(emocao) {
        if (contagem[emocao]) {
            contagem[emocao]++;
        } else {
            contagem[emocao] = 1;
        }
    });

    let resultado = Object.entries(contagem).sort(function(a, b) {
        return b[1] - a[1];
    });

    let emocaoPrincipal = resultado[0][0];

    let mensagens = {

        "Ansioso(a)": "A ansiedade apareceu com frequência nas suas respostas. Algumas situações podem trazer preocupações ou expectativas sobre o presente e o futuro. Observar o que desperta esse sentimento pode ajudar a compreendê-lo melhor.",

        "Nervoso(a)": "O nervosismo apareceu com frequência nas suas respostas. Algumas situações podem causar tensão ou insegurança. Perceber em quais momentos isso acontece pode ajudar você a entender melhor seus sentimentos.",

        "Com medo": "O medo apareceu com frequência nas suas respostas. Sentir medo diante de algumas situações é algo que pode acontecer. Conversar sobre aquilo que preocupa você pode ajudar.",

        "Confiante": "A confiança apareceu com frequência nas suas respostas. Você demonstrou segurança diante de algumas situações. Reconhecer suas capacidades e conquistas pode fortalecer ainda mais esse sentimento.",

        "Animado(a)": "A animação apareceu com frequência nas suas respostas. Algumas situações parecem despertar entusiasmo e expectativa positiva em você. Reconhecer esses momentos também é importante.",

        "Calmo(a)": "A calma apareceu com frequência nas suas respostas. Algumas situações parecem ser vividas por você com tranquilidade. Perceber o que contribui para essa sensação pode ser positivo.",

        "Pressionado(a)": "A sensação de pressão apareceu com frequência nas suas respostas. Expectativas, responsabilidades ou decisões podem contribuir para esse sentimento. Lembre-se de que conversar com alguém de confiança pode ajudar.",

        "Indiferente": "A indiferença apareceu com frequência nas suas respostas. Talvez algumas dessas situações não tenham um impacto emocional muito forte para você neste momento. Cada pessoa pode reagir de maneiras diferentes.",

        "Esperançoso(a)": "A esperança apareceu com frequência nas suas respostas. Parece que, mesmo diante de dúvidas ou desafios, você consegue enxergar possibilidades positivas para o futuro.",

        "Inseguro(a)": "A insegurança apareceu com frequência nas suas respostas. Nem sempre é fácil ter certeza sobre decisões, situações ou sobre nós mesmos. Refletir e conversar com alguém de confiança pode ajudar.",

        "Confuso(a)": "A confusão apareceu com frequência nas suas respostas. Algumas situações podem trazer muitas dúvidas ou sentimentos diferentes ao mesmo tempo. Dar espaço para refletir sobre isso pode ajudar a organizar melhor os pensamentos.",

        "Tranquilo(a)": "A tranquilidade apareceu com frequência nas suas respostas. Algumas situações parecem ser vividas por você com mais calma e equilíbrio. Reconhecer o que contribui para essa sensação pode ser positivo.",

        "Em paz": "A sensação de estar em paz apareceu com frequência nas suas respostas. Reconhecer os momentos e situações que contribuem para esse sentimento pode ajudar você a valorizá-los ainda mais.",

        "Feliz": "A felicidade apareceu com frequência nas suas respostas. Parece que existem situações em sua vida que despertam sentimentos positivos. Reconhecer e valorizar esses momentos também é importante.",

        "Entediado(a)": "O tédio apareceu com frequência nas suas respostas. Talvez algumas situações não estejam despertando muito interesse em você neste momento. Perceber o que chama sua atenção pode ajudar a encontrar novas formas de lidar com esses momentos.",

        "Triste": "A tristeza apareceu com frequência nas suas respostas. Esse sentimento pode surgir em diferentes momentos da vida. Se sentir necessidade, compartilhar o que está sentindo com alguém de confiança pode ajudar.",

        "Solitário(a)": "A sensação de solidão apareceu com frequência nas suas respostas. Mesmo quando estamos cercados por pessoas, às vezes podemos sentir falta de conexão. Conversar com alguém de confiança pode ajudar a compartilhar o que você está sentindo.",

        "Aliviado(a)": "O alívio apareceu com frequência nas suas respostas. Algumas situações podem trazer uma sensação de descanso ou de que uma preocupação diminuiu. Perceber o que contribui para esse sentimento pode ser positivo.",

        "Informado(a)": "A sensação de estar informado(a) apareceu com frequência nas suas respostas. Acompanhar acontecimentos pode ajudar você a compreender melhor o que acontece ao seu redor. Também é importante buscar informações em fontes confiáveis.",

        "Curioso(a)": "A curiosidade apareceu com frequência nas suas respostas. Parece que você demonstra interesse em compreender melhor diferentes assuntos e acontecimentos. Fazer perguntas e buscar informações pode ser uma forma positiva de aprender.",

        "Interessado(a)": "O interesse apareceu com frequência nas suas respostas. Alguns assuntos parecem despertar sua atenção e vontade de saber mais. Reconhecer aquilo que desperta seu interesse pode ajudar você a explorar novos conhecimentos.",

        "Surpreso(a)": "A surpresa apareceu com frequência nas suas respostas. Algumas situações ou notícias podem trazer informações inesperadas. É natural precisar de um tempo para compreender acontecimentos novos.",

        "Preocupado(a)": "A preocupação apareceu com frequência nas suas respostas. Algumas situações podem ocupar bastante espaço nos nossos pensamentos. Identificar o que está causando essa preocupação pode ser um primeiro passo para lidar melhor com ela.",

        "Motivado(a)": "A motivação apareceu com frequência nas suas respostas. Parece que algumas situações despertam em você disposição para continuar, aprender ou enfrentar desafios. Reconhecer o que fortalece essa motivação pode ser positivo.",

        "Cansado(a)": "O cansaço apareceu com frequência nas suas respostas. Talvez algumas situações estejam exigindo bastante de você. Perceber seus limites e reservar momentos para descansar também é importante.",

        "Desmotivado(a)": "A desmotivação apareceu com frequência nas suas respostas. Às vezes pode ser difícil encontrar disposição para determinadas situações. Refletir sobre o que está contribuindo para esse sentimento pode ajudar.",

        "Orgulhoso(a)": "O orgulho apareceu com frequência nas suas respostas. Reconhecer suas conquistas, esforços e qualidades pode ser uma forma importante de valorizar seu próprio caminho.",

        "Insatisfeito(a)": "A insatisfação apareceu com frequência nas suas respostas. Talvez existam situações que você gostaria que fossem diferentes. Refletir sobre o que está causando esse sentimento pode ajudar a compreender melhor seus desejos e necessidades."
    };

    let mensagem = mensagens[emocaoPrincipal];

    document.body.innerHTML = `
        <h1>Você terminou o Jogo das Emoções!</h1>

        <h2>${nomeJogador}, a emoção que apareceu com mais frequência nas suas respostas foi:</h2>

        <h1>${emocaoPrincipal}</h1>

        <p>${mensagem}</p>
    `;
}