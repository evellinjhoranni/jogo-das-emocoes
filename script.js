let respostas = [];

let respostasPerguntas = {};

let indiceAtual = 0;

const URL_PLANILHA =
    "https://script.google.com/macros/s/AKfycbzIB2B0QBHPiVmK3ByK55UmWOyGw0oTRiIIY2LBQCyAA_xUOTXerbIUjXKaV_k3Zksl/exec";


/* =========================================================
   PERGUNTAS
   ========================================================= */

const perguntas = [

    {
        id: 3,
        tipo: "emocao",
        texto: "Qual é a emoção que você sente sobre o seu futuro acadêmico ou profissional após o ensino médio?",
        emocao: [
            "Ansioso(a)",
            "Preocupado(a)",
            "Inseguro(a)",
            "Esperançoso(a)",
            "Confiante",
            "Animado(a)"
        ]
    },

    {
        id: 10,
        tipo: "escrita",
        texto: "Quando você recebe uma atividade surpresa, qual é o primeiro pensamento que passa pela sua cabeça?"
    },

    {
        id: 2,
        tipo: "opcoes",
        texto: "Você se sente confortável com os seus professores?"
    },

    {
        id: 6,
        tipo: "emocao",
        texto: "Como você avalia a sua sensação de segurança emocional dentro dos grupos de trabalho escolares?",
        emocao: [
            "Ansioso(a)",
            "Inseguro(a)",
            "Tranquilo(a)",
            "Confortável",
            "Apoiado(a)",
            "Desconfortável"
        ]
    },

    {
        id: 14,
        tipo: "escrita",
        texto: "O que passa pela sua cabeça quando você precisa apresentar algo para várias pessoas e está preocupado(a) com a forma como vão avaliar você?"
    },

    {
        id: 5,
        tipo: "opcoes",
        texto: "Você se sente preparado(a) emocionalmente para enfrentar o ENEM ou outras provas importantes?"
    },

    {
        id: 7,
        tipo: "emocao",
        texto: "Como você se sente tendo uma pressão por boas notas, provas e expectativas acadêmicas?",
        emocao: [
            "Ansioso(a)",
            "Pressionado(a)",
            "Preocupado(a)",
            "Sobrecarregado(a)",
            "Motivado(a)",
            "Tranquilo(a)"
        ]
    },

    {
        id: 13,
        tipo: "escrita",
        texto: "Se você pudesse explicar para um professor uma coisa que os alunos sentem, mas quase nunca falam, o que diria?"
    },

    {
        id: 1,
        tipo: "emocao",
        texto: "Como você se sente em relação ao ENEM?",
        emocao: [
            "Ansioso(a)",
            "Com medo",
            "Preocupado(a)",
            "Confiante",
            "Animado(a)",
            "Tranquilo(a)"
        ]
    },

    {
        id: 15,
        tipo: "opcoes",
        texto: "Seus colegas e professores respeitam a forma como você gostaria de ser tratado(a)?"
    },

    {
        id: 12,
        tipo: "escrita",
        texto: "Qual situação escolar mais faz você perder o sono?"
    },

    {
        id: 4,
        tipo: "opcoes",
        texto: "Como você se sente no ambiente escolar? Você se sente bem com as pessoas que estudam com você?"
    },

    {
        id: 9,
        tipo: "emocao",
        texto: "O que você pensa ou sente quando pensa sobre o TCC?",
        emocao: [
            "Ansioso(a)",
            "Preocupado(a)",
            "Inseguro(a)",
            "Pressionado(a)",
            "Confiante",
            "Animado(a)"
        ]
    },

    {
        id: 18,
        tipo: "escrita",
        texto: "O que você faria se chegasse a um lugar e percebesse que as outras pessoas já estão em seus grupos e você ficou sozinho(a)?"
    },

    {
        id: 11,
        tipo: "escrita",
        texto: "O que você faria se tentasse participar de uma conversa, mas percebesse que as pessoas não estão interessadas em ouvir você?"
    },

    {
        id: 19,
        tipo: "opcoes",
        texto: "Você sente que pode ser você mesmo(a) no ambiente escolar sem medo de ser julgado(a)?"
    },

    {
        id: 8,
        tipo: "escrita",
        texto: "Qual cobrança escolar você acha que os adultos não percebem que existe?"
    },

    {
        id: 17,
        tipo: "escrita",
        texto: "Você sente medo de não conseguir alcançar as expectativas que você ou outras pessoas têm sobre seu futuro?"
    },

    {
        id: 16,
        tipo: "escrita",
        texto: "O que você pensa quando percebe que está se cobrando demais por causa de um erro que cometeu?"
    },

    {
        id: 20,
        tipo: "emocao",
        texto: "Depois de participar do projeto, como você se sente em relação a compartilhar o que está sentindo?",
        emocao: [
            "À vontade",
            "Acolhido(a)",
            "Tranquilo(a)",
            "Seguro(a)",
            "Confuso(a)",
            "Ansioso(a)"
        ]
    }
];


