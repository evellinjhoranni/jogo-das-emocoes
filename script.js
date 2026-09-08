let respostas = [];

let respostasPerguntas = {
    pergunta1: "",
    detalhe1: "",
    pergunta2: "",
    detalhe2: "",
    pergunta3: "",
    detalhe3: "",
    pergunta4: "",
    detalhe4: "",
    pergunta5: "",
    detalhe5: "",
    pergunta6: "",
    detalhe6: ""
};

const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbzIB2B0QBHPiVmK3ByK55UmWOyGw0oTRiIIY2LBQCyAA_xUOTXerbIUjXKaV_k3Zksl/exec";


/* FUNDOS COM EMOÇÕES - POSICIONADOS PARA CELULAR */

const fundos = {

    inicio: `
        <div class="fundo-emocoes">

            <span class="media inclinada-direita"
            style="top: 4%; left: 8%;">CURIOSIDADE</span>

            <span class="pequena"
            style="top: 12%; right: 8%;">CALMA</span>

            <span class="pequena inclinada-esquerda"
            style="top: 24%; left: 6%;">ALEGRIA</span>

            <span class="media inclinada-direita"
            style="top: 30%; right: 6%;">ESPERANÇA</span>

            <span class="grande inclinada-esquerda"
            style="top: 43%; left: 12%;">CONFIANÇA</span>

            <span class="pequena"
            style="top: 52%; right: 10%;">ORGULHO</span>

            <span class="media vertical"
            style="bottom: 22%; left: 7%;">ALÍVIO</span>

            <span class="pequena inclinada-direita"
            style="bottom: 14%; right: 8%;">ANSIEDADE</span>

        </div>
    `,


    pergunta1: `
        <div class="fundo-emocoes">

            <span class="media inclinada-direita"
            style="top: 4%; left: 6%;">ALEGRIA</span>

            <span class="pequena"
            style="top: 11%; right: 8%;">MEDO</span>

            <span class="pequena inclinada-esquerda"
            style="top: 23%; left: 8%;">CALMA</span>

            <span class="grande inclinada-direita"
            style="top: 31%; right: 4%;">ANSIEDADE</span>

            <span class="pequena"
            style="top: 43%; left: 10%;">TRISTEZA</span>

            <span class="media inclinada-esquerda"
            style="top: 51%; right: 7%;">ESPERANÇA</span>

            <span class="media inclinada-direita"
            style="top: 63%; left: 12%;">CONFIANÇA</span>

            <span class="pequena"
            style="bottom: 15%; right: 10%;">RAIVA</span>

            <span class="media inclinada-esquerda"
            style="bottom: 6%; left: 20%;">ORGULHO</span>

        </div>
    `,


    pergunta2: `
        <div class="fundo-emocoes">

            <span class="pequena"
            style="top: 5%; left: 8%;">ORGULHO</span>

            <span class="media inclinada-esquerda"
            style="top: 10%; right: 5%;">TRANQUILIDADE</span>

            <span class="pequena inclinada-direita"
            style="top: 23%; left: 10%;">ALEGRIA</span>

            <span class="media vertical"
            style="top: 30%; right: 7%;">MEDO</span>

            <span class="grande inclinada-direita"
            style="top: 42%; left: 4%;">INSEGURANÇA</span>

            <span class="pequena"
            style="top: 51%; right: 8%;">FELICIDADE</span>

            <span class="media inclinada-esquerda"
            style="top: 62%; left: 12%;">ALÍVIO</span>

            <span class="pequena inclinada-direita"
            style="bottom: 18%; right: 7%;">ESPERANÇA</span>

            <span class="media"
            style="bottom: 6%; left: 18%;">CURIOSIDADE</span>

        </div>
    `,


    pergunta3: `
        <div class="fundo-emocoes">

            <span class="media inclinada-direita"
            style="top: 4%; left: 7%;">FELICIDADE</span>

            <span class="pequena"
            style="top: 12%; right: 8%;">RAIVA</span>

            <span class="pequena inclinada-esquerda"
            style="top: 24%; left: 8%;">ESPERANÇA</span>

            <span class="grande inclinada-direita"
            style="top: 32%; right: 4%;">TRISTEZA</span>

            <span class="pequena"
            style="top: 44%; left: 12%;">ORGULHO</span>

            <span class="media inclinada-esquerda"
            style="top: 53%; right: 8%;">MEDO</span>

            <span class="media inclinada-direita"
            style="top: 64%; left: 14%;">ALEGRIA</span>

            <span class="pequena"
            style="bottom: 17%; right: 10%;">ALÍVIO</span>

            <span class="media"
            style="bottom: 6%; left: 20%;">CONFIANÇA</span>

        </div>
    `,


    pergunta4: `
        <div class="fundo-emocoes">

            <span class="grande inclinada-direita"
            style="top: 4%; left: 8%;">ANSIEDADE</span>

            <span class="pequena"
            style="top: 13%; right: 10%;">ORGULHO</span>

            <span class="media vertical"
            style="top: 24%; left: 6%;">ALEGRIA</span>

            <span class="pequena inclinada-esquerda"
            style="top: 28%; right: 8%;">ESPERANÇA</span>

            <span class="media inclinada-direita"
            style="top: 42%; left: 18%;">MEDO</span>

            <span class="pequena"
            style="top: 48%; right: 7%;">CURIOSIDADE</span>

            <span class="grande inclinada-esquerda"
            style="top: 60%; left: 5%;">TRANQUILIDADE</span>

            <span class="media vertical"
            style="bottom: 18%; right: 8%;">TRISTEZA</span>

            <span class="pequena inclinada-direita"
            style="bottom: 8%; left: 12%;">ALÍVIO</span>

            <span class="pequena"
            style="bottom: 5%; right: 28%;">CONFIANÇA</span>

        </div>
    `,


    pergunta5: `
        <div class="fundo-emocoes">

            <span class="media inclinada-direita"
            style="top: 4%; left: 8%;">SONHOS</span>

            <span class="pequena"
            style="top: 12%; right: 8%;">ORGULHO</span>

            <span class="pequena inclinada-esquerda"
            style="top: 24%; left: 7%;">ALEGRIA</span>

            <span class="media vertical"
            style="top: 29%; right: 7%;">MEDO</span>

            <span class="grande inclinada-direita"
            style="top: 40%; left: 6%;">ANSIEDADE</span>

            <span class="pequena"
            style="top: 50%; right: 8%;">DÚVIDA</span>

            <span class="media inclinada-esquerda"
            style="top: 61%; left: 14%;">ESPERANÇA</span>

            <span class="pequena inclinada-direita"
            style="bottom: 17%; right: 8%;">CONFIANÇA</span>

            <span class="media"
            style="bottom: 6%; left: 18%;">CURIOSIDADE</span>

        </div>
    `,


    pergunta6: `
        <div class="fundo-emocoes">

            <span class="grande inclinada-direita"
            style="top: 4%; left: 7%;">ANSIEDADE</span>

            <span class="pequena"
            style="top: 12%; right: 8%;">CALMA</span>

            <span class="media vertical"
            style="top: 23%; left: 7%;">RESPEITO</span>

            <span class="pequena inclinada-esquerda"
            style="top: 29%; right: 7%;">ALEGRIA</span>

            <span class="media inclinada-direita"
            style="top: 41%; left: 18%;">CONFIANÇA</span>

            <span class="pequena"
            style="top: 49%; right: 8%;">ORGULHO</span>

            <span class="media inclinada-esquerda"
            style="top: 61%; left: 10%;">APOIO</span>

            <span class="pequena inclinada-direita"
            style="bottom: 17%; right: 8%;">TRISTEZA</span>

            <span class="pequena"
            style="bottom: 6%; left: 20%;">ALÍVIO</span>

        </div>
    `
};