/* =========================================================
   OPÇÕES ESPECÍFICAS
   ========================================================= */

const opcoesEspecificas = [
    "Sim",
    "Não",
    "Não tenho certeza",
    "Com certeza",
    "Estou confuso(a)",
    "Não quero pensar nisso"
];


/* =========================================================
   INICIAR JOGO
   ========================================================= */

function iniciarJogo() {

    indiceAtual = 0;
    respostas = [];
    respostasPerguntas = {};

    trocarTela(mostrarProximaPergunta);
}


/* =========================================================
   TRANSIÇÃO
   ========================================================= */

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


/* =========================================================
   MOSTRAR PRÓXIMA PERGUNTA
   ========================================================= */

function mostrarProximaPergunta() {

    if (indiceAtual >= perguntas.length) {
        enviarParaPlanilha();
        mostrarResultado();
        return;
    }

    const pergunta = perguntas[indiceAtual];

    document.body.setAttribute(
        "data-tema",
        String(indiceAtual % 10)
    );

    let conteudo = "";


    /* =========================================================
       PERGUNTA DE EMOÇÕES
       ========================================================= */

    if (pergunta.tipo === "emocao") {

        conteudo = `
            <div class="emocoes">

                ${pergunta.emocao.map(function(emocao) {
                    return `
                        <button
                            type="button"
                            onclick="selecionarEmocao(this)"
                        >
                            ${emocao}
                        </button>
                    `;
                }).join("")}

            </div>

            <textarea
                id="detalhe"
                placeholder="Quer detalhar como se sente? Escreva aqui..."
            ></textarea>
        `;
    }


    /* =========================================================
       PERGUNTA COM SIM / NÃO
       ========================================================= */

    else if (pergunta.tipo === "opcoes") {

        conteudo = `
            <div class="emocoes">

                ${opcoesEspecificas.map(function(opcao) {
                    return `
                        <button
                            type="button"
                            onclick="selecionarOpcao(this)"
                        >
                            ${opcao}
                        </button>
                    `;
                }).join("")}

            </div>
        `;
    }


    /* =========================================================
       PERGUNTA DE ESCREVER
       ========================================================= */

    else if (pergunta.tipo === "escrita") {

        conteudo = `
            <p>Escreva o que você pensa ou sente:</p>

            <textarea
                id="respostaEscrita"
                placeholder="Escreva aqui..."
            ></textarea>
        `;
    }


    /* =========================================================
       MONTAR TELA DA PERGUNTA
       ========================================================= */

    document.body.innerHTML = `
        <div class="tela">

            <h1>${pergunta.texto}</h1>

            ${conteudo}

            <br><br>

            <button
                type="button"
                onclick="salvarPergunta()"
            >
                ${indiceAtual === perguntas.length - 1 ? "Finalizar" : "Continuar"}
            </button>

        </div>
    `;
}


/* =========================================================
   SELECIONAR EMOÇÃO
   ========================================================= */

function selecionarEmocao(botao) {

    botao.classList.toggle("selecionada");
}


/* =========================================================
   SELECIONAR OPÇÃO ESPECÍFICA
   ========================================================= */

function selecionarOpcao(botao) {

    const botoes =
        document.querySelectorAll(".emocoes button");

    botoes.forEach(function(item) {
        item.classList.remove("selecionada");
    });

    botao.classList.add("selecionada");
}