/* TRANSIÇÃO FADE */

function trocarTela(proximaTela) {
    document.body.classList.add("fade-out");

    setTimeout(function() {
        proximaTela();

        document.body.classList.remove("fade-out");
        document.body.classList.add("fade-in");

        setTimeout(function() {
            document.body.classList.remove("fade-in");
        }, 400);

    }, 400);
}


function comecarJogo() {
    trocarTela(primeiraQuestao);
}


function selecionarEmocao(botao) {
    botao.classList.toggle("selecionada");
}


function pegarRespostasDaTela() {
    const botoesSelecionados = document.querySelectorAll(
        ".emocoes button.selecionada"
    );

    let emocoesSelecionadas = [];

    botoesSelecionados.forEach(function(botao) {
        emocoesSelecionadas.push(botao.innerText);
    });

    return emocoesSelecionadas;
}


/* PERGUNTA 1 */

function primeiraQuestao() {
    document.body.innerHTML = `
        ${fundos.pergunta1}

        <div class="tela">
            <h1>Quando várias atividades e provas acontecem ao mesmo tempo, como você costuma reagir?</h1>

            <p>Escolha uma ou mais emoções que representem como você se sente:</p>

            <div class="emocoes">
                <button onclick="selecionarEmocao(this)">Ansioso(a)</button>
                <button onclick="selecionarEmocao(this)">Sobrecarregado(a)</button>
                <button onclick="selecionarEmocao(this)">Nervoso(a)</button>
                <button onclick="selecionarEmocao(this)">Pressionado(a)</button>
                <button onclick="selecionarEmocao(this)">Motivado(a)</button>
                <button onclick="selecionarEmocao(this)">Tranquilo(a)</button>
            </div>

            <p>Quer detalhar como se sente? Escreva aqui:</p>

            <textarea id="detalhe" placeholder="Escreva aqui..."></textarea>

            <br><br>

            <button onclick="salvarPrimeira()">Continuar</button>
        </div>
    `;
}


function salvarPrimeira() {
    const emocoes = pegarRespostasDaTela();

    if (emocoes.length === 0) return;

    respostasPerguntas.pergunta1 = emocoes.join(", ");
    respostasPerguntas.detalhe1 = document.getElementById("detalhe").value;

    respostas.push(...emocoes);

    trocarTela(segundaQuestao);
}


/* PERGUNTA 2 */

function segundaQuestao() {
    document.body.innerHTML = `
        ${fundos.pergunta2}

        <div class="tela">
            <h1>Qual situação escolar mais faz você perder o sono?</h1>

            <p>Escolha uma ou mais emoções que representem como você se sente:</p>

            <div class="emocoes">
                <button onclick="selecionarEmocao(this)">Ansioso(a)</button>
                <button onclick="selecionarEmocao(this)">Preocupado(a)</button>
                <button onclick="selecionarEmocao(this)">Estressado(a)</button>
                <button onclick="selecionarEmocao(this)">Inseguro(a)</button>
                <button onclick="selecionarEmocao(this)">Cansado(a)</button>
                <button onclick="selecionarEmocao(this)">Tranquilo(a)</button>
            </div>

            <p>Quer detalhar como se sente? Escreva aqui:</p>

            <textarea id="detalhe" placeholder="Escreva aqui..."></textarea>

            <br><br>

            <button onclick="salvarSegunda()">Continuar</button>
        </div>
    `;
}


function salvarSegunda() {
    const emocoes = pegarRespostasDaTela();

    if (emocoes.length === 0) return;

    respostasPerguntas.pergunta2 = emocoes.join(", ");
    respostasPerguntas.detalhe2 = document.getElementById("detalhe").value;

    respostas.push(...emocoes);

    trocarTela(terceiraQuestao);
}


/* PERGUNTA 3 */

function terceiraQuestao() {
    document.body.innerHTML = `
        ${fundos.pergunta3}

        <div class="tela">
            <h1>Como você se sente em relação ao ENEM?</h1>

            <p>Escolha uma ou mais emoções que representem como você se sente:</p>

            <div class="emocoes">
                <button onclick="selecionarEmocao(this)">Ansioso(a)</button>
                <button onclick="selecionarEmocao(this)">Com medo</button>
                <button onclick="selecionarEmocao(this)">Pressionado(a)</button>
                <button onclick="selecionarEmocao(this)">Confiante</button>
                <button onclick="selecionarEmocao(this)">Animado(a)</button>
                <button onclick="selecionarEmocao(this)">Tranquilo(a)</button>
            </div>

            <p>Quer detalhar como se sente? Escreva aqui:</p>

            <textarea id="detalhe" placeholder="Escreva aqui..."></textarea>

            <br><br>

            <button onclick="salvarTerceira()">Continuar</button>
        </div>
    `;
}


function salvarTerceira() {
    const emocoes = pegarRespostasDaTela();

    if (emocoes.length === 0) return;

    respostasPerguntas.pergunta3 = emocoes.join(", ");
    respostasPerguntas.detalhe3 = document.getElementById("detalhe").value;

    respostas.push(...emocoes);

    trocarTela(quartaQuestao);
}


/* PERGUNTA 4 */

function quartaQuestao() {
    document.body.innerHTML = `
        ${fundos.pergunta4}

        <div class="tela">
            <h1>Você se sente confortável com os seus professores?</h1>

            <p>Escolha uma ou mais emoções que representem como você se sente:</p>

            <div class="emocoes">
                <button onclick="selecionarEmocao(this)">Ansioso(a)</button>
                <button onclick="selecionarEmocao(this)">Confortável</button>
                <button onclick="selecionarEmocao(this)">Seguro(a)</button>
                <button onclick="selecionarEmocao(this)">À vontade</button>
                <button onclick="selecionarEmocao(this)">Desrespeitado(a)</button>
                <button onclick="selecionarEmocao(this)">Desconfortável</button>
            </div>

            <p>Quer detalhar como se sente? Escreva aqui:</p>

            <textarea id="detalhe" placeholder="Escreva aqui..."></textarea>

            <br><br>

            <button onclick="salvarQuarta()">Continuar</button>
        </div>
    `;
}