/* =========================================================
   SALVAR PERGUNTA ATUAL
   ========================================================= */

function salvarPergunta() {

    const pergunta = perguntas[indiceAtual];

    let resposta = "";
    let detalhe = "";


    /* =========================================================
       EMOÇÕES
       ========================================================= */

    if (pergunta.tipo === "emocao") {

        const botoesSelecionados =
            document.querySelectorAll(
                ".emocoes button.selecionada"
            );

        let emocoesSelecionadas = [];

        botoesSelecionados.forEach(function(botao) {

            emocoesSelecionadas.push(
                botao.innerText.trim()
            );

        });


        /* Pelo menos uma emoção é obrigatória */

        if (emocoesSelecionadas.length === 0) {
            return;
        }


        resposta = emocoesSelecionadas.join(", ");


        const campoDetalhe =
            document.getElementById("detalhe");

        if (campoDetalhe) {
            detalhe = campoDetalhe.value.trim();
        }


        /* Guardar emoções para o resultado final */

        respostas.push(...emocoesSelecionadas);
    }


    /* =========================================================
       OPÇÕES ESPECÍFICAS
       ========================================================= */

    else if (pergunta.tipo === "opcoes") {

        const botaoSelecionado =
            document.querySelector(
                ".emocoes button.selecionada"
            );

        if (!botaoSelecionado) {
            return;
        }

        resposta =
            botaoSelecionado.innerText.trim();
    }


    /* =========================================================
       ESCRITA
       ========================================================= */

    else if (pergunta.tipo === "escrita") {

        const campo =
            document.getElementById("respostaEscrita");

        if (!campo) {
            return;
        }

        resposta =
            campo.value.trim();


        /* Resposta obrigatória */

        if (resposta === "") {
            return;
        }
    }


    /* =========================================================
       SALVAR RESPOSTA
       ========================================================= */

    respostasPerguntas[
        "pergunta" + pergunta.id
    ] = resposta;

    respostasPerguntas[
        "detalhe" + pergunta.id
    ] = detalhe;


    /* =========================================================
       AVANÇAR
       ========================================================= */

    indiceAtual++;


    if (indiceAtual >= perguntas.length) {

        enviarParaPlanilha();

        trocarTela(mostrarResultado);

    } else {

        trocarTela(mostrarProximaPergunta);
    }
}


/* =========================================================
   ENVIAR PARA A PLANILHA
   ========================================================= */

function enviarParaPlanilha() {

    fetch(URL_PLANILHA, {
        method: "POST",
        body: JSON.stringify(respostasPerguntas)
    })
    .catch(function() {});
}


/* =========================================================
   MOSTRAR RESULTADO
   ========================================================= */

function mostrarResultado() {

    let contagem = {};


    respostas.forEach(function(emocao) {

        if (contagem[emocao]) {
            contagem[emocao]++;

        } else {
            contagem[emocao] = 1;
        }

    });


    let resultado =
        Object.entries(contagem).sort(
            function(a, b) {
                return b[1] - a[1];
            }
        );


    let topTres =
        resultado.slice(0, 3);

    let estatisticasHTML = "";


    if (topTres.length === 0) {

        estatisticasHTML = `
            <p>
                Obrigado por participar do projeto.
            </p>
        `;

    } else {

        let maiorQuantidade =
            topTres[0][1];


        topTres.forEach(function(item) {

            let emocao = item[0];
            let quantidade = item[1];


            let porcentagem =
                (quantidade / maiorQuantidade) * 100;


            estatisticasHTML += `
                <div class="estatistica-item">

                    <div class="estatistica-titulo">

                        <span>
                            ${emocao}
                        </span>

                        <span>
                            ${quantidade} vez(es)
                        </span>

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
    }


    document.body.innerHTML = `

        <div class="tela">

            <h1>Suas respostas</h1>

            <p>
                Estas foram as três emoções que apareceram
                com mais frequência nas suas respostas:
            </p>

            <div class="estatistica">
                ${estatisticasHTML}
            </div>

        </div>

    `;
}