function salvarQuarta() {
    const emocoes = pegarRespostasDaTela();

    if (emocoes.length === 0) return;

    respostasPerguntas.pergunta4 = emocoes.join(", ");
    respostasPerguntas.detalhe4 = document.getElementById("detalhe").value;

    respostas.push(...emocoes);

    trocarTela(quintaQuestao);
}


/* PERGUNTA 5 */

function quintaQuestao() {
    document.body.innerHTML = `
        ${fundos.pergunta5}

        <div class="tela">
            <h1>Qual é a emoção que você sente sobre o seu futuro acadêmico ou profissional após o ensino médio?</h1>

            <p>Escolha uma ou mais emoções que representem como você se sente:</p>

            <div class="emocoes">
                <button onclick="selecionarEmocao(this)">Ansioso(a)</button>
                <button onclick="selecionarEmocao(this)">Esperançoso(a)</button>
                <button onclick="selecionarEmocao(this)">Confiante</button>
                <button onclick="selecionarEmocao(this)">Animado(a)</button>
                <button onclick="selecionarEmocao(this)">Inseguro(a)</button>
                <button onclick="selecionarEmocao(this)">Com medo</button>
            </div>

            <p>Quer detalhar como se sente? Escreva aqui:</p>

            <textarea id="detalhe" placeholder="Escreva aqui..."></textarea>

            <br><br>

            <button onclick="salvarQuinta()">Continuar</button>
        </div>
    `;
}


function salvarQuinta() {
    const emocoes = pegarRespostasDaTela();

    if (emocoes.length === 0) return;

    respostasPerguntas.pergunta5 = emocoes.join(", ");
    respostasPerguntas.detalhe5 = document.getElementById("detalhe").value;

    respostas.push(...emocoes);

    trocarTela(sextaQuestao);
}


/* PERGUNTA 6 */

function sextaQuestao() {
    document.body.innerHTML = `
        ${fundos.pergunta6}

        <div class="tela">
            <h1>Como você avalia a sua sensação de segurança emocional dentro dos grupos de trabalho escolares?</h1>

            <p>Escolha uma ou mais emoções que representem como você se sente:</p>

            <div class="emocoes">
                <button onclick="selecionarEmocao(this)">Ansioso(a)</button>
                <button onclick="selecionarEmocao(this)">Seguro(a)</button>
                <button onclick="selecionarEmocao(this)">Confortável</button>
                <button onclick="selecionarEmocao(this)">Apoiado(a)</button>
                <button onclick="selecionarEmocao(this)">Desrespeitado(a)</button>
                <button onclick="selecionarEmocao(this)">Desconfortável</button>
            </div>

            <p>Quer detalhar como se sente? Escreva aqui:</p>

            <textarea id="detalhe" placeholder="Escreva aqui..."></textarea>

            <br><br>

            <button onclick="salvarSexta()">Ver resultado</button>
        </div>
    `;
}


function salvarSexta() {
    const emocoes = pegarRespostasDaTela();

    if (emocoes.length === 0) return;

    respostasPerguntas.pergunta6 = emocoes.join(", ");
    respostasPerguntas.detalhe6 = document.getElementById("detalhe").value;

    respostas.push(...emocoes);

    enviarParaPlanilha();
    trocarTela(mostrarResultado);
}


/* ENVIAR PARA A PLANILHA */

function enviarParaPlanilha() {
    fetch(URL_PLANILHA, {
        method: "POST",
        body: JSON.stringify(respostasPerguntas)
    })
    .catch(function() {});
}


/* MOSTRAR RESULTADO */

function mostrarResultado() {

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

    let topTres = resultado.slice(0, 3);

    let maiorQuantidade = topTres[0][1];

    let estatisticasHTML = "";

    topTres.forEach(function(item) {

        let emocao = item[0];
        let quantidade = item[1];

        let porcentagem = (quantidade / maiorQuantidade) * 100;

        estatisticasHTML += `
            <div class="estatistica-item">

                <div class="estatistica-titulo">
                    <span>${emocao}</span>
                    <span>${quantidade} vez(es)</span>
                </div>

                <div class="barra-fundo">
                    <div
                        class="barra"
                        style="width: ${porcentagem}%"
                    ></div>
                </div>

            </div>
        `;
    });

    document.body.innerHTML = `
        <div class="tela">

            <h1>Suas respostas</h1>

            <p>Estas foram as três emoções que apareceram com mais frequência nas suas respostas:</p>

            <div class="estatistica">
                ${estatisticasHTML}
            </div>

        </div>
    `;
}
